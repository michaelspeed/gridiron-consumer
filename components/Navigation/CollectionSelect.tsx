import React, {useEffect, useState} from "react";
import {Collection, GetAllCollectionDocument, GetAllCollectionQueryVariables} from "../../gql";
import {useQuery} from "@apollo/client";

const CollectionSelect = () => {

    const [collectionTree, setCollectionTree] = useState<Collection[]>([])

    const {data, loading, error} = useQuery<{getAllCollection: Collection[]}, GetAllCollectionQueryVariables>(GetAllCollectionDocument)

    useEffect(() => {
        console.log(data)
        if (data) {
            setCollectionTree(data.getAllCollection)
        }
    },[data])

    return (
        <select className="nice-select nice-select-style-1">
            {collectionTree.map(cols => (
                <option key={cols.id}>{cols.name}</option>
            ))}
        </select>
    )
}

export default CollectionSelect
