import connect from "@/lib/connect";
import { Project, User } from "@/lib/models";
import { Plus, Dot, GalleryThumbnails, MoreVertical, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { ImageAction } from "./components/image-action";
import { IProject } from "@/lib/models/Project";


const AddOrDropPano = () => (
	<div className="bg-gray-100 flex flex-col aspect-[4/3] justify-center items-center hover:cursor-pointer">
		<GalleryThumbnails />
		<p className="text-gray-500">Click to add image or drop it here!</p>
	</div>
)

interface ProjectProps {
	params: {
		pid: string
	}
}

export default async function ProjectPage({ params: { pid } }: ProjectProps) {
	await connect()
	const user = await User.findOne({ email: "lkami@bogital.com" });
	// project passed from server component should not contain methods
	const project = await Project.findOne({ ownerId: user.id, _id: pid })

	// Get Panoramas from pid(Project ID)
	const panoramas = new Array(3).fill('')

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
					{/* <button className="absolute -bottom-10 right-8 bg-blue-900 text-4xl p-4 rounded-full">
						<Plus className=" text-4xl" />
					</button> */}
				</div>
			</header>

			<div className="md:max-w-5xl h-full mx-auto">
				<div className="flex-1 py-4 space-y-8">
					<div className="flex items-center text-3xl font-semibold space-x-2">
						<Link href={"/dashboard"} className="hover:text-sky-500 border-b-2 border-transparent hover:border-sky-500 transition-colors duration-300"> Dashboard </Link>
						<ChevronRight />
						<span className="text-sky-500"> {project.name} </span>
					</div>

					<div className="w-full">
						<h3 className="text-xl font-semibold mb-4">Tag 01</h3>
						<section className="">
							<div className="container flex flex-col justify-center px-0 mx-auto">
								<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
									<AddOrDropPano />
									{
										panoramas.map((_, i) => (
											<Link href={`/dashboard/${pid}/panorama/${i}`} key={i} className="relative overflow-hidden">
												<img
													className="object-cover w-full bg-gray-500 aspect-[4/3]"
													src={`https://source.unsplash.com/random/400x300/?${i}`} />
												<div className="h-8 px-2 absolute inset-0 top-auto flex justify-between items-center bg-gradient-to-t from-black to-transparent">
													<h3 className="text-white font-semibold">
														Pano {i + 1}
													</h3>
												</div>
												<ImageAction />
											</Link>
										))
									}
								</div>
							</div>
						</section>
					</div>

					<div className="w-full">
						<h3 className="text-xl font-semibold mb-4">Tag 02</h3>
						<section className="">
							<div className="container flex flex-col justify-center px-0 mx-auto">
								<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
									<AddOrDropPano />
									{
										panoramas.map((_, i) => (
											<Link href={`/panorama/${i}`} key={i} className="relative overflow-hidden">
												<img
													className="object-cover w-full bg-gray-500 aspect-[4/3]"
													src={`https://source.unsplash.com/random/400x300/?${i + 5}`} />
												<div className="h-8 px-2 absolute inset-0 top-auto flex justify-between items-center bg-gradient-to-t from-black to-transparent">
													<h3 className="text-white font-semibold">
														Pano {i + 5}
													</h3>
												</div>
												<ImageAction />
											</Link>
										))
									}
								</div>
							</div>
						</section>
					</div>

				</div>
			</div>
		</main>
	)
}
