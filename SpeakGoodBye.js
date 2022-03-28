const speakergoodbye = {
	speakWord: 'Good Bye'
};

(function () {
	speakergoodbye.speak = function (userName) {
		return (speakergoodbye.speakWord + " " + userName);
	}
}());
