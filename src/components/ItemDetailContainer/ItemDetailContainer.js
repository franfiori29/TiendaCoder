import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail.js';
import Loading from './Loading/Loading.js';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/index.js';

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const [load, setLoad] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoad(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const item = itemCollection.doc(id);

        item.get().then(doc => {
            if (!doc.exists) console.log("no existe");

            setItem({ id: doc.id, ...doc.data() });
        }).catch(error => {
            console.log("Error!", error)
        }).finally(setLoad(false));
    }, [id])

    return <>
        { load && <Loading />}
        { item && <ItemDetail item={item} />}
    </>
}
