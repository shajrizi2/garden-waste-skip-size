import {
  FaRulerCombined,
  FaBoxOpen,
  FaHome,
  FaExclamationTriangle,
} from "react-icons/fa";

const skipInfo = {
  4: {
    dimensions: "6ft x 4ft x 3ft",
    capacity: "30-40 bin bags",
    ideal: "Small home clearances, garden waste",
  },
  5: {
    dimensions: "7ft x 5ft x 3ft",
    capacity: "40-50 bin bags",
    ideal: "Kitchen/bathroom renovations",
  },
  6: {
    dimensions: "9ft x 5ft x 4ft",
    capacity: "50-60 bin bags",
    ideal: "Larger household clearances",
  },
  8: {
    dimensions: "12ft x 4ft x 4ft",
    capacity: "70-80 bin bags",
    ideal: "Large home clearances, construction",
  },
  10: {
    dimensions: "14ft x 4ft x 4ft",
    capacity: "90-100 bin bags",
    ideal: "Major construction projects",
  },
  12: {
    dimensions: "13ft x 6ft x 6ft",
    capacity: "110-120 bin bags",
    ideal: "Commercial & industrial waste",
  },
  14: {
    dimensions: "14ft x 6ft x 6ft",
    capacity: "130-140 bin bags",
    ideal: "Large scale building work",
  },
  16: {
    dimensions: "14ft x 6.5ft x 6.5ft",
    capacity: "150-160 bin bags",
    ideal: "Large construction projects",
  },
  20: {
    dimensions: "20ft x 8ft x 7ft",
    capacity: "210-220 bin bags",
    ideal: "Heavy industrial/commercial",
  },
  40: {
    dimensions: "20ft x 8ft x 8.5ft",
    capacity: "400-440 bin bags",
    ideal: "Large demolition, commercial sites",
  },
};

export default function SkipCard({ skip, selected, onSelect, imgSrc }) {
  const info = skipInfo[skip.size] || {};
  const price = Math.round(skip.price_before_vat * (1 + skip.vat / 100));
  const allowedOnRoad = skip.allowed_on_road;

  return (
    <div
      className={`relative w-full max-w-4xl mx-auto bg-[#222c43] border ${
        selected ? "border-blue-400 shadow-2xl" : "border-transparent"
      } rounded-3xl px-3 sm:px-8 py-7 mb-10 flex flex-col gap-6 md:flex-row md:items-center transition`}
      tabIndex={0}
      aria-label={`${skip.size} Yard Skip`}
    >
      {/* Badge */}
      <span className="absolute top-5 left-5 bg-blue-600 text-white text-base font-bold px-5 py-1 rounded-full shadow z-10">
        {skip.size} Yards
      </span>
      {/* Price badge (desktop only) */}
      <span className="hidden sm:block absolute top-5 right-5 text-2xl font-extrabold text-blue-200">
        £{price}
        <span className="ml-2 text-xs font-normal text-gray-300">
          inc. delivery
        </span>
      </span>
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-64 flex flex-col items-center justify-center">
        <div className="bg-[#10172a] rounded-2xl overflow-hidden w-56 h-36 flex items-center justify-center shadow-lg mx-auto">
          <img
            src={imgSrc}
            alt={`${skip.size} yard skip`}
            className="object-contain max-w-full max-h-full"
            draggable="false"
          />
        </div>
        {/* New: Small, pill-style warning */}
        {!allowedOnRoad && (
          <div className="flex items-center justify-center mt-3 w-full">
            <span className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold text-sm px-4 py-1 rounded-full shadow-sm">
              <FaExclamationTriangle className="text-base" />
              Not Allowed On The Road
            </span>
          </div>
        )}
      </div>

      {/* Price row for mobile */}
      <div className="block sm:hidden w-full text-right text-2xl font-extrabold text-blue-200 mt-2 pr-1">
        £{price}
        <span className="ml-2 text-xs font-normal text-gray-300">
          inc. delivery
        </span>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center md:ml-8">
        <h3 className="text-2xl font-bold text-white mb-2 mt-3 md:mt-0">
          {skip.size} Yard Skip
        </h3>
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex items-center gap-3 text-blue-200 text-base font-medium">
            <FaRulerCombined className="text-2xl opacity-80" />
            <span>Dimensions:</span>
            <span className="font-semibold text-white">
              {info.dimensions || "-"}
            </span>
          </div>
          <div className="flex items-center gap-3 text-green-200 text-base font-medium">
            <FaBoxOpen className="text-2xl opacity-80" />
            <span>Capacity:</span>
            <span className="font-semibold text-white">
              {info.capacity || "-"}
            </span>
          </div>
          <div className="flex items-center gap-3 text-purple-200 text-base font-medium">
            <FaHome className="text-2xl opacity-80" />
            <span>Ideal:</span>
            <span className="font-semibold text-white">
              {info.ideal || "-"}
            </span>
          </div>
        </div>

        <p className="flex items-center gap-2 text-gray-300 text-base mb-4">
          <FaBoxOpen className="inline-block opacity-70" />
          14 day hire period included
        </p>

        <div className="w-full mt-3">
          <button
            className={`w-full px-6 py-3 rounded-xl font-bold shadow transition-all duration-150 flex items-center justify-center gap-2
    ${
      selected
        ? "bg-blue-600 text-white"
        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
    }
    }
    `}
            onClick={onSelect}
          >
            {selected ? (
              <>
                <span className="text-lg">&#10003;</span> Selected
              </>
            ) : (
              <>Select This Skip</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
