const speakerhello = {
	speakWord: 'Hello',	
};

(function () {
	speakerhello.speak = function (userName) {
		return (speakerhello.speakWord + " " + userName);
	}
}());
