// Toggle nav menu and icons
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menu = document.querySelector('.menu');
const form=document.querySelector('.contact-form')
const name =document.querySelector('#name')
const email =document.querySelector('#email')
const message =document.querySelector('#message')
const modal=document.querySelector('.modal')
const mail =document.querySelector('.mail')
const copyModal =document.querySelector('.copy_modal')

const toggleMenu =()=>{
	menu.classList.toggle('active');
	menuToggleButton.classList.toggle('active');
}
menuToggleButton.addEventListener('click', toggleMenu);



const removeActiveLinkClass=(e)=>{
	if (e.target.classList.contains('list-link')) {
			menu.classList.remove('active');
			menuToggleButton.classList.remove('active');
	}
}
window.addEventListener('click', removeActiveLinkClass)

// Toggle theme and store selection within local storage
 const themeToggleButton = document.querySelector('.theme-toggle-button');
const body = document.body;
const currentTheme= localStorage.getItem('current')
if (currentTheme) {
	body.classList.add('dark-theme')
}
const toggleTheme=()=>{
	body.classList.toggle('dark-theme');
	if (body.classList.contains('dark-theme')) {
		localStorage.setItem('current', 'theme')
	}else{
		localStorage.removeItem('current')
	}
	
};
// copy mail
   
   const copyFunc=()=>{
   	copyModal.classList.add('active')
   navigator.clipboard.writeText(mail.textContent)
   setTimeout(()=>{
   	console.log('hey')
   	copyModal.classList.remove('active')
   },2000)
   }
  mail.addEventListener('click',copyFunc)

// FORM
const handleForm =(e)=>{
  e.preventDefault()
  
  console.log(name.value,email.value,message.value)
 modal.classList.add('active')

 setTimeout(()=>{
 	modal.classList.remove('active')
 	name.value=''
   email.value=''
    message.value=''
 },3000)
}
form.addEventListener('submit',handleForm)
//Back to top btn show after scroll
 const btT=document.querySelector('.scroll-top')
 window.addEventListener('scroll',()=>{
 	if (window.scrollY <= 200) {
 		btT.classList.add('hidden')
 	}else{
 		btT.classList.remove('hidden')
 	}
 })
 window.onScroll=()=>{
 }

themeToggleButton.addEventListener('click' , toggleTheme);

// Scroll reveal
const scrollReveal = ScrollReveal({
	distance: '50px',
	duration: 1500,
	easing: 'cubic-bezier(0.68 ,-0.65, 0.265, 1.55)'
});
scrollReveal.reveal('.main-title' , {
	origin: 'top'
})
scrollReveal.reveal('.scroll-reveal-left' , {
	origin: 'left'
})
scrollReveal.reveal('.scroll-reveal-right' , {
	origin: 'right'
})
scrollReveal.reveal('.tech-stack-items' , {
	interval: 250
})
scrollReveal.reveal(`.section-title , .section-subtitle-container` , {
	origin: 'top',
	interval:250
});
scrollReveal.reveal('.porfolio-card' , {interaval: 500})
scrollReveal.reveal(`.form-container , .footer` , {
	origin: 'top',
});






