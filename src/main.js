define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Surface = require('famous/core/Surface');


    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    var surface = new Surface({
      size: [20, 20],
      content: ':(',
      properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#FA5C4F'
      }
    });

    var initialTime = Date.now();

    var surfaceModifier = new Modifier({
        origin: [0, 0],
        transform : move
    });

    var screenSize = mainContext.getSize();
    // var screenSize = [200, 200];
    // console.log('x=%d y=%d', screenSize[0], screenSize[1]);

    function move() {
        var speed = 0.05;
        var width = screenSize[0];
        var height = screenSize[1];
        var posX = (speed * (Date.now() - initialTime)) % width;
        var posY = (speed * (Date.now() - initialTime)) % height;
        return Transform.translate(posX, posY, 0);
    }

    // mainContext.add(logoModifier).add(logo);
    mainContext.add(surfaceModifier).add(surface);

    surface.on('click', function(){
        console.log('clicked');
        surface.setProperties({
          backgroundColor: '#6F6'
        });
        surface.setContent(':)');
    });
});
