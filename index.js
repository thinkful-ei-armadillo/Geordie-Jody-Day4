'use strict';
function handleCatClicks() {
  $('.thumbnail').on('click', function(event) {
    const targetCat = $(event.currentTarget).find('img').attr('src');
    
    const otherCats = $(event.currentTarget).find('img').attr('alt');

    $('.hero img').attr('src', targetCat).attr('alt', otherCats);  
  });
}
$(handleCatClicks);

    