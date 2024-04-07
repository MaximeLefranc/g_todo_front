import './error.scss';
import { useLocation } from 'react-router-dom';

export default function Error({ code, msg }) {
  const { state } = useLocation();
  const { errorCode, errorMsg, isRedirection } = state;

  console.log(errorCode, errorMsg, isRedirection);
  return (
    <section className="error">
      <h2>Error {code}</h2>
      <p>{msg}</p>
    </section>
  );
}
