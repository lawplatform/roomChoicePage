interface Gallery_ButtonProps {
	show: (id: string) => void;
	img: string;
	name: string;
}
const Gallery_Button = ({ name, img, show }: Gallery_ButtonProps) => {
	return (
		<div>
			<button onClick={() => show(name)}>
				<img className="h-auto max-w-full rounded-lg" src={img} alt="" />
			</button>
		</div>
	)
}

export default Gallery_Button;
