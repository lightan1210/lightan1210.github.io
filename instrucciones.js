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

var color = '#00 ';
var escala = 1.2;

        this.add.text(50, 50, 'Neymar wins points when:', { fill: color }).setScale(escala);
        this.add.text(65, 80, 'He\'s running and hits an oponent: 5 points', { fill: color }).setScale(escala);
        this.add.text(65, 105, 'He\'s rolling and hits an oponent: 10 points', { fill: color }).setScale(escala);



        this.add.text(50, 150, 'Neymar loses points when:', { fill: color }).setScale(escala);
        this.add.text(65, 180, 'He\'s rolling and hits a referee: -2 sec', { fill: color }).setScale(escala);
        this.add.text(65, 205, 'He hits ZU\u00D1IGA: -5 sec', { fill: color }).setScale(escala);
  

        this.add.text(50, 260, 'Neymar can perform three actions:', { fill: color }).setScale(escala);
        this.add.text(65, 285, 'Move to right (swipe right)', { fill: color }).setScale(escala);
        this.add.text(65, 310, 'Move to left (swipe left)', { fill: color }).setScale(escala);
        this.add.text(65, 335, 'Get up if he\'s rolling (swipe up)', { fill: color }).setScale(escala);
  



        backButton = this.add.text(50, 400, 'Back', { fill: '#ff0' }).setScale(2);
        backButton.setInteractive();

        backButton.on('pointerdown', () => {
            this.scene.switch('mainMenu');
            this.scene.stop('instrucciones');
        });

    },

});