import React from "react";
import { BiCircle } from "react-icons/bi";
import { BiChevronDownCircle } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="task-header">
          <h1>Todo App</h1>
          <span>Stay organized, achieve more</span>
        </div>

        <form className="task-form">
          <input
            type="text"
            id="task-input"
            placeholder="Write your task ..."
          />
          <button type="submit">Add</button>
        </form>

        <ul className="task-list">
          <li>
            <span>Take the trash out</span>

            <div className="task-btns">
              <button className="delete-btn">
                <BiSolidTrash />
              </button>
              <button className="done-btn">
                <BiCircle />
              </button>
            </div>
          </li>

          <li>
            <span>
              Learn a new skill Learn a new skill and save it into your notebook
              because you need to earn it anyway and then continue typing Learn
              a new skill and save it into your notebook because you need to
              earn it anyway and then continue typing
            </span>

            <div className="task-btns">
              <button className="delete-btn">
                <BiSolidTrash />
              </button>
              <button className="done-btn">
                <BiCircle />
              </button>
            </div>
          </li>

          <li>
            <span className="done">
              Learn a new skill and save it into your notebook because you need
              to earn it anyway and then continue typing
            </span>

            <div className="task-btns">
              <button className="delete-btn">
                <BiSolidTrash />
              </button>
              <button class="done-btn">
                <BiChevronDownCircle />
              </button>
            </div>
          </li>
        </ul>

        <div className="clear-all-container">
          <button id="clear-all">Clear All Tasks</button>
        </div>
      </div>
    </div>
  );
};

export default App;
