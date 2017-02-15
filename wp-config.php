<?php
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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'z<PYc4+@E0)_: {a]yNqkep#=2oCP2L/es5 %$&{XUZ=ZG05d yLz[~ {?f>t+bH');
define('SECURE_AUTH_KEY',  'ZZ+zULLj<h!q+lzNn;NP~GC[rr>/Z`r._!ZF^L{yIrXP[KJKjw07dP@lZq|Buiut');
define('LOGGED_IN_KEY',    '8eGN1~Cdj<Y9eTp>1-X`&i9}634J}t!QCkb/ROO1qk`ri1#2VGqwu`!Dh_l+2h4<');
define('NONCE_KEY',        '8-#Kf+-(0cxc`P~&Z`M1=ib s;pt-PXgb)nxocG}#>PZ)&fwypxN$*( -a?O!qI/');
define('AUTH_SALT',        'Dr%+I]9~Go)V!t|dM=36i2IJF%n5G.mBG3RtGM-1kF]Cw-BB>UtE5szK=>cl35Jh');
define('SECURE_AUTH_SALT', '~Ev#ZZW0AWJw)c+>&sMnnH34Xpi+Fyb5!jzr|_1i,/wzlchpb9[TRFx$C{BfD&RY');
define('LOGGED_IN_SALT',   'UF@lkY7+4f~}C]bS?^6My 41aW[}34l *dNL<-Y,(?`Bjah5EAp^(qQP=$1BpBf8');
define('NONCE_SALT',       '[??CiC4D`L}$DVUdH8}w!.v76#qyR_Q+pv2{jw_HO-NrjZ1K{VtaxUy4F40k>>io');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
