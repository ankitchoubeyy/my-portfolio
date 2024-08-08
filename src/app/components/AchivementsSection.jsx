'use client'
import React from "react";

const achivementsList = [
  {
    metric: `Projects`,
    value: `100`,
  },
  {
    metric: `Users`,
    value: `100`,
  },
  {
    metric: `Awards`,
    value: `10+`,
  },
  {
    metric: `Years`,
    value: `3+`,
  },
];

function AchivementsSection() {
  return (
    <div className="py-8 xl:gap-16 sm:py-16 xl:px-16 ">
      <div className="sm:border-[#3335f] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achivementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold">
                {achievement.metric}
              </h2>
              <p className="text-white">{achievement.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AchivementsSection;
