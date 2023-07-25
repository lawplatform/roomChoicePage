interface Gallery_ButtonProps {
	show: (id: string) => void;
	img: string;
	name: string;
}
const Gallery_Button = ({ name, img, show }: Gallery_ButtonProps) => {
	return (
		<div>
			<button onClick={() => show(name)}>
				<img className="h-40 max-w-full rounded-lg" src={img} alt="" />
				<div className=" flex px-5 py-2 bg-black  text-white relative bottom-3">{name}</div>
			</button>
		</div>
	)
}

export default Gallery_Button;
