const initPage = () => {
    const inputEl = document.getElementById("city-input");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory);

    const APIKey = "c9a9ed03a355403f4cb9a36e931c0b4a";
    // on click search city input val

    const getWeather = (cityName) => {
     // Use the city name, execute a get request from the open watrher api.   
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;    }
    axios.get(queryURL)
    .then(function(reponse){
        console.log(response);
        
        const currentDate = new Date(response.data.dt * 1000);
        console.log(currentDate);
        const day = currentDate.getDate();
    })

    


}