const defaultContent = {
	title: "Hi! This is my portfolio website with some ux and ui design works.",
	content: 
	`
		<h1 class="title">${this.title}</h1>
		<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, in sunt minima autem deleniti odit cum ducimus corrupti rem expedita ad officia fugiat a adipisci eos ex dolor minus eligendi.</p>
	`

}
let projectsArray = [
	{
		title: "Retailix is a web and mobile app Retailix is a web and mobile app",
		content: 
		`
			<img src="./placeholder.svg" class="w-full">
			<h1 class="title">${this.title}</h1>
			<div class="d-flex">
				<img src="./placeholder.svg" class="w-1-2">
				<img src="./placeholder.svg" class="w-1-2">
			</div>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, in sunt minima autem deleniti odit cum ducimus corrupti rem expedita ad officia fugiat a adipisci eos ex dolor minus eligendi.</p>
		`
	},
	{
		title: "Ailine is a web and mobile app Retailix is a web and mobile app",
		content : 
		`
			<div class="d-flex">
				<img src="./placeholder.svg" class="w-1-2">
				<img src="./placeholder.svg" class="w-1-2">
			</div>
			<h1 class="title">${this.title}</h1>
			<img src="./placeholder.svg" class="w-full">	
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, in sunt minima autem deleniti odit cum ducimus corrupti rem expedita ad officia fugiat a adipisci eos ex dolor minus eligendi.</p>
		`
	},
	{
		title: "Grosa is a web and mobile app Retailix is a web and mobile app",
		content: 
		`
			<h1 class="title">${this.title}</h1>
			<div class="d-flex">
				<img src="./placeholder.svg" class="w-full">
			</div>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, in sunt minima autem deleniti odit cum ducimus corrupti rem expedita ad officia fugiat a adipisci eos ex dolor minus eligendi.</p>
		`
	}
]

window.onload = () => {
	const homeBtn = document.querySelector('.logo-container')
	const conteiner = document.querySelector('.project-preview')
	const projectsLinks = document.querySelectorAll('.project-link')
	conteiner.innerHTML = defaultContent.content
	let currentActive = -1
	projectsLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			if(currentActive != -1) {
				projectsLinks[currentActive].classList.remove('is-active')
			}
			conteiner.innerHTML = projectsArray[e.target.id].content
			link.classList.add('is-active')
			currentActive = e.target.id
			console.log(currentActive)
		})

	})
	homeBtn.addEventListener('click', () => {
		conteiner.innerHTML = defaultContent.content
		projectsLinks[currentActive].classList.remove('is-active')
		console.log(currentActive)
	})
}