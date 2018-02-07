$(function(){
let plusButton = $('#menu');
let plusButtonV = $('#plus path:first-child');
let twitter = $('#twitter');
let facebook = $('#facebook');
let instagram = $('#instagram');
let youtube = $('#youtube');
let iconArray = [twitter, facebook, instagram, youtube];
let iconArrayR = [youtube,instagram, facebook, twitter];
let i= 0;

TweenMax.set(iconArray, {scale:0, x:80, y:80})

plusButton.on("click", function(){

	if (i%2==0) {
		let tl = new TimelineMax();
		
		tl.to(plusButton, 0.5, {
			transformOrgin:'50% 50%',
			scale:0.9,
			ease:Elastic.easeOut
		})
		.staggerTo(iconArray, 1.5, {
			opacity:1,
			transformOrigin:'50% 50%',
			scale:1,
			ease:Elastic.easeOut
		}, 0.15, '-=0.4')
		.to(plusButtonV, 0.4, {
			transformOrigin:'50% 50%',
			rotation:90,
			ease:Bounce.easeOut
		}, '-=1.9')
	i++
	}
	else {
		let tl = new TimelineMax();
		tl.to(plusButton, 0.7, {
			scale:1,
			ease:Elastic.easeOut
		})
		.staggerTo(iconArrayR, 0.35, {
			scale:0,
			ease:Linear.easeNone,
			opacity:0.4
		}, 0.15, '-=0.4')
		.to(plusButtonV, 0.4, {
			transformOrigin:'50% 50%',
			rotation:0,
			ease:Bounce.easeOut
		}, '-=0.9')
	i++
	}




})

	

})


