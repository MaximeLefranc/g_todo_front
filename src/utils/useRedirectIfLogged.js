import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function useRedirectIfLogged() {
  const navigate = useNavigate();
  const alreadyLogged = isLogged();

  useEffect(() => {
    if (alreadyLogged) {
      return navigate('/');
    }
    return navigate('/login');
  }, [alreadyLogged, navigate]);
}

function isLogged() {
  return sessionStorage.getItem('token') ? true : false;
}

export default useRedirectIfLogged;
