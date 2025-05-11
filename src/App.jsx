import React from "react";

const App = () => {
  return (
    <div>
      <div class="container">
        <div class="task-header">
          <h1>Todo App</h1>
          <span>Stay organized, achieve more</span>
        </div>

        <form class="task-form">
          <input
            type="text"
            id="task-input"
            placeholder="Write your task ..."
          />
          <button type="submit">Add</button>
        </form>

        <ul class="task-list">
          <li>
            <span>Take the trash out</span>

            <div class="task-btns">
              <button class="delete-btn">
                <i class="bx bx-trash"></i>
              </button>
              <button class="done-btn">
                <i class="bx bx-circle"></i>
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

            <div class="task-btns">
              <button class="delete-btn">
                <i class="bx bx-trash"></i>
              </button>
              <button class="done-btn">
                <i class="bx bx-circle"></i>
              </button>
            </div>
          </li>

          <li>
            <span class="done">
              Learn a new skill and save it into your notebook because you need
              to earn it anyway and then continue typing
            </span>

            <div class="task-btns">
              <button class="delete-btn">
                <i class="bx bx-trash"></i>
              </button>
              <button class="done-btn">
                <i class="bx bx-check-circle"></i>
              </button>
            </div>
          </li>
        </ul>

        <div class="clear-all-container">
          <button id="clear-all">Clear All Tasks</button>
        </div>
      </div>
    </div>
  );
};

export default App;
