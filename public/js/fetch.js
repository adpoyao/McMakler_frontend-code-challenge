'use strict';

const api = {
  retrieveAds: function() {
    // The current API does not appear to support CORS. If CORS support is enabled, then I could make API calls directly from the browser.
    // Otherwise, I went with an alternative route of adding an open CORS proxy just to get the information I need (crossorigin.me).
    // If this is not preferred for interview, please let me know and I can spin up a server using superagent or axios, then bounce my requests off the proxy.
    return fetch('https://crossorigin.me/https://api.mcmakler.de/v1/advertisements')
      .then(res => {
        if (!res.ok) {
          Promise.reject(res.statusText);
        }
        return res.json();});
  }
};