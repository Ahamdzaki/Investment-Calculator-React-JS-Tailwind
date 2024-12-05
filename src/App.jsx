import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";
import { useState } from "react";
import { SlControlStart } from "react-icons/sl";

export default function App() {
  const [userInput, setUserInput] = useState(null);
  const [initialInvestment,setinitialInvestment] = useState(null)
  const CalculateHandler = (userInput) => {
    let currentSavings = userInput["current-savings"];
    const yearlyContribution = userInput["yearly-contributions"];
    const expectedReturn = userInput["expected-interests"];
    const duration = userInput["duration"];
    const yearlyData = [];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings = +yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setinitialInvestment(userInput["current-savings"]);
    setUserInput(yearlyData)
  };
  
  console.log("userinput " , userInput);

  return (
    <div className="bg-zinc-800 min-h-screen">
      {/* header */}
      <Header />
      {/* Form */}
      <UserInput onCalculate={CalculateHandler} />
      {!userInput && "No Investment"};
      {userInput && <Results data = {userInput} initialInvestment = {initialInvestment} />}
      {/* table */}
    </div>
  );
}
// let currentSavings = results["current-savings"];
//     const yearlyContribution = results["yearly-contribution"];
//     const expectedReturn = results["expected-return"] / 100;
//     const duration = results["duration"];

//     for (let i = 0; i < duration; i++) {
//       const yearlyInterest = currentSavings * expectedReturn;
//       currentSavings = currentSavings + yearlyInterest + yearlyContribution;
//       yearlyData.push({
//         year: i + 1,
//         yearlyInterest: yearlyInterest,
//         savingsEndOfYear: currentSavings,
//         yearlyContribution: yearlyContribution,
//       });
//     }
