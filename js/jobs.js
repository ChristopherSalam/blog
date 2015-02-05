    $(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 528
      });
    });

    $(function(){
  $("#slides").slidesjs({
    navigation: {
      active: true,
        // [boolean] Generates next and previous buttons.
        // You can set to false and use your own buttons.
        // User defined buttons must have the following:
        // previous button: class="slidesjs-previous slidesjs-navigation"
        // next button: class="slidesjs-next slidesjs-navigation"
      effect: "fade"
        // [string] Can be either "slide" or "fade".
    }
  });
});

$(function(){
  $("#slides").slidesjs({
    pagination: {
      active: true,
        // [boolean] Create pagination items.
        // You cannot use your own pagination. Sorry.
      effect: "fade"
        // [string] Can be either "slide" or "fade".
    }
  });
});