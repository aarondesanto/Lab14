$(document).ready(function() {



(function($){ 
     $.fn.extend({  
         airport: function(array) {
			
			var self = $(this);
			var chars = ['a','b','c','d','e','f','g',' ','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','-','.',"'","0","1","2","3","4","5","6","7","8","9",":"];
			var longest = 0;
			var items = items2 = array.length;

			function pad(a,b) { return a + new Array(b - a.length + 1).join(' '); }
			
			$(this).empty();
			
			while(items--)
				if(array[items].length > longest) longest = array[items].length;

			while(items2--)
				array[items2] = pad(array[items2],longest);
				
			spans = longest;
			while(spans--)
				$(this).prepend("<span class='c" + spans + "'></span>");
				
			
			function testChar(a,b,c,d){
				if(c >= array.length)
					setTimeout(function() { testChar(0,0,0,0); }, 10);				
				else if(d >= longest)
					setTimeout(function() { testChar(0,0,c+1,0); }, 10);
				else {
					$(self).find('.c'+a).html((chars[b]==" ")?"&nbsp;":chars[b]);
					setTimeout(function() {
						if(b > chars.length)
							testChar(a+1,0,c,d+1);
						else if(chars[b] != array[c].substring(d,d+1).toLowerCase())
							testChar(a,b+1,c,d);
						else
							testChar(a+1,0,c,d+1);
					}, 20);
				}
			}
			
			testChar(0,0,0,0);
        } 
    }); 
})(jQuery);

var $mainWrapper = $('<div />').attr('id', 'mainWrapper').appendTo($('body'))

$('<h1 />').appendTo($mainWrapper);
$('h1').airport(["Travelers are reminded not to leav", "e their luggage unattended.", "All unattended luggage will be rem", "oved and searched without warning."]);

$('<h2 />').appendTo($mainWrapper);
$('h2').airport(["It is currently: ", "  November 12th", " 2015  11:41am"]);

$('<div />').attr('id', 'contentWrapper').appendTo($('body'));
$("<p>Content, content, oh wonderful content here.</p>").appendTo('#contentWrapper');



});