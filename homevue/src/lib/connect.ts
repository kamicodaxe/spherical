import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI as string;

// console.log("Mongo db URL ", MONGODB_URI)
const connect = async () => mongoose.connect(MONGODB_URI, {});

const db = mongoose.connection;

db.once('open', () => {
	console.log('Connected to MongoDB');
});

db.on('error', (err) => {
	console.error('Error connecting to MongoDB:', err);
});

export default connect;
