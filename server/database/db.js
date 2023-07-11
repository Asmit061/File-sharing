import mongoose from 'mongoose';

const DBConnection = async ()=>{
    const MONGODB_URI = `mongodb+srv://asmitbuddy:7LlkpcA1fyOJNft1@cluster0.aimow8o.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(DB_URL,{useNewUrlParser:true});
        console.log('Database connected successfully');
    }catch(error){
        console.error('Error while connecting with the DB',error.message)
    }
}

export default DBConnection;