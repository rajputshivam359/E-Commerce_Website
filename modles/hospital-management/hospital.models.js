import mongoose from "mongoose"
const hospitalSchema = new mongoose.Schema({},{timestamps:true})

export const HospitalSchema = mongoose.model("HospitalSchema", hospitalSchema )