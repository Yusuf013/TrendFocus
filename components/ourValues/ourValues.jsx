import { storyblokEditable } from "@storyblok/react/rsc";
import { useState } from "react";

const OurValues = ({ blok }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Extra informatie voor elk van de h2-elementen
  const infoTexts = {
    human: "We value a human approach, always keeping empathy at the forefront of our communication.",
    concise: "We believe in clear, concise communication that respects people's time.",
    simple: "Simplicity is key; we aim to make things easy to understand and use.",
    friendly: "We strive to be approachable, warm, and friendly in all our interactions.",
  };

  return (
    <div
      className="bg-[#002626] bg-cover bg-center h-[600px] flex items-center"
      style={{ backgroundImage: `url(${blok.ourValues_achtergrond.filename})` }}
      {...storyblokEditable(blok)}
    >
      <div className="container lg:mx-auto text-6xl flex flex-col justify-between w-[67%] h-[77%]">
        <div className="flex justify-between">
          <div
            onMouseEnter={() => setHoveredItem('human')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <h2 style={{ color: "#A8FF1A" }}>Human</h2>
            <div
              className={`bg-[#013939] text-white p-4 rounded-md text-sm transition-opacity duration-500 ease-in-out w-[300px] mt-2 ${hoveredItem === 'human' ? 'opacity-100' : 'opacity-0'}`}
            >
              {infoTexts.human}
            </div>
          </div>
          <div
            onMouseEnter={() => setHoveredItem('concise')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <h2 style={{ color: "#EAFFBD" }}>Concise</h2>
            <div
              className={`bg-[#013939] text-white p-4 rounded-md text-sm transition-opacity duration-500 ease-in-out w-[300px] mt-2 ${hoveredItem === 'concise' ? 'opacity-100' : 'opacity-0'}`}
            >
              {infoTexts.concise}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div
            onMouseEnter={() => setHoveredItem('simple')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div
              className={`bg-[#013939] text-white p-4 rounded-md text-sm transition-opacity duration-500 ease-in-out w-[300px] mb-2 ${hoveredItem === 'simple' ? 'opacity-100' : 'opacity-0'}`}
            >
              {infoTexts.simple}
            </div>
            <h2 style={{ color: "#FFFFFF" }}>Simple</h2>
          </div>
          <div
            onMouseEnter={() => setHoveredItem('friendly')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div
              className={`bg-[#013939] text-white p-4 rounded-md text-sm transition-opacity duration-500 ease-in-out w-[300px] mb-2 ${hoveredItem === 'friendly' ? 'opacity-100' : 'opacity-0'}`}
            >
              {infoTexts.friendly}
            </div>
            <h2 style={{ color: "#F4C5FF" }}>Friendly</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
