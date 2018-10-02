	
	var MAX_SPEED;
	var MAX_DIST;
	var MAX_FORCE;
	var DISTANCIA_LIMITE;

	function setParameters(maxSpeed, maxDist, maxForce, distanciaLimite){

		//For arrive simple: MAX_SPEED = 165, MAX_DIST = 250, MAX_FORCE = -, DISTANCIA_LIMITE = -
		//For A-formation: MAX_SPEED = 500 , MAX_DIST = 50, MAX_FORCE = 60 , DISTANCIA_LIMITE = 60 (sacados del ejemplo, probar otros valores)
		//console.log('dsfdsfsdfdsf');

		MAX_SPEED = maxSpeed;
		MAX_DIST = maxDist;
		MAX_FORCE = maxForce;
		DISTANCIA_LIMITE = distanciaLimite;
	}


	function AFormation (lider, seguidores){
		console.log(lider.angle);
	    angulo1 = -120 + lider.angle;  //para hacer la formacion en a
	    angulo2 = -60 + lider.angle;
	    anguloNuevo = angulo1;
	    distanciaN = 0;  
	    inicio = 0;
	    
	    for (n = inicio; n < seguidores.length; n++) {
	        if (isEven(n)) {
	            anguloNuevo = angulo1;
	            distanciaN += 150;
	        } else {
	            anguloNuevo = angulo2;
	        }
	        
	        x = lider.x + (distanciaN * Math.cos(anguloNuevo * (Math.PI / 180)));
	        y = lider.y + (distanciaN * Math.sin(anguloNuevo * (Math.PI / 180)));
	        
	        seguidores[n].body.angularVelocity = lider.body.angularVelocity;

	        objetivo = new Phaser.Math.Vector2(x,y);


	        arrive(seguidores[n], objetivo);

	    }

	}

	function isEven(value) {
	    return (value % 2 == 0);
	}

    
   	function arrive(seguidor, objetivo){
	    //Obtengo VectorDeseado
	    vectorDeseado = calcularVelocidadDeseada(seguidor, objetivo);
	     
	    //Obtengo el vector Steering
	    vectorSteeringForce = calcularSteeringForce(seguidor, vectorDeseado);

	    //aplico el vector de fuerza al seguidor
	    aplicarVectorDeFuerza(seguidor,vectorSteeringForce);

    }

	function calcularVelocidadDeseada(seguidor,objetivo) {
	     // Calculo el vector deseado = normalizado(POSICION TARGET - POSICION VEHICULO) * maximaVelocidad

	    vectorDeseado=new Phaser.Math.Vector2(objetivo.x,objetivo.y);
	    vectorDeseado.subtract(seguidor);
	     //var VectorDeseado=objetivo;
	    //vectorDeseado.subtract(seguidor);
	    //distancia=distanciaEntre(seguidor,x,y);
	     
	     
	    distancia = vectorDeseado.length();	     
	    vectorDeseado.normalize();
	     //VectorDeseado.multiply(new Phaser.Math.Vector2(seguidor.MAX_SPEED, seguidor.MAX_SPEED));
	     
	     //Arrive

	     vectorDeseado.multiply(new Phaser.Math.Vector2(MAX_SPEED, MAX_SPEED));
	     
	     //Arrive
	     if(distancia<MAX_DIST){
	         valor=distancia / MAX_DIST;
	         vectorDeseado.multiply(new Phaser.Math.Vector2(valor, valor));
	     }
	    /*if(distancia<MAX_DIST){
	         //valor=distancia / seguidor.MAX_DIST;
	        vectorDeseado.multiply(new Phaser.Math.Vector2(MAX_SPEED, MAX_SPEED));
	    }else{
	         //VectorDeseado.multiply(new Phaser.Math.Vector2(valor, valor));
	        //vectorDeseado.multiply(new Phaser.Math.Vector2(distancia, distancia));

	        //valor=distancia / MAX_DIST;
	         vectorDeseado.multiply(new Phaser.Math.Vector2(distancia, distancia));
	    }*/

	     /***********************/     
	      //flee
	     //VectorDeseado.multiply(new Phaser.Math.Vector2(-seguidor.MAX_SPEED, -seguidor.MAX_SPEED));
	    return vectorDeseado;
 	}


	function calcularSteeringForce(seguidor,vectorDeseado){
	    // Calculo el vector Steering VectorDeseado-Velocidad

	    var vectorSteeringForce = vectorDeseado;
	    vectorSteeringForce.subtract(seguidor.body.velocity);

		//limito la magnitud del vector, es decir la fuerza que se le va a aplicar
	    if (vectorSteeringForce.length() > (MAX_FORCE)){
	        vectorSteeringForce.normalize();
	        vectorSteeringForce.scale(MAX_FORCE);

	    }

	    return vectorSteeringForce;
	}

	function aplicarVectorDeFuerza(seguidor,vectorSteeringForce){

	    //Calculo la nueva velocidad y posicion del seguidor sumando la posicion con el vector de fuerza
	    //seguidor.angle=seguidor.body.velocity.angle()*57.2958;



	    seguidor.body.velocity.add(vectorSteeringForce);

	    //si la velocidad nueva es mayor a la maxima velocidad determinada, se deja la maxima.
	    if (seguidor.body.velocity.length() > (MAX_SPEED)) {

	        seguidor.body.velocity.normalize();
	        seguidor.body.velocity.scale(MAX_SPEED);

	    }

	}

	

function distanciaEntre(seguidor,x,y){
    var dx = x - seguidor.x;
    var dy = y - seguidor.y;
    return Math.sqrt((dx * dx) + (dy * dy));
}
	
