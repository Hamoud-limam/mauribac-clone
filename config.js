import mongoose from "mongoose";

const db = mongoose.connect('mongodb://localhost:27017/mauribac');
db.then(()=>{
    console.log('connected to db')
})
db.catch((error)=>{
    console.log(error)
})

export default db ;