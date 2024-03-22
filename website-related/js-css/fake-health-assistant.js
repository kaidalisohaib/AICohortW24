export function generateHealthAdvice(userInputs) {
  let advice = "";
  console.log(userInputs);
  // HighBP
  advice += `<span class='badge bg-light text-dark'>High Blood Pressure:</span> ${
    userInputs.HighBP === 0
      ? "Maintain a healthy lifestyle to keep your blood pressure within the normal range and reduce your risk of developing hypertension."
      : "Work closely with your doctor to manage your high blood pressure through dietary changes, exercise, stress reduction, and medication if prescribed."
  }<hr>`;

  // HighChol
  advice += `<span class='badge bg-light text-dark'>High Cholesterol:</span> ${
    userInputs.HighChol === 0
      ? "Continue following a heart-healthy diet and get your cholesterol levels checked regularly to maintain optimal levels."
      : "Consult with your healthcare provider about a low-fat, low-cholesterol diet, increased physical activity, and potential medication to lower your cholesterol levels."
  }<hr>`;

  // CholCheck
  advice += `<span class='badge bg-light text-dark'>Cholesterol Check:</span> ${
    userInputs.CholCheck === 0
      ? "Schedule an appointment to get your cholesterol levels checked, as regular screening is essential for monitoring your cardiovascular health."
      : "Continue getting your cholesterol levels checked regularly, and discuss the results with your healthcare provider."
  }<hr>`;

  // BMI
  advice += `<span class='badge bg-light text-dark'>Body Mass Index (BMI):</span> ${
    userInputs.BMI < 18.5
      ? "Your BMI indicates that you may be underweight, which can have negative health consequences. Speak with a healthcare professional about achieving a healthy weight."
      : userInputs.BMI >= 18.5 && userInputs.BMI < 25
      ? "Your BMI is within the healthy range. Maintain a balanced diet and regular physical activity to sustain a healthy weight."
      : userInputs.BMI >= 25 && userInputs.BMI < 30
      ? "Your BMI indicates that you are overweight. Consider making dietary changes and increasing your physical activity to reach a healthy weight."
      : "Your BMI indicates that you are obese, which increases your risk of various health conditions. Consult with a healthcare professional about a weight management plan."
  }<hr>`;

  // Smoker
  advice += `<span class='badge bg-light text-dark'>Smoking:</span> ${
    userInputs.Smoker === 0
      ? "Congratulations on being a non-smoker. Maintain this healthy habit to reduce your risk of smoking-related diseases."
      : "Smoking is a significant risk factor for numerous health problems. Seek support from your healthcare provider or a smoking cessation program to quit smoking and improve your overall health."
  }<hr>`;

  // Stroke
  advice += `<span class='badge bg-light text-dark'>Stroke History:</span> ${
    userInputs.Stroke === 0
      ? "Maintain a healthy lifestyle to reduce your risk of stroke, including managing blood pressure, cholesterol levels, and diabetes if present."
      : "Follow your healthcare provider's recommendations for preventing another stroke, which may involve lifestyle changes, medication, and regular monitoring."
  }<hr>`;

  // Diabetes
  advice += `<span class='badge bg-light text-dark'>Diabetes:</span> ${
    userInputs.Diabetes === 0
      ? "Adopt a healthy diet and regular physical activity to reduce your risk of developing diabetes."
      : "Work closely with your healthcare team to manage your diabetes through a balanced diet, exercise, medication if prescribed, and regular monitoring of your blood sugar levels."
  }<hr>`;

  // PhysActivity
  advice += `<span class='badge bg-light text-dark'>Physical Activity:</span> ${
    userInputs.PhysActivity === 0
      ? "Incorporate regular physical activity into your routine to improve your overall health and reduce your risk of chronic diseases."
      : "Congratulations on being physically active. Continue to make exercise a priority for your well-being."
  }<hr>`;

  // Fruits
  advice += `<span class='badge bg-light text-dark'>Fruit Consumption:</span> ${
    userInputs.Fruits === 0
      ? "Increase your daily fruit intake to meet the recommended servings for a balanced diet and to obtain essential nutrients."
      : "Well done on including fruit in your daily diet. Continue to incorporate a variety of fruits for optimal health benefits."
  }<hr>`;

  // Veggies
  advice += `<span class='badge bg-light text-dark'>Vegetable Consumption:</span> ${
    userInputs.Veggies === 0
      ? "Increase your daily vegetable intake to meet the recommended servings for a balanced diet and to obtain essential nutrients."
      : "Well done on including vegetables in your daily diet. Continue to incorporate a variety of vegetables for optimal health benefits."
  }<hr>`;

  // HvyAlcoholConsump
  advice += `<span class='badge bg-light text-dark'>Alcohol Consumption:</span> ${
    userInputs.HvyAlcoholConsump === 0
      ? "Maintain moderate or no alcohol consumption to promote overall health and well-being."
      : "Heavy alcohol consumption can have serious health consequences. Seek support from your healthcare provider or a professional program to reduce your alcohol intake."
  }<hr>`;

  // AnyHealthcare
  advice += `<span class='badge bg-light text-dark'>Healthcare Coverage:</span> ${
    userInputs.AnyHealthcare === 0
      ? "Explore options for obtaining healthcare coverage to ensure access to preventive care and medical treatment when needed."
      : "Maintain your healthcare coverage to access preventive services and manage any health conditions."
  }<hr>`;

  // NoDocbcCost
  advice += `<span class='badge bg-light text-dark'>Access to Healthcare:</span> ${
    userInputs.NoDocbcCost === 0
      ? "Continue to prioritize your health and seek medical care when needed."
      : "Look into community resources or assistance programs that can provide low-cost or free healthcare services."
  }<hr>`;

  // GenHlth
  advice += `<span class='badge bg-light text-dark'>General Health:</span> ${
    userInputs.GenHlth === 1
      ? "Excellent! Continue practicing healthy habits to maintain your overall well-being."
      : userInputs.GenHlth === 2
      ? "Well done on maintaining very good general health. Keep up the good work."
      : userInputs.GenHlth === 3
      ? "Good general health is a positive foundation. Consider making some lifestyle improvements to further enhance your well-being."
      : userInputs.GenHlth === 4
      ? "Fair general health may indicate the need for lifestyle changes. Consult with your healthcare provider to address any underlying issues."
      : "Poor general health is a concern. Speak with your healthcare provider to identify and address any contributing factors."
  }<hr>`;

  // MentHlth
  advice += `<span class='badge bg-light text-dark'>Mental Health:</span> ${
    userInputs.MentHlth === 0
      ? "Congratulations on maintaining good mental health. Continue to prioritize self-care and seek support if needed."
      : userInputs.MentHlth >= 1 && userInputs.MentHlth <= 13
      ? "Experiencing some days with poor mental health is common. Consider seeking support from a mental health professional if it persists or worsens."
      : "Experiencing frequent poor mental health is a concern. Seek support from a mental health professional to address any underlying issues."
  }<hr>`;

  // PhysHlth
  advice += `<span class='badge bg-light text-dark'>Physical Health:</span> ${
    userInputs.PhysHlth === 0
      ? "Excellent physical health is a great foundation. Maintain a healthy lifestyle to sustain your well-being."
      : userInputs.PhysHlth >= 1 && userInputs.PhysHlth <= 13
      ? "Experiencing some days with poor physical health is common. Monitor your symptoms and consult your healthcare provider if they persist or worsen."
      : "Experiencing frequent poor physical health is a concern. Speak with your healthcare provider to identify and address any underlying issues."
  }<hr>`;

  // DiffWalk
  advice += `<span class='badge bg-light text-dark'>Mobility:</span> ${
    userInputs.DiffWalk === 0
      ? "Maintain your mobility by staying active and incorporating strength-building exercises into your routine."
      : "If you experience difficulty with walking or climbing stairs, discuss assistive devices or physical therapy with your healthcare provider to improve your mobility and independence."
  }<hr>`;

  // Sex
  advice += `<span class='badge bg-light text-dark'>Gender-Specific Health:</span> ${
    userInputs.Sex === 0
      ? "As a woman, it's important to stay up-to-date with recommended preventive screenings and address any gender-specific health concerns with your healthcare provider."
      : "As a man, it's important to stay up-to-date with recommended preventive screenings and address any gender-specific health concerns with your healthcare provider."
  }<hr>`;

  // Age
  advice += `<span class='badge bg-light text-dark'>Age-Specific Health:</span> ${
    userInputs.Age === 1
      ? "As a young adult, focus on developing healthy habits that will serve you well throughout your life, such as a balanced diet, regular exercise, and avoiding risky behaviors."
      : userInputs.Age === 2
      ? "In your late 20s, maintain a healthy lifestyle and prioritize preventive care to reduce your risk of developing chronic conditions later in life."
      : userInputs.Age === 3
      ? "In your early 30s, continue practicing healthy habits and address any age-related concerns with your healthcare provider."
      : userInputs.Age === 4
      ? "In your late 30s, stay up-to-date with recommended preventive screenings and address any age-related concerns with your healthcare provider."
      : userInputs.Age === 5
      ? "In your early 40s, prioritize your health by maintaining a balanced lifestyle, managing stress, and addressing any age-related concerns with your healthcare provider."
      : userInputs.Age === 6
      ? "In your late 40s, focus on prevention and early detection of age-related conditions by following your healthcare provider's recommendations for screenings and check-ups."
      : userInputs.Age === 7
      ? "In your early 50s, stay proactive about your health by following a nutritious diet, engaging in regular physical activity, and addressing any age-related concerns with your healthcare provider."
      : userInputs.Age === 8
      ? "In your late 50s, continue prioritizing your health through regular check-ups, preventive screenings, and a healthy lifestyle to reduce your risk of age-related conditions."
      : userInputs.Age === 9
      ? "In your early 60s, work closely with your healthcare provider to manage any existing conditions and address age-related concerns through preventive care and lifestyle modifications."
      : userInputs.Age === 10
      ? "In your late 60s, stay up-to-date with recommended preventive screenings and focus on maintaining your independence and quality of life through a healthy lifestyle."
      : userInputs.Age === 11
      ? "In your early 70s, prioritize your health by following your healthcare provider's recommendations for managing any existing conditions and addressing age-related concerns."
      : userInputs.Age === 12
      ? "In your late 70s, continue working closely with your healthcare team to manage any chronic conditions and address age-related concerns through preventive care and lifestyle modifications."
      : "At 80 years and beyond, prioritize your health by following your healthcare provider's recommendations, maintaining an active lifestyle, and seeking support when needed to maintain your independence and quality of life."
  }<hr>`;

  // Education
  advice += `<span class='badge bg-light text-dark'>Health Education:</span> ${
    userInputs.Education === 0
      ? "Seek out reliable health education resources to learn about maintaining a healthy lifestyle and reducing your risk of chronic conditions."
      : userInputs.Education === 1 || userInputs.Education === 2
      ? "Enhance your health knowledge by accessing educational resources on topics such as nutrition, physical activity, and disease prevention."
      : userInputs.Education === 3
      ? "Continuously educate yourself on health-related topics through reliable sources to make informed decisions about your lifestyle and healthcare."
      : userInputs.Education === 4
      ? "Leverage your education to access and understand health information, and continue learning about preventive care and healthy living."
      : "Your higher education can provide you with the knowledge and resources to make informed decisions about your health and well-being."
  }<hr>`;

  // Income
  advice += `<span class='badge bg-light text-dark'>Income and Healthcare Access:</span> ${
    userInputs.Income === 1
      ? "With limited financial resources, explore community programs and assistance options to access affordable healthcare, nutritious food, and other essential services."
      : userInputs.Income === 2 || userInputs.Income === 3
      ? "Seek out community resources and assistance programs that can help you access healthcare, healthy food options, and other services within your budget."
      : userInputs.Income === 4 || userInputs.Income === 5
      ? "Prioritize your health within your budget by exploring low-cost options for healthcare, nutritious food, and physical activity opportunities."
      : userInputs.Income === 6 || userInputs.Income === 7
      ? "Invest in your health by accessing preventive care services, maintaining a balanced diet and active lifestyle, and addressing any health concerns with your healthcare provider."
      : "With a higher income, prioritize your health by accessing preventive care services, maintaining a balanced diet and active lifestyle, and addressing any health concerns with your healthcare provider."
  }<hr>`;

  return advice;
}

export async function typeSentence(domElem, sentence, speed = 50) {
  let index = 0;
  let element = domElem;
  const endOfToast = document.getElementById("healthAdviceToast");
  const predOut = document.getElementById("toastPredictionOutput");

  let hasScrolledUp = false; // Flag to track if user has scrolled up manually
  // Create an intersection observer to observe when the footer enters the viewport
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Footer is in view, set hasScrolledUp to false
        hasScrolledUp = false;
      }
    });
  });

  const footerElement = document.querySelector("#cursor");
  if (footerElement) {
    // Start observing the footer element
    footerObserver.observe(footerElement);
  }
  document.addEventListener("wheel", (event) => {
    hasScrolledUp = true;
  });
  let timer = setInterval(function () {
    const char = sentence[index];

    if (char === "<") {
      index = sentence.indexOf(">", index); // skip to greater-than
    }
    const newContent = sentence.slice(0, index);
    element.innerHTML = newContent;

    // Scroll into view only if user hasn't scrolled up manually
    if (!hasScrolledUp) {
      endOfToast.scrollIntoView({ behavior: "smooth", block: "end" }); // Scroll cursor into view
    }

    if (++index === sentence.length) {
      clearInterval(timer);
      // Wait for the content to be fully updated before scrolling predictionOutput
      setTimeout(() => {
        predOut.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll predictionOutput into view
      }, 100);
    }
  }, speed);
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
