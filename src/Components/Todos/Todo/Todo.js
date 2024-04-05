import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import './todo.scss';

export default function Todo({ content }) {
  return (
    <div className="todo">
      <p>{content}</p>
      <div className="todo__actions">
        <AiOutlineCheckCircle className="todo__actions--icon check" />
        <FiEdit2 className="todo__actions--icon edit" />
        <AiOutlineDelete className="todo__actions--icon delete" />
      </div>
    </div>
  );
}
