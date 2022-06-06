<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Petra_Krischke
 */

?>

<section id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;

		if ( 'post' === get_post_type() ) :
			?>
			<div class="entry-meta">
				<?php
				pk_theme_posted_on();
				pk_theme_posted_by();
				?>
			</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	

	<!-- div id="wait" style="display:none;width:69px;height:89px;border:1px solid black;position:absolute;top:50%;left:50%;padding:2px;"><img src='demo_wait.gif' width="64" height="64" /><br>Loading..</div -->

	<div class="title">
			
		<section class="wp-block-group bg-image-main">

			
			<!-- image header srcset custom sizes -->
			<?php
				$img_id = get_post_thumbnail_id();
				$size = 'large';
				$img_src = wp_get_attachment_image_url( $img_id, $size );
				$img_srcset = wp_get_attachment_image_srcset( $img_id, $size );
				$title = get_post($img_id)->post_title;
				$alt = isset(get_post_meta($img_id, '_wp_attachment_image_alt')[0]) ? get_post_meta($img_id, '_wp_attachment_image_alt')[0] : $title;
				$caption = wp_get_attachment_caption($img_id);


			echo '<figure class="wp-block-image size-large title__img">
				<img src="' .  esc_url( $img_src ) . '"
				srcset="' . esc_attr( $img_srcset ) . '"
				sizes="
				(max-width: 150px) 150px,
				(max-width: 300px) 300px,
				(max-width: 500px) 500px,
				(max-width: 768px) 768px,
				(max-width: 1100px) 1024px,
				100vw
				
				alt="' . $alt . '"
				class="img"
				loading="lazy">
				<figcaption>' . $caption . '</figcaption>
			</figure>';
			?>

			<div class="bg-image-main__icon__wrapper">

				<svg class="title__cirlce" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
					<circle class="title__circle__outer" cx="50" cy="50" r="47.1"/>
					<path class="title__circle__inner" d="M50,24.5c-14.1,0-25.5,11.4-25.5,25.5S35.9,75.5,50,75.5S75.5,64.1,75.5,50S64.1,24.5,50,24.5z M51.5,58h-3.1
						l-11-11l3.1-3.1l9.4,9.4l9.5-9.4l3.1,3.1L51.5,58z"/>
				</svg>

			</div>

			
		</section>

	</div>

	</section><!-- #post-<?php the_ID(); ?> -->

