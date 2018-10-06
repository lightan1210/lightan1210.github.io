var Pause = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Pause ()
    {
        Phaser.Scene.call(this, { key: 'pauseScene' });
    },

    //preload: function (){},

    create: function ()
    {
       
        //Configuración del botón de reanudación del juego
        resumeButton = this.add.text(100, 100, 'Resume', { fill: '#0f0' });
        resumeButton.setInteractive();
        resumeButton.on('pointerdown', () => {this.scene.switch('juegoScene'); this.scene.stop(); if(sound_enabled)this.sound.play('star');});

        //Configuración del botón de "volver a menú ppal."
        homeButton2 = this.add.text(100, 200, 'Back to main menu', { fill: '#0f0' });
        homeButton2.setInteractive();
        homeButton2.on('pointerdown', () => {formation = false; this.scene.switch('mainMenu'); this.scene.stop('juegoScene');});

        //Configuración de botones para activar y desactivar audio
        soundOnButton = this.add.image(250, 300, 'sound_on').setScale(0.15);
        soundOnButton.setInteractive();
        soundOnButton.on('pointerdown', () => {
            sound_enabled = true;
        });

        soundOffButton = this.add.image(350, 300, 'sound_off').setScale(0.15);
        soundOffButton.setInteractive();
        soundOffButton.on('pointerdown', () => {
            sound_enabled = false;
        });

        //Creación de etiqueta que indica si el audio está activado o desactivado.
        soundInfo = this.add.text(250, 350, '', { fill: '#0f0' });


        //Configuración de botones para activar o desactivar vibración en dispositivos móviles
        vibrationOnButton = this.add.image(250, 450, 'vibration_on').setScale(0.4);
        vibrationOnButton.setInteractive();
        vibrationOnButton.on('pointerdown', () => {
            vibration_enabled = true;
        });


        vibrationOffButton = this.add.image(350, 450, 'vibration_off').setScale(0.4);
        vibrationOffButton.setInteractive();
        vibrationOffButton.on('pointerdown', () => {
            vibration_enabled = false;
        });
        
        //Creación de etiqueta que indica si la vibración está activada o desactivada.
        vibrationInfo = this.add.text(250, 500, '', { fill: '#0f0' });
    },


    update: function()
    {
        if(sound_enabled)
            soundInfo.setText('SOUND: ON');
        else
            soundInfo.setText('SOUND: OFF');

        if(vibration_enabled)
            vibrationInfo.setText('VIBRATION: ON');
        else
            vibrationInfo.setText('VIBRATION: OFF');
    },

});