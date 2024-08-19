(function ($) {
    "use strict";
    $(document).ready(function () {
        
       //Header
            var fixed_top = $("header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 200) {
                    fixed_top.addClass("header--fixed animated fadeInDown");
                } else {
                    fixed_top.removeClass("header--fixed animated fadeInDown");
                }
            });

            //close mobile menu after clicking nav-link
            $(".nav-link").click(function () {
                $(".navbar-toggler").addClass("collapsed");
            });
            $(".nav-link").click(function () {
                $(".navbar-collapse").removeClass("show");
            });

        //Countdown js initialization
        document.addEventListener('readystatechange', event => {
            if (event.target.readyState === "complete") {
                var clockdiv = document.getElementsByClassName("count-down");
                var countDownDate = new Array();
                for (var i = 0; i < clockdiv.length; i++) {
                    countDownDate[i] = new Array();
                    countDownDate[i]['el'] = clockdiv[i];
                    countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
                    countDownDate[i]['days'] = 0;
                    countDownDate[i]['hours'] = 0;
                    countDownDate[i]['seconds'] = 0;
                    countDownDate[i]['minutes'] = 0;
                }
                var countdownfunction = setInterval(function () {
                    for (var i = 0; i < countDownDate.length; i++) {
                        var now = new Date().getTime();
                        var distance = countDownDate[i]['time'] - now;
                        countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
                        countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);
                        if (distance < 0) {
                            countDownDate[i]['el'].querySelector('.days').innerHTML = 0;
                            countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
                            countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
                            countDownDate[i]['el'].querySelector('.seconds').innerHTML = 0;
                        } else {
                            countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
                            countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
                            countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
                            countDownDate[i]['el'].querySelector('.seconds').innerHTML = countDownDate[i]['seconds'];
                        }
                    }
                }, 1000);
            }
        });

        // ajax contact form
        $(function() {
            var form = $('#contact-form');
            var formMessages = $('.form-message');
            $(form).submit(function(e) {
                e.preventDefault();
                var formData = $(form).serialize();
                $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function(response) {
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');
                    $(formMessages).text(response);
                    $('#contact-form input, #contact-form textarea').val('');
                })
                .fail(function(data) {
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
            });
        });
    });



    // Get the element
    let topBtn = document.querySelector(".top-btn");

    // On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

    // On scroll, Show/Hide the btn with animation
    window.onscroll = () => topBtn.style.opacity = window.scrollY >  500 ? 1 : 0;


    new WOW().init();
	


    /// Disable right-click
		document.addEventListener('contextmenu', (e) => e.preventDefault());

		function ctrlShiftKey(e, keyCode) {
		  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
		}

		document.onkeydown = (e) => {
		  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
		  if (
			event.keyCode === 123 ||
			ctrlShiftKey(e, 'I') ||
			ctrlShiftKey(e, 'J') ||
			ctrlShiftKey(e, 'C') ||
			(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
		  )
			return false;
		};
	
	
        //------------>>Magnificpopup<<----------------
        $(function() {
            $('.play-btn, .popup-vimeo').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        });
  //------------>>Magnificpopup<<----------------
})(jQuery);