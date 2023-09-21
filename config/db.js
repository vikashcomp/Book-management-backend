const mongoose =require('mongoose')

const connectDB= async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`connected to mongodb database ${conn.connection.host}`)

    }catch(error){
      console.log(`Error i mongodb ${error}`)
    }
}

module.exports=connectDB;