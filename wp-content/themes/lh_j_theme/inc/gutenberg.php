<?php

function lhtheme_gutenberg_blocks() {

    wp_register_script( 
        'lh-blocks',
        get_template_directory_uri() . '/build/index.js', 
        
        array (
            'wp-blocks', 
            'wp-editor'
        )
    );


    register_block_type(
        'lh-theme/lh-phone', 
        array( 
            'editor_script' => 'lh-blocks'
        ) 
    );

/*     register_block_type(
        'lh-theme/lh-mail', 
        array( 
            'editor_script' => 'lh-blocks'
        ) 
    ); */

/*     register_block_type(
        'lh-theme/lh-svg', 
        array( 
            'editor_script' => 'lh-blocks'
        ) 
    ); */


}

add_action( 'init', 'lhtheme_gutenberg_blocks');

