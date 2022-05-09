import mongoose from "mongoose";

mongoose.connect("mongodb+srv://igorsnascimento:isn1@cluster0.jd6ep.mongodb.net/node_al1");

let db = mongoose.connection;

export default db;