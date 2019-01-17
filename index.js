'use strict';
function handleCatClicks() {
  $('.thumbnail').on('click', function(event) {
    const targetCat = $(event.currentTarget);
    const otherCats = $('.thumbnail').not(targetCat);
    const pressedBool = $(targetCat).attr('aria-pressed' === 'true');
    otherCats.removeClass('.hero').attr('aria-pressed', false);    
    targetCat.addClass('.hero').attr('aria-pressed', !pressedBool);
        
  });
}
$(handleCatClicks);