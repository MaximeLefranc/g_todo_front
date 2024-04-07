import FormsUserContainer from '../../Layout/FormsUserContainer/FormsUserContainer';
import InscriptionForm from '../../Components/Forms/InscriptionForm';

import { useNavigate } from 'react-router-dom';

import { isLogged } from '../../utils/useRedirectIfLogged';
import { useEffect } from 'react';

export default function Inscription() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged()) {
      return navigate('/');
    }
  });

  return (
    <FormsUserContainer>
      <InscriptionForm />
    </FormsUserContainer>
  );
}
