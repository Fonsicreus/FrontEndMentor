import AttributionComponent from "./AttributionComponent";
import ResultsSummaryComponent from "./ResultsSummaryComponent";

function App() {
  return (
    <div className="flex flex-col justify-center max-sm:justify-start items-center h-screen bg-pale-blue font-hanken overflow-x-hidden m-auto">
      <ResultsSummaryComponent />
      <AttributionComponent />
    </div>
  );
}

export default App;