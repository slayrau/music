import { QueryType } from 'src/utils/constants';
import instance from './instance';

const allQueryTypes = Object.values(QueryType).join(',');

export default {
  getSearch: ({ queryTerm, queryType, queryOffset = 0 }, credentials) => (
    instance.get(`/search?q=${queryTerm}&type=${queryType || allQueryTypes}&market=US&limit=24&offset=${queryOffset}`, credentials)
  ),
};
