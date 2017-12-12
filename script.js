var url = 'https://restcountries.eu/rest/v2/name/';

var countriesList = $('#countries');

$("#menu").click(function () {
    
    var menuItems = $(".menuItems");
    
    if (menuItems.hasClass("active")) {
        menuItems.css({display: "none"}).removeClass("active");
    } else {
        menuItems.css({display: "block"}).addClass("active");
    }
});

$('#search').click(searchCountries);

function searchCountries() {
    'use strict';
    var countryName = $('#country-name').val();
    
    if (!countryName.length) {
        countryName = 'Poland';
    }
        
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList,
        error: function () {
            alert('Sorry there is no country here');
        }
    });
}
        
function showCountriesList(resp) {
    'use strict';
    countriesList.empty();
    resp.forEach(function (item) {
        $('<h2>').text(item.name).appendTo(countriesList);
        $('<p>').text("Capital City: " + item.capital).appendTo(countriesList);
        $('<p>').text("Alternative : " + item.altSpellings).appendTo(countriesList);
        $('<p>').text("Region: " + item.region).appendTo(countriesList);
        $('<p>').text("Population: " + item.population).appendTo(countriesList);
        $('<p>').text("Area: " + item.area).appendTo(countriesList);
        $('<p>').text("Time zone: " + item.timezones).appendTo(countriesList);
    });
}

$('#country-name').keydown(function (e) {
    $(window).alert("kkk");
    var key = e.keyCode();
    $(document).alert(key);
    /*if (e.keyCode == "13" ) {
        document.alert("kkk");
    }
    else {
        return true
    }*/
});

$(".fa-caret-right").click(moveOn);

function moveOn() {
    var windowW = window.innerWidth;
    var find = $(".find");
    var moveW = find.width();
    var search = $("#search");
    var countryName = $("#country-name");
        
    if (moveW > windowW * 0.5) {
        find.css({width: "17%"});
        search.css({display: "none"});
        countryName.css({display: "none"});
        $(".moveArrow").removeClass("fa-caret-left").addClass("fa-caret-right");
    } else {
        find.css({filter: "grayscale(40%)"});
        find.css({width: "90%"});
        search.css({display: "inline"});
        countryName.css({display: "inline"});
        $(".moveArrow").removeClass("fa-caret-right").addClass("fa-caret-left");
    }
}

    
