//import tf from '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs-node';
import fs from 'fs/promises';
const minimo = 0

export default class IApicaduraService {

    detectarPicadura = async (picadura) => {
        console.log("Detectar picadura");
        
        try {
            const model = await tf.loadGraphModel('file://src/IA/model.json');
            console.log("Model loaded successfully");
            
            // Rest of your code for image processing and predictions

        } catch (error) {
            console.error("Error loading the model:", error);
            // Handle the error or return an error response
        }
        console.log("Detectar picadura 0");

        const imageBuffer = Buffer.from(picadura, 'base64');

        // Convert the image buffer into a TensorFlow.js tensor
        const imageTensor = tf.node.decodeImage(imageBuffer);

        // Preprocess the image (resize, normalize, etc.)
        const tensor = imageTensor
            .resizeNearestNeighbor([224, 224])
            .expandDims()
            .toFloat()
            .reverse(-1);

        /*let tensor =  tf.browser.fromPixels(picadura, 3)
            .resizeNearestNeighbor([224, 224]) // change the image size
            .expandDims()
            .toFloat()
            .reverse(-1); // RGB -> BGR
            */
        console.log("Detectar picadura 1");
        let predictions = await model.predict(tensor).data();
        console.log("Detectar picadura 2");
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
        let estado;
       if(prediction>0.5){
        estado="concluso";
       }
       else{
         estado="inconcluso";
       }
       return estado;
    }


}
