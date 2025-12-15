const mongoose=require('mongoose')

const Connection=async()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Db Connected")
        console.log(mongoose.connection.readyState)
    } catch (error) {
     console.log('DB connection failed')

    }
}


Connection();


module.exports=Connection;