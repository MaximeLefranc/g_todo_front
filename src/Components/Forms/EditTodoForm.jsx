import { useState } from 'react';

export default function EditTodoForm({
  content,
  id,
  isDone,
  createdAt,
  editOneTodo,
}) {
  const urlApi = process.env.REACT_APP_API_URL;
  const [value, setValue] = useState(content);

  const handlerEditTodo = (event) => {
    setValue(event.target.value);
  };

  const handlerSubmitTodo = (event) => {
    event.preventDefault();
    editOneTodo(value, isDone, createdAt, id, urlApi);
  };

  return (
    <form onSubmit={handlerSubmitTodo}>
      <input
        type="text"
        value={value}
        onChange={handlerEditTodo}
        className="input--edit"
      />
    </form>
  );
}
