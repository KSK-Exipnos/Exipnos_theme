<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package LackierzentrumHirschaid_01
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'lh_j_theme' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php


			//the_custom_logo();
			get_template_part( 'template-parts/content', 'logo' );



			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$lh_j_theme_description = get_bloginfo( 'description', 'display' );
			if ( $lh_j_theme_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $lh_j_theme_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			
			
			<?php get_template_part( 'template-parts/content', 'logo' ); ?>
		
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
			
			<!-- svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 491 425" style="enable-background:new 0 0 491 425;" xml:space="preserve">

					<g id="Linie_2">
						<rect x="0.1" y="-0.05" class="st0" width="490.9" height="79.64"/>
					</g>
					<g id="Linie_3">
						<rect x="39.71" y="185.78" class="st0" width="451.29" height="79.64"/>
					</g>
					<g id="Linie_4">
						<rect x="13.16" y="345.06" class="st0" width="477.84" height="79.64"/>
					</g>
			</svg -->


				<!--?php esc_html_e( 'Primary Menu', 'lh_j_theme' ); ?´-->MENU
			</button>
			<div class="desktop__menu">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
					)
				);
				?>
			</div>
			<div class="mobile__menu">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
						'add_li_class'	 => 'CLASSCLASS',
					)
				);
				?>
				<div class="menu__bg"></div>
			</div>
			
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->




