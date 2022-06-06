<?php
/**
 * LackierzentrumHirschaid_01 functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package LackierzentrumHirschaid_01
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'lh_j_theme_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function lh_j_theme_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on LackierzentrumHirschaid_01, use a find and replace
		 * to change 'lh_j_theme' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'lh_j_theme', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'lh_j_theme' ),
			)
		);

		function register_custom_image_sizes() {
			if ( ! current_theme_supports( 'post-thumbnails' ) ) {
			add_theme_support( 'post-thumbnails' );
			}
				add_image_size( 'medium-medium', 500, 9999 ); 
			}
		add_action( 'after_setup_theme', 'register_custom_image_sizes' );


		function lh_j_theme_content_image_sizes_attr($sizes, $size) {
			$width = $size[0];

			//if ($width > 0) {
				$sizes = '(max-width: 300px) 150px, (max-width: 550px) 300px, (max-width: 1000px) 500px';
			//}

			return $sizes;
		}
		add_filter('wp_calculate_image_sizes', 'lh_j_theme_content_image_sizes_attr', 10 , 2);


		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'lh_j_theme_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'lh_j_theme_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function lh_j_theme_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'lh_j_theme_content_width', 640 );
}
add_action( 'after_setup_theme', 'lh_j_theme_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function lh_j_theme_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'lh_j_theme' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'lh_j_theme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);

	// Register Footer Column 1 widget area.
	register_sidebar( array(
		'name' => __( 'Footer Column 1', 'theme-slug' ),
		'id' => 'footer-1',
		'description' => __( 'Appears on the first footer column.', 'theme-slug' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s clearfix">',
		'after_widget' => '</aside>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
	
}
add_action( 'widgets_init', 'lh_j_theme_widgets_init' );

/* remove_filter('the_content', 'wpautop');
remove_filter('the_excerpt', 'wpautop'); */

/* function lh__wpautop_nobr ( $content ) {
	return contentwpautop( $content, false);
}

add_filter('the_content', 'lh__wpautop_nobr');
add_filter('dynamic_sidebar', 'lh__wpautop_nobr'); */
/* 
function disable_wp_autop( $content ) {
	remove_filter('the_content', 'wpautop');
	remove_filter('the_excerpt', 'wpautop');
	return $content;
}

add_filter( 'the_content', 'disable_wp_autop', 0 ); */

/* remove_filter('widget_text_content', 'wpautop'); */


add_filter( 'body_class', 'lh_j_theme_body_class' );
function lh_j_theme_body_class( $classes ) {
    $templates = array( 'templates/template-structure.php', 'custom-template-2.php', 'custom-template-3.php' ); // add your custom template in array
 
    if ( is_page_template( $templates ) ) { 
        $classes[] = 'template-structure'; // add your class here
    }
 
    return $classes;
}

// disable lazy loading global
//add_filter( 'wp_lazy_loading_enabled', '__return_false' );


/**
 * Enqueue scripts and styles.
 */
function lh_j_theme_scripts() {
	wp_enqueue_style( 'lh_j_theme-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'lh_j_theme-style', 'rtl', 'replace' );

	// adobe fonts
	wp_enqueue_style( 'typeket-style', 'https://use.typekit.net/nsn7mmkq.css' );

	wp_enqueue_script( 'lh_j_theme-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	// masonry library
	wp_enqueue_script( 'masonry', 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js', array(), NULL, true );

	// images loaded js plugin for masonry
	//wp_enqueue_script( 'imagesloaded', 'https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js', array(), NULL, true );

	//Lightbox
	//add_action( 'wp_enqueue_scripts', 'add_thickbox' );

	wp_enqueue_script( 'lh_j_theme-custom-js', get_template_directory_uri() . '/js/custom-js.js', array('jquery'), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'lh_j_theme_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Custom Gutenberg Block
 */
require get_template_directory() . '/inc/gutenberg.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

