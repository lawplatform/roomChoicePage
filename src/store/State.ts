import { observable } from '@legendapp/state'
import { persistObservable } from '@legendapp/state/persist'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'

export const State = observable({
	Customer: '고양시',
	Metaverse: 'ustory',
	Room: 'office',
	Link: 'youstory.room',
	imgName: "temp"


})

persistObservable(State, {
	local: 'store',
	persistLocal: ObservablePersistLocalStorage,
})
