import tf from '@tensorflow/tfjs';
const minimo = 0

export default class IApicaduraService {

    detectarPicadura = async (picadura) => {
        model = await tf.loadGraphModel('model/model.json'); //aca esta la clave
        let tensor = tf.browser.fromPixels(picadura, 3)
            .resizeNearestNeighbor([224, 224]) // change the image size
            .expandDims()
            .toFloat()
            .reverse(-1); // RGB -> BGR

        let predictions = await model.predict(tensor).data();
        let top5 = Array.from(predictions)
		.map(function (p, i) { // this is Array.map
			return {
				probability: p,
				className: TARGET_CLASSES[i] // we are selecting the value from the obj
			};
		}).sort(function (a, b) {
			return b.probability - a.probability;
		}).slice(0, 2);
        console.log(`predicciones${predictions}`);
        console.log(`top5 ${predictions}`);
        //predictions.sort((a,b)=> b-a); //capaz hay que agregar un predictions= 
        console.log(predictions);
        let estado=this.calcularEstado(top5[0]);
        let respuesta ={
            Probabilidad: top5[0].probability,
            Estado:estado,
            Picadura: top5[0].className
        }

        /*let respuesta=({
            idInsecto:predictions.idInsecto,
            Estado: Estado,
            Probabilidades: predictions.Probabilidades
        })
        */


        return respuesta;
    }

    calcularEstado = async (prediction) => {
        let Estado;
       if(prediction>0.5){
        estado="concluso";
       }
       else{
         estado="inconcluso";
       }
       return estado;
    }


}
