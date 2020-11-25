import React from 'react';
import { useSelector } from 'react-redux';
import NotesBar from '../Notes/NotesBar';

const Profile = () => {
  const { displayName, photoURL, email } = useSelector((state) => state.auth);

  return (
    <div className="profile__container">
      <NotesBar />

      <div className="profile__content">
        <div className="profile__title">
          <h1>Personal Info</h1>
          <p>Basic info, like your name and photo</p>
        </div>

        <div className="profile__data">
          <div className="profile__edit">
            <div>
              <h2>Profile</h2>
              <p>Some info may be visible to other people.</p>
            </div>

            <button disabled type="button">
              Edit
            </button>
          </div>

          <div className="profile__wrapper">
            <p className="profile__wrapper_key">PHOTO</p>
            <img src={photoURL} alt="profile" />
          </div>

          <div className="profile__wrapper">
            <p className="profile__wrapper_key">NAME</p>
            <h3>{displayName}</h3>
          </div>

          <div className="profile__wrapper">
            <p className="profile__wrapper_key">BIO</p>
            <h3>-</h3>
          </div>

          <div className="profile__wrapper">
            <p className="profile__wrapper_key">PHONE</p>
            <h3>-</h3>
          </div>

          <div className="profile__wrapper">
            <p className="profile__wrapper_key">EMAIL</p>
            <h3>{email}</h3>
          </div>

          <div className="profile__wrapper">
            <p className="profile__wrapper_key">PASSWORD</p>
            <h3>************</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
