import axios from "axios";

const baseURL = 'http://localhost:5005/api/music';

async function getAllSongs() {
    try {
       let response = await axios.get(baseURL);
       if(response){
      return response.data;
       }
    } catch (error) {
      console.log("Error getting music list: " + error);
    }
  }

async function getSongById(id){
    try {
        let response = await axios.get(`${baseURL}/${id}`);
        return response.data;

    } catch (error) {
          console.error('Error getting song by ID: ' + error);
    }
} 

async function addSong(obj){
    try {
        let response = await axios.post(baseURL,obj,{"content-type":"application/json"});
        return response.data; 
    } catch (error) {
        console.error('Error adding song to library: ' + error);
    }
}

async function updateSong(id, obj){
    try {
        let response = await axios.put(`${baseURL}/${id}`, obj);
        return response.data;
    } catch (error) {
        console.error('Error updating song: ' + error);
    }
}

async function deleteSong(id){
    try {
        let response = await axios.delete(`${baseURL}/${id}`,{"content-type":"application/json"});
        return response.data;
    } catch (error) {
        console.error('Error deleting song: ' + error);
    }
}

export {
    getAllSongs,
    getSongById,
    addSong,
    updateSong,
    deleteSong
}
