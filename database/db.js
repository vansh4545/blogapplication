import mongoose  from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const Connection= async () =>{
  const URL= process.env.MONGODB_URI;
  try{
       await mongoose.connect("mongodb+srv://vanshgupta4545:25July@2003@cluster0.ymwz4v3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
       console.log('database connected successfully');
    }
  catch(error){
       console.log(URL);
       console.log('database connected unsuccesfully',error);
  }
}

export default Connection;