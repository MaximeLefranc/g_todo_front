import './login.scss';

import FormsUserContainer from '../../Layout/FormsUserContainer/FormsUserContainer';
import LoginForm from '../../Components/Forms/LoginForm';
import { useRedirectIfLogged } from '../../utils/useRedirectIfLogged';

export default function Login() {
  useRedirectIfLogged();

  return (
    <FormsUserContainer>
      <LoginForm />
    </FormsUserContainer>
  );
}
