import * as taskApis from "../apis/task";

export const fetchListTask = () => {
  return (dispatch) => {
    taskApis
      .getList()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
