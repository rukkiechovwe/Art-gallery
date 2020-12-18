const toggle = document.querySelector(".openBtn");
const navBar = document.querySelector(".navigation");
toggle.addEventListener("click",()=>{
	toggledisplay(navBar)
	toggleBtn(toggle)
})
const toggledisplay=(elem)=>{
    elem.style.visibility = elem.style.visibility === 'visible' ? 'hidden' : 'visible';
    elem.style.opacity = elem.style.opacity === '1' ? '0' : '1';
    elem.style.width = elem.style.width === '250px' ? '0' : '250px';
}
const toggleBtn = (elem)=>{
	elem.className = elem.className === 'closeBtn col' ? 'openBtn col' : 'closeBtn col';
}

$(document).ready(function() {
	$("#owl-example").owlCarousel({
		items :1,
		loop:true,
		nav : false,
		dots:true,
    	rewindNav : true,
    	scrollPerPage : true,
    	autoPlay : true,
    	autoplayTimeout:3000,
    	stopOnHover : true,
    	 autoplay: true,
        autoPlaySpeed: 4000,
        autoPlayTimeout: 4000,
        autoplayHoverPause: true
	})
});