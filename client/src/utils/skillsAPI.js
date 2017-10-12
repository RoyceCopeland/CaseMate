import axios from "axios";

export default {
    //get all skills for the user
    getSkills: function(userId) {
        return axios.get("/api/skill/user/" + userId);
    },
    //get specific skill by id
    getOneSkill: function(id) {
        return axios.get("/api/skill/" + id);
    },
    //add skill to agenda
    addSkill: function(skillData) {
        return axios.post("/api/skill", skillData);
    },
    //edit skill
    updateSkill: function(id, skillData) {
        return axios.patch("/api/skill/" + id, skillData);
    },
    //delete skill by id
    deleteSkill: function(id) {
        return axios.delete("/api/skill/" + id);
    }
};
