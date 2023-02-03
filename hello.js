(function () {

    var speakHello = {}

    speakHello.speak = 'Hello'
    speakHello.sayHello = function (name) {
        console.log(speakHello.speak + " " + name)
    }
    window.speakHello = speakHello;
})(window);