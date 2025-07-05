import axios  from "axios";




export const login = async(username,password)=>{
    const response = await axios.post("http://localhost:5264/Auth/customerLogin", {username, password});
    console.log(response);
}