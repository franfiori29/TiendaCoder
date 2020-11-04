import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail.js';

const itemPromise = new Promise((res) => {
    setTimeout(() => {
        res(
            {
                id: 1234, description: 'BMW X6 4 puertas motor V8 Verde',
                price: 40000,
                pictureUrl: 'https://www.diariomotor.com/imagenes/picscache/1920x1600c/bmw-x6-2020-fotos-30_1920x1600c.jpg',
                stock: 0
            }
        )
    }, 3000);
});


export default function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const [load, setLoad] = useState(null);

    useEffect(() => {
        setLoad(true);
        itemPromise.then(res => {
            setLoad(false);
            setItem(res);
        })
    }, [])

    return <>
        { item && <ItemDetail item={item} />};
    </>
}
