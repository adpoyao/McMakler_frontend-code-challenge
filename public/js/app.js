/* global handle */
'use strict';

// STATE is global so it can be easily accessed in Dev Tools
let STATE;

jQuery(function($) {
  STATE = {
    list: null // search result - array of objects (documents)
  };

  $('#viewAds').on('click', STATE, handle.retrieve);

});