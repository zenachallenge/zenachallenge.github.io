var images = document.getElementById('carouselImages');
var caption = document.getElementById('carouselCaption');
var prevBut = document.getElementById('carouselPrev');
var nextBut = document.getElementById('carouselNext');

// Fetch json file, loop through and create 'image' elements
// Adding each 'image' to 'images'
fetch("https://raw.githubusercontent.com/zenachallenge/zenachallenge.github.io/main/json/images.json")
	.then(function(res){
		res.json().then(function(json){
			json.forEach(function(el, i){
				var image = document.createElement('img');
				image.setAttribute('src', el.url);
				image.setAttribute('alt', el.caption);
				image.setAttribute('title', el.caption);
				images.appendChild(image);
			});
		setupCarousel(json);
	});
});

// Setup the carousel and give buttons functionality
function setupCarousel(json) {
	var imageCount = images.childElementCount;
	var currentImage = 1;
	var imageWidth = 500;
	
	// Moves to the previous 'image'. If on first 'image' when called -> move to last 'image'
	function prevImg(){
		if(currentImage == 1){ // Move to last 'image'
			currentImage = imageCount+1;
			images.style.right = imageCount * (imageWidth - (currentImage * imageWidth)) + 'px';
		}
    // Move one 'image' width left
		if(currentImage != 1) images.style.left = imageWidth - (--currentImage * imageWidth) + 'px';
		
		// Update caption
		caption.innerText = json[currentImage - 1].caption;
	}
	
	// Moves to the next 'image'. If on last 'image' when called -> move to first 'image'
	function nextImg(){
		if(currentImage == imageCount){ // Move to first 'image'
			currentImage = 0;
			images.style.left = imageCount * (imageWidth - (currentImage * imageWidth)) + 'px';
		}
    // Move one 'image' width right
		if(currentImage != imageCount) images.style.left = imageWidth - (++currentImage * imageWidth) + 'px';
		
		// Update caption
		caption.innerText = json[currentImage - 1].caption;
	}
	
	// Button functions
	prevBut.addEventListener('click', prevImg);
	nextBut.addEventListener('click', nextImg);
	
  // Set initial caption
	caption.innerText = json[currentImage - 1].caption;
	  
	// Autoplay function - Stops when mouse over carousel
	setInterval(function(){
		if (document.querySelector(".carousel:hover") == null) right();
	}, 5000);
}
