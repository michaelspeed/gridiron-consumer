export function getProdRoute(link: string) {
    return `/product/${link}`
}

export function getCollectionRoute(link: string) {
    return `/collection/${link}`
}

export function getFacetRoute(link: string, coll?) {
    return `/facet/${link}?coll=${coll}`
}

export function getVariantRoute(link: string) {
    return `/variant/${link}`
}
