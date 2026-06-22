import MortgageCalculatorComponent from "./MortgageCalculatorComponent";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center md:p-4">
      <div className="w-full max-w-4xl bg-white md:rounded-3xl md:shadow-2xl overflow-hidden">
        <MortgageCalculatorComponent />
      </div>
    </div>
  );
}

export default App;
