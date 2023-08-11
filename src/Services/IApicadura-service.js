import tf from '@tensorflow/tfjs';
let minimo=0
export default class IApicaduraService{
    
    detectarPicadura= async(picadura) => {
        model = await tf.loadGraphModel('model/model.json'); //aca esta la clave
        let tensor = tf.browser.fromPixels(picadura, 3)
		.resizeNearestNeighbor([224, 224]) // change the image size
		.expandDims()
		.toFloat()
		.reverse(-1); // RGB -> BGR

        let predictions = await model.predict(tensor).data();
        predictions.forEach(predict => {
            if (predict>minimo) {
                minimo=predict
            }
        });
        let Estado
        if (minimo<50) {
            Estado="Inconcluso"
            
        }else{
            Estado="Concluso"
        }

        let respuesta=({
            idInsecto:predictions.idInsecto,
            Estado: Estado,
            Probabilidades: predictions.Probabilidades
        })
        


        return respuesta;
    }
    

}
