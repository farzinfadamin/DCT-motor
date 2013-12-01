	WebFontConfig = {
		google: { families: [ 'Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,700,600,800:latin' ] }
	};

	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();

	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
		var viewportmeta = document.querySelector('meta[name="viewport"]');
		if (viewportmeta) {
			viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
			document.body.addEventListener('gesturestart', function () {
				viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
			}, false);
		}
	}

	var jump=function(e){
	   if (e){
		   e.preventDefault();
		   var target = $(this).attr("href");
	   }else{
		   var target = location.hash;
	   }

	   $('html,body').animate(
	   {
		   scrollTop: $(target).offset().top
	   },1000,function()
	   {
		   location.hash = target;
	   });
	}
	
	$('html, body').hide()
	
$(document).ready(function(){

	$('a[href^=#]').on('click', jump);
	
	if (location.hash){
		setTimeout(function(){
			$('html, body').scrollTop(0).show()
			jump()
		}, 0);
	}else{
	  $('html, body').show()
	}
	
	$('.js-brand-list a').on('mouseenter mouseleave', function(){
		$(this).parent().siblings('li').toggleClass('dimmed');
	});

	$('.js-faq-list li > a').on('click', function(){
		$(this).parent().toggleClass('active');
		$(this).next('p').stop().slideToggle(400);
	});
});