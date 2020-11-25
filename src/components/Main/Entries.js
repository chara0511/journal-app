import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Entry from './Entry';

const Entries = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className="main__entries scrollY">
      <TransitionGroup component={null}>
        {notes.map((note) => (
          <CSSTransition key={note.id} timeout={1000} classNames="fadedown">
            <Entry {...note} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Entries;
