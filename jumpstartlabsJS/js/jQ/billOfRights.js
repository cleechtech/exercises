// http://tutorials.jumpstartlab.com/projects/javascript/jquery/jsrights.html
$(function(){
	var backToTop = '<a href=\'#top\'>Back to top</a>';
	$('div.article').append(backToTop);
	
	var tocHeading = "<h2 id='toc'><a name='toc'>Table of Contents</a></h2>";
	$('h1:first').after(tocHeading).addClass('text-center');
	
	var tocList = '<ul id="toc"></ul>';
	$('h2:first').after(tocList);
	
	var h2s = $('h2').slice(1); // select all h2s except for the first one
	console.log(h2s[0]);
	
	h2s.addClass('text-center').css('background-color', '#CCF').each(function(){
		var $this = $(this);
		var title = $this.text();
		
		// create linking targets
		var slug = title.trim().toLowerCase().replace(' ', '_');
		var targetAnchor = '<a name="' + slug + '" />';
		$this.before(targetAnchor);
		
		// create navigation list items
		var li = '<li><a href="#' + slug + '">' + title + '</a></li>';
		$('ul#toc').append(li);
		
		// hide/show buttons
		var toggleLink = $("<a href='#'>(hide)</a>");
		$this.after(toggleLink);
		
		toggleLink.on('click', function(event){
			event.preventDefault();
			$this.siblings().hide();
		});
		
	});
	
});
