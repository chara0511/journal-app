import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Entry from "./Entry";

const Entries = () => {
  const { notes } = useSelector((state) => state.notes);

  const nodeRef = useRef(null);

  return (
    <div className="main__entries scrollY">
      <TransitionGroup>
        {notes.map((note) => (
          <CSSTransition
            key={note.id}
            nodeRef={nodeRef}
            mountOnEnter
            timeout={500}
            classNames="fadedown"
          >
            <Entry {...note} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Entries;
