import albums from 'src/mocks/new-releases-albums';

import MediaGrid from 'src/components/media-grid';
import MediaCard from 'src/components/media-card';

import { Page, PageHeader, Title, Main } from './style';

const ReviewPage = () => {
  return (
    <Page>
      <PageHeader>
        <Title>Review</Title>
      </PageHeader>

      <Main>
        <MediaGrid title="New Releases">
          {albums.map((album) => (
            <MediaCard
              key={album.id}
              id={album.id}
              type={album.type}
              image={album.images[1].url}
              name={album.name}
              artistName={album.artists[0].name}
            />
          ))}
        </MediaGrid>
      </Main>
    </Page>
  );
};

export default ReviewPage;
