

(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (let i = 0; i < names.length; i++) {
        var fl = names[i].charAt(0).toLowerCase();
        if (fl == 'j') {
            speakGoodby.sayGoodby(names[i])
        }
        else {
            speakHello.sayHello(names[i])
        }
    }
})()