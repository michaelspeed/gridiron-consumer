import React from "react"
import {useQuery} from "@apollo/client";
import {GetProductVariantByProductDocument, GetProductVariantByProductQueryVariables, ProductVariant} from "../../gql";
import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import {assetsURL} from "../../utils/globalconstants";
import VariantQuickViewItem from "./VariantQuickViewItem";

interface Props {
    id: string
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const VariantQuickView = ({id}: Props) => {

    console.log(id)

    const {data, loading, error} = useQuery<{getProductVariantByProduct: ProductVariant[]}, GetProductVariantByProductQueryVariables>(GetProductVariantByProductDocument, {
        variables: {
            id
        }
    })

    console.log(data, error)

    return (
        <React.Fragment>
            {loading && <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Spin indicator={antIcon} />
            </div>}
            <div className='container'>
                <div className="shop-list-wrap mb-50">
                    {data && data.getProductVariantByProduct.map(item => (
                        <VariantQuickViewItem item={item}/>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default VariantQuickView
