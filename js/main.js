/**
 * Created by RA on 11/29/2015.
 */


var $nimaiLogo = document.getElementById('nimaiLogo');
var $nimaiLogo_nimai = document.getElementById('nimaiLogo_nimai');
var $nimaiLogo_text = document.getElementById('nimaiLogo_text');
var $nimaiLogo_group = document.getElementById('nimaiLogo_group');
var $o_eye_svg = document.getElementById('o_eye_svg');


var nimaiLogoTL = new TimelineMax({paused:true});
var nimaiEyeBlink = new TimelineMax({paused:true});





// init nimai object
var main = {};

var eyeBlink = setInterval(main.blinkEye, 8000);

main.init = function () {
    main.trace("main.init LOADED");
    main.setVars();

}



main.setVars = function() {
    main.trace("main.setVars LOADED");
    //var $nimaiLogo = document.getElementById('nimaiLogo');
    //var $nimaiLogo_nimai = document.getElementById('nimaiLogo_nimai');
    //var $nimaiLogo_text = document.getElementById('nimaiLogo_text');
    //var $nimaiLogo_group = document.getElementById('nimaiLogo_group');
    //var $ = document.getElementById('');
    //var $ = document.getElementById('');
    //var $ = document.getElementById('');
    //var $ = document.getElementById('');
    //var $ = document.getElementById('');
    //var $ = document.getElementById('');

    main.addListeners();

}

main.addListeners = function () {
    main.trace("main.addListeners LOADED");
    $nimaiLogo.addEventListener('click', main.blinkEye);

    main.setupAnimation();
}

main.setupAnimation = function() {
    main.trace("main.setupAnimation LOADED");



    // nimaiLogoTL Animation
    nimaiLogoTL.add('start');
    nimaiLogoTL.to($nimaiLogo,2, {opacity: 1});
    nimaiLogoTL.to($o_eye_svg,0.3, {opacity: 1,scaleY:0.1});
    nimaiLogoTL.to($o_eye_svg,0.3, {opacity: 1,scaleY:1});

    //nimaiLogoTL.to($nimaiLogo_nimai,1, {opacity: 1,scale:0.5});
    //nimaiLogoTL.to($nimaiLogo_text,1,{opacity:1,scale:0.5});
    //nimaiLogoTL.to($nimaiLogo_group,1,{opacity:1,scale:0.5});

    nimaiEyeBlink.to($o_eye_svg,0.2, {opacity: 1,scaleY:0.1});
    nimaiEyeBlink.to($o_eye_svg,0.3, {opacity: 1,scaleY:1});

    main.playAnimation();
}

main.playAnimation = function () {
    main.trace("main.playAnimation LOADED");
    nimaiLogoTL.restart();

    var eyeBlink = setInterval(main.blinkEye, 8000);
}

main.blinkEye = function () {
    //main.trace("eye blinked")
    nimaiEyeBlink.restart();
}



// trace for consistent console logging
main.trace = function(value) {
    console.log('<<< ', value, ' >>>');
};

/**
 *  Main onload handler
 */
window.addEventListener('load', main.init);