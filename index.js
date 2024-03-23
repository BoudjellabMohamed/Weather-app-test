let axios= window.axios
const temp = document.getElementById('temp')
let wind = document.getElementById('wind')

document.getElementById("city-select").addEventListener("change", (event) => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ event.target.value +'&appid=8d1c8bf5baa3f53b4fdd39f067c5b3f6')
        .then(({data}) => {
            temp.innerText =parseFloat(data.main.temp-273.15).toFixed(1) + " °C";
            wind.innerText = data.wind.speed+ " Km/h";
            console.log(data)
            
        })
});




