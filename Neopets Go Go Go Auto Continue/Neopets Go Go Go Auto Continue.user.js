// ==UserScript==
// @name        Neopets - Go Go Go - Auto Continue
// @namespace   Jarofgrease.captainmaxthecat.com
// @description Auto clicks continue while playing Go Go Go
// @author 		Demeiz
// @email 		admin@captainmaxthecat.com
// @homepage	http://www.captainmaxthecat.com
// @version		1.0
// @language	en
// @include		http://www.neopets.com/prehistoric/gogogo/gogogo.phtml
// @grant		none
// ==/UserScript==

(function() {
	continue_find = document.evaluate("//input[@value='Continue...']", document, null,7, null); 
	continue_button = continue_find.snapshotItem(0);
	continue_button.click();

})();