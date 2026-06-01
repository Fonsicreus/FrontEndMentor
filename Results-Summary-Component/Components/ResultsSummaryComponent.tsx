import data from "../data.json";

type Category = "Reaction" | "Memory" | "Verbal" | "Visual";

const categoryStyles: Record<Category, string> = {
  Reaction: "bg-light-red/10 text-light-red",
  Memory: "bg-orangey-yellow/10 text-orangey-yellow",
  Verbal: "bg-green-teal/10 text-green-teal",
  Visual: "bg-cobalt-blue/10 text-cobalt-blue",
};

const categoryIcons: Record<Category, string> = {
  Reaction: "icon-reaction",
  Memory: "icon-memory",
  Verbal: "icon-verbal",
  Visual: "icon-visual",
};

function ResultsSummaryComponent() {
  return (
    <section className="w-2xl max-sm:w-full max-sm:shadow-none h-[450px] max-sm:h-auto flex max-sm:flex-col justify-center rounded-3xl max-sm:rounded-t-none overflow-hidden bg-white shadow-xl">
      <div className="text-center bg-linear-to-t from-light-royal-blue to-light-slate-blue p-8 max-sm:p-6 max-sm:pb-8 w-1/2 max-sm:w-full max-sm:rounded-b-3xl max-sm:rounded-t-none rounded-3xl flex flex-col justify-between max-sm:gap-4">
        <h2 className="text-light-lavender font-semibold text-xl max-sm:text-base">Your Result</h2>
        <div className="rounded-full size-36 max-sm:size-28 bg-linear-to-b from-violet-blue to-persian-blue mx-auto flex flex-col justify-center items-center my-4 max-sm:my-2">
          <h1 className="text-white text-6xl max-sm:text-5xl font-bold leading-none">76</h1>
          <span className="text-light-lavender text-xs mt-2">of 100</span>
        </div>
        <div>
          <h3 className="text-white text-2xl max-sm:text-xl font-bold mb-2">Great</h3>
          <p className="text-light-lavender text-[14px] max-sm:text-xs leading-snug px-4 max-sm:px-2">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>
      <div className="w-1/2 max-sm:w-full p-8 max-sm:p-6 flex flex-col justify-between max-sm:gap-4">
        <h3 className="text-xl max-sm:text-lg font-bold text-dark-gray-blue">Summary</h3>

        <div className="flex flex-col gap-4 max-sm:gap-3 my-4 max-sm:my-2">
          {data.map((item) => (
            <ResultsSummaryCard
              key={item.category}
              score={item.score}
              iconClass={categoryIcons[item.category as Category]}
              text={item.category}
              color={categoryStyles[item.category as Category]}
            />
          ))}
        </div>

        <button type="button" aria-label="Continue to the next step" className="rounded-full text-white bg-dark-gray-blue w-full p-3 max-sm:p-2.5 max-sm:text-sm font-semibold hover:bg-linear-to-t hover:from-light-royal-blue hover:to-light-slate-blue transition-colors cursor-pointer">
          Continue
        </button>
      </div>
    </section>
  );
}

type ResultsSummaryCardProps = {
  score: number;
  iconClass: string;
  text: string;
  color: string;
};

function ResultsSummaryCard({ score, iconClass, text, color }: ResultsSummaryCardProps) {
  return (
    <div className={`flex w-full p-3.5 max-sm:p-2.5 rounded-xl justify-between items-center ${color}`}>
      <div className="flex items-center gap-3 max-sm:gap-2">
        <div className={`size-5 max-sm:size-4 bg-contain bg-no-repeat bg-center ${iconClass}`} aria-hidden="true" />
        <span className="font-semibold max-sm:text-sm">{text}</span>
      </div>

      <div className="font-semibold text-dark-gray-blue max-sm:text-sm">
        <span>{score}</span>
        <span className="text-dark-gray-blue/50"> / 100</span>
      </div>
    </div>
  );
}

export default ResultsSummaryComponent;
