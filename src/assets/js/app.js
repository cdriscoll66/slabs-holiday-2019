import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();




$('button').click(function() {
	$("div.rapboard").randomize("div.rapbox", "div.rapper");
  });

  (function($) {

	$.fn.randomize = function(tree, childElem) {
	  return this.each(function() {
		var $this = $(this);
		if (tree) $this = $(this).find(tree);
		var unsortedElems = $this.children(childElem);
		var elems = unsortedElems.clone();

		elems.sort(function() { return (Math.round(Math.random())-0.5); });

		for(var i=0; i < elems.length; i++)
		  unsortedElems.eq(i).replaceWith(elems[i]);
	  });
	};

  })(jQuery);



  $('.rapbox').on('click', function(){
	let noise = $(this).find('.sound');
	$(noise)[0].play();
	$(this).effect( "bounce", { distance: 10, times: 3 }, "slow"  );
})

