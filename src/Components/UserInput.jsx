import React, { useState } from "react";
import { GiDuration } from "react-icons/gi";
const initialState = {
    "current-savings":1000,
    "yearly-contributions":1200,
    "expected-interests":7,
    "duration":10
}
export default function UserInput(props) {

  const [userInputs,setUserInput] = useState(initialState);

  const SubmitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInputs)
  };
  const ResetHandler = () => {
    setUserInput(initialState);
  };
  const ChangeHundler = (input, value) => {
  
    setUserInput((prev) => {
      return {
        ...prev,
        [input]:value
      }
    });
  };

  return (
    <form onSubmit={SubmitHandler} className="flex items-center justify-center">
      <div className="p-8 md:p-16 bg-green-700 rounded-md sm:space-y-5">
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-10 mb-3 sm:mb-0">
          <p className="flex flex-col">
            <label htmlFor="" className="text-white text-sm font-semibold mb-1">
              Current Savings
            </label>
            <input
              onChange={(event) =>
                ChangeHundler("current-savings", event.target.value)
              }
              value={userInputs["current-savings"]}
              id="current-savings"
              type="number"
              className="border border-white bg-green-700 rounded-md py-3 px-5 text-white"
              
            
            />
          </p>
          <p className="flex flex-col">
            <label htmlFor="" className="text-white text-sm font-semibold mb-1">
              Yearly Savings
            </label>
            <input
              onChange={(event) =>
                ChangeHundler("yearly-contributions", event.target.value)
              }
              value={userInputs["yearly-contributions"]}
              id="yearly-contributions"
              type="number"
              className="border border-white bg-green-700 rounded-md py-3 px-5 text-white"
          
            />
          </p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-10">
          <p className="flex flex-col">
            <label htmlFor="" className="text-white text-sm font-semibold mb-1">
              Expected Interest (%,Per Year)
            </label>
            <input
              onChange={(event) =>
                ChangeHundler("expected-interests", event.target.value)
              }
              value={userInputs["expected-interests"]}
              id="expected-interests"
              type="number"
              className="border border-white bg-green-700 rounded-md py-3 px-5 text-white"
              
            />
          </p>
          <p className="flex flex-col">
            <label htmlFor="" className="text-white text-sm font-semibold mb-1">
              Investment Duration (Year)
            </label>
            <input
              onChange={(event) =>
                ChangeHundler("duration", event.target.value)
              }
              value={userInputs["duration"]}
              id="duration"
              type="number"
              className="border border-white bg-green-700 rounded-md py-3 px-5 text-white"
              
            />
          </p>
        </div>
        {/* button */}
        <div className="flex flex-col justify-center sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 mt-3">
          <button
            type="button"
            onClick={ResetHandler}
            className=" px-5 py-3 bg-green-900 rounded-md text-white hover:bg-green-800"
          >
            Reset
          </button>
          <button
            type="submit"
            className=" px-5 py-3 bg-green-900 rounded-md text-white hover:bg-green-800"
          >
            Calculate
          </button>
        </div>
      </div>
    </form>
  );
}
