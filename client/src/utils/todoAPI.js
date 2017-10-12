import axios from "axios";

export default {
    getTodos: function(userId) {
        return axios.get("/api/todo/user/" + userId);
    },
    getOneTodo: function(id) {
        return axios.get("/api/todo/" + id);
    },
    addTodo: function(todoData) {
        return axios.post("/api/todo", todoData);
    },
    updateTodo: function(todoData, id) {
        return axios.patch("/api/todo/" + id, todoData);
    },
    deleteTodo: function(id) {
        return axios.delete("/api/todo/" + id);
    }
};
