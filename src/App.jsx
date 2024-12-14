import React, { useState } from 'react';
import './App.css';


function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setCategory('Underweight');
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setCategory('Normal weight');
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    } else {
      alert('Please enter valid weight and height values.');
    }
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        />
      </div>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
