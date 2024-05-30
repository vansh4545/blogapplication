import mongoose  from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const Connection= async () =>{
  const URL= process.env.MONGODB_URI;
  try{
       await mongoose.connect(URL, {useNewUrlParser:true});
       console.log('database connected successfully');
    }
  catch(error){
       console.log('database connected unsuccesfully',error);
  }
}

export default Connection;