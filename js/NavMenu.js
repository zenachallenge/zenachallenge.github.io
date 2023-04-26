var navBox = document.getElementById("nav-box");
var navButton  = document.getElementById("nav-button");
var dropDownMenu = document.getElementById("dropdown-menu");

var menuState = false;	// Ditermines if the dropdown menu is displayed 

navButton.addEventListener("click", function(){
	if (menuState){
		menuState = false;
	} else{
		menuState = true;
	}
	
	updateMenu();
});

navBox.onmouseleave = function(){
	menuState = false;
	updateMenu();
};

function updateMenu(){
	if (menuState){
		$(dropDownMenu).css("transform", "translateY(+40px)");
	} else{
		$(dropDownMenu).css("transform", "translateY(-140px)");
	}
}

updateMenu();