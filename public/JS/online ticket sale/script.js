let countiresSelectBox = document.querySelector('.countrySelect')
let citiesSelectBox = document.querySelector('.citySelect')

let countriesData = {
    Iran:['tabriz ','shiraz','isfehan', 'mashhad'],
    Turkey: ['Istanbul','ezmir','ankara','antaliya'],
    US : ['los angeles', 'new york' ,'san diego']
}



function myfunction(){
    if(countiresSelectBox.value === 'Please Select'){
        citiesSelectBox.innerHTML = ''
        //    citiesSelectBox.innerHTML += '<option> select city </option>'
    }else{
        let mainCountries = countiresSelectBox.value 
        let mainCountryCities = countriesData[mainCountries]
        // console.log(mainCountryCities)
        citiesSelectBox.innerHTML = ''
        mainCountryCities.forEach(function(city){
            citiesSelectBox.innerHTML += '<option>'+ city +'</option>'
        });}
}
    
countiresSelectBox.addEventListener('change',myfunction)