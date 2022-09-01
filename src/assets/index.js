const ribbons = document.querySelectorAll('.ribbon');

function scrollRibbon() {
	const y = window.pageYOffset
	ribbons.forEach((item) => item.style.marginTop = -(y * 0.15) + 'px')
}
window.addEventListener('scroll', scrollRibbon)