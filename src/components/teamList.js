import React from "react";
import Collapse from "./collapse";
import TeamListItem from "./teamListItem";

const TeamList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Collapse
          key={item.id}
          label={
            <span className="text-lg transition-colors hover:text-yellow-800">
              {item.categoryName}
            </span>
          }
          className="border-b border-gray-900 py-4 lg:py-6"
        >
          {item.description && (
            <div className="py-4 font-light">
              {item.description.description}
            </div>
          )}
          {item.teamMembers && (
            <TeamListItem
              category={item.categoryName}
              items={item.teamMembers}
            />
          )}
          {item.subCategory && (
            <>
              <div className="py-6">
                {item.subCategory.map((item) => (
                  <Collapse
                    key={item.id}
                    label={
                      <span className=" transition-colors hover:text-yellow-800">
                        {item.categoryName}
                      </span>
                    }
                    className="py-4"
                  >
                    <TeamListItem
                      category={item.categoryName}
                      items={item.teamMembers}
                    />
                  </Collapse>
                ))}
              </div>
            </>
          )}
        </Collapse>
      ))}
    </>
  );
};

export default TeamList;
