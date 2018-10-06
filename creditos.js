var Credits = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Credits ()
    {
        Phaser.Scene.call(this, { key: 'credits' });
    },

    preload: function ()
    {
        //Se cargan todos los recursos del juego

        this.load.image('pitch', 'imagenes/pitch.png');

        this.load.image('explosion', 'imagenes/explosion2.png');

        this.load.image('unco','imagenes/LOGOUNCO.png');

        this.load.image('pause','imagenes/pausa.png');

        this.load.image('play','imagenes/play.png');

        this.load.image('replay','imagenes/replay.png');

        this.load.image('home','imagenes/home.png');

        this.load.image('sound_on','imagenes/sound_on.png');

        this.load.image('sound_off','imagenes/sound_off.png');

        this.load.image('vibration_on','imagenes/vibration_on.png');

        this.load.image('vibration_off','imagenes/vibration_off.png');


        neymar = this.load.spritesheet('neymar', 'imagenes/ney.png', {frameWidth: 35, frameHeight: 47}, 3);

        this.load.spritesheet('neymarT', 'imagenes/neyTirado.png', {frameWidth: 48, frameHeight: 35}, 4);

        this.load.spritesheet('oponente', 'imagenes/oponente.png', {frameWidth: 35, frameHeight: 47}, 3);

        this.load.spritesheet('zuniga', 'imagenes/zuniga.png', {frameWidth: 35, frameHeight: 47}, 3);

        arbitro = this.load.spritesheet('arbitro', 'imagenes/arbitro.png', {frameWidth: 35, frameHeight: 47}, 3);

        this.load.audio('star', ['musica/stars2.mp3']);

        this.load.plugin("Phaser3Swipe", Phaser3Swipe, true);

     
        //Creación de la barra indicadora de estado de carga de recursos

        progressBar = this.add.graphics();
        progressBox = this.add.graphics();
        progressBar.x = -100;
        progressBox.x = -100;
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);


        width = this.cameras.main.width;
        height = this.cameras.main.height;
        loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });

        loadingText.setOrigin(0.5, 0.5);
        percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });
         
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
        });
    },

    create: function ()
    {
        this.add.image(300, 300, 'unco');
        temporizador = this.time.addEvent({delay: 1000, callback: creditsCheck, callbackScope: this});
    },

});