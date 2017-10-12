import axios from "axios";

export default {
    getSubtasks: function(userId) {
        return axios.get("/api/subtask/user/" + userId);
    },
    getSubtaskBySkill: function(id) {
        return axios.get("/api/subtask/skills/" + id);
    },
    addSubtasks: function(subtaskData) {
        return axios.post("/api/subtask", subtaskData);
    },
    updateSkill: function(subtaskData, id) {
        return axios.patch("/api/subtask/" + id, subtaskData);
    },
    deleteSkill: function(id) {
        return axios.delete("/api/subtask/" + id);
    }
};
