import axios from "axios";
import type { Notes } from "../types/notes";

let API_URL = "" ;
if (import.meta.env.VITE_MODE==="development"){
    API_URL = import.meta.env.VITE_LOCAL_API_URL;
}
if (import.meta.env.VITE_MODE==="production"){
    API_URL = import.meta.env.VITE_API_URL;
}

console.log("The API =>" , API_URL);
// In Normal Mode Vs Axio
// export const getNotes =async ():Promise<Notes[]> =>{
//     const response = await fetch(`${API_URL}/todos`);
//     console.log(response);
//     const notes = await  response.json();
//     return notes.todos 
// }
export const getNotes =async ():Promise<Notes[]> =>{
    const {data} = await axios.get(`${API_URL}/todos`)
    return data.todos
} 

// export const createNote = async (title : string):Promise<Notes[]> =>{
//     const response = await fetch(`${API_URL}/create`,{
//         method : 'POST',
//         headers :{
//             "Content-Type" : "application/json"
//         },
//         body : JSON.stringify({title}),
//     });
//     const data =await response.json();
//     return data.todo;
// }
export const createNote = async (title : string):Promise<Notes[]> =>{
    const {data} = await axios.post(`${API_URL}/create`, {title});
    return data.title
}


// export const updateNote = async (id : string, title : string) =>{
//     await fetch(`${API_URL}/update/${id}`, {
//         method : "PUT",
//         headers :{
//             "Content-Type" : "application/json"
//         },
//         body : JSON.stringify({title}),
//     })
// }
export const updateNote = async (id : string, title : string) =>{
    await axios.put(`${API_URL}/update/${id}`, {title})
}
export const deleteNote = async  (id : string) =>{
    await fetch(`${API_URL}/delete/${id}`, {
        method : "DELETE"
    });

}