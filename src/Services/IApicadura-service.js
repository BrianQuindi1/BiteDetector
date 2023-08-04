import tf from '@tensorflow/tfjs';

export default class IApicaduraService{

    detectarPicadura= async(picadura) => {
        model = await tf.loadGraphModel('model/model.json'); //aca esta la clave
        let tensor = tf.browser.fromPixels(picadura, 3)
		.resizeNearestNeighbor([224, 224]) // change the image size
		.expandDims()
		.toFloat()
		.reverse(-1); // RGB -> BGR

        let predictions = await model.predict(tensor).data();
    }

}