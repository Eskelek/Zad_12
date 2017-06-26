var url = 'https://restcountries.eu/rest/v2/name/';
var cauntriesList = $('#countries');

$('#search').click(searchCountries);
    
function searchCountries() {
    var countryName = $('#country-name').val();
    
    if (!countryName.length) countryName = 'Poland';
        
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
        
    function showCountriesList(resp) {
        countriesList.empty();
        
    resp.forEach(function(item){ 
        $('<li>').text(item.name).appendTo(countriesList); 
    });
        
    }
};
    
