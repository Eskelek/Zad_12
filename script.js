var url = 'https://restcountries.eu/rest/v1/name/';
var cauntriesList = $('#countries');

$('#search').click(searchCountries);
    
function searchCountries() {
    var countryName = $('#country-name').val();
    
    if (!countryName.length) countryName = 'Poland';
        
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList,
        error: function(){
          alert('there is no country here');  
        }
    });
        
    function showCountriesList(resp) {
        countriesList.empty();
        
    resp.forEach(function(item){ 
        $('<li>').text(item.name).appendTo(countriesList); 
    });
        
    }
};
    
