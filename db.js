import mongoose from "mongoose";

const URI = "mongodb+srv://Tapendra:wo5EsQ4UbVTbHI9G@cluster0.rgm2j1z.mongodb.net/todo";

const connectDB = async ()=> {
    await mongoose.connect(URI , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("DB connected");
}

export default connectDB;