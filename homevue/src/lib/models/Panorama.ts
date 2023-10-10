import mongoose, { Document, Schema } from 'mongoose';

interface IPanorama extends Document {
	imageUrl: string;
	projectId: mongoose.Types.ObjectId;
	linkedPanoramas: {
		panoramaId: mongoose.Types.ObjectId;
		imageUrl: string;
	}[]; // Array of linked panoramas
	createdAt: Date;
	updatedAt: Date;
}

const panoramaSchema: Schema = new mongoose.Schema({
	imageUrl: { type: String, required: true },
	projectId: { type: Schema.Types.ObjectId, required: true, ref: 'Project' }, // Reference to the parent project
	linkedPanoramas: [
		{
			panoramaId: { type: Schema.Types.ObjectId, required: true, ref: 'Panorama' }, // Reference to the linked panorama
			imageUrl: { type: String, required: true },
		}
	],
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const Panorama = mongoose.models.Panorama || mongoose.model<IPanorama>('Panorama', panoramaSchema);

export default Panorama;
