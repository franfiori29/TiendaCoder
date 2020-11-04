import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail.js';
import Loading from './Loading/Loading.js';

const itemPromise = new Promise((res) => {
    setTimeout(() => {
        res(
            {
                id: 1234,
                title: 'BMW X6 4 puertas motor V8 Verde',
                description: 'El BMW X6 es un automóvil todoterreno de gran lujo del segmento E del fabricante alemán BMW, que salió a la venta en enero de 2008 junto con su presentación en el salón del Automóvil de Detroit. Se basa en gran parte en el BMW X5 pero con una silueta más deportiva, semejante a un cupé. Es un cinco puertas con cuatro plazas, motor delantero longitudinal y tracción a las cuatro ruedas.',
                price: 40000,
                pictureUrl: 'https://www.diariomotor.com/imagenes/picscache/1920x1600c/bmw-x6-2020-fotos-30_1920x1600c.jpg',
                stock: 0
            }
        )
    }, 2000);
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
        {load && <Loading />}
        { item && <ItemDetail item={item} />}
    </>
}
