
/*if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
	alert('Je suis en dark mode')
}
*/
let img = document.getElementById('img3');
let img2 = document.getElementById('img');



let darkMode = localStorage.getItem('darkMode'); 

const btnToggle = document.querySelector('.btn-toggle');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');  
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');  
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
  document.body.classList.add('dark');  
  document.body.classList.remove('light'); 
  var body = document.body;
	if(body.classList.contains('dark')){			
		img.src = 'img/Blanc_petit.png';
		img2.src = 'img/Blanc_petit.png';
			
	} 
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
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
});

var body = document.body;

	if(body.classList.contains('dark')){		
		img.src = 'img/Blanc_petit.png';
		img2.src = 'img/Blanc_petit.png';					
	}
	