import './todo-form.scss';

import { CiSaveDown2 } from 'react-icons/ci';

export default function TodoForm() {
  return (
    <section className="todoForm">
      <div className="todoForm__container">
        <input type="text" name="todo" className="todoForm__input" />
        <div className="todoForm__button">
          <CiSaveDown2 className="todoForm__button--logo" />
        </div>
      </div>
    </section>
  );
}
