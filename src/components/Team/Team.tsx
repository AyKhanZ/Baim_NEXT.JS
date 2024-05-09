import React, { useState, useEffect } from "react";
import accordionData from "./accordionData.json";
import styles from "./Team.module.css";
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";
import Blobs from "@/icons/Blobs";
const Team = () => {
  const [accordionItems, setAccordionItems] = useState(accordionData);
  const [areWorkersOpen, setAreWorkersOpen] = useState(false);
  const [buttonView, setButtonView] = useState(false);
  const toggleAllWorkers = () => {
    setAreWorkersOpen(!areWorkersOpen);
    setButtonView(true);
    const updatedAccordionItems = accordionItems.map((item) => {
      if (item.children) {
        item.children = item.children.map((director) => {
          director.isOpen = !areWorkersOpen;
          if (director.isOpen) {
            director.workers.forEach((worker) => (worker.isOpen = true));
          } else {
            director.workers.forEach((worker) => (worker.isOpen = false));
          }
          return director;
        });
      }
      return item;
    });
    setAccordionItems(updatedAccordionItems);
  };

  useEffect(() => {
    const updatedAccordionItems = accordionItems.map((item) => {
      item.isOpen = true;
      if (item.children) {
        item.children = item.children.map((director) => {
          director.isOpen = true;
          director.workers.forEach((worker) => (worker.isOpen = false));
          return director;
        });
      }
      return item;
    });
    setAccordionItems(updatedAccordionItems);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>

        <h2 className={styles.title}> Наша Команда</h2>
      </div>
      <div className={styles.chart}>
        {accordionItems.map((item, index) => (
          <div className={styles.container} key={index}>
            <EmployeeCard name={item.name} position={item.position} />
            {item.isOpen && item.children && (
              <div className={styles.secondContainer}>
                {item.children.map((director, directorIndex) => (
                  <div key={directorIndex}>
                      <EmployeeCard name={director.name} position={director.position} />
                    {directorIndex === 0 && (
                      <div>
                        <button
                          onClick={toggleAllWorkers}
                          className={`${styles.buttonToggle} ${styles.learnMore}`}
                        >
                          <span className={styles.circle} aria-hidden="true">
                            <span
                              className={
                                areWorkersOpen
                                  ? `${styles.icon} ${styles.arrowClose}`
                                  : `${styles.icon} ${styles.arrowOpen}`
                              }
                            ></span>
                          </span>
                          <span className={styles.buttonText}>
                            {areWorkersOpen ? "Скрыть" : "Подробнее"}
                          </span>
                        </button>
                      </div>
                    )}
                    <div className={styles.space}></div>
                    {director.isOpen && director.workers && (
                      <div className={styles.chart}>
                        {director.workers.map(
                          (worker, workerIndex) =>
                            worker.isOpen && (
                                  <EmployeeCard name={worker.name} position={worker.position} />
                              )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
