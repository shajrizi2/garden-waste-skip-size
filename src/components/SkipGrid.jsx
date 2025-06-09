import SkipCard from "./SkipCard";

const imagePool = [
  "/4-yarder-skip.jpg",
  "/5-yarder-skip.jpg",
  "/14-yarder-skip.jpg",
  "/20-yarder-skip.jpg",
];

export default function SkipGrid({ skips, selectedId, onSelect }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-6">
      {skips.map((skip, idx) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          selected={selectedId === skip.id}
          onSelect={() => onSelect(skip)}
          imgSrc={imagePool[idx % imagePool.length]}
        />
      ))}
    </div>
  );
}
