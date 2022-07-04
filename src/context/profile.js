import { createContext, useContext, useState } from 'react';
import { getProfile as getProfileReq } from '../api/profile';

const profileContext = createContext();

export const useProfileContext = () => useContext(profileContext);

export const ProfileProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  const getProfile = async (id) => {
    setLoading(true);
    setError(null);
    setProfile(null);

    try {
      const { data: profile } = await getProfileReq(id);
      setProfile(profile);
    } catch (err) {
      setError(err.message ?? 'Unexpected error');
    }

    setLoading(false);
  };

  return (
    <profileContext.Provider
      value={{
        loading,
        error,
        profile,
        getProfile,
      }}
    >
      {children}
    </profileContext.Provider>
  );
};
