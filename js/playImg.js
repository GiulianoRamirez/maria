
// Referencias a elementos del DOM
var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;

// Referencias específicas para imágenes
var myImage = document.getElementById("img");
var myTxt = document.getElementById("Txt");

// Arrays de contenido
var imageArray = [
    "pic/pic1.jpg",
    "pic/pic2.jpg",
    "pic/pic3.jpg",
    "pic/pic4.jpg",
    // "pic/pic5.jpg",
    "pic/pic6.jpg",
    "pic/pic7.jpg",
    "pic/pic8.jpg",
    "pic/pic9.jpg",
    "pic/pic10.jpg",
    "pic/pic11.jpg",
    "pic/pic12.jpg",
    "pic/pic13.jpg",
    "pic/pic14.jpg",
    "pic/pic15.jpg",
    "pic/pic16.jpg",
		"pic/pic17.jpg",
		"pic/pic18.jpg",
		"video/video.mp4", // Video como elemento 19
];

var txtArray = [
    "Todo comenzo cuando nos conocimos en Apollo",      // 1
		"",                                                 // 2
		"",                                                 // 3
		"Salimos a carretear muchas veces",                 // 4
		// "",                                              // 5 XXX
		"Fuimos a surfear juntos",                          // 6
		"Hicimos lindas amistades",                         // 7
		"Y nuestra historia comenzo...",                    // 8
		"Me encanta cuando te veo sonreir",                 // 9
		"Me encanta cuando saliamos a citas improvisadas",  // 10
		"Amo sacarme fotitos contigo",                      // 11
		"Disfruto mucho pasar tiempo contigo",              // 12
		"Me acompañaste a mi primera boda",                 // 13
		"Conocimos a algunos de mis amigos",                // 14
		"Exploramos una maravilla del mundo",               // 15
		"Y todo esto en tan poquito tiempo",                // 16
		"Te amodoro mi Maria prezioza",                     // 17
		"Enamoradito, me encantas mucho",                   // 18
		"TE AAAAAAMOOOO❤️",                     // video
];

// Variables de control de imágenes
var imageIndex = 0;
var len = imageArray.length;

// Variable de control específica para playImg
var t = 0;

function showImage(){
	//document.getElementById("imgTxt").style.opacity = 0;
	
	// Verificar si es un video
	if(imageArray[imageIndex].includes('.mp4')){
		// Crear elemento de video
		myImage.style.display = 'none';
		if(!document.getElementById('videoPlayer')){
			var video = document.createElement('video');
			video.id = 'videoPlayer';
			video.autoplay = true;
			video.loop = false;
			video.muted = true;
			video.controls = false;
			video.playsInline = true; // Importante para móviles
			video.setAttribute('webkit-playsinline', 'true'); // Para iOS Safari
			video.style.width = '100%';
			video.style.height = '100%';
			video.style.objectFit = 'cover';
			video.style.borderRadius = '10px';
			video.style.position = 'absolute';
			video.style.top = '0';
			video.style.left = '0';
			myImage.parentNode.appendChild(video);
		}
		document.getElementById('videoPlayer').src = imageArray[imageIndex];
		document.getElementById('videoPlayer').style.display = 'block';
	} else {
		// Mostrar imagen normal
		myImage.style.display = 'block';
		if(document.getElementById('videoPlayer')){
			document.getElementById('videoPlayer').style.display = 'none';
		}
		myImage.setAttribute("src", imageArray[imageIndex]);
	}
	
	myTxt.innerHTML = txtArray[imageIndex];
	//document.getElementById("imgTxt").style.opacity = 1 - flag;
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function play(){
	// Hacer que el botón desaparezca
	btn.style.opacity = 0;
	btn.style.display = 'none';
	
	// Reproducir música de fondo
	var backgroundMusic = document.getElementById('backgroundMusic');
	if(backgroundMusic){
		backgroundMusic.play().catch(function(error) {
			console.log('Error al reproducir audio:', error);
		});
	}
	
	if(t == 0){
		// Mostrar inmediatamente la primera imagen
		myImage.setAttribute("src", imageArray[0]);
		myTxt.innerHTML = txtArray[0];
		imageIndex = 0; // Mantener en la primera imagen
		clearInterval(showImageInterval);
	}
	flag = 1 - flag;
	document.getElementById("typeDiv").style.opacity = flag;
	document.getElementById("imgTxt").style.opacity = 1 - flag;
	if(t == 0){
		//setTimeout(showImage, 1000);
		setInterval(showImage, 6000);
	}
	t++;
}

function preshowImage(){
	document.getElementById("imgTxt").style.opacity = 0;
	
	// Verificar si es un video
	if(imageArray[imageIndex].includes('.mp4')){
		// Crear elemento de video
		myImage.style.display = 'none';
		if(!document.getElementById('videoPlayer')){
			var video = document.createElement('video');
			video.id = 'videoPlayer';
			video.autoplay = true;
			video.loop = false;
			video.muted = true;
			video.controls = false;
			video.playsInline = true; // Importante para móviles
			video.setAttribute('webkit-playsinline', 'true'); // Para iOS Safari
			video.style.width = '100%';
			video.style.height = '100%';
			video.style.objectFit = 'cover';
			video.style.borderRadius = '10px';
			video.style.position = 'absolute';
			video.style.top = '0';
			video.style.left = '0';
			myImage.parentNode.appendChild(video);
		}
		document.getElementById('videoPlayer').src = imageArray[imageIndex];
		document.getElementById('videoPlayer').style.display = 'block';
	} else {
		// Mostrar imagen normal
		myImage.style.display = 'block';
		if(document.getElementById('videoPlayer')){
			document.getElementById('videoPlayer').style.display = 'none';
		}
		myImage.setAttribute("src", imageArray[imageIndex]);
	}
	
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}



function event(){

	showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function (){
		if(ok == 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
