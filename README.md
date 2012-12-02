# jQuery iTunes Store Search #

### Introduction ###

This is a simple wrapper of iTunes Store Search API made in jQuery. It just make what you can do by hand yourself.
So what is its purpouse? Well, just to make easier for anyone who would like to use it via jQuery :)

### How to use it ###

It's simple as it should be. Append this piece of HTML wherever you want

	<div id="iss-jquery"></div>

name is completely arbitrary, it is important to keep that name also on your jQuery call, which would be

	jQuery(function($){
		$('#iss-jquery').itunesstoresearch({
			'term':'iBooks',
			'country':'US',
			'limit':1,
			'callback':function(data){
				// Your callback logic here
			}
		});
	});

and of course this is only an example of usage :)

You can also make another call within that DOM object preserving options, for example making a call like

	jQuery(function($){
		$('#iss-jquery').itunesstoresearch({
			'limit:2,
			'callback':function(data){
				// Your callback logic here
			}
		});
	});

will produce something like

	jQuery(function($){
		$('#iss-jquery').itunesstoresearch({
			'term':'iBooks',
			'country':'US',
			'limit':2,
			'callback':function(data){
				// Your callback logic here
			}
		});
	});

so you do not always have to reset options again :) This could be useful if you setup a "refresh" button, so you'll always need to call this plugin like

jQuery(function($){
		$('#iss-jquery').itunesstoresearch({
			'callback':function(data){
				// Your callback logic here
			}
		});
	});

and you're done!

Rembeber that you can pass any argument you want as a parameter, which you can find them here: [http://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html](http://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html)

### License ###

This plugin is licensed as GPLv3 and you can read it in the file "LICENSE" attached with this plugin.