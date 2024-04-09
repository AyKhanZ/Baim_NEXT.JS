import React, { useState } from "react";
import accordionData from "./accordionData.json";

const Accordion: React.FC = () => {
  const [accordionItems, setAccordionItems] = useState(accordionData);
  const [areWorkersOpen, setAreWorkersOpen] = useState(false);

  const preventClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const toggleAllWorkers = () => {
    setAreWorkersOpen(!areWorkersOpen);

    const updatedAccordionItems = accordionItems.map((item) => {
      if (item.children) {
        item.children = item.children.map((director) => {
          director.isOpen = !areWorkersOpen;
          return director;
        });
      }
      return item;
    });
    setAccordionItems(updatedAccordionItems);
  };

  return (
    <div>
      {accordionItems.map((item, index) => (
        <div key={index}>
          {/* Работники департамента */}
          {item.isOpen && item.children && (
            <div>
              {item.children.map((director, directorIndex) => (
                <div key={directorIndex}>
                  {/* Заголовок директора */}
                  <div onClick={preventClick}>
                    {director.name} - {director.position}
                  </div>
                  {/* Работники (скрыты по умолчанию) */}
                  {director.isOpen && director.workers && (
                    <div>
                      {director.workers.map((worker, workerIndex) => (
                        <div key={workerIndex}>{worker}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      {/* Кнопка для открытия или закрытия всех работников */}
      <button onClick={toggleAllWorkers}>
        {areWorkersOpen ? "Close All Workers" : "Open All Workers"}
      </button>
    </div>
  );
};

export default Accordion;
