import { Auth, Hub } from 'aws-amplify';
import { useEffect } from 'react';

// NOTE: How to test this?
// This is imperative. Should we refactor this?
function useAuth({ setUser, clearUser, fetchQuestions, stopLoading }) {
  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      if (event === 'signIn') {
        setUser(data);
        fetchQuestions();
        stopLoading();
      }
      if (event === 'signOut') {
        clearUser();
        stopLoading();
      }
    });

    checkUser({ fetchQuestions, setUser, stopLoading });
  }, [clearUser, fetchQuestions, setUser, stopLoading]);
}

async function checkUser({ fetchQuestions, setUser, stopLoading }) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
    fetchQuestions();
  } catch (error) {
    console.log(error);
  } finally {
    stopLoading();
  }
}

export { useAuth };
