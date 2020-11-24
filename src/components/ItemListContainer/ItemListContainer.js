import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList.js';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/index.js';

export default function ItemListContainer({ title }) {

    const [arrayItems, setArrayItems] = useState(null);
    const { cat } = useParams()

    useEffect(() => {
        const db = getFirestore();
        let itemCollection = db.collection("items");
        if (cat) itemCollection = itemCollection.where("cat", "==", cat);

        itemCollection.get().then(querySnapshot => {
            if (querySnapshot.size === 0) console.log("no results");
            setArrayItems(
                querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            )
        })

    }, [cat])



    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '10px' }} >{title}</h1>
            {arrayItems && <ItemList items={arrayItems} />}
        </>
    )

}
