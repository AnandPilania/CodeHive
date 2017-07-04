 (function(window,undefined){		
		
		// Establish Variables
		var
		History = window.History, // Note: We are using a capital H instead of a lower h
		State = History.getState(),
		$log = $('#log');
		
		// Log Initial State
		History.log('initial:', State.data, State.title, State.url);
		
		// Bind to State Change
		History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
		// Log the State
		var State = History.getState(); // Note: We are using History.getState() instead of event.state
		History.log('statechange:', State.data, State.title, State.url);
		});
		
		})(window);
	
		// Share menu
		$('nav li ul').hide().removeClass('fallback');
		$('nav li').hover(
		function () {
		$('ul', this).stop().toggle();
		}
		// function () { $('ul', this).stop().slideUp(); }
		);