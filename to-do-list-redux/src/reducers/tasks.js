import * as types from "../constants/ActionTypes";

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

var randomID = () => {
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "_" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

var findIndex = (tasks, id) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

// Lấy dữ liệu từ localStorage
var data = JSON.parse(localStorage.getItem("tasks"));

// Đưa dữ liệu từ localStorage vào state
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
  var id = "";
  var index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.SAVE_TASK:
      
      var task = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status,
      };

      if (!task.id) {
        task.id = randomID();
        state.push(task);
      } else {
        id = task.id;
        index = findIndex(state, id);
        // Override state[index]
        state[index] = task;
      }

      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state]; // (Spread)
    case types.UPDATE_STATUS_TASK:
      id = action.id;
      index = findIndex(state, id);

      // Override state[index]
      state[index] = {
        ...state[index],
        status: !state[index].status,
      };

      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state]; // (Spread)
    case types.DELETE_TASK:
      id = action.id;
      index = findIndex(state, id);

      // Xóa State[index]
      state.splice(index, 1);

      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state]; // (Spread)
    default:
      return state;
  }
};

export default myReducer;
