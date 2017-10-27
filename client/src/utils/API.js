import axios from "axios";
        
export default {
      // Gets all journal entries
  getEntries: function() {
    return axios.get("/api/entries");
  },
  // Gets the entry with the given id
  getEntry: function(id) {
    return axios.get("/api/entries" + id);
  },
  // Deletes the entry with the given id
  deleteEntry: function(id) {
    return axios.delete("/api/entries" + id);
  },
  // Saves an entry to the database
  saveEntry: function(entryData) {
    console.log("about to make Axios call", entryData);
    return axios.post("/api/entries", entryData);
    console.log("made the Axios call");
    
  }
};
