window.addEvent('domready', function() {
	/* var accordion = new Accordion($$('.toggler'),$$('.element'), { pre-MooTools More */
	var accordion = new Fx.Accordion($$('.toggler'),$$('.element'), {
		opacity: 0,
		onActive: function(toggler) { toggler.setStyle('color', '#f30'); },
		onBackground: function(toggler) { toggler.setStyle('color', '#000'); }
	});
});