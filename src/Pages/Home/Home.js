import './home.scss';
import TodoForm from '../../Components/TodoForm/TodoForm';
import Todos from '../../Components/Todos/Todos';

export default function Home() {
  return (
    <>
      <TodoForm />
      <Todos />
    </>
  );
}
