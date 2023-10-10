import { Input } from "@/components/ui/input"
import connect from "@/lib/connect"
import { Project, User } from "@/lib/models"
import { Dot } from "lucide-react"
import Link from "next/link"
import { AddProject } from "./components/add-project"




export default async function Dashboard() {
	await connect()
	const user = await User.findOne({ email: "lkami@bogital.com" });

	const projects = await Project.find({ ownerId: user.id })

	return (
		<main className="w-full h-screen">
			<header className="p-4 bg-sky-400 text-gray-100 relative">
				<div className="md:max-w-5xl flex justify-between h-32 mx-auto relative">
					<Link href="/" aria-label="Back to homepage" className="flex items-center p-2">
						<img src="/images/logo.jpg" alt="Logo" className="w-16" />
						<span className="font-bold text-3xl pl-2">Spericad 3D</span>
					</Link>
					<ul className="items-stretch hidden text-lg space-x-3 md:flex">
						<li className="flex">
							<Link href="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black border-black">{user.firstName + " " + user.lastName}</Link>
						</li>
					</ul>
					<button className="flex justify-end p-4 md:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>

					<AddProject userId={user?.id as string} />

				</div>
			</header>

			<div className="md:max-w-5xl h-full mx-auto">
				<div className="flex-1 py-4 space-y-8">
					<h2 className="text-5xl font-semibold text-center">Projects</h2>

					<Input
						className="md:max-w-xl mx-auto mt-4"
						type="projects"
						placeholder="Search Projects" />

					<section className="">
						<div className="container flex flex-col justify-center p-4 mx-auto">
							<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
								{
									projects.map((_, i) => (
										<Link href={`dashboard/${_.id}`} key={i} className="relative group overflow-hidden">
											<img
												className="object-cover w-full bg-gray-500 aspect-[4/3] duration-5000 group-hover:scale-150"
												src={`https://source.unsplash.com/random/400x300/?${i}`} />
											<div className="h-8 px-2 absolute inset-0 top-auto flex justify-between items-center bg-gradient-to-t from-black to-transparent">
												<h3 className="text-white font-semibold">
													{_.name}
												</h3>
												<Dot className="w-16 h-16 text-green-500" />
											</div>
										</Link>
									))
								}
							</div>
						</div>
					</section>

				</div>
			</div>


		</main>
	)
}
