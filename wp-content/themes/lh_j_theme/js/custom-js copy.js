/* eslint-disable linebreak-style */
//hide top logo before scrolled
//jQuery("#site-navigation .custom-logo-link").hide();

jQuery( document ).ready( function() {

	jQuery(".footer__svg").parent().css({"margin": "0", "width": "100%", "line-height": "0"});
	////////////////////////////////////
	// Scroll Navbar color change
	//
	const home = jQuery( '.home' );

	if ( home.length != 0 ) {
		var position = window.scrollY + document.querySelector( '#leistungen' ).getBoundingClientRect().top;
	}
	const positionY = position - 170;
	const $document = jQuery( document ),
		$elementDesktop = jQuery( '.nav-menu' ),
		$elementMobile = jQuery( '.menu-toggle' ),
		$elementLogo = jQuery( '.custom-logo-link' ),
		className = 'hasScrolled';

	$document.scroll( function() {
		scrollColorChange();
	} );

	function scrollColorChange() {
		$elementDesktop.toggleClass( className, $document.scrollTop() >= positionY );
		$elementMobile.toggleClass( className, $document.scrollTop() >= positionY );

		$elementLogo.toggleClass( className, $document.scrollTop() >= positionY );

		if ( home.length != 0 ) {
			// show hide header bar logo on scroll past title
			if ( $document.scrollTop() >= positionY ) {
				if ( jQuery( '#site-navigation .custom-logo-link' ).css( 'opacity' ) == 0 ) {
					jQuery( '#site-navigation .custom-logo-link' ).fadeTo( 200, 1, function() {
						jQuery( '#site-navigation .custom-logo-link' ).show();
					} );
				}
			} else if ( jQuery( '#site-navigation .custom-logo-link' ).css( 'opacity' ) == 1 ) {
				jQuery( '#site-navigation .custom-logo-link' ).fadeTo( 200, 0, function() {
					jQuery( '#site-navigation .custom-logo-link' ).hide();
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
		this.id = setTimeout( doneResizing, 100 );
		// logo position mobile/desktop
		this.id = setTimeout( logoPos, 100 );
		// initial color logo
		this.id = setTimeout( scrollColorChange, 100 );
	} );

	////////////////////////////////////
	// Scroll links link
	//

        if ( home.length != 0 ) {        
                jQuery( '.title__cirlce' ).click( function( event ) {
                        leistungenScroll();
                } );

                // logo prevent link
                jQuery( '.custom-logo-link' ).click( function( event ) {
                        event.preventDefault();
                        leistungenScroll();
                } );

                function leistungenScroll() {
                        const position = window.scrollY + document.querySelector( '#leistungen' ).getBoundingClientRect().top;
                        const positionY = position - 110;

                        jQuery( 'HTML, BODY' ).animate( { scrollTop: positionY } );
                }

                // Nav link scroll

                // Nav link LEISTUNGEN scroll
                jQuery( 'nav .leistungen-scroll' ).click( function( event ) {
                        event.preventDefault();
                        leistungenScroll();
                        closeMobileMenu();
                } );

                // Nav link REFERENZEN scroll
                jQuery( 'nav .referenzen-scroll' ).click( function( event ) {
                        event.preventDefault();

                        const position = window.scrollY + document.querySelector( '#referenzen' ).getBoundingClientRect().top;
                        const positionY = position - 100;

                        jQuery( 'HTML, BODY' ).animate( { scrollTop: positionY } );
                        closeMobileMenu();
                } );

                // Nav link KONTAKT scroll
                jQuery( 'nav .kontakt-scroll' ).click( function( event ) {
                        event.preventDefault();

                        const position = window.scrollY + document.querySelector( '#kontakt' ).getBoundingClientRect().top;
                        const positionY = position + -60;

                        jQuery( 'HTML, BODY' ).animate( { scrollTop: positionY } );
                        closeMobileMenu();
                } );

                // Nav link ANFAHRT scroll
                jQuery( 'nav .anfahrt-scroll' ).click( function( event ) {
                        event.preventDefault();

                        const position = window.scrollY + document.querySelector( '#anfahrt' ).getBoundingClientRect().top;
                        const positionY = position - 100;

                        jQuery( 'HTML, BODY' ).animate( { scrollTop: positionY } );
                        closeMobileMenu();
                } );

                // Nav link ÜBER UNS scroll
                jQuery( 'nav .uns-scroll' ).click( function( event ) {
                        event.preventDefault();

                        const position = window.scrollY + document.querySelector( '#uns' ).getBoundingClientRect().top;
                        const positionY = position - 100;

                        jQuery( 'HTML, BODY' ).animate( { scrollTop: positionY } );
                        closeMobileMenu();
                } );
        }


	////////////////////////////////////
	//      Logo position
	//

	function logoPos() {
		// get logo class
		const customlogo = jQuery( '.main-navigation .custom-logo-link' );

		// small prepend to image
		if ( window.innerWidth >= 900 ) { //WindowWidth
			jQuery( '#primary-menu' ).prepend( customlogo );
			console.log( 'bigger' );
			// small prepend to nav
		} else if ( window.innerWidth < 900 ) { //WindowWidth
			jQuery( '#site-navigation' ).prepend( customlogo );
			console.log( 'smaller' );
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
	console.log( 'is created desktop' );

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
			// get descendent images of content
			const wrapperHasImg = jQuery( '.accordion__image__wrapper' ).has( '.accordion__image' );

			// append images to accordion content
			if ( wrapperHasImg.length != 0 ) {
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

	jQuery( '.blocks-gallery-item' ).each( function() {
		jQuery( this ).addClass( 'grid-item' );
	} );

	let $grid = jQuery( '.blocks-gallery-grid' );

	$grid = jQuery( '.blocks-gallery-grid' ).masonry( {
		// options...
		itemSelector: '.blocks-gallery-item',
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
		const imgWrapper = jQuery( '.blocks-gallery-item' );
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

	////////////////////////////////////
	// Menu
	//
	jQuery( '.menu-menu-1-container' ).append( '<div class="menu__shadow"></div>' );

	jQuery( '.menu__shadow' ).click( function() {
		closeMobileMenu();
	} );

	function closeMobileMenu() {
		//jQuery('.menu-item').hide();
		//jQuery('.menu-item a').hide();
		jQuery( '#site-navigation' ).removeClass( 'toggled' );

		console.log(" close");
	}



} ); // document ready



////////////////////////////////////
//      Masonry Touch overlay
//

// add touch attributes for touch
jQuery( '.blocks-gallery-item' ).each( function() {
	this.setAttribute( 'touch', 'false' );
} );

// get touch state attribute
let state;
let stateObject;

// touch function
jQuery( '.blocks-gallery-item' ).on( 'touchstart', function( e ) {
	// get touch state attribute
	stateObject = this;
	state = this.getAttribute( 'touch' );

	// handle touch states
	switch ( state ) {
		case 'false':
			// prevent lightbox on touch
			e.preventDefault();
			// reset other touchstates
			jQuery( '.blocks-gallery-item' ).each( function() {
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
jQuery( document ).click( function() {
	// if touched reset state
	if ( state == 'first' ) {
		stateObject.setAttribute( 'touch', 'false' );
	}
} );

////////////////////////////////////  ////////////////////////////////////  ////////////////////////////////////
////////////////////////////////////  ////////////////////////////////////  ////////////////////////////////////



