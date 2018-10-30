"use strict";

$(document).ready(() => {

$(window).bind("scroll", function() { 
    var $sec1 = $('.intro').offset().top;
    var $sec2 = $('.about').offset().top;

   if ($(this).scrollTop() > $sec2){ 
       console.log("its happening");
       
     $("#logo").css("color", "#a5a4a4");
   }     
//    if ($(this).scrollTop() > $sec2 & $(this).scrollTop() < $sec3){ 
//      $(".navbar1").fadeIn();   
//      $(".navbar2").fadeOut();      
//    } 
        
 });



})