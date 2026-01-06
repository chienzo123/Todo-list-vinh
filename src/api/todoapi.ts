import axiosClient from "./axiosclient";

export const getTodos = () => {
  return axiosClient.get("/todos?_limit=5");
};

export const addTodo = (title: string) => {
  return axiosClient.post("/todos", {
    title,
    completed: false,
  });
};

export const deleteTodo = (id: number) => {
  return axiosClient.delete(`/todos/${id}`);
};
