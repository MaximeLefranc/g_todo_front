import './todo-form.scss';
import { useState, useRef, useEffect } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { CiSaveDown2 } from 'react-icons/ci';

export default function TodoForm() {
  const inputRef = useRef();
  const [todo, setTodo] = useState('');
  const navigate = useNavigate();

  const handlerOnChange = (event) => {
    setTodo(event.target.value);
  };

  const handlerAddTodo = (event) => {
    event.preventDefault();
    const urlApi = process.env.REACT_APP_API_URL;
    axios
      .post(
        `${urlApi}todos`,
        {
          content: todo,
          isDone: false,
          author: `${urlApi}users/${sessionStorage.getItem('id')}`,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          setTodo('');
          return navigate(0);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <section className="todoForm">
      <div className="todoForm__container">
        <form onSubmit={handlerAddTodo}>
          <input
            ref={inputRef}
            type="text"
            name="todo"
            className="todoForm__input"
            value={todo}
            onChange={handlerOnChange}
          />
          <div className="todoForm__button" onClick={handlerAddTodo}>
            <CiSaveDown2 className="todoForm__button--logo" />
          </div>
        </form>
      </div>
    </section>
  );
}
