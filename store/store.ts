import {Instance, types, SnapshotIn, SnapshotOut, applySnapshot} from "mobx-state-tree";
import {useMemo} from "react";

let store: IStore | undefined

const IUser = types.model({
    id: types.string,
    email: types.string,
    phone: types.string,
    verified: types.boolean,
    firstName: types.string,
    lastName: types.string
})

const Store = types
    .model({
        user: types.maybeNull(IUser),
        token: types.maybeNull(types.string)
    }).actions(self => {
        const setStoreLogin = (user) => {
            self.user = user
        }
        return {setStoreLogin}
    })

export type IStore = Instance<typeof Store>
export type IStoreSnapshotIn = SnapshotIn<typeof Store>
export type IStoreSnapshotOut = SnapshotOut<typeof Store>

export function initializeStore(snapshot = null) {
    const _store = store ?? Store.create({user: null, token: null})

    if (snapshot) {
        applySnapshot(_store, snapshot)
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return store
}

export function useStore(initialState: any) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
