var url = 'https://restcountries.eu/rest/v1/name/';
var cauntriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() { 
    var countryName = $('#country-name').val(); 
    
    function searchCountries() { 
        var countryName = $('#country-name').val(); 
        if(!countryName.length) countryName = 'Poland';
        //$('<li>').text(item.name).appendTo(countriesList);
        $.ajax({ 
            url: url + countryName, 
            method: 'GET', 
            success: showCountriesList 
        }); 
    }
}