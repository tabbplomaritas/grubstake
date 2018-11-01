"use strict";

$(document).ready(() => {

$(window).bind("scroll", function() { 
    var $intro = $('.intro').offset().top;
    var $about = $('.about').offset().top;
    var $workshops = $('.workshops').offset().top;

   if ($(this).scrollTop() < $about){ 
       console.log("its happening");
       
     $(".linkB").css("color", "#fece8a");
     $("#logo").css("color", "#fece8a");
   }
     if ($(this).scrollTop() > $about){ 
       console.log("its happening");
       
     $(".linkB").css("color", "#a5a4a4");
     $("#logo").css("color", "#a5a4a4");
   }
//    }  else if ($(this).scrollTop() > $intro && $(this).scrollTop() < $about){ 
//        console.log("its happening");
       
//      $(".linkB").css("color", "#a5a4a4");
//      $(".linkB").css("color", "#a5a4a4");
//    }     
//    if ($(this).scrollTop() > $sec2 & $(this).scrollTop() < $sec3){ 
//      $(".navbar1").fadeIn();   
//      $(".navbar2").fadeOut();      
//    } 
        
 });



})