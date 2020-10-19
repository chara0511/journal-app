import React from "react";
import Entry from "./Entry";

const Entries = () => {
  const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="main__entries scrollY">
      {entries.map((entry) => (
        <Entry key={entry} />
      ))}
    </div>
  );
};

export default Entries;
