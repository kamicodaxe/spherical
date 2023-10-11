"use client"
import { IProject } from "@/lib/models/Project"
import { IUser } from "@/lib/models/User"
import { useEffect, useMemo, useState } from "react"
import { HotspotProps } from "./types"
import dynamic from "next/dynamic"
import { ToolsPanel } from "./tools-panel"
import { useAtom } from "jotai"
import { readOnlyToolsPanelHeightAtom } from "./atoms"

const DynamicPanoramaViewer = dynamic(() => import('react-pannellum-next').then(c => c.PanoramaViewer), {
	ssr: false, // Disable server-side rendering for this component
});

interface ShericadProps {
	user: IUser
	project: IProject
	panoId: string
}

export const Shericad: React.FC<ShericadProps> = ({
	user,
	project,
	panoId
}) => {
	console.log("pid: ", project.id)
	console.log("user: ", user.firstName)
	const height = window.innerHeight - useAtom(readOnlyToolsPanelHeightAtom)[0]
	const [image, setImage] = useState('/images/milan.jpg')
	const [hotSpots, sethotSpots] = useState<HotspotProps[]>([
		{
			pitch: 2.7,
			yaw: 133,
			type: 'info',
			text: 'Alma',
			cssClass: 'custom-hotspot',
			onClick: () => setImage('/images/alma.jpg'),
			// URL: 'scene2', // The target URL or scene ID (used for 'scene' or 'link' type)
			// createTooltipFunc: tooltipCallback, // Custom function to create the hotspot tooltip

		},
		// Add more hotspots here
	])

	useEffect(() => {
		setTimeout(() => {
			sethotSpots(items => ([
				...items,
				{
					pitch: 2.7,
					yaw: 50,
					type: 'info',
					text: 'Milan',
					cssClass: 'custom-hotspot',
					onClick: () => setImage('/images/milan.jpg'),
				}
			]))

		}, 6000)

	}, [])

	return (
		<>
			<ToolsPanel user={user as IUser} project={project} panoId={panoId} />
			<div
				className="w-full h-screen"
			>
				<DynamicPanoramaViewer
					autoLoad
					autoRotate={-2}
					imagePath={image}
					hotSpots={hotSpots}
				/>
			</div>
		</>
	)
}