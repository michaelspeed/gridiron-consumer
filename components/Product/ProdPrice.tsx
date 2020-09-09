import {Button, Card, CardActionArea, CardContent, CircularProgress, Typography} from "@material-ui/core";
import {GetStocksAndZipAvailabilityDocument, ProductVariant, ProductVariantPrice} from "../../gql";
import {useQuery} from "@apollo/client";
import {danger} from "../../utils/colorConfig";
import {observer} from "mobx-react";
import {useStore} from "../../store/store";
import {CartItem, ProdStore, ProdVar, ProdVarPrice} from "../../utils/cartInterface";

interface Prop {
    item: ProductVariantPrice,
    zip?: string
    variant?: ProductVariant
}

const ProdPrice = observer(({item, zip, variant}: Prop) => {

    const {AddToCart} = useStore()

    const {data, loading, error} = useQuery(GetStocksAndZipAvailabilityDocument, {
        variables: {
            zipf: Number(zip),
            variantId: variant!.id,
            storeId: item!.store!.id
        }
    })

    return (
        <Card style={{width: 200, margin: 10}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        ₹ {item.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.store?.storeName}
                    </Typography>
                    <div>
                        {loading && <div className='d-flex justify-content-center align-items-center'>
                            <CircularProgress color={"primary"} size={20}/>
                            <Typography variant="body2" color="textSecondary" component="p">Checking</Typography>
                        </div>}
                        {data && <div style={{marginTop: 20}}>
                            {!data.GetStocksAndZipAvailability.zip && <Typography variant="body2" style={{color: danger}} component="p">Not Available at your Zip Code</Typography>}
                            {(data.GetStocksAndZipAvailability.zip && data.GetStocksAndZipAvailability.stock)
                            &&
                            <Button color={"primary"} variant={"contained"} style={{width: '100%'}}
                                    onClick={() => {
                                        const varia: ProdVar = {
                                            id: variant!.id,
                                            name: variant!.name,
                                            assetUrl: variant!.asset!.asset!.preview!
                                        }

                                        const store: ProdStore = {
                                            id: item.store!.id,
                                            storeName: item.store!.storeName
                                        }

                                        const price: ProdVarPrice = {
                                            id: item.id,
                                            price: item.price
                                        }

                                        const cartItem: CartItem = {
                                            variant: varia,
                                            store: store,
                                            price: price
                                        }

                                        AddToCart(cartItem)
                                    }}
                            >Add To Cart</Button>
                            }
                        </div>}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
})

export default ProdPrice
