import { useState } from 'react';

export default function EditTodoForm({
  content,
  id,
  isDone,
  createdAt,
  editOneTodo,
}) {
  const [value, setValue] = useState(content);

  const handlerEditTodo = (event) => {
    setValue(event.target.value);
  };

  const handlerSubmitTodo = (event) => {
    event.preventDefault();
    editOneTodo(value, isDone, createdAt, id);
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
