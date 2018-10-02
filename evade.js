const MAX_SPEED = 165;

function evade(vehiculo,objetivo)
{
	vectorArb = new Phaser.Math.Vector2(vehiculo.x,vehiculo.y);
	vectorObj = new Phaser.Math.Vector2(objetivo.x,objetivo.y);

	vectorObj.subtract(vectorArb);
	    
	distancia=vectorObj.length();

	var aHead = distancia / MAX_SPEED;

	velocidadObj = objetivo.body.velocity;

	var posFuturo = vectorObj.add(velocidadObj.multiply(aHead));

	return flee2(vehiculo,posFuturo);
}


    
   	function flee2(vehiculo, objetivo){
     //Obtengo VectorDeseado
     var VectorDeseado = calcularVelocidadDeseada2(vehiculo, objetivo);
     
     //Obtengo el vector Steering
     var vectorSteeringForce = calcularSteeringForce2(vehiculo.body.velocity, VectorDeseado);

     //aplico el vector de fuerza al vehiculo

     var vehiculoVelocidad = vehiculo.body.velocity;
     //aplicarVectorDeFuerza(vehiculo,vectorSteeringForce);

     return vehiculoVelocidad.add(vectorSteeringForce);

    }

	function calcularVelocidadDeseada2(vehiculo,objetivo) {
	     // Calculo el vector deseado = normalizado(POSICION TARGET - POSICION VEHICULO) * maximaVelocidad

	     vehiculo.MAX_SPEED = 165 ;
	        vehiculo.MAX_DIST = 250;
	        vehiculo.MAX_SPEED_SQ = vehiculo.MAX_SPEED * vehiculo.MAX_SPEED;


	     var VectorDeseado=new Phaser.Math.Vector2(objetivo.x,objetivo.y);
	     //VectorDeseado.subtract(new Phaser.Math.Vector2(vehiculo.x,vehiculo.y));
	     //var VectorDeseado=objetivo;
	     VectorDeseado.subtract(vehiculo);
	     
	     
	     //Arrive
	     distancia=VectorDeseado.length();
	     
	     VectorDeseado.normalize();
	     
	      //flee
	     VectorDeseado.multiply(new Phaser.Math.Vector2(-vehiculo.MAX_SPEED, -vehiculo.MAX_SPEED));
	    return VectorDeseado;
 	}

	function calcularSteeringForce2(vehiculo,VectorDeseado){
	    // Calculo el vector Steering VectorDeseado-Velocidad

	    var vectorSteeringForce = VectorDeseado;
	    vectorSteeringForce.subtract(vehiculo);
	    return vectorSteeringForce;
	}

	function aplicarVectorDeFuerza2(vehiculo,vectorSteeringForce){

	    //Calculo la nueva velocidad y posicion del vehiculo sumando la posicion con el vector de fuerza
	    //vehiculo.angle=vehiculo.body.velocity.angle()*57.2958;
	    vehiculo.body.velocity.add(vectorSteeringForce);

	}