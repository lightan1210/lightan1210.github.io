var History = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function History ()
    {
        Phaser.Scene.call(this, { key: 'historia' });
    },

    preload: function ()
    {

    },

    create: function ()
    {
        this.add.text(250,50,'HISTORIA',{ fill: '#f00'});

        this.add.text(50,100,'Neymar es un jugador de futbol\nbrasile\u00F1o, y cuenta con un gran\ntalento: simular faltas.\n\n'+
    
'Su gran sue\u00F1o es ganar la Copa del\nMundo con su seleccion. Para lograrlo,\nes vital que utilice su talento\nsabiamente para enga\u00F1ar a los\narbitros y lograr la expulsion\nde sus oponentes.\n\nSin embargo, no es tan sencillo:\nen su camino se encontrara con su\nmayor verdugo, el defensor colombiano\nCamilo Zu\u00F1iga quien lo ha lesionado\ngravemente durante la copa del mundo\ndel 2014.\n\n'+

'Ahora, Neymar se encuentra ante uno\nde los partidos mas desafiantes de su\ncarrera: la final de la Copa\ndel Mundo 2018...\n\n'+
'\u00BFLO AYUDAS A LOGRARLO?',{ fill: '#000'}).setScale(1.5);

        backButton = this.add.text(250, 730, 'Back', { fill: '#ff0' }).setScale(2);
        backButton.setInteractive();

        backButton.on('pointerdown', () => {
            this.scene.switch('mainMenu');
            this.scene.stop('historia');
        });

    },

});