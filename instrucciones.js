var Instructions = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Instructions ()
    {
        Phaser.Scene.call(this, { key: 'instrucciones' });
    },

    preload: function ()
    {
        //Se cargan todos los recursos del juego

        this.load.image('inst1', 'imagenes/inst1.png');

        this.load.image('inst2', 'imagenes/inst2.png');

        this.load.image('inst3', 'imagenes/inst3.png');
    },

    create: function ()
    {
        this.add.text(50, 50, 'El objetivo del juego es lograr la mayor', { fill: '#f00' });
        this.add.text(50, 75, 'cantidad de puntos posibles. Para ello:', { fill: '#f00' });
        this.add.text(50, 100, 'Neymar debe impactar contra sus rivales', { fill: '#f00' });
        this.add.image(250, 190, 'inst1');
        this.add.text(50, 265, 'Al chocar, Neymar entrara en modo break-dance', { fill: '#f00' });
        this.add.text(50, 290, 'e intentara llevarse consigo a otros oponentes.', { fill: '#f00' });

        this.add.text(50, 350, 'En su camino no habra solo oponentes corrientes...', { fill: '#f00' });
        this.add.text(50, 375, 'tambien encontrara con el temible ZU\u00D1IGA', { fill: '#f00' });
        this.add.image(250, 455, 'inst2');
        this.add.text(50, 530, 'Si bien es un oponente mas, Zu\u00F1iga intentara', { fill: '#f00' });
        this.add.text(50, 555, 'impedir que Neymar se salga con la suya y hara', { fill: '#f00' });
        this.add.text(50, 580, 'que su tiempo en el campo de juego sea menor.', { fill: '#f00' });
        this.add.text(50, 605, 'EVITALO A TODA COSTA', { fill: '#f00' });
        this.add.text(50, 630, '(Mismas consecuencias que con un oponente comun ', { fill: '#f00' });
        this.add.text(50, 655, 'pero con el descuento de 5 segundos en el tiempo ', { fill: '#f00' });
        this.add.text(50, 680, 'de juego) ', { fill: '#f00' });

        this.add.text(50, 730, 'Ademas de sus rivales, Neymar tambien debera', { fill: '#f00' });
        this.add.text(50, 755, 'ingeniarselas para no ser penalizado por el arbitro:', { fill: '#f00' });
        this.add.image(250, 845, 'inst3');
        this.add.text(50, 920, 'Si el arbitro te encuentra simulando, se te ', { fill: '#f00'});
        this.add.text(50, 945, 'descontaran 2 segundos a tu tiempo de juego. ', { fill: '#f00'});

        this.add.text(50, 975, 'Ah, una cosa mas... DIVIERTETE :D ', { fill: '#f00'});

        backButton = this.add.text(550, 950, 'Back', { fill: '#ff0' });
        backButton.setInteractive();

        backButton.on('pointerdown', () => {
            this.scene.switch('mainMenu');
            this.scene.stop('instrucciones');
        });

    },

});