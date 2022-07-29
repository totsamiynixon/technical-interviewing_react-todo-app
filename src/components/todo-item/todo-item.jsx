import * as React from 'react';
import './todo-item.scss';

export const TodoItem = ({ onClick, checked, onDelete, label, onKeyUp }) => (
  <div className="todo-item">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <input
        tabIndex="-1"
        type="checkbox"
        checked={checked}
        onChange={onClick}
      />
      <span className={checked ? 'checkbox-checked' : ''}>{label}</span>
    </div>
    <button type="button" className="checkbox-delete" onClick={onDelete}>
      x
    </button>
  </div>
);
