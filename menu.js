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
        playButton = this.add.text(100, 100, 'Play', { fill: '#f00' });
        playButton.setInteractive();

        playButton.on('pointerdown', () => {
            this.scene.start('juegoScene'); //this.scene.stop(); 
        });

        playButton2 = this.add.text(200, 100, 'Normal', { fill: '#0f0'});
        playButton2.setInteractive();

        playButton2.on('pointerdown', () => {

            playButton2.setColor('#0f0');
            playButton3.setColor('#f00');

            formation = false;
        })

        playButton3 = this.add.text(300, 100, 'Formation', { fill: '#f00'});
        playButton3.setInteractive();

        playButton3.on('pointerdown', () => {

            playButton2.setColor('#f00');
            playButton3.setColor('#0f0');

            formation = true;
        })

        instructionButton = this.add.text(100, 200, 'Instructions', { fill: '#f00' });
        instructionButton.setInteractive();

        instructionButton.on('pointerdown', () => {

            this.scene.switch('instrucciones');
            this.scene.stop('mainMenu');
        })

        storyButton = this.add.text(100, 300, 'About the story of the game', { fill: '#f00' });
    }

});