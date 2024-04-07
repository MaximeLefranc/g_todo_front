import FormsUserContainer from '../../Layout/FormsUserContainer/FormsUserContainer';
import InscriptionForm from '../../Components/Forms/InscriptionForm';

import { useRedirectIfLogged } from '../../utils/useRedirectIfLogged';

export default function Inscription() {
  useRedirectIfLogged();

  return (
    <FormsUserContainer>
      <InscriptionForm />
    </FormsUserContainer>
  );
}
