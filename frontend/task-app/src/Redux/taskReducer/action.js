import axios from "axios";
import {
  DELETE_TASK_SUCCSESS,
  GET_TASK_SUCCSESS,
  POST_TASK_SUCCSESS,
  TASK_ERROR,
  TASK_REQUEST,
  UPDATE_TASK_SUCCSESS,
} from "./actionType";



// Action creator for task request
export const taskRequest = () => ({
  type: TASK_REQUEST,
});

// Action creator for successful task creation
export const postTaskSuccess = (tasks) => ({
  type: POST_TASK_SUCCSESS,
  payload: tasks,
});

// Action creator for successful task retrieval
export const getTaskSuccess = (tasks) => ({
  type: GET_TASK_SUCCSESS,
  payload: tasks,
});

// Action creator for successful task update
export const updateTaskSuccess = (task) => ({
  type: UPDATE_TASK_SUCCSESS,
  payload: task,
});

// Action creator for successful task deletion
export const deleteTaskSuccess = (res, taskId) => ({
  type: DELETE_TASK_SUCCSESS,
  payload: { taskId, res },
});

// Action creator for task-related errors
export const taskError = (error) => ({
  type: TASK_ERROR,
  payload: error,
});

// Function to create a new task
export const createTask = (taskData) => async (dispatch) => {
  console.log(taskData);

  try {
    dispatch(taskRequest());
    const token = localStorage.getItem("mytoken");
    const response = await axios.post(
      "https://agile-eel-button.cyclic.app/task/create",
      taskData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(postTaskSuccess(response.data));
    console.log(response.data);
    alert("added task successfully")
    return response;
  } catch (error) {
    dispatch(taskError(error?.response?.data));
    console.log(error);
    return error;
  }
};

export const getAllTasks = async (dispatch) => {
 

  try {
    dispatch(taskRequest());
    const token = localStorage.getItem("mytoken");
    const response = await fetch(`https://agile-eel-button.cyclic.app/task/read`, {
      method: "GET", // or 'PUT'
      headers: {
        Authorization: `Bearer ${token}`,
      },
      
    });

    const result = await response.json();
    console.log("Success:", result);
    dispatch(getTaskSuccess(result));
  } catch (error) {
    console.error("Error:", error);
    dispatch(taskError())
  }


};

export const updateTask = (id, updatedData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("mytoken");
    const response = await fetch(`https://agile-eel-button.cyclic.app/task/edit/${id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });

    const result = await response.json();
    console.log("Success:", result);
    dispatch(getTaskSuccess(result));
    alert("edited task successfully")
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deleteTaskData = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("mytoken");
    const response = await fetch(`https://agile-eel-button.cyclic.app/task/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);
    console.log("deletd successfully");
    dispatch(getTaskSuccess());
    alert("deleted task successfully")
  } catch (error) {
    console.error("Error:", error);
  }
};
