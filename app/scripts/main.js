/* jshint devel:true */
$( function() {
  'use strict';

var Kitteh = function() {
    Kitteh.prototype.name = 'kitteh';
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
    Kitteh.prototype.getClicks = getCount;
    Kitteh.prototype.incrementClicks = clickIncrementer;
  };

  var kittehOne         = new Kitteh(),
      kittehTwo         = new Kitteh(),
      $kittehOne        = $( '#kitteh_one' ),
      $kittehTwo        = $( '#kitteh_two' ),
      $kittehOneName    = $( '#kitteh_one .kitteh_details .js-kitteh-name' ),
      $kittehTwoName    = $( '#kitteh_two .kitteh_details .js-kitteh-name' ),
      $kittehOneCounter = $( '#kitteh_one .kitteh_details .counter_box' ),
      $kittehTwoCounter = $( '#kitteh_two .kitteh_details .counter_box' );

  kittehOne.init( 'Sir Reginald' );
  kittehTwo.init( 'Mr. Fuzzy Wumpkins' );

  $kittehOneName.html( kittehOne.name );
  $kittehTwoName.html( kittehTwo.name );

  $kittehOne.click( function( e ) {
    e.preventDefault();
    kittehOne.incrementClicks();
    $kittehOneCounter.html( kittehOne.getClicks() );
  });

  $kittehTwo.click( function( e ) {
    e.preventDefault();
    kittehTwo.incrementClicks();
    $kittehTwoCounter.html( kittehTwo.getClicks() );
  });

});