"use client"
import { IProject } from "@/lib/models/Project"
import { IUser } from "@/lib/models/User"
import { useEffect, useState } from "react"
import { ToolsPanel } from "./tools-panel"
import { useAtom } from "jotai"
import { readOnlyToolsPanelHeightAtom, toggleHotspotAtom } from "./atoms"
import DotRing from "./components/dot-ring"
import PanoramaViewer, { HotspotProps } from "react-pannellum-next"

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
	const height = useAtom(readOnlyToolsPanelHeightAtom)[0]
	const [selectHotsport, setSelectHotsport] = useAtom(toggleHotspotAtom)

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
			{selectHotsport && <DotRing />}
			<ToolsPanel user={user as IUser} project={project} panoId={panoId} />
			<div
				className="w-full h-screen"
			>
				<PanoramaViewer
					autoLoad
					autoRotate={-2}
					imagePath={image}
					hotSpots={hotSpots}
				/>
			</div>
		</>
	)
}