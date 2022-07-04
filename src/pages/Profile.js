import React, { useEffect } from 'react';
import { ProfileProvider, useProfileContext } from '../context/profile';

export default function Profile() {
  return (
    <ProfileProvider>
      <h1>Who I am</h1>
      <ProfileContent />
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
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
        {profile.login}
      </a>
      <img src={profile.avatar_url} alt={profile.title} />
    </div>
  );
}
