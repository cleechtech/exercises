// Write a JavaScript program to double the height and width 
// of a .JPEG image on the document.

var imgs = document.getElementsByTagName('img'); 

for(var i = 0; i < imgs.length; i++){
	
	// check it's a jpeg
	var imgSrc = imgs[i].getAttribute('src');
	var splitted = imgSrc.split('.');
	var extension = splitted[splitted.length - 1];
	
	if (extension == 'jpeg' || extension == 'jpg'){
		
		// double height and width
		var height = parseInt(imgs[i].style.height); // 40
		var width = parseInt(imgs[i].style.width);
		
		console.log('height: ' + height 
					+ ' width: ' + width);
	}
}
