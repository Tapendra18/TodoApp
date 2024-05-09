import mongoose from "mongoose";

const URI = "mongodb+srv://Tapendra:NRDARW4IpU5ZlOVE@cluster0.rgm2j1z.mongodb.net/todo";

export async function connect() {
    try {
        mongoose.connect(URI)
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log('Connected Mongo db')
        })
        connection.on('error', (err) => {
            console.log("Mongo db connection error" + err);
            process.exit();
        })
    } catch (error) {
        console.log("Error connecting to DB")
        console.log(error);
    }
}

// const connectDB = async () => {
//     await mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
//     console.log("DB connected");
// }

// export default connectDB;