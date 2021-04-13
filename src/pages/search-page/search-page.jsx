import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getSearch,
  loadMore,
  selectSearch,
  selectSearchArtists,
  selectSearchAlbums,
  selectSearchTracks,
  selectSearchPlaylists,
  setQueryType,
  resetSearch,
} from 'src/slices/search';

import { useSearchParams } from 'src/hooks';

import { MediaCardType, QuerySearchType } from 'src/utils/constants';
import { QuerySearchTypeToResponseDataType } from 'src/utils/helpers';
import { getItemMeta, getItemSubhead, getItemImage } from 'src/utils/helpers/search-page';

import SearchField from 'src/components/search-field';
import MediaCard from 'src/components/media-card';
import MediaGrid from 'src/components/media-grid';
import PulseSpinner from 'src/components/pulse-spinner';

import { Page, Main } from 'src/styled/shared';
import { Header, TabsList, TabItem, TabButton, Content, SearchList, SearchItem, LoadMoreButtonWrapper, LoadMoreButton } from './style';

const searchTabs = [
  { id: QuerySearchType.artist, name: 'Artists' },
  { id: QuerySearchType.album, name: 'Albums' },
  { id: QuerySearchType.track, name: 'Tracks' },
  { id: QuerySearchType.playlist, name: 'Playlists' },
];

const SearchPage = () => {
  useSearchParams();

  const { queryTerm, queryType, data, loading, error } = useSelector(selectSearch);
  const artists = useSelector(selectSearchArtists);
  const albums = useSelector(selectSearchAlbums);
  const tracks = useSelector(selectSearchTracks);
  const playlists = useSelector(selectSearchPlaylists);
  const dispatch = useDispatch();

  const currentDataType = QuerySearchTypeToResponseDataType[queryType];
  const currentTypedData = data[currentDataType];

  const handleTabClick = (event) => {
    dispatch(setQueryType(event.target.id));
  };

  const handleLoadMore = (event) => {
    event.target.blur();

    dispatch(loadMore({
      queryTerm,
      queryType,
      queryOffset: currentTypedData.offset + currentTypedData.limit,
    }));
  };

  useEffect(() => {
    if (queryTerm) {
      dispatch(getSearch({
        queryTerm,
        queryType,
      }));
    }
  }, [dispatch, queryTerm, queryType]);

  useEffect(() => {
    return () => dispatch(resetSearch());
  }, []);

  return (
    <Page>
      <Main>
        <Header>
          <SearchField />

          <TabsList>
            <TabItem>
              <TabButton
                onClick={handleTabClick}
                isActive={!queryType}
                type="button"
              >
                Top Results
              </TabButton>
            </TabItem>

            {searchTabs.map((tab) => (
              <TabItem key={tab.id}>
                <TabButton
                  id={tab.id}
                  onClick={handleTabClick}
                  isActive={tab.id === queryType}
                  type="button"
                >
                  {tab.name}
                </TabButton>
              </TabItem>
            ))}
          </TabsList>
        </Header>

        {!queryType
          ? (
            <Content>
              {artists.items.length > 0 && (
                <MediaGrid
                  title="Artists"
                  rows={3}
                  columns={1}
                  rowSeparator
                >
                  {artists.items.slice(0, 12).map((artist) => (
                    <MediaCard
                      key={artist.id}
                      id={artist.id}
                      cardType={MediaCardType.search}
                      queryType={QuerySearchType.artist}
                      image={getItemImage(artist)}
                      name={artist.name}
                      subhead={getItemSubhead(artist)}
                      href="#"
                    />
                  ))}
                </MediaGrid>
              )}

              {albums.items.length > 0 && (
                <MediaGrid
                  title="Albums"
                  rows={2}
                  columns={2}
                >
                  {albums.items.slice(0, 12).map((album) => (
                    <MediaCard
                      key={album.id}
                      id={album.id}
                      cardType={MediaCardType.album}
                      queryType={QuerySearchType.album}
                      image={album.images[1].url}
                      name={album.name}
                      subhead={getItemSubhead(album)}
                      href={`/album/${album.id}`}
                    />
                  ))}
                </MediaGrid>
              )}

              {tracks.items.length > 0 && (
                <MediaGrid
                  title="Tracks"
                  rows={3}
                  columns={1}
                  rowSeparator
                >
                  {tracks.items.slice(0, 12).map((track) => (
                    <MediaCard
                      key={track.id}
                      id={track.id}
                      cardType={MediaCardType.search}
                      queryType={QuerySearchType.track}
                      image={getItemImage(track)}
                      name={track.name}
                      subhead={getItemSubhead(track)}
                      meta={getItemMeta(track)}
                      href="#"
                    />
                  ))}
                </MediaGrid>
              )}

              {playlists.items.length > 0 && (
                <MediaGrid
                  title="Playlists"
                  rows={1}
                  columns={2}
                >
                  {playlists.items.slice(0, 6).map((playlist) => (
                    <MediaCard
                      key={playlist.id}
                      id={playlist.id}
                      cardType={MediaCardType.playlist}
                      queryType={QuerySearchType.playlist}
                      image={getItemImage(playlist)}
                      name={playlist.name}
                      subhead={getItemSubhead(playlist)}
                      href="#"
                    />
                  ))}
                </MediaGrid>
              )}
            </Content>
          ) : (
            <Content>
              {currentTypedData.items.length > 0 && (
                <SearchList>
                  {currentTypedData.items.map((item) => (
                    <SearchItem key={item.id}>
                      <MediaCard
                        cardType={MediaCardType.search}
                        id={item.id}
                        queryType={item.type}
                        name={item.name}
                        image={getItemImage(item)}
                        subhead={getItemSubhead(item)}
                        meta={getItemMeta(item)}
                        href={item.type === QuerySearchType.album ? `/album/${item.id}` : '#'}
                      />
                    </SearchItem>
                  ))}
                </SearchList>
              )}

              {currentTypedData.next && (
                <LoadMoreButtonWrapper>
                  <LoadMoreButton
                    type="button"
                    onClick={handleLoadMore}
                    disabled={loading}
                    aria-label={loading ? 'Loading' : 'Load more'}
                  >
                    {loading ? <PulseSpinner /> : 'Load more'}
                  </LoadMoreButton>
                </LoadMoreButtonWrapper>
              )}
            </Content>
          )}
      </Main>
    </Page>
  );
};

export default SearchPage;
