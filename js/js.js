function initMap() {
    var myLatLng = { lat: -25.363, lng: 131.044 };

    // Create a map object and specify the DOM element
    // for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 14
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello World!'
    });
}



$('.js-button-campaign').click(function() {
    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
});

$('.js-close-campaign').click(function() {
    $('.js-overlay-campaign').fadeOut();

});


document.getElementById("submit").addEventListener("click", function() { //підключаємо лістенер

    var phoneNumber = document.getElementById("phoneNumber"); //задаємо змінну, для id phoneNumber


    phoneNumber.onclick = function() { // підвішуємо на нашу змінну клік 
        phoneNumber.style.border = "1px solid #18284b"; //якщо умова правильна то виконується стиль border 
    }
    validtext(); //вивід функціїї
    if (phoneNumber.value.length < 10 || phoneNumber.value.length > 12) { //перевіряємо значення, якщо не правильно 
        phoneNumber.style.border = "2px solid #efad07"; //бордер оранджевого кольору( не правильна кількість символів в строці)
        return false;

    }


    return true;

});


function validtext() { //назва фунціїї

    var coment = document.getElementById("Сoment"); //задаємо змінну для поля з id 'Coment'

    coment.onclick = function() { //підвішуємо клік на фунцкцію
        coment.style.border = "1px solid #18284b"; // якщо умова правильна то виконується стиль border 
    }

    if (coment.value.length < 3 || coment.value.length > 1000) { //перевіряємо значення, якщо не правильно
        coment.style.border = "2px solid #efad07"; //бордер оранджевого кольору( не правильна кількість символів в строці)
        return false;
    }
    return true;
}


$(document).ready(function() {
    $('.menu_icon').on('click', function(event) {
        event.preventDefault();
        $('.conteiner_ml').toggle(700);
    });
});