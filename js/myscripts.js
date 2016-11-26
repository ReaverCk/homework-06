$(document).ready(function(){
$('.main-nav ul li a, a.explore').mPageScroll2id({
offset: 70 // Отступы от якоря при прокрутке
    });


    
$(window).scroll(function(){
    
    if ($(window).scrollTop() > 688){
    $('.page-header').addClass('scroll-header');
    }
        
    else if($(window).scrollTop() < 400){
    $('.page-header').removeClass('scroll-header');
    }
});
    
    
    
$(function() {
  var element = $('.intro');
  var backgrounds = ['url(/images/Header-Background-2.jpg)', 'url(/images/Header-Background-1.jpg)', 'url(/images/Header-Background-3.jpg)'];
var current = 0;

function nextBackground() {
  element.css(
   'background',
    backgrounds[current = ++current % backgrounds.length]
 );

 setTimeout(nextBackground, 5000);
 }
 setTimeout(nextBackground, 5000);
   element.css('background', backgrounds[0]);
 });
    
    
});



















/* Lesson 91

$(document).ready(function(){
$('#superlink').click(function(e){
e.preventDefault();
})
})

*/
/*

$(document).ready(function(){
$('#my_button').click(function(e){
var answer = confirm('Вы подтверждаете правильность ввода данных?');
if (!answer) {
e.preventDefault();
}
})
})

*/






/* 89 LESSON


$(document).ready(function(){
$('#my_button').hover(function(){
$(this).css({
'background-color':'#32375D',
'color':'white'    
})
}, function(){
$(this).css({
'background-color':'#f6f6f6',
'color':'#2C2C2C'    
})
})
})


*/









/*LESSON 89 

HOVER

$(document).ready(function(){
var tableStr = $('#moto_table tbody tr');

tableStr.hover(function(){
    $(this).addClass('svet');
}, function(){
    $(this).removeClass('svet');
}
              )
});


*/

/*

$(document).ready(function() {
$('#formHide').click(function() {
$('#my_form').toggle(1000);
})
})

*/

/* TOGGLE 

$(document).ready(function(){
    
$('#formHide').toggle(function() {
    $('#my_form').fadeOut(1000);
    $(this).text('Развернуть форму');    

}, function () {
    $('#my_form').fadeIn(1000); 
    $(this).text('Свернуть форму');
});
});


*/




/* LESSON 88
$(document).ready(function(){
$('#forheader img').click(function(){
alert('Вы кликнули по шапке сайта');
    });    

    
$('#div_for_img img').click(function(){
var moto = $(this).clone();
var animateMoto = moto.hide().fadeIn(2000);
$('#forresults').append(animateMoto);    
})

})
*/



/*HOMEWORK 88
$(document).ready(function(){
$('#moto_models li').click(function(){
var textMoto = $(this).text();
$('#moto_table tbody').append('<tr><td>' + textMoto + '</td><td>25000</td></tr>');
})
})

*/

/*HOMEWORK 88_2
$(document).ready(function(){

var tableStr = $('#moto_table tbody tr');

tableStr.mouseover(function(){
$(this).addClass('svet');
})

tableStr.mouseout(function(){
$(this).removeClass('svet');
})

})

*/





/*
$(window).scroll(function(){
alert('Вы скролите страницу');
})

*/



/*  87 LESSON
$(document).ready(function(){
var myMoto = document.getElementById('img_1');

function motoClick () {
alert("Ширина данной картинки " + myMoto.width);
}

myMoto.onclick = motoClick;

});
*/




/*
$('.pq').removeClass('pq').css({
'border':'1px solid #cc0000',
'padding':'5px',
'background-color':'#f6f6f6'

})    
  
})

*/  
    
/*    
function hides (elemId, elemTime) {
if (elemTime > 10000 || elemTime < 500 || isNaN(elemTime)) {
return false;
}
    
else {
var trueId = '#' + elemId;
$(trueId).fadeOut(elemTime); 
 }
}
    
hides ('forheader',4000);
*/






/*


var myDiv = document.getElementById('div_for_img');
alert(myDiv.innerHTML);

*/


/*

Урок 59

var myDiv = document.getElementById('div_for_img');
var broyherDiv = myDiv.nextSibling;
for (i = 0 ; i < childDiv.length; i++) {
document.write(childDiv[i].alt);
}

*/

/*

Урок 58

var moto = document.getElementById('img_1');

alert(moto.alt);

*/


/*

Урок 57

var allImg = document.getElementsByTagName('img');
alert(allImg.length); 

*/