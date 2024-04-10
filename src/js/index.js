const form= document.querySelector("form");
const search=  document.querySelector("#search-input");
const btn=  document.querySelector("button");
let img = document.querySelector("#weather-icon");
let bg = document.querySelector(".bg");

const API_KEY = `2521c8b2a1a914e555ede6f74be3a6e3`


async function checkWeather(city){
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
	const response = await fetch(url);
	let data = await response.json();
	console.log(data)
document.querySelector("#cityName").innerHTML = data.name;
document.querySelector("#temp").innerHTML = Math.round( data.main.temp);
document.querySelector("#type").innerHTML = data.weather[0].description;
document.querySelector("#country").innerHTML = data.sys.country;
document.querySelector("#speed").innerHTML = data.wind.speed+ `km/h`;
if(data.weather[0].main === "Haze"){
img.src="../img/wind.png";
bg.src="../img/windbg.jpg"
}
else if(data.weather[0].main === "Rain"){
	img.src="../img/Rain.png"
	bg.src="../img/rainbg.jpg"
	}
else if(data.weather[0].main === "Clear"){
		img.src="../img/clear.png"
		bg.src="../img/clearbg.jpg"
		}	
else if(data.weather[0].main === "Snow"){
			img.src="../img/snow.png"
			bg.src="../img/snowbg.jpg"
			}
			else if(data.weather[0].main === "Clouds"){
				img.src="../img/cloud.png"
				bg.src="../img/cloudbg.jpg"
				}
				else if(data.weather[0].main === "Drizzle"){
					img.src="../img/rain.png"
					bg.src="../img/rainbg.jpg"
					}
			
}

btn.addEventListener("click",(event)=>{
	event.preventDefault()
	checkWeather(search.value)
// console.log(search.value)

})










