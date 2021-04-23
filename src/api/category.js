import instance from './instance';

export default {
  getCategory: (categoryId, credentials) => (
    instance.get(`/browse/categories/${categoryId}/playlists?country=US&limit=50`, credentials)
  ),
};
