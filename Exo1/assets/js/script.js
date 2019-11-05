$(function(){
    var i = 0
    $('button').on('click', function(){
        i++
           $('textarea').text(i) ;
        });
    });
