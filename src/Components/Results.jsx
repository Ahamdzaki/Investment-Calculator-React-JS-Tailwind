export default function Results(props) {
  
  return (
    <table className="flex flex-col p-4 items-center justify-center mx-5 md:mx-0 overflow-hidden">
        <thead className=" text-green-600 border-b text-sm">
          <tr>
            <th className="px-5 py-3">Year</th>
            <th className="px-5 py-3">Total Savings</th>
            <th className="px-5 py-3">Interests</th>
            <th className="px-5 py-3">Total Interest</th>
            <th className="px-5 py-3">Invested Capital</th>
          </tr>
        </thead>
        <tbody className="text-white text-xs uppercase">
          {props.data.map((yearData) => (
            <tr key={yearData.year}>
            <td className="px-5 py-3">{yearData.year}</td>
            <td className="px-5 py-3">{yearData.savingsEndOfYear}</td>
            <td className="px-5 py-3">{yearData.yearlyInterest}</td>
            <td className="px-5 py-3">{yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year}</td>
            <td className="px-5 py-3">{props.initialInvestment + yearData.yearlyInterest * yearData.year}</td>
          </tr>
          )   
          )}
          
        </tbody>
      </table>
  );
}
