<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package LackierzentrumHirschaid_01
 */

?>



	<footer id="colophon" class="site__footer">

	<?php
// Check if there are footer widgets.
if ( is_active_sidebar( 'footer-1' ) or is_active_sidebar( 'footer-2' ) or is_active_sidebar( 'footer-3' ) or is_active_sidebar( 'footer-4' ) ) : ?>

	<div id="footer-widgets-wrap" class="footer-widgets-wrap">

		<div id="footer-widgets" class="footer-widgets"  role="complementary">

			<?php if ( is_active_sidebar( 'footer-1' ) ) : ?>

				<div class="footer-widget-column widget-area">
					<?php dynamic_sidebar( 'footer-1' ); ?>
				</div>

			<?php endif; ?>

		</div>

	</div>

<?php endif; ?>

	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
