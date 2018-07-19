$(document).ready(function(){

// $("div").css("background-color","gray");

// $("#zielony").click(function () {
//     $("div").css("background-color","green");
// })
// $("#niebieski").click(function () {
//     $("div").css("background-color","blue");
// })
// $("#zolty").click(function () {
//     $("div").css("background-color","yellow");
// })

// $('input').keyup(function(){
//     var dane = $('input').val();
//     $('#klon').text(dane);
// });

$('.dodaj').click(function(event){

    // var id = event.target;
    // var klasa = $(id).parent().attr('id');
    // klasa = "'"+klasa+"'"
    $('#napisTestowy').addClass($(event.target).parent().attr('id'));

    // console.log(id);
    // console.log($(event.target).parent().attr('id'));
    // console.log(typeof(klasa));
    // console.log(klasa);
});
$('.usun').click(function(event){

    var id = event.target;
    var klasa = $(id).parent().attr('id');
    
    $('#napisTestowy').removeClass($(event.target).parent().attr('id'));

    // console.log(id);
    
    // console.log(klasa);
});



});