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

import { CardType, QueryType } from 'src/utils/constants';
import { QueryTypeToSearchDataType, getLowResImage, getMediumResImage } from 'src/utils/helpers/common';
import * as cardHelpers from 'src/utils/helpers/media-card';

import SearchField from 'src/components/search-field';
import MediaCard from 'src/components/media-card';
import MediaGrid from 'src/components/media-grid';
import PulseSpinner from 'src/components/pulse-spinner';

import { Page, Main } from 'src/styled/shared';
import { Header, TabsList, TabItem, TabButton, Content, SearchList, SearchItem, LoadMoreButtonWrapper, LoadMoreButton } from './style';

const searchTabs = [
  { id: QueryType.artist, name: 'Artists' },
  { id: QueryType.album, name: 'Albums' },
  { id: QueryType.track, name: 'Tracks' },
  { id: QueryType.playlist, name: 'Playlists' },
];

const SearchPage = () => {
  useSearchParams();

  const { queryTerm, queryType, data, loading, error } = useSelector(selectSearch);
  const artists = useSelector(selectSearchArtists);
  const albums = useSelector(selectSearchAlbums);
  const tracks = useSelector(selectSearchTracks);
  const playlists = useSelector(selectSearchPlaylists);
  const dispatch = useDispatch();

  const currentDataType = QueryTypeToSearchDataType[queryType];
  const currentTypedData = data[currentDataType];

  const handleTabClick = (event) => {
    dispatch(setQueryType(event.target.id));
  };

  const handleLoadMore = (event) => {
    event.target.blur();

    dispatch(loadMore({ queryOffset: currentTypedData.limit + currentTypedData.offset }));
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
              {!!artists.items.length && (
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
                      cardType={CardType.search}
                      queryType={artist.queryType}
                      name={artist.name}
                      image={getLowResImage(artist.images)}
                      href={`/artist/${artist.id}`}
                    />
                  ))}
                </MediaGrid>
              )}

              {!!albums.items.length > 0 && (
                <MediaGrid
                  title="Albums"
                  rows={2}
                  columns={2}
                >
                  {albums.items.slice(0, 12).map((album) => (
                    <MediaCard
                      key={album.id}
                      id={album.id}
                      cardType={CardType.album}
                      queryType={album.queryType}
                      name={album.name}
                      subhead={cardHelpers.getAllArtists(album.artist)}
                      image={getMediumResImage(album.images)}
                      href={`/album/${album.id}`}
                    />
                  ))}
                </MediaGrid>
              )}

              {!!tracks.items.length && (
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
                      cardType={CardType.track}
                      queryType={track.queryType}
                      name={track.name}
                      subhead={cardHelpers.getAllArtists(track.artists)}
                      image={getLowResImage(track.images)}
                      href={{
                        pathname: `/album/${track.albumId}`,
                        state: track.id,
                      }}
                    />
                  ))}
                </MediaGrid>
              )}

              {!!playlists.items.length && (
                <MediaGrid
                  title="Playlists"
                  rows={1}
                  columns={2}
                >
                  {playlists.items.slice(0, 6).map((playlist) => (
                    <MediaCard
                      key={playlist.id}
                      id={playlist.id}
                      cardType={CardType.playlist}
                      queryType={playlist.queryType}
                      name={playlist.name}
                      subhead={playlist.description}
                      image={getMediumResImage(playlist.images)}
                      href={`/playlist/${playlist.id}`}
                    />
                  ))}
                </MediaGrid>
              )}
            </Content>
          ) : (
            <Content>
              {!!currentTypedData.items.length && (
                <SearchList>
                  {currentTypedData.items.map((item) => (
                    <SearchItem key={item.id}>
                      <MediaCard
                        key={item.id}
                        id={item.id}
                        cardType={CardType.search}
                        queryType={item.queryType}
                        name={item.name}
                        subhead={cardHelpers.getSubhead(item)}
                        image={getLowResImage(item.images)}
                        href={cardHelpers.getUrl(item)}
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
