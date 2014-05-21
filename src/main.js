define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    var logo = new ImageSurface({
        size: [20, 20],
        content: 'http://code.famo.us/assets/famous_logo.svg'//,
        // classes: ['double-sided']
    });

    var initialTime = Date.now();
    var iconModifier = new Modifier({
        origin: [0, 0],
        // transform : function(){
        // return Transform.rotateY(.002 * (Date.now() - initialTime));
        // }
        transform: move
    });

    var screenSize = mainContext.getSize();
    // var screenSize = [200, 200];
    console.log('x=%d y=%d', screenSize[0], screenSize[1]);

    function move() {
        var speed = 0.05;
        var width = screenSize[0];
        var height = screenSize[1];
        var posX = (speed * (Date.now() - initialTime)) % width;
        var posY = (speed * (Date.now() - initialTime)) % height;
        return Transform.translate(posX, posY, 0);
    }

    mainContext.add(iconModifier).add(logo);
});
