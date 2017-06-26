var url = 'https://restcountries.eu/rest/v1/name/';
var cauntriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() { 
    var countryName = $('#country-name').val(); 
    
    function searchCountries() { 
        var countryName = $('#country-name').val(); 
        if(!countryName.length) countryName = 'Poland';
        
        $.ajax({ 
            url: "https:restcountries.eu/rest/v2/name/{name}" + countryName, 
            method: 'GET', 
            success: showCountriesList 
        }); 
    }
    function showCountriesList(resp) { 
        countriesList.empty(); 
    }
}