# Heart Disease Prediction

## Project Overview
This project aims to predict heart disease using various health indicators. Early detection can potentially save lives. We are a team of 4 AI enthusiasts participating in the AI LAUNCH LAB R&D Programs of Winter 2024.

## Team Members
- Sohaib Kaidali
- Anton 
- Radman 
- Agam 

## Problem Statement
Heart disease is the leading cause of death globally. Early detection can potentially save lives. We aim to build a machine learning model that can predict the likelihood of heart disease based on various health indicators, contributing to improved healthcare outcomes.

## Project Workflow

### Step 1: Data Collection and Preprocessing
1. **Collect Data**
   - [x] Download the dataset from Kaggle.
   - [ ] Explore the dataset to understand its structure and features.
   - [ ] Check for missing values and handle them appropriately.

2. **Data Preprocessing**
   - [ ] Encode categorical variables.
   - [ ] Normalize or scale numerical features.
   - [ ] Split the dataset into training and testing sets.

### Step 2: Exploratory Data Analysis (EDA)
1. **Visualize Data**
   - [ ] Create histograms, scatter plots, and box plots to explore the distribution of features.
   - [ ] Generate correlation matrices to identify relationships between variables.
   - [ ] Analyze trends and patterns in the data.

2. **Feature Engineering**
   - [ ] Create new features based on domain knowledge.
   - [ ] Select relevant features for modeling.
   - [ ] Perform dimensionality reduction if necessary.

### Step 3: Model Building and Evaluation
1. **Model Selection**
   - [ ] Choose appropriate machine learning algorithms for the task.
   - [ ] Train baseline models with default parameters.

2. **Model Evaluation**
   - [ ] Evaluate models using cross-validation and appropriate metrics.
   - [ ] Tune hyperparameters to improve model performance.

### Step 4: Model Deployment and Documentation
1. **Deploy Model**
   - [ ] Deploy the trained model to a web service or application.

2. **Documentation**
   - [ ] Document the project's methodology, findings, and conclusions in a report.
   - [ ] Write README files with instructions for running the code and reproducing results.
   - [ ] Create API documentation if applicable.

## Dataset
The dataset used in this project is sourced from Kaggle and can be found [here](https://www.kaggle.com/datasets/alexteboul/heart-disease-health-indicators-dataset/data). It contains 253,680 records and 21 features.

### Features description
- HighBP : Indicates if the person has been told by a health professional that they have High Blood Pressure.
- HighChol : Indicates if the person has been told by a health professional that they have High Blood Cholesterol.
- CholCheck : Cholesterol Check, if the person has their cholesterol levels checked within the last 5 years.
- BMI : Body Mass Index, calculated by dividing the persons weight (in kilogram) by the square of their height (in meters).
- Smoker : Indicates if the person has smoked at least 100 cigarettes.
- Stroke : Indicates if the person has a history of stroke.
- Diabetes : Indicates if the person has a history of diabetes, or currently in pre-diabetes, or suffers from either type of diabetes.
- PhysActivity : Indicates if the person has some form of physical activity in their day-to-day routine.
- Fruits : Indicates if the person consumes 1 or more fruit(s) daily.
- Veggies : Indicates if the person consumes 1 or more vegetable(s) daily.
- HvyAlcoholConsump : Indicates if the person has more than 14 drinks per week.
- AnyHealthcare : Indicates if the person has any form of health insurance.
- NoDocbcCost : Indicates if the person wanted to visit a doctor within the past 1 year but couldn’t, due to cost.
- GenHlth : Indicates the persons response to how well is their general health, ranging from 1 (excellent) to 5 (poor).
- Menthlth : Indicates the number of days, within the past 30 days that the person had bad mental health.
- PhysHlth : Indicates the number of days, within the past 30 days that the person had bad physical health.
- DiffWalk : Indicates if the person has difficulty while walking or climbing stairs.
- Sex : Indicates the gender of the person, where 0 is female and 1 is male.
- Age : Indicates the age class of the person, where 1 is 18 years to 24 years up till 13 which is 80 years or older, each interval between has a 5-year increment.
- Education : Indicates the highest year of school completed, with 0 being never attended or kindergarten only and 6 being, having attended 4 years of college or more.
- Income : Indicates the total household income, ranging from 1 (at least \$10,000) to 6 ($75,000+)

## Getting Started
### Google Colab Workflow
1. **Open Google Colab:**
   - Go to Google Colab and sign in with your Google account if you haven't already.
2. **Open a Notebook from GitHub:**
   - Click on "File" > "Open notebook" > "GitHub".
   - Check "Include private repos" top right.
   - Enter the URL of your GitHub repository "https://github.com/kaidalisohaib/AICohortW24" in the provided field.
   - Select the notebook you want to open from the repository.
   - The notebook will open in Google Colab.
3. **Make Changes to the Notebook:**
   - You can make changes to the notebook as needed using the Colab interface.
4. **Save a Copy to GitHub:**
   - Once you've made your changes, click on "File" > "Save a copy in GitHub".
   - Authenticate with GitHub if prompted by providing your username and password or personal access token.
   - Choose the repository where you want to save the notebook.
   - Choose the correct branch and enter a commit message describing your changes.
   - Click on "OK" to save the notebook to your GitHub repository.
5. **Verify Changes on GitHub:**
   - Go to your GitHub repository to verify that the changes have been saved successfully.

### Local Workflow
1. **Setup Environment:**
   - Make sure to use [Python 3.10.1](https://www.python.org/downloads/release/python-3101/).
   - Configure a Python environment:
   Run each command, one after the other.
     ```bash
     python -m venv venv
     ```
     ```bash
     .\venv\Scripts\activate
     ```
2. **Install Dependencies:**
   - Install the required Python packages by running:
     ```bash
     pip install -r requirements.txt
     ```
3. **Make Changes to the Notebook:**
   - Make your changes, commit & push them.
