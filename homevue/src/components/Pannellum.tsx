

const Panorama = ({ }: {}) => {
    return (
        <iframe
            width="600"
            height="400"
            allowFullScreen className="border-none"
            src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg"
        />
    )
}

type Props = {}

export default function Pannellum({ }: Props) {
    return (
        <div>
            <p>Pannellum</p>
            <Panorama />
        </div>
    )
} 