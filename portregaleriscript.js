<![CDATA[
BLOGGER-TEMPLATE-OPTIONS
"Site Layout": {
	"Entire Site Width": {
		"start": "/*-var-wrapper-width-start*/",
		"end": "px/*-var-wrapper-width-end*/",
		"type": "number",
		"default": 1100,		
		"desc": "Entire site width in PIXELS (px). Allow integer number only."
	},
	"Main Content Width": {
		"start": "/*-var-content-width-start-*/width: ",
		"end": "%;/*-var-content-width-end-*/",
		"type": "number",
		"default": 68.68,		
		"desc": "Main content column width in PERCENT (%). Allow digit number only"
	},
	"Sidebar Width": {
		"start": "/*-var-sidebar-width-start-*/width: ",
		"end": "%;/*-var-sidebar-width-end-*/",
		"type": "number",
		"default": 28.31,
		"desc": "Sidebar column width in PERCENT (%). Allow digit number only"
	},
	"Custom Header HTML": {
		"start": "<!--var-custom-header-html-start-->",
		"end": "<!--var-custom-header-html-end-->",
		"type": "textarea",
		"desc": "Custom HTML code (ex: meta) before end of head tag. Your code must be compatible with Blogger syntax."
	},
	"Auto Height Logo": {
		"start": "<!--auto-height-logo--><b:if cond='",
		"end": "'><!--auto-height-logo-->",
		"type": "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,
		"desc": "Allow template showing your logo as its natural height, instead of 30px"
	},
	"Move Social and Search Icons to Top of Page": {
		"start": "<!--top-bar--><b:if cond='",
		"end": "'><!--top-bar-->",
		"type": "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,
		"desc": "Move Social Icons and Search Icon from Menu Bar to Top of Page"
	},
	"Hide Social Icons": {
		"start": "<!--show_social--><b:if cond='",
		"end": "'><!--show_social-->",
		"type": "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Hide Social Icons from Header Bar"
	},	
	"Hide Search Icon": {
		"start": "<!--show_search--><b:if cond='",
		"end": "'><!--show_search-->",
		"type": "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Hide Search Icon from Header Bar"
	},
	"Default Post Thumbnail": {
		"start": "var DEFAULT_POST_THUMBNAIL = '",
		"end": "';// leave blank to use random images for non-thumbnail posts",
		"default": "https://lorempixel.com/640/300/",
		"desc": "The image src that you want to use for non-thumbnail posts. Leave blank to use random images from internet."
	},
	"Thumbnail Rainbow Colors": {
		"start": "var THUMBNAIL_RAINBOW_COLORS = [",
		"end": "];// color list for random for rainbow",
		"default": "'#292484,#DC4225', '#81AF59,#A83279', '#417711,#DC4225',  '#E0BE00,#FD340F', '#D38312,#002F4B', '#A83279,#292484', '#002F4B,#417711'",
		"desc": "The array of colors which will be use to random for rainbow thumbnail background"
	},
	"Disable Scroll Up Button": {
		"start": "<!--scroll-up--><b:if cond='",
		"end": "'><!--scroll-up-->",
		"type": "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Check this if you want to disable / hide Scroll Up (Jump Top) button"
	},
	"Instant Loading Posts": {
		"start": "var INSTANT_LOAD = ",
		"end": "; // instant loading posts without waiting mouse scroll",
		"type": "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,
		"desc": "Load all posts without mouse scrolling. Can slow your site speed."
	},
	"Disable Sticky Sidebar": {
		"start": "var STICKY_SIDEBAR = ",
		"end": "; // enable / disable sticky sidebar",
		"type": "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Disable sticky / floating sidebar. Not affect on mobile."
	},		
	"Sticky Menu": {
		"start": "var STICKY_MENU = '",
		"end": "';// enable / disable sticky menu",
		"type" : "select",
		"choice" : {
			"disable" : "Disable",
			"up" : "Show When Scrolling up",
			"down" : "Show When Scrolling down",
			"always" : "Show Always"
		},
		"default": "up",
		"desc": "Sticky Menu Style When Scrolling. Not affect on mobile."
	},
	"Centering Menu Items": {
		"start": "var CENTERING_MENU_ITEMS = ",
		"end": "; // CENTERING MENU ITEMS",
		"type": "checkbox",
		"default": true,
		"check": true,
		"uncheck": false,
		"desc": "Show menu item in center instead of left or right"
	},
	"Archive Page Feed Link": {
		"start": "var ARCHIVE_PAGE_FEED_LINKS = ",
		"end": ";// show feed link in archive or not",
		"type": "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,	
		"desc": "Show Feed Link for titles of archive pages"
	},
	"Archive Page Reload for Content": {
		"start": "var ARCHIVE_RELOAD_FOR_CONTENT = ",
		"end": ";// reload instead of using ajax to load content of archive pages",
		"type": "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,	
		"desc": "Reload archiave page for content when selecting page number instead of using ajax"
	},	
	"Slider Animate In Effect": {
		"start": "<!--var-SliderAnimateIn-start--><b:with value='&quot;",
		"end": "&quot;' var='SliderAnimateIn'><!--var-SliderAnimateIn-end-->",
		"type" : "select",
		"choice" : {
			"inherit" : "inherit",
			"slideInUp" : "slideInUp",
			"slideInDown" : "slideInDown",
			"slideInLeft" : "slideInLeft",
			"slideInRight" : "slideInRight",

			"fadeIn" : "fadeIn",
			"fadeInDown" : "fadeInDown",
			"fadeInDownBig" : "fadeInDownBig",
			"fadeInLeft" : "fadeInLeft",
			"fadeInLeftBig" : "fadeInLeftBig",
			"fadeInRight" : "fadeInRight",
			"fadeInRightBig" : "fadeInRightBig",
			"fadeInUp" : "fadeInUp",
			"fadeInUpBig" : "fadeInUpBig",

			"flip" : "flip",
			"flipInX" : "flipInX",
			"flipInY" : "flipInY",

			"zoomIn" : "zoomIn",
			"zoomInDown" : "zoomInDown",
			"zoomInLeft" : "zoomInLeft",
			"zoomInRight" : "zoomInRight",
			"zoomInUp" : "zoomInUp",

			"bounceIn" : "bounceIn",
			"bounceInDown" : "bounceInDown",
			"bounceInLeft" : "bounceInLeft",
			"bounceInRight" : "bounceInRight",
			"bounceInUp" : "bounceInUp",

			"lightSpeedIn" : "lightSpeedIn",

			"rotateIn" : "rotateIn",
			"rotateInDownLeft" : "rotateInDownLeft",
			"rotateInDownRight" : "rotateInDownRight",
			"rotateInUpLeft" : "rotateInUpLeft",
			"rotateInUpRight" : "rotateInUpRight",

			"rollIn" : "rollIn",

			"bounce" : "bounce",
			"flash" : "flash",
			"pulse" : "pulse",
			"rubberBand" : "rubberBand",
			"shake" : "shake",
			"swing" : "swing",
			"tada" : "tada",
			"wobble" : "wobble",
			"jello" : "jello",
			"hinge" : "hinge"
		},
		"default": "inherit",
		"desc": "Effect for slider when a slide animating in"
	},
	"Slider Animate Out Effect": {
		"start": "<!--var-SliderAnimateOut-start--><b:with value='&quot;",
		"end": "&quot;' var='SliderAnimateOut'><!--var-SliderAnimateOut-end-->",
		"type" : "select",
		"choice" : {
			"inherit" : "inherit",

			"slideOutUp" : "slideOutUp",
			"slideOutDown" : "slideOutDown",
			"slideOutLeft" : "slideOutLeft",
			"slideOutRight" : "slideOutRight",

			"fadeOut" : "fadeOut",
			"fadeOutDown" : "fadeOutDown",
			"fadeOutDownBig" : "fadeOutDownBig",
			"fadeOutLeft" : "fadeOutLeft",
			"fadeOutLeftBig" : "fadeOutLeftBig",
			"fadeOutRight" : "fadeOutRight",
			"fadeOutRightBig" : "fadeOutRightBig",
			"fadeOutUp" : "fadeOutUp",
			"fadeOutUpBig" : "fadeOutUpBig",

			"bounceOut" : "bounceOut",
			"bounceOutDown" : "bounceOutDown",
			"bounceOutLeft" : "bounceOutLeft",
			"bounceOutRight" : "bounceOutRight",
			"bounceOutUp" : "bounceOutUp",

			"flipOutX" : "flipOutX",
			"flipOutY" : "flipOutY",

			"lightSpeedOut" : "lightSpeedOut",

			"rotateOut" : "rotateOut",
			"rotateOutDownLeft" : "rotateOutDownLeft",
			"rotateOutDownRight" : "rotateOutDownRight",
			"rotateOutUpLeft" : "rotateOutUpLeft",
			"rotateOutUpRight" : "rotateOutUpRight",

			"zoomOut" : "zoomOut",
			"zoomOutDown" : "zoomOutDown",
			"zoomOutLeft" : "zoomOutLeft",
			"zoomOutRight" : "zoomOutRight",
			"zoomOutUp" : "zoomOutUp",
			"rollOut" : "rollOut",

			"bounce" : "bounce",
			"flash" : "flash",
			"pulse" : "pulse",
			"rubberBand" : "rubberBand",
			"shake" : "shake",
			"swing" : "swing",
			"tada" : "tada",
			"wobble" : "wobble",
			"jello" : "jello",
			"hinge" : "hinge"
		},
		"default": "inherit",
		"desc": "Effect for slider when a slide animating out"
	}
},
"Sidebar Manager": {
	"Home Page Sidebar": {
		"start": "<!--home-sidebar-manager--><b:with value='&quot;",
		"end": "&quot;' var='home_sidebar'><!--home-sidebar-manager-->",
		"default": "default",
		"type" : "select",
		"choice" : {
			"default" : "Default",
			"none" : "None",
			"right" : "Right",
			"left" : "Left"
		},
		"desc": "Sidebar position and display option for home page"
	},
	"Static Page Sidebar": {
		"start": "<!--static_page-sidebar-manager--><b:with value='&quot;",
		"end": "&quot;' var='static_page_sidebar'><!--static_page-sidebar-manager-->",
		"default": "default",
		"type" : "select",
		"choice" : {
			"default" : "Default",
			"none" : "None",
			"right" : "Right",
			"left" : "Left"
		},
		"desc": "Sidebar position and display option for static pages"
	},
	"Item Sidebar": {
		"start": "<!--item-sidebar-manager--><b:with value='&quot;",
		"end": "&quot;' var='item_sidebar'><!--item-sidebar-manager-->",
		"default": "default",
		"type" : "select",
		"choice" : {
			"default" : "Default",
			"none" : "None",
			"right" : "Right",
			"left" : "Left"
		},
		"desc": "Sidebar position and display option for item pages (posts / articles)"
	},
	"Index Sidebar": {
		"start": "<!--index-sidebar-manager--><b:with value='&quot;",
		"end": "&quot;' var='index_sidebar'><!--index-sidebar-manager-->",
		"default": "default",
		"type" : "select",
		"choice" : {
			"default" : "Default",
			"none" : "None",
			"right" : "Right",
			"left" : "Left"
		},
		"desc": "Sidebar position and display option for index pages (label, search)"
	},
	"Archive Sidebar": {
		"start": "<!--archive-sidebar-manager--><b:with value='&quot;",
		"end": "&quot;' var='archive_sidebar'><!--archive-sidebar-manager-->",
		"default": "default",
		"type" : "select",
		"choice" : {
			"default" : "Default",
			"none" : "None",
			"right" : "Right",
			"left" : "Left"
		},
		"desc": "Sidebar position and display option for archive pages (month, year)"
	}
},
"Ads Manager": {
	"Disable Ads in Post": {
		"start": "<!--var-enable-ads-in-post--><b:if cond='",
		"end": "'><!--var-enable-ads-in-post-->",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Disable TOP-LEFT ads space in articles, then show excerpt and break links (if have) as wide"
	},
	"Disable Ads in Mobile Post": {
		"start": "<!--var-dis-ads-in-mob-start--><b:if cond='data:blog.isMobileRequest and ",
		"end": "'><!--var-dis-ads-in-mob-end-->",
		"type" : "checkbox",
		"default": true,
		"check": true,
		"uncheck": false,
		"desc": "Disable TOP-LEFT ads space in articles if mobile"
	},
	"Full Width Post Ads": {
		"start": "<!--var-full-post-ads--><b:if cond='",
		"end": "'><!--var-full-post-ads-->",
		"type" : "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,
		"desc": "Show TOP-LEFT Post ads full width as post content instead of 336px float on left"
	},
	"Show Inner Post Ads At": {
		"start": "var SHOW_INNER_POST_ADS_AT = '",
		"end": "'; // where to show inner post ads",		
		"default": "middle",
		"type" : "select",
		"choice" : {
			"shortcode" : "Shortcode",
			"br_tag" : "4th and 8th br tags",
			"middle" : "Middle of content",
			"none" : "Disable all"
		},
		"desc": "Show inner post ads at shortcode or br tags"
	}
},

"Post Content": {
	"Date Format": {
		"start": "var DATE_FORMAT = '",
		"end": "';// global date format string for all javascript",
		"default": "MMM dd, yyyy",		
		"desc": "You can read about <a target=\"_blank\" href=\"https://github.com/phstc/jquery-dateFormat#date-and-time-patterns\">Date - Time Pattern</a> for more information"
	},
	"Feature Images": {
		"start": "var FEATURE_IMAGES = '",
		"end": "'; // show FEATURE_IMAGES",
		"default": "always-before",
		"type" : "select",
		"choice" : {
			"always-before" : "Always Show Before Title",
			"always-after" : "Always Show After Title",
			"selected-before" : "Show [feature] Image Only, Before Title",
			"selected-after" : "Show [feature] Image Only, After Title",
			"never" : "Never Show Feature Images"
		},
		"desc": "Show / hide feature images"
	},
	"Disable BreadCrumb": {
		"start": "<!--var-enable-breadcrumb--><b:if cond='",
		"end": "'><!--var-enable-breadcrumb-->",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Not show breadcrumb in all pages"
	},
	"Max Breadcrumb Depth": {
		"start": "var MAX_BREADCRUMB_DEPTH = ",
		"end": ";// number labels will show in breadcrumb",
		"default": "2",
		"type" : "select",
		"choice" : {
			"1" : "1",
			"2" : "2",
			"3" : "3",
			"4" : "4",
			"5" : "5"
		},
		"desc": "Number labels will show in breadcrumb, not show if you disabled breadcrumb"
	},
	"Disable SubTitle": {
		"start": "<!--var-enable-sub-title--><b:if cond='",
		"end": "'><!--var-enable-sub-title-->",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Disable subtitle in articles and static pages, then display their content normally"
	},	
	"Hide Post Excerpt": {
		"start": "<!--var-enable-excerpt--><b:if cond='",
		"end": "'><!--var-enable-excerpt-->",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Hide post excerpt (description) of articles even you inputed when editing the articles"
	},
	"Do Not Show Snippet as Excerpt": {
		"start": "<!--var-enable-alt-excerpt--><b:elseif cond='",
		"end": "'/><!--var-enable-alt-excerpt-->",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "If enabled excerpt, only show excerpt if articles have descriptions. Do not display snippets for missing description articles."
	},
	"Hide Post Break Links": {
		"start": "<!--var-enable-post-break-links--><b:if cond='",
		"end": "'><!--var-enable-post-break-links-->",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Do not show break links in articles."
	},
	"Number Post Break Links": {
		"start": "var NUM_BREAK_LINKS = ",
		"end": ";// number break links inside blog posts after excerpt box",
		"default": 3,
		"desc": "Number of break links in articles. Not show if you disabled break links"
	},
	"Enable Table of Content": {
		"start": "var TOC = ",
		"end": "; // enable table of content for posts which have more than one H2",
		"type" : "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,
		"desc": "Show table of content for every posts which have more than one heading tag."
	},
	"Disable Post Pagination": {
		"start": "<!--var-enable-post-pagination--><b:if cond='",
		"end": "'><!--var-enable-post-pagination-->",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Do not split long post into pages, then show content normally, but hide [next] shortcode."
	},
	"Reload Post Pagination When Click": {
		"start": "var RELOAD_POST_PAGINATION = ",
		"end": "; // RELOAD_POST_PAGINATION",
		"type" : "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,		
		"desc": "Reload entire page when users click post pagination instead of instant show"
	},
	"Number Related Posts": {
		"start": "var NUM_RELATED_POST = ",
		"end": "; // show number related post, set to 0 to disable",
		"type" : "number",
		"default": 2,
		"desc": "Number related posts. Set to 0 to disable the related post box"
	},	
	"Related Post Source": {
		"start": "var RELATED_POST_SOURCE = '",
		"end": "'; // load related podts from [lowest] label or [any] post label",
		"default": "lowest",
		"type" : "select",
		"desc": "Source of post labels to load related posts from",
		"choice" : {
			"lowest" : "Lowest Count Label",
			"any" : "Any Label of Post"
		}
	},
	"Show Next / Previous Buttons in Blog Posts": {
		"start": "<!--var-enable-nextprev--><b:if cond='",
		"end": "'><!--var-enable-nextprev-->",
		"type" : "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,
		"desc": "Show Next / Previous buttons in blog posts above comment list."
	},
	"Enable Share Buttons under Post Titles": {
		"start": "<!--var-enable-top-sharing-button--><b:if cond='",
		"end": "'><!--var-enable-top-sharing-button-->",
		"type" : "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,		
		"desc": "You can change default sharing button code here"
	},
	"Sharing Button Code": {
		"type": "textarea",
		"start": "<!--share-buttons-code-start-->",
		"end": "<!--share-buttons-code-end-->",
		"default": "<script type='text/javascript'>var addthis_config = addthis_config||{};addthis_config.data_track_addressbar = false;addthis_config.data_track_clickback = false;</script><script type='text/javascript' src='//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-57941e26ceb90207' async='async'></script><div class='addthis_sharing_toolbox'></div>",
		"desc": "You can change default sharing button code here. Your code must be compatible with Blogger xml syntax"
	},
	"Disable Share URL": {
		"start": "<!--var-share-url-start--><b:if cond='",
		"end": "'><!--var-share-url-start-->",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,		
		"desc": "Hide the URL under sharing buttons"
	},
	"Show After Post Section": {
		"start": "var SHOW_AFTER_POST_SECTION = '",
		"end": "'; // position for after post section, input none to hide, after post or before comment to show",
		"default": "after-body",
		"type" : "select",
		"choice" : {
			"none" : "Not display",
			"after-body" : "After Post Body Content",
			"before-comment" : "Before Comment Section"
		},
		"desc": "Show section after post for add extra widgets after article content"
	},
	"White Background Post Content Inner": {
		"start": "<b:if cond='false'><!--white-post-inner-start--></b:if><b:if cond='",
		"end": "'> white-post-inner</b:if><b:if cond='false'><!--white-post-inner-end--></b:if>",
		"type" : "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,		
		"desc": "Show Post Content Inner as White Background"
	}
},
"Comment Systems": {
	"Disable Disqus Comments": {
		"start": "<!--var-enable-disqus-comment--><b:if cond='",
		"end": "'><!--var-enable-disqus-comment-->",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Hide Disqus comments, other comments system will still work properly"
	},
	"Disable Facebook Comments": {
		"start": "<!--var-enable-facebook-comment--><b:if cond='",
		"end": "'><!--var-enable-facebook-comment-->",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Hide Facebook comments, other comments system will still work properly"
	},
	"Disable Blogger Comments": {
		"start": "<!--var-enable-blogger-comment--><b:if cond='",
		"end": "'><!--var-enable-blogger-comment-->",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Hide Blogger comments, other comments system will still work properly"
	},
	"Disable Blogger Comments Emoticons": {
		"start": "var COMMENT_EMOTICONS = ",
		"end": "; // enable / disable comment emoticon replacer",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Disable replacing special characters to emoticons from Blogger comments"
	},
	"Disable Blogger Comments Media Attachment": {
		"start": "var COMMENT_MEDIA_ATTACH = ",
		"end": "; // enable / disable comment link to media replacer",
		"type" : "checkbox",
		"default": true,
		"check": false,
		"uncheck": true,
		"desc": "Disable replacing URls to media (links, video, images, ... ) from Blogger comments"
	},
	"Primary Comment System": {
		"start": "var PRIMARY_COMMENT_SYSTEM = '",
		"end": "'; // change the first priority comment system that you want to show to visitors",
		"type" : "select",
		"default": "blogger",
		"choice" : {
			"blogger": "Blogger",
			"facebook" : "Facebook",
			"disqus" : "Disqus"
		},
		"desc": "Choose the comment system that you want to show to visitor first"
	},
	"Default Comment Avatar": {
		"start": "var DEFAULT_COMMENT_AVATAR = '",
		"end": "'; // you can upload avatar some where then replace here for default comment avatar",
		"type" : "text",
		"default": "https://img1.blogblog.com/img/anon36.png",
		"desc": "Image src for non avatar commenters"
	},
	"Max Blogger Reply Depth": {
		"start": "var MAX_REPLY_DEPTH = ",
		"end": "; // number reply depth level under a top comment",
		"type" : "select",
		"choice" : {
			"0" : "0",
			"1" : "1",
			"2" : "2",
			"3" : "3",
			"4" : "4",
			"5" : "5",
			"6" : "6",
			"7" : "7",
			"8" : "8",
			"9" : "9",
			"10" : "10"
		},
		"default": "2",
		"desc": "If a comment has level higher than this value, it will not show reply button. Select 0 mean not use threaded comment system."
	},	
	"Facebook Comment AppID": {
		"start": "<b:if cond='false'><!--facebook-app-id-start--></b:if>",
		"end": "<b:if cond='false'><!--facebook-app-id-end--></b:if>",
		"default" : "403849583055028",		
		"desc": "Input your facebook AppId here for display your own facebook comment form."
	},
	"Disqus Short Name": {
		"start": "var disqus_shortname = '",
		"end": "';// disqus custom shortname for moderation",
		"default" : "magonetemplate",		
		"desc": "In case you want to moderate Disqus comments by yourself, input your Disqus Shortname here."
	}
},
"Search Engine Optimization (SEO)": {	
	"Disable Archive Page Indexed by Bing": {
		"start": "<!--dis-bing-index-archive-pages-start--><b:if cond='",
		"end": "'><!--dis-bing-index-archive-pages-end-->",
		"type" : "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,
		"desc": "Bing will index label, search and other archive regardless robots.txt. Enable htis to prevent if you think it's better for you"
	},
	"Disable Site Title from Item Titles": {
		"start": "<b:if cond='false'><!--dis-blog-title-from-item-title-start--></b:if><b:if cond='",
		"end": "'><b:if cond='false'><!--dis-blog-title-from-item-title-end--></b:if>",
		"type" : "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,
		"desc": "Check this if you don't want add [ | Your Site Title ] after your post and page titles"
	}
},
"Mobile Template": {
	"Mobile Sticky Menu": {
		"start": "var STICKY_MOBILE_MENU = '",
		"end": "'; // enable / disable sticky mobile menu",
		"type" : "select",
		"choice" : {
			"disable" : "Disable",
			"up" : "Show When Scrolling up",
			"down" : "Show When Scrolling down",
			"always" : "Show Always"
		},
		"default": "up",
		"desc": "Mobile Sticky Menu When Scrolling."
	},
	"Enable AMP for Mobile": {
		"start": "<b:if cond='false'><!--amp-enabled-start--></b:if><b:if cond='",
		"end": " and data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;} and data:blog.isMobileRequest'><b:if cond='false'><!--amp-enabled-end--></b:if>",
		"type" : "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,
		"desc": "Enable Accelerated Mobile Posts and Pages for Mobile"
	},
	"Enable AMP RESPONSIVE Adsense ADS": {
		"start": "<!--amp-ads-start--><b:if cond='",
		"end": "'><!--amp-ads-end-->",
		"type" : "checkbox",
		"default": false,
		"check": true,
		"uncheck": false,
		"desc": "You will need provide your Adsense data-ad-client and data-ad-slot in below options. YOUR ADS CODE MUST BE FROM A RESPONSIVE ADS FORMAT"
	},
	"AMP Adsense Data Ad Client ID": {
		"start": "<b:if cond='false'><!--amp-ad-client-start--></b:if>",
		"end": "<b:if cond='false'><!--amp-ad-client-end--></b:if>",
		"default" : "ca-pub-1234567891234567",		
		"desc": "You will see this id in your Adsense code at attribute data-ad-client. It always starts with ca-pub- and usually 16 numbers at end. Ex: ca-pub-1234567891234567"
	},
	"RESPONSIVE AMP Adsense Data Ad Slot ID": {
		"start": "<b:if cond='false'><!--amp-ad-slot-start--></b:if>",
		"end": "<b:if cond='false'><!--amp-ad-slot-end--></b:if>",
		"default" : "1234567890",		
		"desc": "YOUR ADS MUST BE A RESPONSIVE ADS. You will see this id in your Adsense code at attribute data-ad-slot. It has usually 10 numbers. Ex: 1234567890"
	}
}
BLOGGER-TEMPLATE-OPTIONS
]]>

<![CDATA[
BLOGGER-MENU-OPTIONS
"main_menu": {
	"title" : "Main Menu",
	"start": "<!--MAGONE-MAIN-MENU-LOCATION-START-->",
	"end": "<!--MAGONE-MAIN-MENU-LOCATION-END-->",
	"fields" : {
		"enable_mega": {
			"title": "Enable Mega",
			"desc": "Enable Mega Menu For This Menu Item",
			"type" : "checkbox",
			"default": "",
			"check": true,
			"uncheck": "",
			"allow_depth" : [0]
		},
		"icon": {
			"title": "Menu Icon",
			"desc": "Check code at <a href=\"https://fontawesome.com/icons/\" target=\"_blank\">FontAwesome Icon Code</a>"
		}
	}
}
BLOGGER-MENU-OPTIONS
]]>

<![CDATA[
BLOGGER-DEMO-OPTIONS
"nytimes": {
	"title" : "NYTimes",
	"preview": "https://magonedemo.blogspot.com/2000/09/the-new-york-times.html",
	"thumb": "https://2.bp.blogspot.com/-iu0i6bIgJA4/V72BVAY2kLI/AAAAAAAAQ5M/uoby5Xly5-wU4UVEQYK9ywsmxBHI67wHACLcB/s1600/02-NYTimes.jpg",
	"data" : {
		"settings": {
			"Auto Height Logo": true,
			"Move Social and Search Icons to Top of Page": true
		},
		"variables": {
			"keycolor" : "#000000",			
			"body.font" : "normal normal 12px Georgia, Utopia, &#39;Palatino Linotype&#39;, Palatino, serif",
			"body.background.color" : "#ffffff",
			"link.color" : "#000000",
			"link.visited.color" : "#000000",
			"header.background.color" : "#ffffff",
			"feedwid.title.font" : "italic 700 20px Paytone One",
			"sidewid.title.font" : "italic 700 14px Paytone One",
			"content.background.color" : "#ffffff",
			"post.title.font" : "italic 700 40px Paytone One",
			"menubackground" : "#000000",
			"menucolor" : "#ffffff",
			"menucolorhover" : "#ffffff",
			"menubackgroundhover" : "#333333"
		},
		"widgets": {
			"header-wide" : [
				{	"type" : "HTML"  }
			],
			"content-section-1" : [
				{	"type" : "Label",
					"title" : "$type=one$count=1"
				}, 
				{	"type" : "Label",
					"title" : "Open News$type=blogging$cate=2$count=7$va=0"
				},
				{	"type" : "Label",
					"title" : "More News$type=list$au=0$va=0$count=12"
				},
				{	"type" : "Label",
					"title" : "$type=three$author=hide$comment=hide$rm=hide$count=3"
				},
				{	"type" : "Label",
					"title" : "JUST UPDATED$type=two$count=4"
				}
			],
			"footer-wide" : [
				{	"type" : "Label",
					"title" : "Times Features$type=slider$snippet=hide$cate=0$h=500$va=0$rm=0"
				},
				{	"type" : "Label",
					"title" : "Inside NYTimes$type=carousel$sn=0$cols=4$va=0$count=12"
				}
			]
		}
	}
},
"flatnews": {
	"title" : "FlatNews",
	"preview": "https://magonedemo.blogspot.com/2000/09/adapted-flatnews.html",
	"thumb": "https://1.bp.blogspot.com/-7TdqKwLeEKY/V72BVCc4JXI/AAAAAAAAQ5E/o4FWiieRL94s9LWQY5mMtHAUszyGVUjfQCLcB/s1600/03-flatnews.jpg",	
	"data" : {
		"settings": {
			"Auto Height Logo": true,
			"Move Social and Search Icons to Top of Page": true
		},
		"variables": {
			"body.font" : "normal normal 12px Roboto, sans-serif",
			"body.text.color" : "#000",
			"body.background.color" : "#000",
			"body.background" : "$(color) url(https://2.bp.blogspot.com/-LHWXgnY3eGM/Ve1Ih0MLZWI/AAAAAAAAL-g/5WpOTyDGqH0/s0-r/bg-61.jpg) repeat fixed top left",
			"link.color" : "#ddd",
			"link.visited.color" : "#de0100",
			"link.hover.color" : "#ff0c08",
			"keycolor" : "#ddd",
			"header.background.color" : "#fff",
			"content.background.color" : "#ededed",
			"post.body.font" : "normal normal 14px Roboto, sans-serif",
			"feedwid.title.font" : "normal normal 20px Oswald",
			"sidewid.title.font" : "normal normal 14px Oswald",
			"post.title.font" : "normal normal 40px Oswald"		
		},		
		"widgets": {
			"header-wide" : [
				{	"type" : "Label",
					"title" : "$type=ticker$count=12$cols=4$cate=0"
				}
			],
			"content-section-1" : [
				{	"type" : "Label",
					"title" : "[HOT NEWS]$type=sticky$rm=0$va=0$count=4$va=0"
				}, 
				{	"type" : "Label",
					"title" : "[SCIENCE]$type=blogging$cate=2$count=3$va=0"
				},
				{	"type" : "Label",
					"title" : "[BUSINESS]$type=three$c=3$author=hide$comment=hide$rm=hide$va=0"
				},
				{	"type" : "Label",
					"title" : "[HEALTH]$type=complex$count=4$va=0"
				},
				{	"type" : "Label",
					"title" : "[TECHNOLOGY]$type=left$va=0$count=3"
				},
				{	"type" : "Label",
					"title" : "[FASHION]$type=right$va=0$count=3"
				},
				{	"type" : "Label",
					"title" : "[SPORT]$type=slider$snippet=hide$cate=0"
				},
				{	"type" : "Label",
					"title" : "[EDUCATION]$type=complex$count=4$va=0"
				}
			],
			"footer-wide" : [
			]
		}
	}
},
"sahifa": {
	"title" : "Sahifa",
	"preview": "https://magonedemo.blogspot.com/2000/09/sahifa-best-magazine-wordpress-theme.html",
	"thumb": "https://4.bp.blogspot.com/-F-JCwffrjzI/V72BVkbgA1I/AAAAAAAAQ5Q/ZDarbuMCsw42Zyd9iAvulQoBNuPKfDnOQCLcB/s1600/04-sahifa.jpg",
	"data" : {
		"settings": {
			"Auto Height Logo": true,
			"Move Social and Search Icons to Top of Page": true
		},
		"variables": {
			"body.font" : "normal normal 12px Open Sans",
			"body.text.color" : "#000",
			"body.background.color" : "#fff",
			"body.background" : "$(color) url(https://1.bp.blogspot.com/-pshssncNNJQ/V8ZaZ1hJZkI/AAAAAAAAQ7c/dZATgwATdiM_yKEYbvg_tN6XfXbL3qrEACK4B/s0/body-bg7%255B1%255D.png) repeat fixed top left",
			"keycolor" : "#ddd",
			"link.color" : "#ddd",
			"link.visited.color" : "#ddd",
			"link.hover.color" : "#ddd",
			"content.background.color" : "#fff",
			"post.body.font" : "normal normal 14px Open Sans",
			"feedwid.title.font" : "normal normal 20px Open Sans",
			"sidewid.title.font" : "normal normal 14px Open Sans",
			"post.title.font" : "normal normal 40px Open Sans",
			"menubackground" : "#ddd",
			"menucolor" : "#ffffff",
			"menucolorhover" : "#ffffff",
			"menubackgroundhover" : "#da7b02"
		},		
		"widgets": {
			"header-wide" : [
				{	"type" : "Label",
					"title" : "$type=grid$count=3$cate=0$rm=0$sn=0$au=0$cm=0"
				}
			],
			"content-section-1" : [
				{	"type" : "Label",
					"title" : "WORLD$type=complex$count=4$color=#3498db$ico=1"
				}, 
				{	"type" : "Label",
					"title" : "FASHION$type=left$va=0$count=3$ico=1"
				},
				{	"type" : "Label",
					"title" : "PHOTOGRAPHY$type=right$va=0$count=3$ico=1"
				},
				{	"type" : "Label",
					"title" : "SCROLLING BOX$type=carousel$cols=3$color=#e74c3c$ico=1"
				},
				{	"type" : "Label",
					"title" : "TECHNOLOGY$type=complex$count=4$color=#1abc9c$ico=1"
				},
				{	"type" : "Label",
					"title" : "GRID$type=three$m=hide$sn=0$rm=hide$space=0$c=9$ico=1$cate=0$color=#9b59b6"
				},
				{	"type" : "Label",
					"title" : "RECENT POSTS$type=blogging$cate=2$page=4$ico=1"
				}
			],
			"footer-wide" : [				
			]
		}
	}
},
"sevida": {
	"title" : "Sevida",
	"preview": "https://magonedemo.blogspot.com/2000/09/adapted-sevida-second-best-seller.html",
	"thumb": "https://2.bp.blogspot.com/-o8xM16NTOpk/V72BVgpvz3I/AAAAAAAAQ5U/q3vpf7QNck0nOxNdUymao2JrcSY3MPwzwCLcB/s1600/05-sevida.jpg",
	"data" : {
		"settings": {
			"Auto Height Logo": true,
			"Move Social and Search Icons to Top of Page": true
		},
		"variables": {
			"body.font" : "normal normal 12px Open Sans",
			"body.text.color" : "#000",
			"body.background.color" : "#eee",
			"link.color" : "#00bea2",
			"link.visited.color" : "#00bea2",
			"link.hover.color" : "#00bea2",
			"keycolor" : "#12c5c5",
			"header.background.color" : "#fff",
			"content.background.color" : "#eee",
			"post.body.font" : "normal normal 14px Open Sans",
			"feedwid.title.font" : "normal normal 20px Open Sans",
			"sidewid.title.font" : "normal normal 14px Open Sans",
			"post.title.font" : "normal normal 40px Open Sans"
		},		
		"widgets": {
			"header-wide" : [
				{	"type" : "Label",
					"title" : "$type=ticker$count=12$cols=4$cate=0$sn=0"
				},
				{	"type" : "Label",
					"title" : "$type=grid$count=4$ico=1$cate=0$rm=0$sn=0$cm=0"
				}
			],
			"content-section-1" : [
				{	"type" : "Label",
					"title" : "$type=slider$m=0$rm=hide$cate=1$c=4"
				}, 
				{	"type" : "Label",
					"title" : "LATEST POSTS_$type=three$cate=1$va=0$pages=1"
				},
				{	"type" : "Label",
					"title" : "FASHION_$type=complex$count=4$h=200"
				},
				{	"type" : "Label",
					"title" : "TRAVEL_$type=complex$count=4$h=200"
				},
				{	"type" : "Label",
					"title" : "HOT NEWS_$type=sticky$count=4"
				},
				{	"type" : "Label",
					"title" : "PEOPLE_$type=left$count=3"
				},
				{	"type" : "Label",
					"title" : "TECHNOLOGY_$type=right$count=3"
				},
				{	"type" : "Label",
					"title" : "VIDEO_$type=three$m=hide$sn=0$rm=hide$icon=1$c=9"
				},
				{	"type" : "Label",
					"title" : "LIST STYLE_$type=list$au=0"
				}
			],
			"footer-wide" : [
			]
		}
	}
},
"tech": {
	"title" : "Tech Geekers",
	"preview": "https://magonedemo.blogspot.com/2015/08/layout-techno-spot.html",
	"thumb": "https://2.bp.blogspot.com/-bQAVPVO4rA0/V72BV_FCi9I/AAAAAAAAQ5Y/HzE4gyT5IakgdROQcJCVL4xUgfWsHonbgCLcB/s1600/06-tech-geekers.jpg",
	"data" : {
		"widgets": {
			"header-wide" : [
				{	"type" : "Label",
					"title" : "$type=grid$count=4$tbg=rainbow$meta=0$snip=0$rm=0"
				}
			],
			"content-section-1" : [
				{	"type" : "Label",
					"title" : "STICKY POSTS$type=sticky$count=4$rm=0"
				}, 
				{	"type" : "Label",
					"title" : "LEFT$type=left$va=0$count=3"
				},
				{	"type" : "Label",
					"title" : "RIGHT$type=right$va=0$count=3"
				},
				{	"type" : "Label",
					"title" : "SCROLLING BOX$type=carousel$cols=3$cate=0$date=1"
				},
				{	"type" : "Label",
					"title" : "COMPLEX BOX$type=complex$count=4"
				},
				{	"type" : "Label",
					"title" : "THREE GRID$type=three$tbg=rainbow$count=9$space=0$m=0$sn=0$rm=0$ico=1$cate=0"
				},
				{	"type" : "Label",
					"title" : "RECENT BLOGGING$type=blogging$count=7$page=true$va=0"
				}
			],
			"footer-wide" : [
			]
		}
	}
},
"elegant": {
	"title" : "Elegant Pack",
	"preview": "https://magonedemo.blogspot.com/2000/08/elegant-pack-layout.html",
	"thumb": "https://1.bp.blogspot.com/-qxhhvpG21ng/V72BWKpkj-I/AAAAAAAAQ5c/ymgePZ7BntgiRLPgQ2H6VZv9m6iPD-t5wCLcB/s1600/07-elegant-pack.jpg",
	"data" : {
		"widgets": {
			"header-wide" : [
				{	"type" : "Label",
					"title" : "$type=ticker$cols=4"
				},
				{	"type" : "Label",
					"title" : "$type=slider$meta=0$snip=0$rm=0"
				}
			],
			"content-section-1" : [
				{	"type" : "Label",
					"title" : "TWO COLUMNS$type=two$count=8"
				}, 
				{	"type" : "HTML"
				},
				{	"type" : "Label",
					"title" : "THE LATEST$type=one$count=6$page=true$va=0$height=auto"
				}
			],
			"footer-wide" : [
			]
		}
	}
},
"stylish": {
	"title" : "Stylish Zine",
	"preview": "https://magonedemo.blogspot.com/2000/08/layout-stylish-zine.html",
	"thumb": "https://3.bp.blogspot.com/-Y57nP6Wj5hg/V72BWBmVGII/AAAAAAAAQ5g/Jm-WCW87khY3idEY8kqXDY00Cr3e3nAlwCLcB/s1600/08-stylish-zine.jpg",
	"data" : {		
		"widgets": {
			"header-wide" : [
				{	"type" : "Label",
					"title" : "$type=grid$count=3$m=0$sn=0$rm=0"
				},
				{	"type" : "Label",
					"title" : "FASHION AND ART$type=three$m=0$rm=0$h=400$c=3"
				},
				{	"type" : "HTML"
				},
				{	"type" : "Label",
					"title" : "$type=slider$count=3$rm=0"
				}
			],
			"content-section-1" : [
				{	"type" : "Label",
					"title" : "FASHION REVIEW$type=grid$rm=0$sn=0$count=2$va=0"
				}, 
				{	"type" : "HTML"
				},
				{	"type" : "Label",
					"title" : "LEFT$type=left$va=0$count=3"
				},
				{	"type" : "Label",
					"title" : "RIGHT$type=right$va=0$count=3"
				},
				{	"type" : "Label",
					"title" : "THE LATEST$type=two$count=10$page=true$va=0"
				}
			],
			"footer-wide" : [
			]
		}
	}
},
"minimal": {
	"title" : "Minimal Times",
	"preview": "https://magonedemo.blogspot.com/2000/08/layout-minimal-times.html",
	"thumb": "https://4.bp.blogspot.com/-4FD1bVe0mxQ/V72BWd2iCII/AAAAAAAAQ5k/4TahuvgXV30WipoCLBYc6_RcIbYt-LAqQCLcB/s1600/09-minimal-times.jpg",
	"data" : {
		"widgets": {
			"header-wide" : [
				{	"type" : "Label",
					"title" : "$type=carousel$cols=3"
				},
				{	"type" : "HTML"
				}
			],
			"content-section-1" : [
				{	"type" : "Label",
					"title" : "$type=two$count=2$va=0"
				}, 
				{	"type" : "HTML"
				},
				{	"type" : "Label",
					"title" : "LEFT$type=left$va=0$count=3"
				},
				{	"type" : "Label",
					"title" : "RIGHT$type=right$va=0$count=3"
				},
				{	"type" : "Label",
					"title" : "LATEST ARTICLES$type=blogging$count=10$page=true$va=0"
				}
			],
			"footer-wide" : [
			]
		}
	}
},
"affiliate": {
	"title" : "Affiliate Marketers",
	"preview": "https://magonedemo.blogspot.com/2000/08/layout-affiliate-marketers.html",
	"thumb": "https://1.bp.blogspot.com/-DqQGwJTC7Kw/V72BWoWLW7I/AAAAAAAAQ5o/8JiBHHsfIUQnP2zXq1hbPt7N7MyR8B5QgCLcB/s1600/10-affiliate-marketers.jpg",
	"data" : {
		"widgets": {
			"header-wide" : [
				{	"type" : "HTML"
				}
			],
			"content-section-1" : [
				{	"type" : "Label",
					"title" : "$type=slider$count=4$m=0$sn=0$rm=0"
				}, 
				{	"type" : "HTML"
				},
				{	"type" : "Label",
					"title" : "LATEST MMO REVIEWS$type=blogging$count=13$page=true$va=0"
				}
			],
			"footer-wide" : [
			]
		}
	}
},
"dairy": {
	"title" : "Dairy Notes",
	"preview": "https://magonedemo.blogspot.com/2000/08/layout--dairy-notes.html",
	"thumb": "https://2.bp.blogspot.com/-3pZWxsjbiI8/V72BWjni6GI/AAAAAAAAQ5s/3AOvX1b16RErEo7avY88AciNhA3FesTkQCLcB/s1600/11-diary-notes.jpg",
	"data" : {
		"widgets": {
			"header-wide" : [
			],
			"content-section-1" : [
				{	"type" : "Label",
					"title" : "$type=slider$rm=0$sn=0$count=5$va=0"
				},
				{	"type" : "Label",
					"title" : "NEW ARTICLES$type=one$count=6$page=1"
				}
			],
			"footer-wide" : [
				{	"type" : "Label",
					"title" : "$type=carousel$sn=0$cols=4$va=0$count=12"
				}
			]
		}
	}
},
"writer": {
	"title" : "Absolute Writer",
	"preview": "https://magonedemo.blogspot.com/2000/08/layout-absolute-writers.html",
	"thumb": "https://4.bp.blogspot.com/-ubJXzwCWEh8/V72BW9UYRWI/AAAAAAAAQ5w/gE1t2fM8n9Q5rZhC7CdKbzcW6yOV-vAAgCLcB/s1600/12-absolute-writer.jpg",
	"data" : {
		"widgets": {
			"header-wide" : [
				{	"type" : "Label",
					"title" : "$type=grid$count=3$meta=0$sn=0$rm=0"
				},
				{	"type" : "Label",
					"title" : "RECOMMEND NOTES$type=three$count=3"
				},
				{	"type" : "Label",
					"title" : "STAFF PICK$type=three$count=3"
				}
			],
			"content-section-1" : [
				{	"type" : "HTML"					
				},
				{	"type" : "Label",
					"title" : "LATEST ARTICLES$type=blogging$page=1$count=14"
				}
			],
			"footer-wide" : [
			]
		}
	}
},
"financial": {
	"title" : "Financial List",
	"preview": "https://magonedemo.blogspot.com/2000/08/layout-financial-ist.html",
	"thumb": "https://4.bp.blogspot.com/-E442nIq6yKw/V72BXPg-24I/AAAAAAAAQ50/hZ2JXMuqN1AQh8xC7cQzll-OWQ8qYZgpgCLcB/s1600/13-financial-list.jpg",
	"data" : {
		"widgets": {
			"header-wide" : [
			],
			"content-section-1" : [
				{	"type" : "Label",
					"title" : "$type=complex$count=8"
				},
				{	"type" : "Label",
					"title" : "FINANCIAL TRENDING$type=list$au=0"
				},
				{	"type" : "Label",
					"title" : "STOCK PREDICTION$type=list$au=0"
				},
				{	"type" : "Label",
					"title" : "EXPERT ADVISES $type=list"
				},
				{	"type" : "Label",
					"title" : "ALL REPORTS$type=list$au=0$count=20$page=1"
				}
			],
			"footer-wide" : [
			]
		}
	}
},
"grid": {
	"title" : "Random Grids",
	"preview": "https://magonedemo.blogspot.com/2000/08/layout-random-grids.html",
	"thumb": "https://2.bp.blogspot.com/-MEuQo4X7yyQ/V72BXbN1RLI/AAAAAAAAQ54/JNkM3wsDNCkhmcQ5BDH8w1THAZEtcbghQCLcB/s1600/14-random-grids.jpg",
	"data" : {
		"settings": {
			"Home Page Sidebar": "none"
		},
		"widgets": {
			"header-wide" : [
				{	"type" : "Label",
					"title" : "$type=carousel$count=9$cols=3$cate=0"
				},
				{	"type" : "Label",
					"title" : "TRENDING$type=grid$count=19$cate=0$sn=0$rm=0$meta=0$icon=1"
				}
			],
			"content-section-1" : [				
			],
			"footer-wide" : [
			]
		}
	}
},
"blocks": {
	"title" : "Working Blocks",
	"preview": "https://magonedemo.blogspot.com/2000/08/layout-working-blocks.html",
	"thumb": "https://1.bp.blogspot.com/-rg77kvrGMJI/V72BXZqeS0I/AAAAAAAAQ58/8s2AmCeX0csEmLz45d4yCvxp0SDRsDe1gCLcB/s1600/15-working-blocks.jpg",
	"data" : {
		"settings": {
			"Home Page Sidebar": "none"
		},
		"widgets": {
			"header-wide" : [
				{	"type" : "Label",
					"title" : "$type=three$count=3$h=300"
				},
				{	"type" : "Label",
					"title" : "$type=three$count=3$h=300"
				},
				{	"type" : "Label",
					"title" : "$type=three$count=3$h=300"
				},
				{	"type" : "Label",
					"title" : "$type=carousel$count=12$cols=4"
				}
			],
			"content-section-1" : [				
			],
			"footer-wide" : [
			]
		}
	}
},
"showcase": {
	"title" : "Showcase Palette",
	"preview": "https://magonedemo.blogspot.com/2000/08/layout-showcase-palette.html",
	"thumb": "https://3.bp.blogspot.com/-Gnu6aSaEzsA/V72BXg84nwI/AAAAAAAAQ6A/09uIRwR6cgQumgvYqdgSjXVuRVAjBDA1gCLcB/s1600/16-showcase-palette.jpg",
	"data" : {
		"settings": {
			"Home Page Sidebar": "none"
		},
		"widgets": {
			"header-wide" : [
				{	"type" : "Label",
					"title" : "$type=slider$count=6$s=0$rm=0"
				},
				{	"type" : "Label",
					"title" : "$type=three$count=9$h=250$space=0$icon=1$m=0$sn=0$rm=0"
				}
			],
			"content-section-1" : [				
			],
			"footer-wide" : [
			]
		}
	}
},
"fluid": {
	"title" : "Fluid Stacks",
	"preview": "https://magonedemo.blogspot.com/2000/08/layout-fluid-stacks.html",
	"thumb": "https://4.bp.blogspot.com/-2cgqEVShWf4/V72BX58OKJI/AAAAAAAAQ6E/z4YXTAqDQqkPHKwxkcDybaNbwczQYV5_ACLcB/s1600/17-fluid-stacks.jpg",
	"data" : {
		"settings": {
			"Home Page Sidebar": "none"
		},
		"widgets": {
			"header-wide" : [
				{	"type" : "Label",
					"title" : "$type=grid$count=4$tbg=rainbow$sn=0$rm=0$m=0"
				},
				{	"type" : "Label",
					"title" : "OTHER WORKS$type=two$count=17$sn=0$rm=0$h=0$m=0$tbg=rainbow$space=0"
				}
			],
			"content-section-1" : [				
			],
			"footer-wide" : [
			]
		}
	}
}

BLOGGER-DEMO-OPTIONS
]]>

<![CDATA[
BLOGGER-TEMPLATE-DATA
{
	"license" : "",
	"amp" : {
		"start" : "<b:if cond='false'><!--amp-enabled-start--></b:if><b:if cond='false and data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;} and data:blog.isMobileRequest'><b:if cond='false'><!--amp-enabled-end--></b:if>",
		"cond" : "!(data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;} and data:blog.isMobileRequest) ? &quot;false&quot; : &quot;&quot;"
	}
	
}
BLOGGER-TEMPLATE-DATA
]]>