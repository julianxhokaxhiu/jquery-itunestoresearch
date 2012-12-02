/*
	jQuery iTunes Store Search
	
	This plugin is a simple jQuery wrap of Search API of iTunes Store,
	App Store, iBooks Store and Mac App Store. See
	http://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html
	for more detailed instructions.
	
	Author: Julian Xhokaxhiu
	Date: 02/12/2012
	Changelog:
		- 0.1: initial relase version.
*/
var iTunesStoreSearch;
(function($){
	iTunesStoreSearch = function(options){
		var placeholder = $(this);
		var settings = $(this).data('itunesstoresearchsettings');
		// If settings are not declared, we set the default value for them
		if(!settings){
			settings = {
				'term':'',
				'country':'',
				'media':'',
				'entity':'',
				'attribute':'',
				'limit':'',
				'lang':'',
				'version':'',
				'explicit':'',
				'callback':function(data){}
			}
		};
		// Private methods - can only be called from within this object
		var IntFunc = {
		};
		
		if(typeof(options)=='string'){
			if(IntFunc[options])IntFunc[options].apply(null,Array.prototype.slice.call(arguments,1));
		}else if(options){
			settings = $.extend(settings,options||{});
			$(this).data('itunesstoresearchsettings',settings);
			
			var pars = $.extend({},settings);
			delete pars['callback'];
			$.getJSON('https://itunes.apple.com/search?callback=?',pars,function(data){
				settings.callback(data)
			});
		}
	};
	$.fn.extend({
		itunesstoresearch:function(){
			var args = arguments;
			this.each(function(){iTunesStoreSearch.apply(this,args)});
		}
	});
})(jQuery);