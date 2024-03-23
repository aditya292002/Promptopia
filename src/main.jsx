import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
<Auth0Provider
    domain="dev-70bpv44dtnslt0mr.us.auth0.com"
    clientId="qAkxGnk6d1dLbWybz7O0WIwQBOGaYRAy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
