import { useState } from "react";
import Card_Radio from "../components/Card_Radio";
import { useQuery } from "@tanstack/react-query";


interface WarnProp {
	next: () => void;
	prev: () => void;
}

const ChoiceMetaverse = ({ next, prev }: WarnProp) => {
	const [metaverse, SetMetaverse] = useState('ustory')
	const { data, isLoading, error } = useQuery(['jsonData', { filter: { metaverse } }], () =>
		fetch('/data/metaverse.json')
			.then((response) => response.json())
			.then((jsonData) => jsonData.find((item: any) => item.name === metaverse))
	);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error</div>;
	}
	if (!data) {
		return <div>Item not found!</div>;
	}
	const imagePath = `/example/${data.name}.png`;


	return (
		<div className='flex flex-col  justify-center sm:flex-row'>

			<div className='flex flex-col max-w-lg'>
				<h1 className='text-center leading-10 text-3xl font-bold'>메타버스 선택 </h1>
				<div className="flex flex-row sm:flex-row w-full mx-auto items-center">
					<Card_Radio name="ustory" meta={metaverse} setMeta={SetMetaverse}></Card_Radio>
					<Card_Radio name="zepeto" meta={metaverse} setMeta={SetMetaverse}></Card_Radio>
					<Card_Radio name="zep" meta={metaverse} setMeta={SetMetaverse}></Card_Radio>
				</div>
				<p className="py-6 mx-auto text-center">
					{data.desc}</p>
				<div className="flex flex-row my-5 ">
					<div className="flex flex-col w-28">
						<img src={imagePath} className="rounded-lg w-32 ml-3" />
						<div className="flex flex-row h-5 pl-5 mt-2">
							<img src="/icon/see.svg" className="w-8 flex items-end" />
							<p className=" text-sm text-center text-gray-500 dark:text-gray-400">구경하기</p>
						</div>
					</div>
					<div className="divider divider-horizontal"></div>
					<div className="flex flex-col">
						<h1 className="font-bold"> {data.room}</h1>
						<p>{data.room_desc}</p>

					</div>
				</div>
				<div className="flex flex-row mx-auto">
					<button className="btn  group px-12 normal-case mx-5" onClick={prev}>
						<span className="hidden sm:inline">이전</span>
					</button>
					<button className="btn btn-neutral group px-12 normal-case" onClick={next}>다음
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
						</svg></button>
				</div>
			</div>
		</div>

	)
}
export default ChoiceMetaverse;
