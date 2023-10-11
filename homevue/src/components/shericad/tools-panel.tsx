import { IProject } from "@/lib/models/Project"
import { IUser } from "@/lib/models/User"
import { ChevronDown, ChevronUp, Save } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAtom } from "jotai"
import { toolsPanelHeightAtom } from "./atoms"
import { useRef, useState } from "react"
import clsx from "clsx"



interface ToolsPanelProps {
	user: IUser
	project: IProject
	panoId: string
}

export const ToolsPanel: React.FC<ToolsPanelProps> = ({
	user,
	project,
	panoId
}) => {
	const [_, setHeight] = useAtom(toolsPanelHeightAtom)
	const savedHeight = useRef(0)
	const [isPanelVisible, setIsPanelVisible] = useState(true)
	console.log("pid: ", project.id)
	console.log("panoId: ", panoId)

	const [shouldSaveChanges, setShouldSaveChanges] = useState(false)

	const togglePanel = () => {
		setIsPanelVisible(v => {
			if (v) setHeight(0)
			if (!v) setHeight(savedHeight.current)
			return !v
		})
	}

	return (
		<header
			onLoad={e => {
				setHeight(e.currentTarget.clientHeight)
			}}
			className={clsx(
				"p-4 bg-sky-400 text-gray-100 fixed inset-0 bottom-auto z-40 transition-transform duration-300",
				!isPanelVisible && "-translate-y-[9.5rem]"
			)}
		>
			<div className="md:max-w-5xl flex justify-between h-32 mx-auto relative">
				<Link href={`/dashboard/${project.id}`} aria-label="Back to Project dashboard" className="flex items-center p-2">
					<img src="/images/logo.jpg" alt="Logo" className="w-16" />
					<span className="font-bold text-3xl pl-2">{project.name}</span>
				</Link>
				<ul className="text-gray-900 items-end justify-center flex-1 pr-4 hidden translate-y-2 space-x-3 md:flex">
					<li className="flex">
						<Button disabled={!shouldSaveChanges} variant={"secondary"}>
							<Save />
						</Button>
					</li>
					<li className="flex">
						<Button variant={"secondary"}>Hotspot</Button>
					</li>
					<li className="flex">
						<Button variant={"secondary"} className="space-x-2">
							<span>Path</span>
							<ChevronDown />
						</Button>
					</li>
					<li className="flex">
						<Button variant={"secondary"}>Update</Button>
					</li>
					<li className="flex">
						<Button variant={"destructive"}>Delete</Button>
					</li>
				</ul>
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
				<button
					onClick={() => togglePanel()}
					className="absolute -bottom-10 right-8 z-50 bg-blue-900 text-4xl p-4 rounded-full">
					{
						isPanelVisible ? <ChevronUp className=" text-4xl" /> : <ChevronDown className=" text-4xl" />
					}
				</button>
			</div>
		</header>
	)
}