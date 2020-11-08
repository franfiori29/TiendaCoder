import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList.js';

const itemPromise = new Promise((res) => {
    setTimeout(() => {
        res([
            { id: 1234, title: 'BMW X6', price: 40000, pictureUrl: 'https://www.diariomotor.com/imagenes/picscache/1920x1600c/bmw-x6-2020-fotos-30_1920x1600c.jpg' },
            { id: 1595, title: 'BMW Serie 8', price: 35000, pictureUrl: 'https://fotos.perfil.com/2018/06/01/trim/1280/720/1-nuevo-bmw-serie-8.jpg' },
            { id: 2212, title: 'BMW m3', price: 50000, pictureUrl: 'https://soymotor.com/sites/default/files/imagenes/noticia/bmw-m3-competition-principal-soymotor.jpg' },
            { id: 1525, title: 'BMW Serie 8', price: 35000, pictureUrl: 'https://fotos.perfil.com/2018/06/01/trim/1280/720/1-nuevo-bmw-serie-8.jpg' },
            { id: 2312, title: 'BMW m3', price: 50000, pictureUrl: 'https://soymotor.com/sites/default/files/imagenes/noticia/bmw-m3-competition-principal-soymotor.jpg' },
            { id: 1634, title: 'BMW X6', price: 40000, pictureUrl: 'https://www.diariomotor.com/imagenes/picscache/1920x1600c/bmw-x6-2020-fotos-30_1920x1600c.jpg' }
        ])
    }, 2000);
})

export default function ItemListContainer({ title }) {

    const [arrayItems, setArrayItems] = useState(null);

    useEffect(() => {
        itemPromise.then(res => setArrayItems(res));
    }, [])

    return (
        <>
            <h1>{title}</h1>
            {arrayItems && <ItemList items={arrayItems} />}
        </>
    )
}
