<?php

define('FS_METHOD', 'direct');

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dbs5028505' );

/** MySQL database username */
define( 'DB_USER', 'dbu1882201' );

/** MySQL database password */
define( 'DB_PASSWORD', 'lCnZJwAljQMknmwBkUWp' );

/** MySQL hostname */
define( 'DB_HOST', 'db5006002450.hosting-data.io' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '@=J?Kwg+cXiIY>7huZ`}XAnRP-qK&{bLr&Id**HNre?XB>mVn4+Uz`l#xSPuUAjy' );
define( 'SECURE_AUTH_KEY',   '#t2.D,5PABq>ywcc`gKqE-1:6GRk3ucXoP-1I[SB*i)#@9QUJNE}@gtU&8qJ4mTr' );
define( 'LOGGED_IN_KEY',     'r&2y|C<)N}1>Q$|qCmi/EX$S{bedgMCMu&@.X_JE)$o[C9U!a(pwbeRx-3w!O^a;' );
define( 'NONCE_KEY',         '&Ee`R6xEwc3<hC{kJZ}mztFXR`nyE~X0APdQtz2G^$*c]pINTjd{>fB]w38sZLZo' );
define( 'AUTH_SALT',         'Ng,Nnj.@*U:GMD{Y^r#g?O|cYZuBk|M;%7wFq+5r/?QRh0!15#bO1IFy@0LECgbo' );
define( 'SECURE_AUTH_SALT',  '5!(0]FH9p1(]4vv4n8bHsDe)-rd@rI%a!^z1vWT|p[=C$;.3[5~ueCFwCBtaWl.b' );
define( 'LOGGED_IN_SALT',    'cD3{j$|e1h):4:wzW{9HssxtJrn2gc<z%Og-%>GU/xx<6+/4]6p}]BfV3u`?DnWf' );
define( 'NONCE_SALT',        '<4($gaL&-k5cepIZxT|u[n%XRY}HR9cbYLFz<MCJZyo@rl7v}c.<Wh_.rBe=PDKB' );
define( 'WP_CACHE_KEY_SALT', 'v9J9L(OesB*wyOg3`D#5im$Z_{S-#xO8=3,[kY#iH>U78Q2m)/K?+i<&hT(ms3In' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'LcSioRvq';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
