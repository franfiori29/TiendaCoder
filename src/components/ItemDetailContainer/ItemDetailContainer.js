import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail.js';
import Loading from './Loading/Loading.js';
import { useParams } from 'react-router-dom';

const getItem = (idItem) => {
    return new Promise((res) => {
        setTimeout(() => {
            const items = [
                { id: 1234, title: 'BMW X6', description: 'El BMW X6 es un automóvil todoterreno de gran lujo del segmento E del fabricante alemán BMW, que salió a la venta en enero de 2008 junto con su presentación en el salón del Automóvil de Detroit. Se basa en gran parte en el BMW X5 pero con una silueta más deportiva, semejante a un cupé. Es un cinco puertas con cuatro plazas, motor delantero longitudinal y tracción a las cuatro ruedas.', price: 40000, pictureUrl: 'https://www.diariomotor.com/imagenes/picscache/1920x1600c/bmw-x6-2020-fotos-30_1920x1600c.jpg' },
                { id: 1595, title: 'BMW Serie 8', description: 'El BMW X6 es un automóvil todoterreno de gran lujo del segmento E del fabricante alemán BMW, que salió a la venta en enero de 2008 junto con su presentación en el salón del Automóvil de Detroit. Se basa en gran parte en el BMW X5 pero con una silueta más deportiva, semejante a un cupé. Es un cinco puertas con cuatro plazas, motor delantero longitudinal y tracción a las cuatro ruedas.', price: 35000, pictureUrl: 'https://fotos.perfil.com/2018/06/01/trim/1280/720/1-nuevo-bmw-serie-8.jpg' },
                { id: 2212, title: 'BMW m3', description: 'El BMW X6 es un automóvil todoterreno de gran lujo del segmento E del fabricante alemán BMW, que salió a la venta en enero de 2008 junto con su presentación en el salón del Automóvil de Detroit. Se basa en gran parte en el BMW X5 pero con una silueta más deportiva, semejante a un cupé. Es un cinco puertas con cuatro plazas, motor delantero longitudinal y tracción a las cuatro ruedas.', price: 50000, pictureUrl: 'https://soymotor.com/sites/default/files/imagenes/noticia/bmw-m3-competition-principal-soymotor.jpg' },
                { id: 1525, title: 'BMW Serie 8', description: 'El BMW X6 es un automóvil todoterreno de gran lujo del segmento E del fabricante alemán BMW, que salió a la venta en enero de 2008 junto con su presentación en el salón del Automóvil de Detroit. Se basa en gran parte en el BMW X5 pero con una silueta más deportiva, semejante a un cupé. Es un cinco puertas con cuatro plazas, motor delantero longitudinal y tracción a las cuatro ruedas.', price: 35000, pictureUrl: 'https://fotos.perfil.com/2018/06/01/trim/1280/720/1-nuevo-bmw-serie-8.jpg' },
                { id: 2312, title: 'BMW m3', description: 'El BMW X6 es un automóvil todoterreno de gran lujo del segmento E del fabricante alemán BMW, que salió a la venta en enero de 2008 junto con su presentación en el salón del Automóvil de Detroit. Se basa en gran parte en el BMW X5 pero con una silueta más deportiva, semejante a un cupé. Es un cinco puertas con cuatro plazas, motor delantero longitudinal y tracción a las cuatro ruedas.', price: 50000, pictureUrl: 'https://soymotor.com/sites/default/files/imagenes/noticia/bmw-m3-competition-principal-soymotor.jpg' },
                { id: 1634, title: 'BMW X6', description: 'El BMW X6 es un automóvil todoterreno de gran lujo del segmento E del fabricante alemán BMW, que salió a la venta en enero de 2008 junto con su presentación en el salón del Automóvil de Detroit. Se basa en gran parte en el BMW X5 pero con una silueta más deportiva, semejante a un cupé. Es un cinco puertas con cuatro plazas, motor delantero longitudinal y tracción a las cuatro ruedas.', price: 40000, pictureUrl: 'https://www.diariomotor.com/imagenes/picscache/1920x1600c/bmw-x6-2020-fotos-30_1920x1600c.jpg' }
            ];
            res(items.find(item => item.id == idItem))
        }, 2000);
    });
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const [load, setLoad] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        setLoad(true);
        getItem(id).then(res => {
            setLoad(false);
            setItem(res);
        })
    }, [id])

    return <>
        {load && <Loading />}
        { item && <ItemDetail item={item} />}
    </>
}
