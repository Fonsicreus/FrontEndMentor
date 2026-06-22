import { useState } from "react";
import ResultsComponent from "./ResultsComponent";
import iconCalculator from "../assets/images/icon-calculator.svg";

const MAX_AMOUNT = "999999999999999999999999999";
const MAX_TERM = 9999;

function MortgageCalculatorComponent() {
  const [hasResults, setHasResults] = useState(false);
  const [mortgageType, setMortgageType] = useState("");
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [results, setResults] = useState([0, 0]);

  const [errors, setErrors] = useState({
    amount: false,
    term: false,
    rate: false,
    type: false,
  });

  const clampValue = (value, max) => {
    const maxStr = String(max);
    if (value.length > maxStr.length || (value.length === maxStr.length && value > maxStr)) return maxStr;
    if (value === "" || value === "0") return "0";
    return value;
  };

  function handleAmountChange(e) {
    let val = e.target.value.replace(/[^0-9]/g, "");
    if (val === "") {
      setAmount("");
      return;
    }
    val = clampValue(val, MAX_AMOUNT);
    setAmount(val);
    setErrors((prev) => ({ ...prev, amount: false }));
  }

  function handleTermChange(e) {
    let val = e.target.value.replace(/[^0-9]/g, "");
    if (val === "") {
      setTerm("");
      return;
    }
    val = clampValue(val, MAX_TERM);
    setTerm(val);
    setErrors((prev) => ({ ...prev, term: false }));
  }

  function handleRateChange(e) {
    const val = e.target.value.replace(/[^0-9.]/g, "");
    const dotCount = (val.match(/\./g) || []).length;
    if (dotCount > 1) return;
    if (val === "") {
      setRate("");
      return;
    }
    const maxStr = String(MAX_TERM);
    const intPart = val.split(".")[0];
    if (intPart.length > maxStr.length || (intPart.length === maxStr.length && intPart > maxStr)) return;
    setRate(val);
    setErrors((prev) => ({ ...prev, rate: false }));
  }

  function handleTypeChange(value) {
    setMortgageType(value);
    setErrors((prev) => ({ ...prev, type: false }));
  }

  function handleCalculate() {
    const newErrors = {
      amount: amount === "",
      term: term === "",
      rate: rate === "",
      type: mortgageType === "",
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (hasErrors) return;

    const numericAmount = Number(amount);
    const months = Number(term) * 12;
    const interest = (numericAmount * Number(rate)) / 100;

    if (mortgageType === "interest-only") {
      setResults([interest / months, interest]);
    } else {
      const total = numericAmount + interest;
      setResults([total / months, total]);
    }
    setHasResults(true);
  }

  function handleClearAll() {
    setAmount("");
    setTerm("");
    setRate("");
    setMortgageType("");
    setErrors({ amount: false, term: false, rate: false, type: false });
    setResults([0, 0]);
    setHasResults(false);
  }

  const borderError = (hasError) => (hasError ? "border-red focus:border-red focus:ring-red" : "border-slate-300 focus:border-lime focus:ring-lime");

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="p-8 md:p-10 w-full md:w-1/2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-2">
          <h1 className="text-2xl font-bold text-green-900">Mortgage Calculator</h1>
          <button
            type="button"
            className="text-sm text-slate-500 underline hover:text-slate-900 cursor-pointer self-start md:self-auto"
            onClick={handleClearAll}
          >
            Clear All
          </button>
        </div>

        <div className="mb-6">
          <label htmlFor="mortgage-amount" className="block text-lm font-medium text-slate-700 mb-2">
            Mortgage Amount
          </label>
          <div className="flex">
            <span
              className={`flex items-center px-4 py-3 text-lg font-bold border-l border-t border-b rounded-l-lg ${
                errors.amount ? "bg-red text-white border-red" : "bg-slate-100 text-slate-500 border-slate-300"
              }`}
            >
              £
            </span>
            <input
              id="mortgage-amount"
              type="text"
              inputMode="numeric"
              value={amount}
              onChange={handleAmountChange}
              className={`w-full border-r border-t border-b rounded-r-lg py-3 pl-4 pr-4 text-lg font-bold text-slate-900 focus:outline-none focus:ring-1 ${borderError(errors.amount)}`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="mortgage-term" className="block text-lm font-medium text-slate-700 mb-2">
              Mortgage Term
            </label>
            <div className="flex">
              <input
                id="mortgage-term"
                type="text"
                inputMode="numeric"
                value={term}
                onChange={handleTermChange}
                className={`w-full border-l border-t border-b rounded-l-lg py-3 px-4 pr-10 text-lg font-bold text-slate-900 focus:outline-none focus:ring-1 ${borderError(errors.term)}`}
              />
              <span
                className={`flex items-center pr-4 text-lg font-bold border-r border-t border-b rounded-r-lg px-3 py-2 ${
                  errors.term ? "bg-red text-white border-red" : "border-slate-300 text-slate-500 bg-slate-100"
                }`}
              >
                years
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="interest-rate" className="block text-lm font-medium text-slate-700 mb-2">
              Interest Rate
            </label>
            <div className="flex">
              <input
                id="interest-rate"
                type="text"
                inputMode="numeric"
                value={rate}
                onChange={handleRateChange}
                className={`w-full border-l border-t border-b rounded-l-lg py-3 px-4 pr-10 text-lg font-bold text-slate-900 focus:outline-none focus:ring-1 ${borderError(errors.rate)}`}
              />
              <span
                className={`flex items-center pr-4 text-lg font-bold border-r border-t border-b rounded-r-lg px-3 py-2 ${
                  errors.rate ? "bg-red text-white border-red" : "border-slate-300 text-slate-500 bg-slate-100"
                }`}
              >
                %
              </span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lm font-medium text-slate-700 mb-2">Mortgage Type</p>
          <div className="space-y-3">
            <label
              className={`flex items-center gap-3 border rounded-lg p-3 cursor-pointer ${
                errors.type ? "border-red" : mortgageType === "repayment" ? "border-lime bg-lime/10" : "border-slate-300"
              }`}
            >
              <input
                type="radio"
                name="mortgage-type"
                value="repayment"
                checked={mortgageType === "repayment"}
                onChange={() => handleTypeChange("repayment")}
                className="appearance-none w-5 h-5 border-2 border-slate-500 rounded-full checked:border-lime checked:bg-lime checked:ring-2 checked:ring-inset checked:ring-white cursor-pointer"
              />
              <span className="text-base font-bold text-slate-900">Repayment</span>
            </label>
            <label
              className={`flex items-center gap-3 border rounded-lg p-3 cursor-pointer ${
                errors.type ? "border-red" : mortgageType === "interest-only" ? "border-lime bg-lime/10" : "border-slate-300"
              }`}
            >
              <input
                type="radio"
                name="mortgage-type"
                value="interest-only"
                checked={mortgageType === "interest-only"}
                onChange={() => handleTypeChange("interest-only")}
                className="appearance-none w-5 h-5 border-2 border-slate-500 rounded-full checked:border-lime checked:bg-lime checked:ring-2 checked:ring-inset checked:ring-white cursor-pointer"
              />
              <span className="text-base font-bold text-slate-900">Interest Only</span>
            </label>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-3 bg-lime hover:bg-lime/80 text-slate-900 font-bold text-lg py-3 px-8 rounded-full cursor-pointer w-full md:w-auto justify-center"
          onClick={handleCalculate}
        >
          <img src={iconCalculator} alt="Calculator" className="size-6" />
          Calculate Repayments
        </button>
      </div>

      <div className="w-full md:w-1/2">
        <ResultsComponent hasResults={hasResults} results={results} />
      </div>
    </div>
  );
}

export default MortgageCalculatorComponent;
