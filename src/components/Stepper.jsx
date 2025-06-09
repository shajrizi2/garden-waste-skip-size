import {
  FaMapMarkerAlt,
  FaLeaf,
  FaTruck,
  FaIdCard,
  FaCalendarAlt,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  { label: "Postcode", icon: FaMapMarkerAlt },
  { label: "Waste Type", icon: FaLeaf },
  { label: "Select Skip", icon: FaTruck },
  { label: "Permit Check", icon: FaIdCard },
  { label: "Choose Date", icon: FaCalendarAlt },
  { label: "Payment", icon: FaCreditCard },
];

export default function Stepper({ currentStep = 2 }) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-6 mb-2">
      <div className="flex items-center justify-center min-w-[480px] sm:min-w-0">
        {steps.map((step, idx) => {
          const isActive = idx === currentStep;
          const isComplete = idx < currentStep;
          const Icon = step.icon;

          return (
            <div key={step.label} className="flex items-center">
              {/* Step icon */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center
                    transition-all duration-200 border-2
                    ${
                      isComplete
                        ? "bg-neutral-800 border-green-400"
                        : isActive
                        ? "bg-blue-900 border-blue-400"
                        : "bg-neutral-800 border-neutral-600"
                    }
                    shadow`}
                >
                  {isComplete ? (
                    <FaCheckCircle className="text-green-400 text-xl" />
                  ) : (
                    <Icon
                      className={`${
                        isActive ? "text-blue-400" : "text-neutral-400"
                      } text-lg sm:text-xl`}
                    />
                  )}
                </div>
                <div
                  className={`mt-2 text-xs font-semibold text-center whitespace-nowrap transition-all
                    ${
                      isActive
                        ? "text-blue-100"
                        : isComplete
                        ? "text-green-300"
                        : "text-neutral-400"
                    }`}
                  style={{ maxWidth: 70 }}
                >
                  {step.label}
                </div>
              </div>
              {/* Connector */}
              {idx < steps.length - 1 && (
                <div
                  className={`w-8 sm:w-14 h-1 mx-1 sm:mx-2 rounded-full transition-all duration-200
                    ${
                      isComplete
                        ? "bg-green-400"
                        : isActive
                        ? "bg-blue-400"
                        : "bg-neutral-700"
                    }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
