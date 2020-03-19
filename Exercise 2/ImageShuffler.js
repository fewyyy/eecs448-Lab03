var ImageShuffler = document.getElementById('ImageShuffler');
var PreviousBtn = document.getElementById('PreviousBtn');
var NextBtn = document.getElementById('NextBtn');
var Num = 1;
NextBtn.addEventListener("click", function() {
	Num++;
		if(Num == 1){
			ImageShuffler.src = "image1.jpg";
		}else if(Num == 2){
			ImageShuffler.src = "image2.png";
		}else if(Num == 3){
			ImageShuffler.src = "image3.png";
		}else if(Num == 4){
			ImageShuffler.src = "image4.jpg";
		}else if(Num == 5){
			ImageShuffler.src = "image5.png";
		}else{
			Num = 1;
			ImageShuffler.src = "image1.jpg";
		}
});
PreviousBtn.addEventListener("click", function() {
	Num--;
		if(Num == 1){
			ImageShuffler.src = "image1.jpg";
		}else if(Num == 2){
			ImageShuffler.src = "image2.png";
		}else if(Num == 3){
			ImageShuffler.src = "image3.png";
		}else if(Num == 4){
			ImageShuffler.src = "image4.jpg";
		}else if(Num == 5){
			ImageShuffler.src = "image5.png";
		}else{
			Num = 5;
			ImageShuffler.src = "image5.png";
		}
});