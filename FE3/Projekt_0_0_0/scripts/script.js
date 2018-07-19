$(document).ready(function(){
    var value=$('#logo').val();
    $('#content-logo').html("<img src='"+value+"'>");


    
    $("#tekstPowitalny").keyup(function(){
        var tesktPowitalny = $("#tekstPowitalny").val();
        $('#content-tekstPowitalny').html(tesktPowitalny);
    });

    $('#menu').keyup(function(){
        var menuCont = $("#menu").val().split(";");
        var htmlMenu = '<ul>';
        for (var i = 0; i < menuCont.length; i++) {
            htmlMenu+="<li>"+menuCont[i]+"</li>";
        }
        htmlMenu+="</ul>"
        $('#content-menu').html(htmlMenu);
    });

    $('#zawartoscStrony').keyup(function(){
        var zawartoscStrony = $("#zawartoscStrony").val();
        $('#content-zawartoscStrony').html(zawartoscStrony);
    });
    
    $('#stopka').keyup(function(){
        var tekstStopka = $("#stopka").val();
        $('#content-stopka').html(tekstStopka);
    });
});