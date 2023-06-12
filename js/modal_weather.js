const modalBlock = document.querySelector('#weather')
const weatherBlock = document.querySelector('#viget')

const openWeather = document.querySelector('.time__weather')
openWeather.addEventListener('click', function(){
	modalBlock.classList.add('open')
})

const closeX = document.querySelector('.close-viget')
closeX.addEventListener('click', function(){
	modalBlock.classList.remove('open')
})

async function loadWeather() {
	weatherBlock.innerHTML = '<div class="loading"> <img src="img/load.gif" alt="Loading..."></div>';

	const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Gorokhovets&appid=5c2ab0f2e6c2ad23c076711877a90062'

	const response = await fetch(server, { method: 'GET' })

	const responserezult = await response.json()

	if (response.ok) {
		getWeather(responserezult)
	} else {
		weatherBlock.innerHTML = responserezult.message;
	}
}

function getWeather(data) {
	console.log(data);
	let location;
	if (data.name === 'Gorokhovets') {
		location = 'Гороховец';
	}
	else {
		location = data.name;
	}

	let temp = Math.round(data.main.temp)
	let weath = data.weather[0].main
	let weatherIcon = data.weather[0].icon

	const template = `
		<div class="city">${location}</div>
		<div class="row">
			<div>${weath}</div>
			<img class="icon" src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="">
		</div>
		<div class="temper">${temp}</div>
	`
	weatherBlock.innerHTML = template;
}

if (weatherBlock) {
	loadWeather()
}