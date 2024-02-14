var searchBtn=document.getElementById("search-btn");

searchBtn.addEventListener("click",()=>{
    const searchInput=document.getElementById("search-Input").value;

   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=54e8b4c982cc769ce7edfe1f9483d2d5&units=metric`).then(response=>
    {return response.json()}).then(data=>{
      
        document.getElementById("result").classList.add("active");
        document.getElementById("notFound").classList.remove("active");
        document.getElementById("container").style.height=`550px`;

 const image=document.getElementById("image");
 switch (data.weather[0].main) {
    case "Clear":
        image.src="image/clear.png";
      
        break;
        case "Clouds":
        image.src="image/cloudy.png";
       
        break;
        case "Rain":
        image.src="image/rain.png";
        
        break;
        case "Snow":
        image.src="image/snow.png";
        
        break;
        case "Mist":
        image.src="image/mist.png";
        
        break;
        case "Haze":
        image.src="image/mist.png";
        
        break;

    default:
        image.src="image/clear.png";
}
document.getElementById("cityName").innerHTML=`${data.name}`;
document.getElementById("temperature").innerHTML=`${parseInt(data.main.temp)}<span>°C</span>`;
document.getElementById("description").innerHTML=`${data.weather[0].description}`;
document.getElementById("humidity").innerHTML=`${data.main.humidity}%`;
document.getElementById("wind").innerHTML=`${parseInt(data.wind.speed)}km/h`;

}).catch(error=>document.getElementById("result").classList.remove("active")+
                document.getElementById("notFound").classList.add("active")
                );


}

)

