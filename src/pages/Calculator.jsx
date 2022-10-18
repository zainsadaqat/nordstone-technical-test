import React, { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { useUserContext } from '../context/userContext';
import axios from 'axios';

const Calculator = () => {
  const { user } = useUserContext();

  const [form, setForm] = useState({ firstValue: 0, secondValue: 0 });
  const [operation, setOperation] = useState();
  const [output, setOutput] = useState(0);
  const operations = ['N/A', 'Add', 'Subtract', 'Multiply'];

  const handleInput = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleOperation = (e) => {
    setOperation(e.target.value);
    let firstValue = parseInt(form.firstValue);
    let secondValue = parseInt(form.secondValue);
    setOutput(firstValue + secondValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      'https://nordstone-calculator-api.herokuapp.com/calculator',
      {
        firstValue: form.firstValue,
        secondValue: form.secondValue,
        operation,
      }
    );
    alert(`Result coming from the API is ${response.data.output}`);
  };
  return (
    <section className="min-h-screen">
      {user ? (
        <>
          <Title title="Calculator" />
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-start">
              <label className="mb-[4px] font-medium text-md">
                First Value <span className="text-[#ff0000]">*</span>
              </label>
              <input
                className="mb-[32px] text-md font-bold w-80 h-10 px-2 rounded-md"
                type="number"
                name="firstValue"
                value={form.firstValue}
                onChange={handleInput}
                required
              />
            </div>
            <div className="flex flex-col justify-start">
              <label className="mb-[4px] font-medium text-md">
                Second Value <span className="text-[#ff0000]">*</span>
              </label>
              <input
                className="mb-[32px] text-md font-bold w-80 h-10 px-2 rounded-md"
                type="number"
                name="secondValue"
                value={form.secondValue}
                onChange={handleInput}
                required
              />
            </div>
            <div className="flex flex-col justify-start">
              <label className="mb-[4px] font-medium text-md">
                Operation <span className="text-[#ff0000]">*</span>
              </label>
              <select
                className="mb-[32px] text-md font-bold w-80 h-10 px-2 rounded-md"
                id="operationOptions"
                onChange={handleOperation}
              >
                {operations.map((operation, index) => {
                  return (
                    <option key={index} value={operation}>
                      {operation}
                    </option>
                  );
                })}
              </select>
            </div>
            <Button buttonType="submit" text="Calculate" />
          </form>
        </>
      ) : (
        <p className="mt-[40px]">
          You're not logged in. Please login first to access the features.
        </p>
      )}
    </section>
  );
};

export default Calculator;
