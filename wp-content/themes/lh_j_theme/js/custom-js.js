/* eslint-disable linebreak-style */


jQuery( document ).ready( function() {
	const home = document.querySelector('.home');

	jQuery(".footer__svg").parent().css({"margin": "0", "width": "100%", "line-height": "0"});


	////////////////////////////////////
	// Scroll Navbar color change
	//

	let scrollToggle;
		let swapping = scrollStatus => {
			//////
			//
			if(scrollStatus === true){
				
				if(scrollToggle === false) {

					// desktop
					jQuery('.nav-menu').animate({opacity: '0'}, 50);
					jQuery('.nav-menu').delay(150).animate({opacity: '1'}, 50);
					setTimeout(() => {jQuery('.desktop__menu .nav-menu').addClass('hasScrolled')}, 200);
					jQuery('.desktop__menu .custom-logo-link').delay(200).show();
					jQuery('.desktop__menu .custom-logo-link').animate({opacity: '1'}, 50);
					
					// mobile
					setTimeout(() => {jQuery('.mobile__menu .menu').addClass('hasScrolled')}, 200);
					setTimeout(() => {jQuery('.menu-toggle').addClass('hasScrolled')}, 200);
					//jQuery('.main-navigation .custom-logo-link').hide();
					scrollToggle = true;
				}
			}

			if(scrollStatus === false){
				
				if(scrollToggle === true) {

					// desktop
					jQuery('.nav-menu').animate({opacity: '0'}, 50);
					jQuery('.nav-menu').delay(150).animate({opacity: '1'}, 50);
					jQuery('.desktop__menu .nav-menu').removeClass('hasScrolled');
					jQuery('.desktop__menu .custom-logo-link').animate({opacity: '0'}, 50);
					jQuery('.desktop__menu .custom-logo-link').delay(200).hide();
					
					// mobile
					jQuery('.mobile__menu .menu').removeClass('hasScrolled');
					jQuery('.menu-toggle').removeClass('hasScrolled');
					//jQuery('.main-navigation .custom-logo-link').hide();
					scrollToggle = false;
				}
			}
		}    

		// inital 
		let initialScrollPosTest = 0;
		let scrollStatus;
		// get positionen function
		const scrollPositions = () => {
			// Positionen der element
			let headerPos = document.querySelector('.nav-menu').getBoundingClientRect().bottom;
			let mainPos = document.querySelector('.entry-content').getBoundingClientRect().top - 140;
			
			
			(() => {
				
				while(initialScrollPosTest === 0){
					//inital state before scrolling
					scrollStatus = false;

					if(headerPos > mainPos){
						
						scrollStatus = false;
						scrollToggle = true;
						// mobile
						jQuery('.mobile__menu .menu').addClass('hasScrolled');
						jQuery('.menu-toggle').addClass('hasScrolled'); 
						// desktop
						jQuery('.desktop__menu .nav-menu').addClass('hasScrolled');

						if(jQuery(window).width() > 900){
							jQuery('.home .main-navigation .custom-logo-link').show();
							jQuery('.home .custom-logo-link').animate({opacity: '1'});
						}
					}

					if(headerPos < mainPos){
						scrollStatus = false;
						scrollToggle = false;
						
					}

					//console.log('initial false');
					initialScrollPosTest++;
					//swapping();
				}
			}) ();

			return {
				headerPos: headerPos,
				mainPos: mainPos 
			};
		} 
		// bei seiten aufruf
		scrollPositions();

		jQuery( window ).scroll(scrollStatus => {

			//console.log('scoll')
			scrollPositions();
			let { headerPos, mainPos} = scrollPositions();

			//swapping();
			
				if(home){
					if(headerPos > mainPos) {
						scrollStatus = true;
						//console.log('scroll true',scrollStatus );
						swapping(scrollStatus);
					} else {
						scrollStatus = false;
						//console.log('scroll false', scrollStatus);
						swapping(scrollStatus);
					}
				}
		}); // end window.scroll



	////////////////////////////////////
	// Menu
	//
	jQuery( '.menu-menu-1-container' ).append( '<div class="menu__shadow"></div>' );

	jQuery( '.menu__shadow' ).click( function() {
		closeMobileMenu();
	} );
	jQuery( '.menu__bg' ).click( function() {
		closeMobileMenu();
	} );

	function closeMobileMenu() {
		//jQuery('.menu-item').hide();
		//jQuery('.menu-item a').hide();
		jQuery( '#site-navigation' ).removeClass( 'toggled' );
	}





	////////////////////////////////////
	// Scroll links link
	//

		// local scroll custom btn
		jQuery( '.title__cirlce' ).click(() => {
				leistungenScroll();
		} );

		// logo prevent link
		jQuery( '.custom-logo-link' ).click(e => {
			if (home) {
				e.preventDefault();
				leistungenScroll();
			}
		} );

		function leistungenScroll() {
			if (home) {
				const position = window.scrollY + document.querySelector( '#leistungen' ).getBoundingClientRect().top;
				const positionY = position - 70;

				jQuery( 'HTML, BODY' ).animate( { scrollTop: positionY } );
			}
		}


        if (!home) {        

			// local scroll and normal menu
				jQuery('nav').find('.menu-item a').click( function(e) {
					console.log('inside');
					e.preventDefault();
					jQuery( '#site-navigation' ).removeClass( 'toggled' );
					// Get the hash. In this example, "#myDestinationAnchor".
					let targetSelector = this.hash;
					console.log(targetSelector);
					
					let $target = jQuery(targetSelector);
					console.log($target);
				
					// Animate the scroll to the destination...
					jQuery('html, body').animate(
						{
							scrollTop: $target.offset().top // Scroll to this location.
						}, {
							// Set the duration long enough to allow time
							// to lazy load the elements.
							duration: 1000,
				
							// At each animation step, check whether the target has moved.
							step: function( now, fx ) {
								
				
								// Where is the target now located on the page?
								// i.e. its location will change as images etc. are lazy loaded
								var newOffset = $target.offset().top;
				
								// If where we were originally planning to scroll to is not
								// the same as the new offset (newOffset) then change where
								// the animation is scrolling to (fx.end).
								if(fx.end !== newOffset)
									fx.end = newOffset;
							}
						}
					);
				});
        }


	////////////////////////////////////
	//      Logo position
	//

	function logoPos() {
		// get logo class
		const homeLogo = jQuery( '.home .main-navigation .custom-logo-link' );
		const allLogo = jQuery( '.main-navigation .custom-logo-link' );

		// small prepend to image
		if ( window.innerWidth >= 900) { //WindowWidth
			jQuery( '#primary-menu' ).prepend( allLogo );
			//jQuery(homeLogo).hide();
			//jQuery( '#primary-menu' ).prepend( structureLogo );
			// small prepend to nav
		} else if ( window.innerWidth < 900 ) { //WindowWidth
			jQuery( '#site-navigation' ).prepend( allLogo );
			//jQuery( '#site-navigation' ).prepend( structureLogo );
		}
	}
	logoPos(),




	////////////////////////////////////
	// Accordion js
	//

	// Add open/close svg for Accordion
	jQuery( '.c-accordion__title' ).prepend( '<svg class="accordion__cirlce" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><circle class="accordion__circle__outer" cx="50" cy="50" r="47.1"/><circle class="accordion__circle__inner" cx="50" cy="50" r="25.5"/></svg>' );

	// Add Dot wrapper  to accordion contents
	jQuery( '<div class="accordion-dot__wrapper"></div>' ).insertAfter( '.c-accordion__content p' );

	//Add Dots to wrapper
	for ( let step = 0; step < 7; step++ ) {
		// Runs 5 times, with values of step 0 through 4.
		jQuery( '.accordion-dot__wrapper' ).append( '<div class="accordion-dot"></div>' );
	}

	//Add Accordion image Wrapper
	jQuery( '.accordion_wrapper' ).append( '<div class="accordion__image__wrapper"></div>' );

	//Add image class class to accordion images items
	jQuery( '.c-accordion__content .wp-block-image' ).each( function() {
		jQuery( this ).addClass( 'accordion__image' );
	} );

	//
	// Accordion click / move images
	//

	// Click handler for show/hide images of accordion section
	jQuery( '#leistungen__acc__wrapper .js-accordion-controller' ).click( function( index ) {
		'use strict'; //satisfy code inspectors
		const accordion = jQuery( this ).parent(); // select parent Object

		// if when open
		if ( accordion.hasClass( 'is-open' ) ) {
			// hide images when open
			jQuery( '.accordion__image' ).hide();
			jQuery( '.accordion__image' ).removeClass( 'img__show' );

			// else when closed
		} else {
			// get index of parent of clicked
			const indexOfOpen = jQuery( this ).parent().index();

			// hide all images
			jQuery( '.accordion__image' ).hide();
			//jQuery('.accordion__image').removeClass("img__show");
			// show image of opend
			jQuery( '.accordion__image' ).eq( indexOfOpen ).show();
			console.log("add show");
			jQuery( '.accordion__image' ).eq( indexOfOpen ).addClass( 'img__show' );
		}
	} );

	//
	// resize timeout acoordion width
	//

	function doneResizing() {
		WindowWidth = jQuery( window ).width();
		if ( WindowWidth < 820 ) {
			
			// hide mobile logo
			jQuery('.home .main-navigation .custom-logo-link').hide();
			// get descendent images of content
			const contentHasImg = jQuery( '.c-accordion__content' ).has( '.accordion__image' );

			// append images to accordion content
			if ( contentHasImg.length != 0 ) {
				// Do nothing

			} else if ( contentHasImg.length == 0 ) {
				// append
				jQuery( '.accordion__image' ).each( function() {
					// get index of current image
					const index = jQuery( '.accordion__image' ).index( this );
					// get accordion content with right index
					const appendTo = jQuery( '.c-accordion__item' ).eq( index ).children( '.c-accordion__content' );

					// append images to accordion content
					jQuery( appendTo ).append( this );
				} );
			}
		} else {
			
			//close mobile menu
			closeMobileMenu();

			if(scrollStatus === true){
				// hide mobile logo			
				jQuery('.home .main-navigation .custom-logo-link').css({opacity: 1});
				jQuery('.home .main-navigation .custom-logo-link').show();
			}


			// get descendent images of content
			const wrapperHasImg = jQuery( '.accordion__image__wrapper' ).has( '.accordion__image' );

			// append images to accordion content
			if ( wrapperHasImg.length) {
				// Do nothing

			} else if ( wrapperHasImg.length == 0 ) {
				//append all images for desktop
				jQuery( '.accordion__image' ).each( function() {
					// check which accordion is open
					if ( jQuery( this ).closest( '.js-accordion-item' ).hasClass( 'is-open' ) ) {
						// show image of open accordion
						jQuery( this ).show();
						jQuery( this ).addClass( 'img__show' );
						// hide other images
					} else {
						// hide images of closed accordion
						jQuery( this ).hide();
						jQuery( this ).removeClass( 'img__show' );
					}
					// append images to to image wrapper
					jQuery( '.accordion__image__wrapper' ).append( this );
				} );
			}
		}
	}


		
	////////////////////////////////////
	// Load resize - do stuff
	//
	jQuery( window ).on( 'load resize', function() {
		clearTimeout( this.id );
		// accordion image position
		this.id = setTimeout( doneResizing, 0 );
		// logo position mobile/desktop
		this.id = setTimeout( logoPos, 100 );
	} );
	


	////////////////////////////////////
	// Kontakt map hover
	//

	// create color overlay
	jQuery( '.google__maps' ).append( '<div class="google__maps__overlay" touch="false"></div>' );

	// google maps fade out on touch function
	jQuery( '.google__maps__overlay' ).on( 'touchstart', function( e ) {
		// fade out maps overlay
		mapsEnter();
	} );

	// handle touch state outside click
	jQuery( document ).click( function() {
		mapsLeave();
	} );

	// mouse over overlay - hide
	jQuery( '.google__maps__overlay' ).mouseenter( function() {
		mapsEnter();
	} );

	// fade out maps overlay
	function mapsEnter() {
		jQuery( '.google__maps__overlay' ).fadeOut( 100 );
		jQuery( '.google__maps__text' ).fadeOut( 100 );
	}

	// mouse over overlay - show
	jQuery( '.google__maps iframe' ).mouseleave( function() {
		mapsLeave();
	} );

	// fade in maps overlay
	function mapsLeave() {
		jQuery( '.google__maps__overlay' ).fadeIn( 500 );
		jQuery( '.google__maps__text' ).fadeIn( 500 );
	}





	////////////////////////////////////////////////////////////////////////
	////////////////////////////////////
	//Masonry Grid JS
	//

	jQuery( '.wp-block-gallery figure' ).each( function() {
		jQuery( this ).addClass( 'grid-item' );
	} );

	let $grid = jQuery( '.wp-block-gallery' );

	$grid = jQuery( '.wp-block-gallery' ).masonry( {
		// options...
		itemSelector: '.wp-block-gallery figure',
		horizontalOrder: true,

	} );

	//loadMasonry();

	// windows resize - fire function once after resize
	jQuery( window ).bind( 'resize', function( e ) {
		//window.resizeEvt;
		jQuery( window ).resize( function() {
			clearTimeout( window.resizeEvt );
			window.resizeEvt = setTimeout( function() {
				//code to do after window is resized

				$grid.masonry( 'layout' );
			}, 250 );
		} );
	} );

	// maonry layout after each image laods // vgl. images loaded
	( function() {
		const imgWrapper = jQuery( '.wp-block-gallery figure' );
		// the image inside the wrapper
		jQuery( imgWrapper ).find( 'img' ).each( function() {
			//console.log( jQuery( this ) );
			const $image = jQuery( this );
			//$image.hide(); //Hide it

			$image.one( 'load', function() { //Set something to run when it finishes loading
				//$image.fadeIn(); //Fade it in when loaded
				$grid.masonry( 'layout' ); // layout masonry grid
			} )

				.each( function() {
					//Cache fix for browsers that don't trigger .load()
					if ( this.complete ) {
						jQuery( this ).trigger( 'load' );
					}
				} );
		} );
	}() );








} ); // document ready



////////////////////////////////////
//      Masonry Touch overlay
//

// add touch attributes for touch
jQuery( '.wp-block-gallery figure' ).each( function() {
	this.setAttribute( 'touch', 'false' );
} );

// get touch state attribute
let state;
let stateObject;

// touch function
jQuery( '.wp-block-gallery figure' ).on( 'touchstart', function( e ) {
	// get touch state attribute
	stateObject = this;
	state = this.getAttribute( 'touch' );

	// handle touch states
	switch ( state ) {
		case 'false':
			// prevent lightbox on touch
			e.preventDefault();
			// reset other touchstates
			jQuery( '.wp-block-gallery figure' ).each( function() {
				this.setAttribute( 'touch', 'false' );
			} );
			// set touch state up
			this.setAttribute( 'touch', 'first' );
			state = 'first';
			break;

		case 'first':
			// set touch state up
			this.setAttribute( 'touch', 'false' );
			state = 'false';
			break;
	}
} );

// handle touch state outside click
jQuery( document ).click(() => {
	// if touched reset state
	if ( state === 'first' ) {
		stateObject.setAttribute( 'touch', 'false' );
	}
} );

////////////////////////////////////  ////////////////////////////////////  ////////////////////////////////////
////////////////////////////////////  ////////////////////////////////////  ////////////////////////////////////



