$(document).ready(function(){
  console.log('JQuery Aman');
  
  $.get('partials/hotel.html', function(data){
    $('#contentPesan').html(data);
  });
  
  $('#pesanPesawat').on('click', function(){
    $('ul.container li').removeClass('biru');
    $('#pesanPesawat').addClass('biru');
    $.get('partials/pesawat.html', function(data){
      $('#contentPesan').html(data);
    })
  });

  $('#pesanKereta').on('click', function(){
    $('ul.container li').removeClass('biru');
    $('#pesanKereta').addClass('biru');
    $.get('partials/kereta.html', function(data){
      $('#contentPesan').html(data);
    })
  });
  
  $('#pesanHotel').on('click', function(){
    $('ul.container li').removeClass('biru');
    $('#pesanHotel').addClass('biru');
    $.get('partials/hotel.html', function(data){
      $('#contentPesan').html(data);
    })
  });

});