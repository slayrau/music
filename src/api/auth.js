import axios from 'axios';
import queryString from 'querystring';

import { tokenEndpoint, clientId, clientSecret, grantType } from 'src/utils/api-config';

const authorize = async () => (
  axios.post(tokenEndpoint, queryString.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: grantType,
  }))
);

export default {
  authorize,
};
