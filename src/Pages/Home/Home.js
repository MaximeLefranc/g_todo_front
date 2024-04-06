import './home.scss';
import TodoForm from '../../Components/TodoForm/TodoForm';
import Todos from '../../Components/Todos/Todos';
import useRedirectIfLogged from '../../utils/useRedirectIfLogged';

export default function Home() {
  useRedirectIfLogged();
  return (
    <>
      <TodoForm />
      <Todos />
    </>
  );
}
