"use strict";

$(document).ready(function () {
  var events = [{
    date: 'dec. 15, 2018',
    venue: 'New Life Church',
    location: 'wayland, MI',
    url: 'https://www.eventbrite.com/e/wayland-mi-local-investing-workshop-tickets-52679468709'
  }, {
    date: 'Jan. 17, 2019',
    venue: 'Comstock Inn',
    location: 'Owosso, MI',
    url: 'https://www.eventbrite.com/e/owosso-mi-local-investing-workshop-tickets-52871391756'
  }, {
    date: 'Mar. 14, 2019',
    venue: 'Niles Library',
    location: 'Niles, MI',
    url: 'https://www.eventbrite.com/e/niles-mi-local-investing-workshop-tickets-52872080817'
  }, {
    date: 'mar. 21, 2019',
    venue: 'The Milan Senior and Community Activity Center',
    location: 'Milan, MI',
    url: 'https://www.eventbrite.com/e/milan-mi-local-investing-workshop-tickets-52872248318'
  }, {
    date: 'apr. 9, 2019',
    venue: 'US 12 Bar and Grill',
    location: 'Wayne, MI',
    url: 'https://www.eventbrite.com/e/wayne-mi-local-investing-workshop-tickets-52872814010'
  }, {
    date: 'may. 7, 2019',
    venue: 'Ramada Plaza',
    location: 'Sault Ste Marie, MI',
    url: 'https://www.eventbrite.com/e/sault-ste-marie-mi-local-investing-workshop-tickets-52873761845'
  }, {
    date: 'may. 9, 2019',
    venue: 'Charlevoix Library',
    location: 'Charlevoix, MI',
    url: 'https://www.eventbrite.com/e/charlevoix-mi-local-investing-workshop-tickets-52873301468'
  }]; //randomly choose which landing page screen user will see

  var randomNum = Math.floor(Math.random() * 5) + 1; //declare elements to be chagned

  var $intro = $(".intro");
  var $logo = $("#logo");
  var $linkA = $('.intro .linkA');
  var $linkB = $('.intro .linkB');
  var $text = $('.intro .col');
  var $img = $('.intro img');
  var $heading = $('.intro h2'); //establish 

  var backgroundColor;
  var logoColor;
  var color1;
  var color2;
  var textColor;
  var imageSrc;
  var headingText;

  switch (randomNum) {
    case 1:
      backgroundColor = '#4CBC8C';
      logoColor = '#FECE8A';
      color1 = '#FFFFFF';
      textColor = '#21704F';
      imageSrc = 'Triangle.gif';
      headingText = "it's not weird";
      break;

    case 2:
      backgroundColor = '#ED9A99';
      logoColor = '#FFFFFF';
      color1 = '#444545';
      textColor = '#444545';
      imageSrc = 'Unicorn.gif';
      headingText = "it's not a unicorn";
      break;

    case 3:
      backgroundColor = '#444444';
      logoColor = '#4CBC8C';
      color1 = '#ffffff';
      textColor = '#ED9A99';
      imageSrc = 'zombie.gif';
      headingText = "it's not scary";
      break;

    case 4:
      backgroundColor = '#6597BA';
      logoColor = '#BD3F40';
      color1 = '#ffffff';
      textColor = '#155375';
      imageSrc = 'bag.gif';
      headingText = "it's not rude";
      break;

    case 5:
      backgroundColor = '#FECE8A';
      logoColor = '#155375';
      color1 = '#ffffff';
      textColor = '#BD3F40';
      imageSrc = 'Tube.gif';
      headingText = "it's not confusing";
      break;
  }

  function setIntroDipslay() {
    $intro.css("background-color", "".concat(backgroundColor));
    $logo.css('color', "".concat(logoColor));
    $linkA.css({
      'color': "".concat(color1),
      'border-bottom': "0px solid ".concat(color1)
    });
    $linkB.css({
      'color': "".concat(logoColor),
      'border-bottom': "0px solid ".concat(logoColor)
    });
    $text.css('color', "".concat(textColor));
    $heading.css('border-bottom', ".75rem solid ".concat(textColor));
    $heading.text("".concat(headingText));
    $img.attr('src', "./assets/animations/".concat(imageSrc));
  } //generate events table


  $(function () {
    for (var i = 0; i < events.length; i++) {
      var eventRow = "\n            <div class=\"eventRow\"> \n                <div class=\"col-sm-12 col-md-6\">\n                    <div class=\"row dateVenueWrapper\">\n                        <p class=\"date\">".concat(events[i].date, "</p>\n                        <p class=\"venue\">").concat(events[i].venue, "</p>\n                    </div>\n                </div>\n                <div class=\"col-sm-12 col-md-6\">\n                    <div class=\"row locationLinksWrapper\">\n                        <p class=\"location\">").concat(events[i].location, "</p>\n                        <a href=").concat(events[i].url, " target=\"_blank\" class=\"linkA eventLink\">Register Now</a>\n                    </div>\n                </div>\n            </div");
      $(".workshopEvents").append(eventRow);
    }
  });
  setIntroDipslay();
  $(window).bind("scroll", function () {
    var $about = $('.about').offset().top - 40;
    var $workshops = $('.workshops').offset().top - 40;
    var $history = $('.history').offset().top - 40;
    var $resources = $('.resources').offset().top - 40;
    var $sponsors = $('.sponsors').offset().top - 40;
    var $logo = $('#logo');
    var $navLinkA = $('header > .linkA');

    if ($(this).scrollTop() < $about) {
      $logo.css("color", "".concat(logoColor));
      $navLinkA.css({
        "color": "".concat(color1),
        "border-bottom": "0px solid ".concat(color1)
      });
    } else if ($(this).scrollTop() > $about && $(this).scrollTop() < $workshops) {
      $logo.css("color", "#ed9a99");
      $navLinkA.css({
        "color": "#4cbc8c",
        "border-bottom": "0 solid #4cbc8c"
      });
    } else if ($(this).scrollTop() > $workshops && $(this).scrollTop() < $history) {
      $logo.css("color", "#21704f");
      $navLinkA.css({
        "color": "white",
        "border-bottom": "0 solid white"
      });
    } else if ($(this).scrollTop() > $history && $(this).scrollTop() < $resources) {
      $logo.css("color", "#4cbc8c");
      $navLinkA.css({
        "color": "#bd3f40",
        "border-bottom": "0 solid #bd3f40"
      });
    } else if ($(this).scrollTop() > $resources && $(this).scrollTop() < $sponsors) {
      $logo.css("color", "#bd3f40");
      $navLinkA.css({
        "color": "white",
        "border-bottom": "0 solid white"
      });
    } else if ($(this).scrollTop() > $sponsors) {
      $logo.css("color", "#a5a4a4");
      $navLinkA.css({
        "color": "#4cbc8c",
        "border-bottom": "0 solid #4cbc8c"
      });
    }
  });
});
