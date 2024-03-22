"use strict";

// Import ONNXRuntime Web from CDN
import * as ort from "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.17.1/dist/esm/ort.min.js";
import { generateHealthAdvice, typeSentence } from "./fake-health-assistant.js";
// Set wasm path override and number of threads
ort.env.wasm.wasmPaths =
  "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.17.1/dist/";
ort.env.wasm.numThreads = 1;

// URL of the ONNX model to be used for prediction
const modelUrl =
  "https://raw.githubusercontent.com/kaidalisohaib/AICohortW24/main/models/best_model.onnx";

// DOM elements
const predictionOutput = document.getElementById("predictionOutput");
const healthAdvisorOutput = document.getElementById("advice");
const makePredictButton = document.getElementById("makePredictButton");
const form = document.getElementById("predictionForm");

// Data object to hold form field values
const userInputs = {};
let isPredicting = false;

// Add Bootstrap validation to all forms with '.needs-validation' class
let forms = document.querySelectorAll(".needs-validation");
Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    },
    false
  );
});

// Event listener for form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Check if a prediction is already in progress
  if (isPredicting) return;
  isPredicting = true;

  // Check form validity
  if (!form.checkValidity()) {
    isPredicting = false;
    return;
  }

  // Update UI to indicate prediction in progress
  makePredictButton.classList.add("disabled");
  makePredictButton.children[0].classList.remove("visually-hidden");
  makePredictButton.children[1].innerText = "Making prediction...";

  // Loop through all form fields and populate the data object
  for (const field of form.elements) {
    if (field.name && field.value) {
      userInputs[field.name] = parseFloat(field.value);
    }
  }

  // Prepare the input array in the correct order
  const featuresOrdered = [
    userInputs.HighBP,
    userInputs.HighChol,
    userInputs.CholCheck,
    userInputs.BMI,
    userInputs.Smoker,
    userInputs.Stroke,
    userInputs.Diabetes,
    userInputs.PhysActivity,
    userInputs.Fruits,
    userInputs.Veggies,
    userInputs.HvyAlcoholConsump,
    userInputs.AnyHealthcare,
    userInputs.NoDocbcCost,
    userInputs.GenHlth,
    userInputs.MentHlth,
    userInputs.PhysHlth,
    userInputs.DiffWalk,
    userInputs.Sex,
    userInputs.Age,
    userInputs.Education,
    userInputs.Income,
  ];

  // console.log('Form Data:', data);
  // console.log('Form array:', orderedArray);

  // Make the prediction and display the result
  let outputPercentage = await predict(featuresOrdered);
  outputPercentage = (outputPercentage * 100).toFixed(1);

  await new Promise((r) => setTimeout(r, 250));
  makePredictButton.classList.remove("disabled");
  makePredictButton.children[0].classList.add("visually-hidden");
  makePredictButton.children[1].innerText = "Make prediction";
  predictionOutput.innerText = `Likelihood of Heart Disease: ${outputPercentage}%`;

  const advice = generateHealthAdvice(userInputs)
  await typeSentence(healthAdvisorOutput, advice, 5)
  isPredicting = false;
});

// Update prediction output on form input
form.addEventListener("input", () => {
  predictionOutput.innerText = "Waiting for input ...";
  healthAdvisorOutput.innerHTML = "";
});

// Function to make the prediction using the ONNX model
async function predict(featuresArray) {
  try {
    // Create a new session and load the ONNX model
    const session = await ort.InferenceSession.create(modelUrl);

    // Prepare the input tensor from the feature array
    const dataInput = Float32Array.from(featuresArray);
    const tensorInput = new ort.Tensor("float32", dataInput, [1, 21]);

    // Prepare the input feeds for the model
    const feeds = { input: tensorInput };

    // Run inference and get the output
    const results = await session.run(feeds);

    // console.log('output_label', Number(results.label.data[0]));
    // console.log('output_probability', results.output.data[1]);
    return results.output.data[1];
  } catch (e) {
    console.error(`Failed to perform inference: ${e}`);
  }
}

// Example usage of the main function
// let input = [1., 1., 1., 40., 1., 0., 0., 0., 0., 1., 0., 1., 0., 5., 18., 15., 1., 0., 9., 4., 3.];
// main(input);

// temp2.appendChild(temp1.cloneNode())
