//////ESCENA DEL JUEGO//////
var JuegoScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function JuegoScene (){
        Phaser.Scene.call(this, { key: 'juegoScene' });
    },

    //preload: function (){},

    create: function ()
    {

        score = 0;
        cantSegundos = 60;
        cancha = this.add.tileSprite(300, 500, 600, 1000, 'pitch');
        neymar = this.physics.add.sprite(Phaser.Math.Between(50, 550), 900, 'neymar').setScale(2.5);
        oponente = this.physics.add.sprite(Phaser.Math.Between(50, 550), 0, 'oponente').setScale(2.5);
        zuniga = this.physics.add.sprite(Phaser.Math.Between(50, 550), 0, 'zuniga').setScale(2.5);
        arbitro = this.physics.add.sprite(Phaser.Math.Between(50, 550), 0, 'arbitro').setScale(2.5);
        oponente2 = this.physics.add.sprite(Phaser.Math.Between(50, 550), 0, 'oponente').setScale(2.5);
        oponente3 = this.physics.add.sprite(Phaser.Math.Between(50, 550), 0, 'oponente').setScale(2.5);
        oponente4 = this.physics.add.sprite(Phaser.Math.Between(50, 550), 0, 'oponente').setScale(2.5);

        if(formation)
        {
            //switch(Phaser.Math.Between(1, 3)){
            //  case 1:
                    aFormar = [oponente, oponente2, oponente3, oponente4];
            //      break;
            //  case 2:
            //      aFormar = [oponente2, zuniga, oponente4, oponente3, oponente];
            //      break;
            //  case 3:
            //      aFormar = [oponente3, oponente4, zuniga, oponente, oponente2];
            //}
        }

        
        neymar.setCollideWorldBounds(true);

        chocarOp = this.physics.add.overlap(neymar, oponente, choque, null, this);
        chocarOp2 = this.physics.add.overlap(neymar, oponente2, choque, null, this);
        chocarOp3 = this.physics.add.overlap(neymar, oponente3, choque, null, this);
        chocarOp4 = this.physics.add.overlap(neymar, oponente4, choque, null, this);
        chocarZ = this.physics.add.overlap(neymar, zuniga, choqueZ, null, this);
        chocarA = this.physics.add.overlap(neymar, arbitro, choqueA, null, this);

        exploto =  this.add.image(10, 10, 'explosion').setScale(1.5);

        config =
        {
            key: 'walkNey',
            frames: this.anims.generateFrameNumbers('neymar', {start: 0, end: 2, first: 0}),
            frameRate: 10,
            repeat: -1
                    //repeatDelay: 3
        };

        config2 =
        {
            key: 'walkOponente',
            frames: this.anims.generateFrameNumbers('oponente', {start: 0, end: 2, first: 0}),
            frameRate: 10,
            repeat: -1
                    //repeatDelay: 3
        };

        config3 =
        {
            key: 'rodar',
            frames: this.anims.generateFrameNumbers('neymarT', {start: 0, end: 3, first: 0}),
            frameRate: 10,
            repeat: -1
                    //repeatDelay: 3
        };

        config4 =
        {
            key: 'walkZunniga',
            frames: this.anims.generateFrameNumbers('zuniga', {start: 0, end: 2, first: 0}),
            frameRate: 10,
            repeat: -1
                    //repeatDelay: 3
        };

        config5 =
        {
            key: 'walkArbitro',
            frames: this.anims.generateFrameNumbers('arbitro', {start: 0, end: 2, first: 0}),
            frameRate: 10,
            repeat: -1
                    //repeatDelay: 3
        };

        this.anims.create(config);
        this.anims.create(config2);
        this.anims.create(config3);
        this.anims.create(config4);
        this.anims.create(config5);

        neymar.anims.play('walkNey');
        oponente.anims.play('walkOponente');
        oponente2.anims.play('walkOponente');
        oponente3.anims.play('walkOponente');
        oponente4.anims.play('walkOponente');
        zuniga.anims.play('walkZunniga');
        arbitro.anims.play('walkArbitro');

        if(sound_enabled)
            this.sound.play('star');


        //Temporizador y puntaje
        temporizador = this.time.addEvent({delay: 1000, callback: descontar, callbackScope: this});
        scoreText = this.add.text(16, 16, 'Score: 0', {fontSize: '32px', fill: '#f00'});
        timeText = this.add.text(420, 16, 'Time: ' + cantSegundos, {fontSize: '32px', fill: '#f00'});


        chocado = false;
        mostarExp = false;
        exploto.visible = false; 
        chocado = false;

        if(this.sys.game.device.os.desktop){
            this.input.keyboard.on('keydown_UP', function (event)
            {
                if (chocado)
                {
                    chocado = false;
                    //this.sound.stopAll();
                    neymar.anims.play('walkNey');
                    chocado2 = false;
                }
            });

            this.input.keyboard.on('keydown_LEFT', function (event)
            {
                neymar.setVelocityX(-160);
            });

            this.input.keyboard.on('keydown_RIGHT', function (event)
            {
                neymar.setVelocityX(160);
            });        
         }
         else
         {
            let swipe = this.plugins.get('Phaser3Swipe');
            swipe.cargar(this);
            this.events.on("swipe", (e) =>
            {
                if(e.right)
                {                               
                    neymar.setVelocityX(160);
                }
                else if(e.left)
                {
                    neymar.setVelocityX(-160);
                }
                else if(e.up)
                {
                    chocado = false;
                    neymar.anims.play('walkNey');
                    chocado2 = false;
                }
                else
                    if(e.down)
                    {
                        //console.log("Hacer algo a la abajo");      
                    }
            });
         };

        pauseButton = this.add.image(300, 30, 'pause').setScale(0.1);
        pauseButton.setInteractive();
        pauseButton.on('pointerdown', () =>
        {
            this.scene.switch('pauseScene');
            if(sound_enabled)
                this.sound.stopAll();
        });
    },

    update: function ()
    {
        if(!formation)
        {
            if (oponente.y >= 1000)
            {
                oponente.visible = true;
                oponente.y = 0;
                oponente.x = Phaser.Math.Between(50, 300);
            }
            else
                oponente.y += 3; //El oponente avanza 2 lugares

            if (oponente2.y >= 1000)
            {
                oponente2.visible = true;
                oponente2.y = 0;
                oponente2.x = Phaser.Math.Between(300, 550);
            }
            else
                oponente2.y += 2; //El oponente avanza 2 lugares

            if (oponente3.y >= 1000)
            {
                oponente3.visible = true;
                oponente3.y = 0;
                oponente3.x = Phaser.Math.Between(300, 550);
            }
            else
                oponente3.y += 2; //El oponente avanza 2 lugares

            if (oponente4.y >= 1000)
            {
                oponente4.visible = true;
                oponente4.y = 0;
                oponente4.x = Phaser.Math.Between(300, 550);
            }
            else
                oponente4.y += 2; //El oponente avanza 2 lugares

            if (zuniga.y >= 1000)
            {
                zuniga.visible = true;
                zuniga.y = 0;
                zuniga.x = Phaser.Math.Between(50, 550);
            }
            else
                zuniga.y += 5; //Zuñiga avanza 5 lugares

            if (arbitro.y >= 1000)
            {
                arbitro.visible = true;
                arbitro.y = 0;
                arbitro.x = Phaser.Math.Between(50, 550);
            }
            else
            {
                //arbitro.x = neymar.x;
                //arbitro.y += 1; //Avanza el arbitro un lugar
                //seek(arbitro,neymar);
                posSigAux = seek(arbitro, neymar);
                //console.log('la guacha');
                
                if(Math.sqrt(Math.pow((arbitro.x-oponente.x),2)+Math.pow((arbitro.y-oponente.y),2)) < 125)
                {
                    posSigAux = flee(arbitro,oponente);
                }

                if(Math.sqrt(Math.pow((arbitro.x-oponente2.x),2)+Math.pow((arbitro.y-oponente2.y),2)) < 125)
                {
                    posSigAux = flee(arbitro,oponente2);
                }

                if(Math.sqrt(Math.pow((arbitro.x-oponente3.x),2)+Math.pow((arbitro.y-oponente3.y),2)) < 125)
                {
                    posSigAux = flee(arbitro,oponente3);
                }

                if(Math.sqrt(Math.pow((arbitro.x-oponente4.x),2)+Math.pow((arbitro.y-oponente4.y),2)) < 125)
                {
                    posSigAux = flee(arbitro,oponente4);
                }

                if(Math.sqrt(Math.pow((arbitro.x-zuniga.x),2)+Math.pow((arbitro.y-zuniga.y),2)) < 125)
                {
                    posSigAux = flee(arbitro,zuniga);
                }

                arbitro.body.velocity = posSigAux;
            }
        }
        else //juego con formacion
        {
            if (zuniga.y >= 1200)
            {
                zuniga.visible = true;
                zuniga.y = 0;
                zuniga.x = Phaser.Math.Between(50, 550);
            } else
                zuniga.y += 5; //Zuñiga avanza 5 lugares

            if (oponente.y >= 1200 && oponente2.y >= 1200 && oponente3.y >= 1200 && oponente4.y >= 1200
                && arbitro.y >= 1200)
            {
                arbitro.visible = true;
                arbitro.y = 0;
                oponente.visible = true;
                oponente.y = 0;
                oponente.x = arbitro.x;
                oponente2.visible = true;
                oponente2.y = 0;
                oponente2.x =0;
                oponente3.visible = true;
                oponente3.y = 0;
                oponente3.x =0;
                oponente4.visible = true;
                oponente4.y = 0;
                oponente4.x =0;

                arbitro.x = Phaser.Math.Between(50, 550);
            }
            else
            {
                //arbitro.x = neymar.x;
                //arbitro.y += 1; //Avanza el arbitro un lugar
                //seek(arbitro,neymar);
                arbitro.y += 2;
                //console.log('la guacha');
                setParameters(60, 50, 60, 60);
                arrive(arbitro,neymar);
                setParameters(200, 50, 60, 60);
                AFormation(arbitro, aFormar);
            }
        }

        if(mostarExp)
        {
            mostarExp = false;
        }
        else
        {
            exploto.visible = false; 
        }
    },

});