

interface PanoramaProps {
	params: {
		pid: string
		panoId: string
	}
}
export default function Panorama({
	params: {
		pid,
		panoId
	}
}: PanoramaProps) {
	// Show the panorama in the viewer with all props
	return (
		<main className="w-full min-h-screen">
			<p>Show Panorama</p>
		</main>
	)
}
