import './todos.scss';
import { useEffect, useState } from 'react';
import Todo from './Todo/Todo';
import axios from 'axios';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const urlApi = process.env.REACT_APP_API_URL;
    const IDUser = sessionStorage.getItem('id');
    axios
      .get(`${urlApi}users/${IDUser}`)
      .then((response) => {
        if (response.status === 200) {
          setTodos(response.data?.todos);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  todos.sort((a, b) => {
    return a.isDone - b.isDone;
  });

  return (
    <section className="todos">
      <div className="todos__container">
        {todos &&
          todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              content={todo.content}
              isDone={todo.isDone}
              creationDate={todo.createdAt}
            />
          ))}
      </div>
    </section>
  );
}
