const ribbons = document.querySelectorAll('.ribbon');

function scrollRibbon() {
	const y = window.pageYOffset
	ribbons.forEach((item) => item.style.marginTop = -(y * 0.25) + 'px')
}
window.addEventListener('scroll', scrollRibbon)