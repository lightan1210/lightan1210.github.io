var cancha, neymar, arbitro, chocado, chocado2, scoreText, endGameText, timeText, temporizador, exploto, cursors, sound_enabled = true, soundInfo , vibration_enabled = true, vibrationInfo,
    aFormar;

var config, config2, config3, config4;

var score, cantSegundos, puntajeCorriendo = 5, puntajeRodando = 10, penalizacionArbitro = 2, penalizacionZuniga = 5, duracionCredits = 2, formation = false;

function descontar() {

    if (cantSegundos > 0) {
        cantSegundos--;
        timeText.setText('Time: ' + cantSegundos);
        temporizador.reset({delay: 1000, callback: descontar, callbackScope: this, repeat: 1});
    } else {
        this.scene.start('endGame');
        this.scene.stop('JuegoScene');
        if(sound_enabled)
            this.sound.stopAll();
        gameOver = true;
    }
}

function choque(ney, oponent) {

    if (!mostarExp)
    {
        mostarExp = true;
        exploto.visible = true;
        exploto.x = ney.x;
        exploto.y = ney.y;
    }

    if (!chocado)
    {
        chocado = true;
        oponent.visible = false;
        oponent.y = 1500;
        ney.anims.play('rodar');
        score += puntajeCorriendo;
    }
    else
    {
        oponent.visible = false;
        oponent.y = 1500;
        score += puntajeRodando;
    } 


    if("vibrate" in window.navigator && vibration_enabled) 
            window.navigator.vibrate(100);

    scoreText.setText('Score: ' + score);
}

function choqueA(player, player2) {

    if (!chocado)
    {
        player2.visible = false;
        player2.y = 1500;
    }
    else
    {
        player2.visible = false;
        player2.y = 1500;
        cantSegundos -= penalizacionArbitro;

        if(cantSegundos<0)
            cantSegundos = 0;
        timeText.setText('Time: ' + cantSegundos);
    }

    if("vibrate" in window.navigator && vibration_enabled) 
            window.navigator.vibrate(100);

}

function choqueZ(player, player2) {

    if (!mostarExp) {
        mostarExp = true;
        exploto.visible = true;
        exploto.x = player.x;
        exploto.y = player.y;
    }

    if (!chocado) {
        chocado = true;
        player2.visible = false;
        player2.y = 1500;
        player.anims.play('rodar');
        cantSegundos -= penalizacionZuniga;
        timeText.setText('Time: ' + cantSegundos);
    } else {
        player2.visible = false;
        player2.y = 1500;
        cantSegundos -= penalizacionZuniga;
        if(cantSegundos<0)
            cantSegundos = 0;
        timeText.setText('Time: ' + cantSegundos);
    }

    if("vibrate" in window.navigator && vibration_enabled) 
            window.navigator.vibrate(100);

}

function creditsCheck(){

    if(duracionCredits == 0){      
        this.scene.start('mainMenu');
    }
    else{
        duracionCredits--;
        temporizador.reset({delay: 1000, callback: creditsCheck, callbackScope: this,repeat:1});               
    }
}

function distancia(vector1,vector2)
{
    dis = Math.sqrt((vector1.x-vector2.x)^2 + (vector1.y - vector2.y)^2);

    return dis;
}

var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    backgroundColor: '#b8b8b8',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
    },
    scene: [Credits, History, Instructions, MainMenu, Pause, EndGame, JuegoScene]
};

var game = new Phaser.Game(config);