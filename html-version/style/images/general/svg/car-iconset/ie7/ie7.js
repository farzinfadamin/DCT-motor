/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'car-iconset\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow-left': '&#xe600;',
		'icon-arrow-down': '&#xe601;',
		'icon-arrow-right': '&#xe602;',
		'icon-arrow-up': '&#xe603;',
		'icon-youtube': '&#xe604;',
		'icon-unselected': '&#xe605;',
		'icon-twitter': '&#xe606;',
		'icon-tick': '&#xe607;',
		'icon-telephone': '&#xe608;',
		'icon-swheels': '&#xe609;',
		'icon-selected': '&#xe60a;',
		'icon-plus': '&#xe60d;',
		'icon-menu': '&#xe60e;',
		'icon-key': '&#xe60f;',
		'icon-instagram': '&#xe610;',
		'icon-info': '&#xe611;',
		'icon-iaccessories': '&#xe612;',
		'icon-home': '&#xe613;',
		'icon-filter': '&#xe614;',
		'icon-email': '&#xe616;',
		'icon-ekits': '&#xe617;',
		'icon-cross': '&#xe618;',
		'icon-calendar': '&#xe60b;',
		'icon-facebook': '&#xe60c;',
		'icon-rss': '&#xe615;',
		'icon-products': '&#xe619;',
		'icon-cart': '&#xe61a;',
		'icon-carbrand': '&#xe61b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
