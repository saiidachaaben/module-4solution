(function () {
	var names = ['saiida', 'Julia', 'claudi', 'Jasmin', 'Paulz', 'cadie', 'faudel', 'Paula', 'salma', 'Judi'];
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		var firstLetter = name.charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			console.log(speakergoodbye.speak(name));
			document.write(speakergoodbye.speak(name) + '<br>');
		} else {
			console.log(speakerhello.speak(name));
			document.write(speakerhello.speak(name + '<br>'));
		}
	}
})();
