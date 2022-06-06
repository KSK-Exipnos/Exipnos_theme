<?php
/**
 * Template Name: Structure Template
 * Template Post Type: page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package LackierzentrumHirschaid_01
 */



get_header();
?>

	<main id="structure" class="site-structure bereich">
		
		<?php
		while ( have_posts() ) :
			the_post();

			// title image // es gibt eine copy mit dem gutenberg content
			//get_template_part( 'template-parts/content', 'main-title' );

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

	</main><!-- #main -->

<?php
//get_sidebar();
get_footer();
