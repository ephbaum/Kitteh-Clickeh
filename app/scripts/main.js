/* jshint devel:true */
$( function() {

var Kitteh = function() {
    Kitteh.prototype.name = "kitteh";
    Kitteh.prototype.count = 0;

    var initialize = function( name ) {
      if ( typeof name !== 'string' ) {
        return false;
      } else {
        this.name = name;
      }
    };

    var clickIncrementer = function() {
      this.count++;
    };

    var getCount = function() {
      return this.count;
    };

    Kitteh.prototype.init = initialize;
    Kitteh.prototype.get_clicks = getCount;
    Kitteh.prototype.increment_clicks = clickIncrementer;
  };

  var kitteh_one = new Kitteh(),
      kitteh_two = new Kitteh(),
      $kitteh_one = $( '#kitteh_one' ),
      $kitteh_two = $( '#kitteh_two' ),
      $kitteh_one_name = $( '#kitteh_one .kitteh_details .js-kitteh-name' ),
      $kitteh_two_name = $( '#kitteh_two .kitteh_details .js-kitteh-name' ),
      $kitteh_one_counter = $( '#kitteh_one .kitteh_details .counter_box' ),
      $kitteh_two_counter = $( '#kitteh_two .kitteh_details .counter_box' );

  kitteh_one.init( 'Sir Reginald' );
  kitteh_two.init( 'Mr. Fuzzy Wumpkins' );

  $kitteh_one_name.html( kitteh_one.name );
  $kitteh_two_name.html( kitteh_two.name );

  $kitteh_one.click( function( e ) {
    e.preventDefault();
    kitteh_one.increment_clicks();
    $kitteh_one_counter.html( kitteh_one.get_clicks() );
  });

  $kitteh_two.click( function( e ) {
    e.preventDefault();
    kitteh_two.increment_clicks();
    $kitteh_two_counter.html( kitteh_two.get_clicks() );
  });

});