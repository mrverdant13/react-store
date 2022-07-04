import React, { useEffect } from 'react';
import { ProfileProvider, useProfileContext } from '../context/profile';
import './Profile.css';

export default function Profile() {
  return (
    <ProfileProvider>
      <div className="page">
        <h1 className="page-title">Who I am</h1>
        <ProfileContent />
      </div>
    </ProfileProvider>
  );
}

function ProfileContent() {
  const { loading, error, profile, getProfile } = useProfileContext();
  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (profile == null) {
    return (
      <div>
        <h2>
          {loading && <>Loading...</>}
          {error && <>{error.message ?? 'Unexpected error'}</>}
          {!loading && !error && <>Unavailable profile</>}
        </h2>
      </div>
    );
  }

  return (
    <div className="content">
      <img
        className="profile-image"
        src={profile.avatar_url}
        alt={profile.title}
      />
      <h2 className="profile-name">{profile.name}</h2>
      <p className="profile-description">
        {profile.bio}
        <br />
        <br />
        <span>
          My GitHub:{' '}
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            {profile.login}
          </a>
        </span>
      </p>
    </div>
  );
}
