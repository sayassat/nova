var _width = screen.width;

// event menu dropdown
$(function(){
	$('#eventMenuBtn').on('click', function(){
		$('#eventMenu').toggleClass('active');
		$('#eventSubmenu').toggle('slow');
	})
	$(document).mouseup(function (e) {
		if ($(e.target).closest('#eventMenu').length === 0) {
			$('#eventSubmenu').hide('slow');
			$('#eventMenu').removeClass('active');
		}
	})
})

// front video
window.onload = function() {
	var video = document.getElementById('frontVideo');
	video.play().catch(function(error) {
		console.log('Autoplay bloklandi:', error);
	});
};

$(function(){
	$('#soundOn').on('click', function(){
		var soundOn = document.getElementById('frontVideo');
		if ($(this).attr('data-sound') == 'off') {
			$(this).attr('data-sound','on');
			soundOn.muted = false;
			$(this).find('.icon-sound-off').hide();
			$(this).find('.icon-sound-on').show();
		} else {
			$(this).attr('data-sound','off');
			soundOn.muted = true;
			$(this).find('.icon-sound-on').hide();
			$(this).find('.icon-sound-off').show();
		}
		
	})
})

// Number Counter
function animateCount(element, target) {
  const increment = target / 100;
  let currentValue = 0;

  const updateCount = () => {
    currentValue += increment;
    if (currentValue < target) {
      let displayValue = Math.floor(currentValue);
      if (displayValue >= 10000) {
        displayValue = displayValue.toLocaleString('en').replace(/,/g, ' ');
      }
      element.textContent = displayValue;
      requestAnimationFrame(updateCount); // Smoother animation
    } else {
      let finalValue = target;
      if (finalValue >= 10000) {
        finalValue = finalValue.toLocaleString('en').replace(/,/g, ' ');
      }
      element.textContent = finalValue;
    }
  };

  updateCount();
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function initCounters() {
  const counters = document.querySelectorAll('.counter .count');
  counters.forEach(counter => {
    const target = +counter.parentElement.getAttribute('data-target');
    if (!counter.classList.contains('started') && isElementInViewport(counter)) {
      counter.classList.add('started'); // To avoid re-triggering
      animateCount(counter, target);
    }
  });
}

window.addEventListener('scroll', initCounters);
window.addEventListener('DOMContentLoaded', initCounters);


// slick js

$(document).ready(function(){

	if (screen.width > 768) {
		$('.partners-feedbacks').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: false,
			dots: true,
			appendDots: $('.partners .pagination')
		});
	} else {
		$('.partners-feedbacks-item').each(function(i){
			if (i%3 == 0 ) {
				$('.partners-feedbacks-item').slice(i, i+3).wrapAll("<div class='partners-feedbacks-item-outer'></div>");
			}
		});
		// $('.partners-feedbacks').slick({
		// 	infinite: true,
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	arrows: false,
		// 	dots: true,
		// 	appendDots: $('.partners .pagination')
		// });
	}

	var x1 = $('.articles').width();
	var x2 = parseInt($('.articles-in').css('padding-left'));
	var x3 = parseInt($('.articles-top').css('width'));
	var x4 = parseInt($('.articles-top').css('margin-right'));
	var x5 = parseInt($('.articles-in').css('margin-left'));
	var articlesListWidth = x1 - x2 - x3 - x4 - x5;

	// $('.articles-list-outer').width(articlesListWidth - 1);

	$('.articles-list').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		appendArrows: $('.articles-nav'),
		responsive: [
	    {
	      breakpoint: 1790,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 1120,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	
});

$(document).ready(function(){
	$('.projects-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		appendDots: $('.projects-top-pagination')
	});
});

// mobile menu open

$(function(){
	var windowWidth = screen.width;
	$('.header-burger').on('click', function(){
		$('#outlayer').removeClass('d-none');
		$('.mob-header').css('display','flex');
		$('.header-menu').css({
			'right': 0
		})
	})
	$('.header-burger-arrow').on('click', function(){
		if (screen.width > 576) {
			$('.header-menu').css({
				'right': '-350px'
			})
		} else {
			$('.header-menu').css({
				'right': '-283px'
			})
		}
		$('.mob-header').css('display','none');
		$('#outlayer').addClass('d-none');
	})
})

// contacts

$(function(){
	$('.cli-top-btn').on('click', function(){
		if ($(this).hasClass('rotated')) {
			$(this).parent().parent().find('.cl-item-body').slideUp();
			$(this).removeClass('rotated');
		} else {
			$(this).addClass('rotated');
			$(this).parent().parent().find('.cl-item-body').slideDown();
		}
	})
})

// map pins

$(function(){
	$('.mappins-item-btn_toggle').hover(
			function(){
				$(this).parent().css('z-index','11').find('.mappins-item-info').css('display','flex');
			},
			function(){
				$(this).parent().css('z-index','10').find('.mappins-item-info').css('display','none');
			}
		);
})

// event video

$(function(){
	var marginTop = ($('.event_front').height() - $('.event_front-video').height()) / 2;
	if (screen.width > 1310) {
		$('.event_front-video').css('margin-top', marginTop + 'px').removeClass('d-none');
	} else {
		$('.event_front').css({'display':'flex','justify-content':'center'});
		$('.event_front-video').css({'width':'auto','height':'100%'}).removeClass('d-none');
	}
})

// services button

$(function(){
	$('.smb-card-btn').on('click', function(){

	})

	$('.smb-card-btn').on('click', function(){
		if ($(this).hasClass('rotated')) {
			$(this).parent().parent().find('.smb-card-list').slideUp();
			$(this).removeClass('rotated');
		} else {
			$(this).addClass('rotated');
			$(this).parent().parent().find('.smb-card-list').slideDown();
		}
	})
})

// modal block

$(function(){
	$('.call-modal').on('click', function(){
		$('#modal').show();
	})
	$('.main-form-close').on('click', function(){
		$('#modal').hide();
	})

	
	$('.smbcl-item-link').on('click', function(){
		$('#modal').show();
	})
	$('.sal-item-link').on('click', function(){
		$('#modal').show();
	})
})

// partners animation

$(function(){
	if (screen.width < 1060) {
		$('.partners-list_1').eq(0).clone().appendTo('.partners-list-outer');
		$('.partners-list_2').eq(0).clone().appendTo('.partners-list-outer');
		$('.partners-list_1').eq(0).clone().appendTo('.partners-list-outer');
		$('.partners-list_2').eq(0).clone().appendTo('.partners-list-outer');
	}
})

// feedbacks more

$(function(){
	$('.fc-body-more').on('click', function(){
		if ($(this).hasClass('read-more-opened')) {
			$(this).removeClass('read-more-opened').parent().find('.feedbacks-card-body').css('height','132px');
			$(this).find('.fcb-more-close').hide();
			$(this).find('.fcb-more-open').show();
		} else {
			$(this).addClass('read-more-opened').parent().find('.feedbacks-card-body').css('height','auto');
			$(this).find('.fcb-more-open').hide();
			$(this).find('.fcb-more-close').show();
		}
	})
})


// const proxyURL = 'https://novagroup.asia/send_email.php';

// // Добавляем обработчик на каждую форму с id contactForm1, contactForm2 и так далее
// for (let i = 1; i <= 7; i++) {
//     const form = document.getElementById(`contactForm${i}`);
//     if (form) {
//         form.addEventListener('submit', handleFormSubmit);
//     }
// }

// // Обработчик отправки формы
// function handleFormSubmit(event) {
//     event.preventDefault();

//     const form = event.target;
//     const formData = new FormData(form);
//     const data = {};

//     formData.forEach((value, key) => {
//         data[key] = value.trim();
//     });

//     console.log("Отправляемые данные:", data);

//     fetch(proxyURL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(result => {
//         if (result.status === "success") {
//             console.log("Ответ от сервера:", result.message);
//             showSuccessMessage();
//             clearFormFields(form);

//             const modal = form.closest(".modal");
//             if (modal) {
//                 closePopup(modal);
//             }
//         } else {
//             console.error("Ошибка:", result.message);
//             alert("Ошибка при отправке формы: " + result.message);
//         }
//     })
//     .catch(error => console.error("Ошибка:", error));
// }

// // Функция для очистки полей формы
// function clearFormFields(form) {
//     form.reset();
// }

// Функция для отображения сообщения об успешной отправке
function showSuccessMessage() {
    const messageBox = document.createElement("div");
    messageBox.classList.add("success-message");
    messageBox.innerText = "Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.";

    document.body.appendChild(messageBox);

    setTimeout(() => {
        messageBox.remove();
    }, 5000);
}

// // Функция для открытия и закрытия попапа и фона
// function openPopup(modal) {
//     modal.style.display = "block";
//     const overlay = document.querySelector(".modal-overlay");
//     if (overlay) {
//         overlay.style.opacity = "1";
//         overlay.style.visibility = "visible";
//         overlay.style.pointerEvents = "auto";
//     }
// }

// function closePopup(modal) {
//     modal.style.display = "none";

//     const overlay = document.querySelector(".modal-overlay");
//     if (overlay) {
//         overlay.style.opacity = "0";
//         overlay.style.visibility = "hidden";
//         overlay.style.pointerEvents = "none";
//     }
// }

// BTL video

$(function(){
	$('#soundOnBTL').on('click', function(){
		var soundOn = document.getElementById('btlCardVideo');
		if ($(this).attr('data-sound') == 'off') {
			$(this).attr('data-sound','on');
			soundOn.muted = false;
			$(this).find('.icon-sound-off').hide();
			$(this).find('.icon-sound-on').show();
		} else {
			$(this).attr('data-sound','off');
			soundOn.muted = true;
			$(this).find('.icon-sound-on').hide();
			$(this).find('.icon-sound-off').show();
		}
		
	})
})

$(function(){
	$('#soundOnBTLpromo').on('click', function(){
		var soundOn = document.getElementById('promoBotVideo');
		if ($(this).attr('data-sound') == 'off') {
			$(this).attr('data-sound','on');
			soundOn.muted = false;
			$(this).find('.icon-sound-off').hide();
			$(this).find('.icon-sound-on').show();
		} else {
			$(this).attr('data-sound','off');
			soundOn.muted = true;
			$(this).find('.icon-sound-on').hide();
			$(this).find('.icon-sound-off').show();
		}
		
	})
})

$(function(){
	$('#soundOnDigital').on('click', function(){
		var soundOn = document.getElementById('digitalVideo');
		if ($(this).attr('data-sound') == 'off') {
			$(this).attr('data-sound','on');
			soundOn.muted = false;
			$(this).find('.icon-sound-off').hide();
			$(this).find('.icon-sound-on').show();
		} else {
			$(this).attr('data-sound','off');
			soundOn.muted = true;
			$(this).find('.icon-sound-on').hide();
			$(this).find('.icon-sound-off').show();
		}
		
	})
})

// form Google Sheets

$(function(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbwX4EyIQthccRuWrqm2NEy9WzZvVLD4EUW8lxj6bkAD_H-Dat9LmN8UCovvfzwReNSG/exec'

	const form = document.forms['submit-to-google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => showSuccessMessage())
		.catch(error => console.error('Error!', error.message))
	})

	const form2 = document.forms['submit-to-google-sheet2']
	form2.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form2)})
		.then(response => showSuccessMessage())
		.catch(error => console.error('Error!', error.message))
	})

	const form3 = document.forms['submit-to-google-sheet3']
	form3.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form3)})
		.then(response => showSuccessMessage())
		.catch(error => console.error('Error!', error.message))
	})
})

// BTL fron images size control

$(function(){
	if (_width < 769) {

		var w = $('.btl-card-promo').width();

		$('.btl-card-promo').css('height', (w * 1.5655) + 'px');

		$('.bc-posters-pic').css('height', (w * 1.0753) + 'px');

		$('.bcp-bottom-card_left').css('height', (w * 1.0753) + 'px');

		$('.bcp-bottom-card_right').css('height', (w * 1.5655) + 'px');

		$('.bc-posters-pic img').css('width', (w * 0.8287) + 'px').css('margin-left', -(w * 0.3724) + 'px');

	}

	var window_width = $(window).width();

	$(window).on('resize', function() {
	  if ($(this).width() !== window_width) {

			var w = $('.btl-card-promo').width();

			$('.bc-posters-pic').css('height', (w * 1.0753) + 'px');

			$('.btl-card-promo').css('height', (w * 1.5655) + 'px');

			$('.bcp-bottom-card_left').css('height', (w * 1.0753) + 'px');

			$('.bcp-bottom-card_right').css('height', (w * 1.5655) + 'px');

			$('.bc-posters-pic img').css('width', (w * 0.8287) + 'px').css('margin-left', -(w * 0.45) + 'px');

	  }
	});
})


// BTL creative scroll animation

$(function(){
	if (_width < 577) {
		$('.btl_creative-banners').animate({ scrollLeft: "4240" }, 40000, "linear");
		$('.btl_creative-banners').on({
			mouseenter: function(){
				// jQuery.fx.off = true;
				$(this).stop();
			},
			mouseleave: function(){
				$(this).animate({ scrollLeft: "4240" }, 40000, "linear");
			}
		});
	}
})

// Project resize elements

$(function(){
	if (_width < 1223 && _width > 576) {
		$('.project-media-album').height($(window).width()*0.448896);
		$('.pm-square-item').height($(window).width()*0.316434);
		$('.pm-slide-item').slice(1,2).height($(window).width()*0.212591);
		$('.project-media-slide').height($(window).width()*0.433360);
	}
	if (_width < 1216 && _width > 576) {
		$('.pm-straight-item').height($(window).width()*0.313322);
	}
	if (_width < 577) {
		$('[data-mob-order]').each(function(i) {
			if ($(this).attr('data-mob-order') == 'last') {
				var parent_id = $(this).parent().attr('id');
				var item = $(this).remove();
				$('#' + parent_id).append(item).removeClass('opacity-0-576');
			}
		})
		$('.pm-album-item').height($(window).width()*0.590625);
		$('.pm-album-col').eq(1).height($(window).width()*1.346875);
		$('.pt-right-img').height($(window).width()*0.609375);
		$('.project_page').find('.articles-nav').css('left', ($(window).width() - 118) + 'px');
		$('.pm-straight-item').not(":last-child").height($(window).width()*0.71875);
		$('.pm-straight-item:last-child').height($(window).width()*1.434375);
		$('.pm-square-item').height($(window).width()*0.878125);
		$('.pm-slide-item').height($(window).width()*0.5875);
		$('#projectMediaStraight').removeClass('opacity-0-576');
	}
	if (_width < 400) {
		$('.mob-am-body-pic').height($(window).width()*0.60648);
		$('.amb-pics-item').height($(window).width()*0.60648);
	}
	$(window).on('resize', function() {
		if ($(window).width() < 1223 && $(window).width() > 576) {
			$('.project-media-album').height($(window).width()*0.448896);
			$('.pm-square-item').height($(window).width()*0.316434);
			$('.pm-slide-item').slice(1,2).height($(window).width()*0.212591);
			$('.project-media-slide').height($(window).width()*0.433360);
		}
		if ($(window).width() < 1216 && $(window).width() > 576) {
			$('.pm-straight-item').height($(window).width()*0.313322);
		}
		if ($(window).width() < 577) {
			$('.pm-album-item').height($(window).width()*0.590625);
			$('.pm-album-col').eq(1).height($(window).width()*1.346875);
			$('.pt-right-img').height($(window).width()*0.609375);
			$('.project_page').find('.articles-nav').css('left', ($(window).width() - 118) + 'px');
			$('.pm-straight-item').not(":last-child").height($(window).width()*0.71875);
			$('.pm-straight-item:last-child').height($(window).width()*1.434375);
			$('.pm-square-item').height($(window).width()*0.878125);
			$('.pm-slide-item').height($(window).width()*0.5875);
		}
		if ($(window).width() < 400) {
			$('.mob-am-body-pic').height($(window).width()*0.60648);
			$('.amb-pics-item').height($(window).width()*0.60648);
		}
	})
})

// Article pictures scroll

$(function(){
	if (_width > 768) {
		var limit = $('.article_main-body').offset().top + $('.article_main-body').height() - $('.am-body-pics').height();
		$('.am-body-pics').scrollToFixed({
			marginTop: $('.header').outerHeight(true)+40,
			limit: limit,
			zIndex: 1
		});
	}
})