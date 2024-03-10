// import ONNXRuntime Web from CDN
import * as ort from "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.17.1/dist/esm/ort.min.js";

// set wasm path override
ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.17.1/dist/";
ort.env.wasm.numThreads = 1;

const modelUrl = "https://raw.githubusercontent.com/kaidalisohaib/AICohortW24/main/models/best_model.onnx"
// use an async context to call onnxruntime functions.
async function main(featuresArray) {
    try {
        // create a new session and load the specific model.
        //
        // the model in this example contains a single MatMul node
        const session = await ort.InferenceSession.create(modelUrl);

        // prepare inputs. a tensor need its corresponding TypedArray as data
        const dataInput = Float32Array.from(featuresArray);
        const tensorInput = new ort.Tensor('float32', dataInput, [1, 21]);

        // prepare feeds. use model input names as keys.
        const feeds = { "input": tensorInput };

        // feed inputs and run
        const results = await session.run(feeds);

        console.log('output_label', results.label.data)
        console.log('output_probability', results.output.data)
        // document.write("Input: ", dataInput)
        // document.write(`Prediction: ${results.label.data[0]}`)

    } catch (e) {
        console.error(`failed to inference ONNX model: ${e}.`);
    }
}

let input = [1., 1., 1., 40., 1., 0., 0., 0., 0., 1., 0., 1., 0., 5., 18., 15., 1., 0., 9., 4., 3.]
main(input);