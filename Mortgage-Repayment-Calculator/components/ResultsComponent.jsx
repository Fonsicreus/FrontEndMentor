import Attribution from "./Attribution";
import illustrationEmpty from "../assets/images/illustration-empty.svg";

function ResultsComponent({ hasResults, results = [0, 0] }) {
  const [monthlyPayment, totalPayment] = results;

  if (hasResults) {
    return (
      <div className="bg-slate-900 rounded-bl-none md:rounded-bl-[80px] p-10 min-h-full text-white flex flex-col">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-3">Your results</h2>
          <p className="text-slate-300 mb-8">
            Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments"
            again.
          </p>

          <div className="bg-slate-800 rounded-lg p-6 border-t-4 border-lime">
            <p className="text-sm text-slate-300 mb-2">Your monthly repayments</p>
            <p className="text-5xl font-bold text-lime mb-6">£{Number(monthlyPayment).toFixed(5)}</p>
            <hr className="border-slate-600 mb-6" />
            <p className="text-sm text-slate-300 mb-2">Total you'll repay over the term</p>
            <p className="text-2xl font-bold text-white">£{Number(totalPayment).toFixed(5)}</p>
          </div>
        </div>
        <Attribution />
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-bl-none md:rounded-bl-[80px] p-10 flex flex-col items-center justify-center text-center min-h-full">
      <img src={illustrationEmpty} alt="Illustration" className="mb-6" />
      <h2 className="text-2xl font-bold text-white mb-4">Results shown here</h2>
      <p className="text-slate-300 max-w-sm">Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
    </div>
  );
}

export default ResultsComponent;
