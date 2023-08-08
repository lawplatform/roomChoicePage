interface Gallery_ButtonProps {
	show: (id: string) => void;
	img: string;
	name: string;
}
const Gallery_Button = ({ name, img, show }: Gallery_ButtonProps) => {
	return (
		<div className="mx-2 ">
			<button onClick={() => show(name)}>
				<img className="object-cover  h-20 w-36 sm:w-52 rounded-lg" src={img} alt="" />
				<div className=" flex px-5 w-36 py-2 bg-black  text-white relative  bottom-4 sm:bottom-2">{name}</div>
			</button>
		</div>
	)
}

export default Gallery_Button;
