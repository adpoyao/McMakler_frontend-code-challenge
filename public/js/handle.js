/* global api render*/
'use strict';

const handle = {
  retrieve: function(event){
    event.preventDefault();
    const state = event.data;

    api.retrieveAds()
      .then(res => {
        state.list = res.data.slice(0, 10);
        render.listings(state);
      });
  }
};