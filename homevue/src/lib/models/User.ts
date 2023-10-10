import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	avatarUrl?: string;
	bio?: string;
	createdAt: Date;
	updatedAt: Date;
}

const userSchema: Schema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	avatarUrl: { type: String },
	bio: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
