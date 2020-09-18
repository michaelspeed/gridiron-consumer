export interface ProdVar {
    id: string,
    name: string,
    assetUrl: string
}

export interface ProdStore {
    id: string
    storeName: string
}

export interface ProdVarPrice {
    id: string
    price: number
}

export interface CartItem {
    variant: ProdVar,
    store: ProdStore,
    price: ProdVarPrice,
    quantity: number
}
