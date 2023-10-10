import connect from "@/lib/connect";
import { Project, User } from "@/lib/models";
import { IUser } from "@/lib/models/User";
import { Shericad } from "@/components/shericad";
import { IProject } from "@/lib/models/Project";

interface PanoramaProps {
	params: {
		pid: string
		panoId: string
	}
}
{/* The magic of Spericad3D is in this component */ }
export default async function Panorama({
	params: {
		pid,
		panoId
	}
}: PanoramaProps) {

	await connect()
	const user = await User.findOne({ email: "lkami@bogital.com" })
	// @ts-ignore Pass only data needed to client components
	const userObj: IUser = {
		id: user.id.toString(),
		firstName: user.firstName,
		lastName: user.lastName,
	}
	const project = await Project.findOne({ ownerId: user.id, _id: pid })
	// @ts-ignore Pass only data needed to client components
	const projectObj: IProject = {
		ownerId: project.ownerId.toString(),
		id: project.id.toString(),
		name: project.name,
		description: project.description,
	}

	return (
		<main className="flex flex-col">
			<Shericad user={userObj as IUser} project={projectObj} panoId={panoId} />
		</main>
	)
}
