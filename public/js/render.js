'use strict';

const render = {
  listings: function(data) {
    const disappearingChildren = `<li class="filling-empty-space-childs disappearing-child"></li>
      <li class="filling-empty-space-childs disappearing-child"></li>`;

    const properties = data.list.map((property) => {

      const summary = property.realestateSummary;
      let price = property.advertisementPrice.baseRent * 7;
      price = price.toLocaleString('it-IT', {style: 'currency', currency: 'EUR'}).slice(0, -5);

      return `<li class="listing-individual" id=${property.additionalId}>
                <button>Mienten</button>
                <div class="listing-container">
                  <div class="listing-upper-section">
                    <div class="listing-image" style="background-image:url('${property.advertisementAssets[0].advertisementThumbnails.inventory_m.url}')"></div>
                  </div>
                  
                  <div class="listing-lower-section">
                    <p class="property-title">${property.title}</p>
                    <p class="property-location">${summary.address.postalCode} ${summary.address.city}</p>

                    <div class="listing-last-row">
                      <p class="property-price">${price} €</p>
                      <p class="property-room-space">${summary.numberOfRooms} Zimmer  <span>ab</span> ${Math.round(summary.space)} m&#178;</p>
                    </div>
                  </div>

                </div>
              </li>`;
    });
    $('.listing-results').empty().append(properties).append(disappearingChildren);
  }
};