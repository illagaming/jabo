
/*if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
	alert('Je suis en dark mode')
}
*/
const btnToggle = document.querySelector('.btn-toggle');

let img = document.getElementById('img3')
let img2 = document.getElementById('img2')

btnToggle.addEventListener('click', () => {

	var body = document.body;

	if(body.classList.contains('dark')){

		body.classList.add('light')
		body.classList.remove('dark')
		img.src = 'img/Noir_petit.png';
		img2.src = 'img/Noir_petit.png';
		btnToggle.innerHTML = "🌙"

	} else if(body.classList.contains('light')){

		body.classList.add('dark')
		body.classList.remove('light')
		img.src = 'img/Blanc_petit.png';
		img2.src = 'img/Blanc_petit.png';
		btnToggle.innerHTML = "☀️"
	}
})