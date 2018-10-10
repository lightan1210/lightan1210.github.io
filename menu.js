var MainMenu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function MainMenu ()
    {
        Phaser.Scene.call(this, { key: 'mainMenu' });
    },

    preload: function ()
    {

    },
    
    create: function ()
    {

        var tamEscalar = 2;

        var colorApagado = '#a3a1a1';
        var colorPrendido = '#ff0';
        var colorMenues = '#fff';

        playButton = this.add.text(50, 100, 'Play', { fill: colorMenues }).setScale(tamEscalar);
        playButton.setInteractive();

        playButton.on('pointerdown', () => {
            this.scene.start('juegoScene'); //this.scene.stop(); 
        });

        playButton2 = this.add.text(200, 100, 'Normal', { fill: colorPrendido}).setScale(tamEscalar);
        playButton2.setInteractive();

        playButton2.on('pointerdown', () => {

            playButton2.setColor(colorPrendido);
            playButton3.setColor(colorApagado);

            formation = false;
        })

        playButton3 = this.add.text(350, 100, 'Formation', { fill: colorApagado}).setScale(tamEscalar);
        playButton3.setInteractive();

        playButton3.on('pointerdown', () => {

            playButton2.setColor(colorApagado);
            playButton3.setColor(colorPrendido);

            formation = true;
        })

        instructionButton = this.add.text(50, 200, 'Instructions', { fill: colorMenues }).setScale(tamEscalar);
        instructionButton.setInteractive();

        instructionButton.on('pointerdown', () => {

            this.scene.switch('instrucciones');
            this.scene.stop('mainMenu');
        })

       storyButton = this.add.text(50, 300, 'About the story of the game', { fill: colorMenues }).setScale(1.8);
       storyButton.setInteractive();

        storyButton.on('pointerdown', () => {
            this.scene.switch('historia');
            this.scene.stop('mainMenu');
        })
    }

});