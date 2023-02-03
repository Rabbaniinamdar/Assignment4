(function () {

    var speakGoodby = {}
    speakGoodby.speak = 'Good By';
    speakGoodby.sayGoodby = function (name) {
        console.log(speakGoodby.speak + " " + name)
    }
    window.speakGoodby = speakGoodby;
})(window)