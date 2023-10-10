import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
	name: string;
	description: string;
	ownerId: mongoose.Types.ObjectId;
	panoramas: mongoose.Types.ObjectId[];
	tags: string[]; // Array of tags specific to this project
	createdAt: Date;
	updatedAt: Date;
	// other properties based on your requirements
}

const projectSchema: Schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	ownerId: { type: Schema.Types.ObjectId, required: true, ref: 'User' }, // Reference to the owner (User)
	panoramas: [{ type: Schema.Types.ObjectId, ref: 'Panorama' }], // Reference to associated panoramas
	tags: [{ type: String }], // Tags specific to this project
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	// ... other properties based on your requirements
});

const Project = mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);

export default Project;
