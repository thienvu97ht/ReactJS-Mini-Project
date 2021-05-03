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

// Lấy dữ liệu từ localStorage
var data = JSON.parse(localStorage.getItem("tasks"));

// Đưa dữ liệu từ localStorage vào state
var initialState = data ? data : [];


var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      var newTask = {
        id: randomID(),
        name: action.task.name,
        status: action.task.status,
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state]; // (Spread)
    default:
      return state;
  }
};

export default myReducer;
