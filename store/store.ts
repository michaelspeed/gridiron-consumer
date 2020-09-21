import {Instance, types, SnapshotIn, SnapshotOut, applySnapshot} from "mobx-state-tree";
import {useMemo} from "react";
import {GridIronConstants} from "../utils/globalconstants";

let store: IStore | undefined

export const CartSSD = "cart-ssd"

const IUser = types.model({
    id: types.string,
    email: types.string,
    phone: types.string,
    verified: types.boolean,
    firstName: types.string,
    lastName: types.string
})

const IProdVar = types.model({
    id: types.string,
    name: types.string,
    assetUrl: types.string
})

const IProdStore = types.model({
    id: types.string,
    storeName: types.string
})

const IProdVarPrice = types.model({
    id: types.string,
    price: types.number
})

const ICartItem = types.model({
    variant: IProdVar,
    store: IProdStore,
    price: IProdVarPrice,
    quantity: types.number
})

const IQType = types.model({
    id: types.string,
    type: types.enumeration('type', ['variant', 'product'])
})

const Store = types
    .model({
        user: types.maybeNull(IUser),
        token: types.maybeNull(types.string),
        quickview: types.boolean,
        qtype: types.maybeNull(IQType),
        cart: types.array(ICartItem),
        cartOpen: types.boolean,
        mobileMenu: types.boolean
    }).actions(self => {
        const loadCart = () => {
            const cart = localStorage.getItem(CartSSD)
            console.log(cart)
            if (cart) {
                self.cart = JSON.parse(cart)
            }
        }
        const setStoreLogin = (user, token?) => {
            self.user = user
            if (token) {
                self.token = token
                localStorage.setItem(GridIronConstants, token)
            }
        }
        const setStoreLogout = () => {
            self.user = null
            self.token = null
            localStorage.removeItem(GridIronConstants)
        }
        const setQuickView = () => {
            self.quickview = !self.quickview
        }
        const setQuickViewType = (id, type) => {
            self.qtype = {id, type}
        }
        const setQuickViewNull = () => {
            self.qtype = null
        }
        const AddToCart = (cartItem) => {
            self.cart.push(cartItem)
            localStorage.setItem(CartSSD, JSON.stringify(self.cart))
        }
        const RemoveFromCart = (index) => {
            self.cart.splice(index, 1)
            localStorage.setItem(CartSSD, JSON.stringify(self.cart))
        }
        const AddQuantity = (index) => {
            self.cart[index].quantity = self.cart[index].quantity + 1
        }
        const RemoveQuantity = (index) => {
            if (self.cart[index].quantity === 1) {
                self.cart.splice(index, 1)
            } else {
                self.cart[index].quantity = self.cart[index].quantity - 1
            }
        }
        const ResetCart = () => {
            self.cart.splice(0, self.cart.length)
        }
        const TriggerCart = () => {
            self.cartOpen = !self.cartOpen
        }
        const TriggerMobileMenu = () => {
            self.mobileMenu = !self.mobileMenu
        }
        return {
            setStoreLogin,
            setQuickView,
            setQuickViewType,
            setQuickViewNull,
            setStoreLogout,
            AddToCart,
            RemoveFromCart,
            loadCart,
            AddQuantity,
            RemoveQuantity,
            ResetCart,
            TriggerCart,
            TriggerMobileMenu
        }
    })

export type IStore = Instance<typeof Store>
export type IStoreSnapshotIn = SnapshotIn<typeof Store>
export type IStoreSnapshotOut = SnapshotOut<typeof Store>

export function initializeStore(snapshot = null) {
    const _store = store ?? Store.create({user: null, token: null, quickview: false, cartOpen: false, mobileMenu: false})

    if (snapshot) {
        applySnapshot(_store, snapshot)
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return store
}

export function useStore(initialState?: any) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
