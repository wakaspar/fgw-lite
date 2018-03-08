$(document).ready(function(){
  // HOME: Initializes dropdown menu for mobile.
  $('.ui.dropdown')
  .dropdown();

  // HOME: Enables smooth scrolling
  var headerHeight = $("header").height();
  $("#pins-link").click(function(){
    $path = $("#pins").offset().top - headerHeight + 1;
    $('html,body').animate({scrollTop:$path},"slow");
  });
  $("#prints-link").click(function(){
    $path=$("#prints").offset().top - headerHeight + 1;
    $('html,body').animate({scrollTop:$path},"slow");
  });
  $("#parties-link").click(function(){
    $path=$("#parties").offset().top - headerHeight + 1;
    $('html,body').animate({scrollTop:$path},"slow");
  });
  $("#social-link").click(function(){
  $path=$("#social").offset().top - headerHeight + 1;
  $('html,body').animate({scrollTop:$path},"slow");
  });
  $(".foot-link").click(function(){
  $path=$("#foot").offset().top - headerHeight + 1;
  $('html,body').animate({scrollTop:$path},"slow");
  });

  // HOME: Hides & Shows Print Order Form for Homepage
  $('.new-print-btn')
  .on('click', function() {
    // Show form
    $('.print-order-form')
      .css('display', 'block');
    // Hide info & 'new' button
    $('.new-print-btn')
      .css('display', 'none');
    $('.print-order-info')
      .css('display', 'none');
  });
  $('.back-btn')
  .on('click', function() {
    // Hide form
    $('.print-order-form')
      .css('display', 'none');
    // Show info & 'new' button
    $('.print-order-info')
      .css('display', 'block');
    $('.new-print-btn')
      .css('display', 'block');
  });

   // HOME: Aggregate Pin List from PBM.com
   var getPins = function(){
     $.ajax({
       method: 'GET',
       url: 'http://pinballmap.com/api/v1/locations/2405/machine_details.json',
       success: pinSuccess,
       error: onError
     });
   }

   // HOME: Aggregate Recent Images from Instagram
   var token = '2273097174.1677ed0.7f36a0ac756a4c0d9664d24bbcde3f4c';
    userID = '2273097174';
    getInstagram = function(){
     $.ajax({
       type: 'GET',
       url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token,
       data: {access_token: token, count: 4},
       success: socialSuccess,
       error: onError
     });
   }

   var getTwitter = function(){
     var tweetId = '969633185158934529';
     $.ajax({
       type: 'GET',
       url: 'https://api.twitter.com/1.1/statuses/show.json?id=' + tweetId,
       data: {},
       success: onSuccess,
       error: onError
     });
   }


   // Ajax Result Handling
   var pinSuccess = function(responseData){
     var pinList = responseData.machines;
     pinList.forEach(function(pin){
       $('.pin-list').append(`<li><a href=${pin.ipdb_link} target="_blank">${pin.name}</a></li>`);
     });
   }

   var socialSuccess = function(responseData){
     console.log(responseData);
     var instagram = responseData.data;
     instagram.forEach(function(photo){
       $('.social-box').append(`<a href=${photo.link} target="_blank"><img src=${photo.images.thumbnail.url}></a>`);
     });
   };

    var onSuccess = function(responseData){
      console.log(responseData);
    }
   var onError = function(responseData){
     console.log('failjax: ' + responseData);
   }

   // API Calls
   getPins();
   getInstagram();
   getTwitter();

}) //closes document.ready
