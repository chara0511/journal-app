import React from 'react';
import { useSelector } from 'react-redux';
import Notes from '../Notes/Notes';
import SideBar from './SideBar';
import Unselected from './Unselected';

const Main = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="main__container">
      <SideBar />

      <main>{active ? <Notes /> : <Unselected />}</main>
    </div>
  );
};

export default Main;
