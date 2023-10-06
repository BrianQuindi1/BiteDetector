//import tf from '@tensorflow/tfjs';
import * as tf from "@tensorflow/tfjs-node";
import fs from "fs/promises";
import TARGET_CLASSES from "../IA/target_classes.js";
import InsectoService from "./Insecto-services.js";
const insectoService = new InsectoService();
const minimo = 0;

export default class IApicaduraService {
  detectarPicadura = async (picadura) => {
    let respuesta;
    if (picadura != null || picadura.Foto != null) {
        console.log("IMAGEN" + picadura.Foto);
        console.log("Detectar picadura");

        const model = await tf.loadGraphModel("file://src/IA/model.json");
        console.log("Model loaded successfully");

        // Rest of your code for image processing and predictions

        console.log("Detectar picadura 0");
        console.log("hola");

        const img = picadura.Foto.replace(/^data:image\/(png|jpeg);base64,/, "");

        const buffer = Buffer.from(img, "base64");
        // Convert the image buffer into a TensorFlow.js tensor
        const imageTensor = tf.node.decodeImage(buffer, 3);

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
            .map(function (p, i) {
            // this is Array.map
            return {
                probability: p,
                className: TARGET_CLASSES[i], // we are selecting the value from the obj
            };
            })
            .sort(function (a, b) {
            return b.probability - a.probability;
            })
            .slice(0, 2);
        console.log(`predicciones${predictions}`);
        console.log(`top5 ${predictions}`);
        //predictions.sort((a,b)=> b-a); //capaz hay que agregar un predictions=
        console.log(predictions);
        console.log("top5 ", top5[0]);
        let estado = this.calcularEstado(top5[0].probability);
        console.log("ESTADO" + estado);
        let IdInsecto = await insectoService.getByName(top5[0].className);
        console.log(IdInsecto);
        respuesta = {
            Probabilidad: top5[0].probability,
            Estado: estado,
            Picadura: IdInsecto,
      };
    } else {
      respuesta = {
        Probabilidad: 0,
        Estado: "No llego la imagen",
        Picadura: null,
      };
    }

    /*let respuesta=({
            idInsecto:predictions.idInsecto,
            Estado: Estado,
            Probabilidades: predictions.Probabilidades
        })
        */

    return respuesta;
  };

  calcularEstado = (prediction) => {
    let estado;
    console.log("PREDICCION" + prediction);
    if (prediction > 0.5) {
      estado = "concluso";
    } else {
      estado = "inconcluso";
    }
    return estado;
  };
}
