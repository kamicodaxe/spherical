import connect from "@/lib/connect"
import Project, { IProject } from "@/lib/models/Project"


export async function POST(
	request: Request,
) {
	await connect()
	const body = await request.json() as IProject
	try {
		const newProject = new Project(body)
		const savedProject = await newProject.save()
		return Response.json({ _id: savedProject.id }, { status: 200 })

	} catch (e) {
		return Response.error()
	}
}