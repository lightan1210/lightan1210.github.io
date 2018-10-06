var EndGame = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function EndGame ()
    {
        Phaser.Scene.call(this, { key: 'endGame' });
    },

    preload: function ()
    {

    },

    create: function ()
    {
       
        //Creación de cartel que indica "fin del juego"
        endGameText = this.add.text(160, 250, 'END OF THE MATCH').setScale(2);
        scoreText = this.add.text(240, 290, 'Your score: ' + score).setScale(1);          
        //Configuración de botón para reiniciar el juego      
        replayButton = this.add.image(250, 350, 'replay').setScale(0.04);
        replayButton.setInteractive();
        replayButton.on('pointerdown', () => {
            score = 0, 
            cantSegundos = 60, 
            this.scene.start('juegoScene');
            this.scene.stop();
        });

        //Configuración de botón para ir al menú ppal.
        homeButton = this.add.image(350, 350, 'home').setScale(0.15);
        homeButton.setInteractive();
        homeButton.on('pointerdown', () => {
            formation = false;
            this.scene.switch('mainMenu');
            this.scene.stop();
        });
    }
});