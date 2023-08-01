import { ObservablePrimitiveChildFns, observe } from "@legendapp/state";
import getCurrentDate from '../util/getCurrentDate';
import { useContext, useEffect, useState } from "react";
import { State } from "../store/State"
import { observer } from "@legendapp/state/react";


interface LastCheckProps {
}
const LastCheck = observer(function component(record: any) {
	const date = getCurrentDate();
	const [room, setRoom] = useState(
		{
			Customer: '고양시',
			Metaverse: 'ustory',
			Room: 'office',
			Link: 'youstory.room',
		},
	);
	useEffect(() => {
		console.log(State);

	}, [])
	const metaverse = "ustory";
	let imgPath = "/room/" + metaverse + State.imgName.get() + ".png";

	const cilckHandler = () => {
	}


	return (
		<>
			<button onClick={cilckHandler}> 다시 보기 </button>
			<div className="bg-white border rounded-lg shadow-lg px-16 py-8 w-full  mx-auto mt-8">
				<h1 className="font-bold text-2xl my-4 text-center text-blue-600">확인하기 </h1>
				<hr className="mb-2" />
				<div className="flex justify-between mb-6">
					<h1 className="text-lg font-bold">날짜</h1>
					<div className="text-gray-700">
						<div>{date}</div>
					</div>
				</div>
				<div className="mb-8">
					<h2 className="text-lg font-bold mb-4">선택한 공간</h2>
					<div className="avatar flex justify-center">
						<div className="w-24 rounded">

							<img src={imgPath} />
						</div>
					</div>

					<div className="text-lg font-bold text-center mb-2">{State.Room.get()}</div>
				</div>

				<div className="text-gray-700 mb-2">선택한 공간을 기반으로 방이 제작됩니다</div>
			</div>

		</>
	)
});

export default LastCheck;
