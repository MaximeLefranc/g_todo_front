import './login.scss';

import FormsUserContainer from '../../Layout/FormsUserContainer/FormsUserContainer';
import LoginForm from '../../Components/LoginForm/LoginForm';
import useRedirectIfLogged from '../../utils/useRedirectIfLogged';

export default function Login() {
  useRedirectIfLogged();

  return (
    <FormsUserContainer>
      <LoginForm />
    </FormsUserContainer>
  );
}
