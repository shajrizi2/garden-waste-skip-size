export default function Footer({ selected, onBack, onContinue }) {
  return (
    <div
      className={`
        fixed bottom-0 left-0 w-full z-50
        px-0 md:px-0
        border-t border-blue-900
        shadow-[0_4px_32px_0_rgba(0,0,0,0.28)]
        rounded-t-2xl
        aria-label="Page navigation footer"
      `}
    >
      {/* MOBILE ONLY */}
      <div className="w-full flex flex-col items-stretch gap-2 bg-[#181e31]/95 px-3 pt-3 pb-2 md:hidden rounded-t-2xl">
        {selected && (
          <div className="flex items-center gap-2 bg-[#222c43] rounded-xl px-3 py-2 shadow">
            {selected.image && (
              <img
                src={selected.image}
                alt={`${selected.size} Yard Skip`}
                className="w-9 h-9 rounded object-cover border border-blue-900 shadow"
              />
            )}
            <span className="flex-1 font-semibold text-blue-100 text-base">
              {selected.size} Yard Skip
              <span className="text-blue-400 font-bold ml-1">
                £
                {Math.round(
                  selected.price_before_vat * (1 + selected.vat / 100)
                )}
              </span>
              <span className="text-xs text-gray-400 ml-1">(14 day hire)</span>
            </span>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={onBack}
            className="flex-1 border border-blue-500 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 px-0 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Go back to previous step"
          >
            <span className="text-lg">&larr;</span>
            <span>Back</span>
          </button>
          <button
            onClick={onContinue}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold px-0 py-3 rounded-xl text-base shadow-md transition-all disabled:bg-blue-900 disabled:text-blue-300 disabled:cursor-not-allowed"
            disabled={!selected}
            aria-label="Continue to permit check"
          >
            Continue
          </button>
        </div>

        <div className="text-xs text-gray-500 mt-1 text-center leading-tight">
          Imagery and info may not reflect the exact specification. Colours,
          options, and accessories may vary or be at extra cost.
        </div>
      </div>

      {/* DESKTOP ONLY */}
      <div className="hidden md:grid w-full grid-cols-4 items-center bg-[#181e31] px-6 py-2 rounded-t-2xl border-t border-blue-900 shadow-2xl">
        <div className="flex justify-start">
          <button
            onClick={onBack}
            className="border border-blue-500 text-blue-400 bg-transparent hover:bg-blue-500/10 px-6 py-2 rounded-xl font-semibold flex items-center gap-2 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Go back to previous step"
          >
            <span className="text-lg">&larr;</span>
            <span>Back</span>
          </button>
        </div>

        <div className="flex justify-center">
          {selected && (
            <div className="px-4 py-1 rounded-full bg-[#222c43] text-white/90 text-base font-semibold shadow flex items-center justify-center min-w-[180px]">
              {selected.size} Yard Skip –{" "}
              <span className="ml-2 font-bold text-blue-300">
                £
                {Math.round(
                  selected.price_before_vat * (1 + selected.vat / 100)
                )}
              </span>
              <span className="ml-2 text-xs text-gray-400 font-normal">
                (14 day hire)
              </span>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <span className="text-xs text-gray-400 font-medium px-2">
            Imagery and info may not reflect the exact specification. Colours,
            options, and accessories may vary or be at extra cost.
          </span>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onContinue}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl text-lg shadow-lg transition-all duration-150 disabled:bg-blue-900 disabled:text-blue-300 disabled:cursor-not-allowed"
            disabled={!selected}
            aria-label="Continue to permit check"
          >
            Continue to Permit Check &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
