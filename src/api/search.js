import { QuerySearchType } from 'src/utils/constants';
import instance, { getCredentials } from './instance';

const allQueryTypes = Object.values(QuerySearchType).join(',');

export default {
  getSearch: ({ queryTerm, queryType, queryOffset = 0, tokenType, accessToken }) => (
    instance.get(`/search?q=${queryTerm}&type=${queryType || allQueryTypes}&market=US&limit=24&offset=${queryOffset}`, getCredentials({ tokenType, accessToken }))
  ),
};
