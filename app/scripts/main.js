/* jshint devel:true */
$( function() {

  var $counter_box = $( 'button#counter_box' ),
      $kitteh = $('div#kitteh'),
      __counter = 0;

  var clickIncrementer = function() {
    __counter++;
    return __counter;
  };

  $kitteh.click( function( e ) {
    e.preventDefault();
    $counter_box.html( clickIncrementer() ).blur();
  });

});