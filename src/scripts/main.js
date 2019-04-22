$('.owl-one').owlCarousel({
	loop:true,
	dots: true,
	autoplay:true,
    autoplayTimeout:5000,
	nav:true,
	responsiveClass:true,
	responsive:{
	0:{
	items:1,
	dots: false
	},
	768:{
		items:1,
		dots: true
	}

}
})
$('.owl-two').owlCarousel({
loop:true,
dots: false,
autoplay:true,
autoplayTimeout:5000,
nav:true,
responsiveClass:true,
responsive:{
0:{
items:1
}
}
})


$('.owl-project').owlCarousel({
	loop:true,
	dots: false,
	nav:false,
	autoplay:true,
	autoplayTimeout:5000,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true,
		},
		768:{
			items:2,
			nav:true,
		},
		992:{
			
			nav:false,
			items:3
		},
			1200:{
			

			items:4
		}
	}
	})

$('.owl-brand').owlCarousel({
loop:true,
dots: false,
nav:true,
autoplay:true,
autoplayTimeout:5000,
responsiveClass:true,
responsive:{
	0:{
		items:2,
		nav:true,
	},
	768:{
		items:3
	},
	992:{
		
		nav:true,
		items:6
	},
		1200:{
		
		nav:false,
		items:6
	}
}
})


$('.owl-area').owlCarousel({
	loop:true,
	dots: false,
	nav:false,
	autoplay:true,
	autoplayTimeout:5000,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true,
		},
		330:{
			items:2,
			nav:true,
		},
		768:{
			items:3,
			nav:true,
		},
		992:{
			
			nav:false,
			items:3
		},
			1200:{
			

			items:3
		}
	}
	})








$(function () {

	removeActiveHeader()
	
	toggleButton()
	fixedMenu()
	containerFluid()
	overLayMenu()
	// gridCol()
})
//This fucntion remove active header when load website 1st time
function removeActiveHeader() {
	$('header').removeClass('active')
}

//This is toggle button of hambugerPlugin
function toggleButton() {
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function (e) {
		$hamburger.toggleClass("is-active");
	});
}

//Resize the size of header when scroll
function fixedMenu() {
	$(window).scroll(function () {
		let height = "1";
		let scroll = $(window).scrollTop();
		if (scroll > height) {
			$("header").addClass("active");
		} else{
			$("header").removeClass("active");
		}
	});
}

//Change container to container-fluid when tablet
function containerFluid() {
	$(window).on('resize', function () {
		var win = $(this);

		if (win.width() <= 992 || $(window).width <=992) {
			$('.header-container').removeClass('container').addClass('container-fluid')
		} else {
			$('.header-container').removeClass('container-fluid').addClass('container')
		}
	});
}

//Function clone navbar elements
function overLayMenu(){
	let sidebar         = document.getElementById('sidebar');
	console.log(sidebar)
	let sidebarOverlay  = document.getElementsByClassName('sidebar-overlay')[0];
	console.log(sidebarOverlay)

	let sidebarBtnClose = document.getElementById('sidebarBtnClose');
	let sidebarBtnOpen  = document.getElementById('sidebarBtnOpen');
	
	let openSidebar = function() {
	  sidebarOverlay.style.right = '0';
	  sidebar.style.right = '0';
	}
	
	let closeSidebar = function(e) {
	  e.cancelBubble = true;
	  sidebarOverlay.style.right = '-100%';
	  sidebar.style.right = '-100%';
	}
	
	sidebarOverlay.addEventListener('click', closeSidebar);
	sidebarBtnClose.addEventListener('click', closeSidebar);
	sidebarBtnOpen.addEventListener('click', openSidebar);




}


//PLugin see col 
function gridCol() {

	var html = '<div class="toggle-button"> <button class="btn btn-primary" type="button">Grid</button> <button class="btn btn-dark" type="button">Fluid</button> </div><div class="toggle-grid active"> <div class="toggle-class container"> <div class="row"> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> </div> </div> </div>',
		css = '.toggle-button .btn-primary { position: fixed; right: 1rem; bottom: 2rem; z-index: 99; } .toggle-button .btn-dark { position: fixed; right: 1rem; bottom: 7rem; z-index: 99; } .toggle-grid { width: 100%; position: fixed; display: none; height: 100vh; z-index: 80; } .toggle-grid.active { display: block; } .toggle-grid .container, .toggle-grid .row { height: 100vh; } .toggle-grid .container .col .item, .toggle-grid .row .col .item { height: 100vh; background: rgba(128, 128, 128, 0.5); }'

	$('body').prepend(html)
	$('head').append('<style>' + css + '</style>')
	$(function () {

		$(".toggle-button .btn-primary").on("click", function () {
			$('.toggle-grid').toggleClass('active')
		})
		$(".toggle-button .btn-dark").on("click", function () {
			$(".toggle-class").toggleClass('container container-fluid')
			console.log("Fluid")
		})
	})
}
