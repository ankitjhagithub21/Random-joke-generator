const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7699bacfc1msh00723f2da9c8f33p15ff7fjsnc5e89fe424f6',
		'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
	}
};

btn.addEventListener("click", ()=> {
    fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options)
	.then(response => response.json())
	.then((response) => {
        joke.innerText=response[0].joke;
    })
	.catch(err => console.error(err));
})