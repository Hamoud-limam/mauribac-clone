import mongoose from "mongoose";

const studentshema = new mongoose.Schema({
    Wilaya_FR:{type:String,required:true ,},
    Num_Bac:{type: String,required:true ,},
    Serie_FR:{type:String,required:true ,},
    Nom_FR:{type:String,required:true ,},
    Moy_Bac:{type:String,required:true ,},
    Decision:{type:String,required:true ,}
})

const student = new mongoose.model('students',studentshema);
export default student ;