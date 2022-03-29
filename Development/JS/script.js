


var btn = document.getElementById("scrollBtn");

window.onscroll = function() {scrollFunc()};

function scrollFunc() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        btn.style.display = "block";
  	} else {
        btn.style.display = "none";
  	}
}

function go2Top() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}