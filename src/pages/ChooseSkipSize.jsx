import { useEffect, useState } from "react";
import SkipGrid from "../components/SkipGrid";
import Stepper from "../components/Stepper";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function ChooseSkipSize() {
  const [skips, setSkips] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then(setSkips);
  }, []);

  const handleSelect = (skip) => {
    setSelected(selected?.id === skip.id ? null : skip);
  };

  // You can add actual navigation/handlers for onBack/onContinue if needed
  const handleBack = () => window.history.back();
  const handleContinue = () => {
    // TODO: route to next step
    alert("Continue to permit check!");
  };

  return (
    <div className="min-h-screen bg-[#10172a] pb-36">
      <Stepper currentStep={2} />
      <Hero />
      <SkipGrid
        skips={skips}
        selectedId={selected?.id}
        onSelect={handleSelect}
      />
      {/* Sticky footer as a separate component */}
      <Footer
        selected={selected}
        onBack={handleBack}
        onContinue={handleContinue}
      />
    </div>
  );
}
