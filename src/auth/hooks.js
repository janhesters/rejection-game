import { Auth, Hub } from 'aws-amplify';
import { useEffect } from 'react';

// NOTE: How to test this?
// This is imperative. Should we refactor this?
function useAuth({ setUser, clearUser, stopLoading }) {
  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      if (event === 'signIn') {
        setUser(data);
        stopLoading();
      }
      if (event === 'signOut') {
        clearUser();
        stopLoading();
      }
    });

    checkUser({ setUser, stopLoading });
  }, [clearUser, setUser, stopLoading]);
}

async function checkUser({ setUser, stopLoading }) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  } catch (error) {
    console.log(error);
  } finally {
    stopLoading();
  }
}

export { useAuth };
