const mongoose=require('mongoose')

const Connection=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Test')
        console.log("Db Connected")
        console.log(mongoose.connection.readyState)
    } catch (error) {
     console.log('DB connection failed')

    }
}


Connection();


module.exports=Connection;