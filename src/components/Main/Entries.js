import React from "react";
import { useSelector } from "react-redux";
import Entry from "./Entry";

const Entries = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className="main__entries scrollY">
      {notes.map((note) => (
        <Entry key={note.id} {...note} />
      ))}
    </div>
  );
};

export default Entries;
