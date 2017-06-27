
var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

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
        error: function(){
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
    });
}

    
