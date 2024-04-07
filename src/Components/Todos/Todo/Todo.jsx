// React
import { useState } from 'react';

// React router dom
import { useNavigate } from 'react-router-dom';

// Axios
import axios from 'axios';

// Components
import EditTodoForm from '../../Forms/EditTodoForm';

// Icons
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';

//style
import './todo.scss';

export default function Todo({ id, content, isDone, creationDate }) {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  const urlApi = process.env.REACT_APP_API_URL;
  const isDoneClass = isDone ? 'isDone' : '';

  const date = new Date(Date.parse(creationDate));
  const formattedDate = date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const editOneTodo = (content, isDone, createdAt, id, urlApi) => {
    axios
      .put(
        `${urlApi}todos/${id}`,
        {
          content: content,
          isDone: isDone,
          createdAt: createdAt,
          author: `${urlApi}users/${sessionStorage.getItem('id')}`,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          navigate(0);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handlerDeleteTodo = () => {
    if (!window.confirm('Voulez-vous vraiment supprimer cette todo ?')) {
      return;
    }
    axios
      .delete(`${urlApi}todos/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      })
      .then(() => {
        navigate(0);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="todo">
      <div className="todo__wrap">
        {isEdit ? (
          <EditTodoForm
            content={content}
            id={id}
            isDone={isDone}
            createdAt={creationDate}
            editOneTodo={editOneTodo}
          />
        ) : (
          <p className={isDoneClass}>{content}</p>
        )}
        <div className="todo__actions">
          {isDone ? (
            <AiFillCheckCircle
              className="todo__actions--icon check"
              onClick={() =>
                editOneTodo(content, !isDone, creationDate, id, urlApi)
              }
            />
          ) : (
            <AiOutlineCheckCircle
              className="todo__actions--icon check"
              onClick={() =>
                editOneTodo(content, !isDone, creationDate, id, urlApi)
              }
            />
          )}

          <FiEdit2
            className="todo__actions--icon edit"
            onClick={() => setIsEdit(!isEdit)}
          />
          <AiOutlineDelete
            className="todo__actions--icon delete"
            onClick={handlerDeleteTodo}
          />
        </div>
      </div>
      <div className="todo__infos">
        <span className="todo__infos--date">{formattedDate}</span>
      </div>
    </div>
  );
}
