import connect from "@/lib/connect"


export async function POST(request: Request) {
	await connect()
	return Response.json({ message: 'OK' })
}