import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList.js';
import { useParams } from 'react-router-dom';

const itemPromise = new Promise((res) => {
    setTimeout(() => {
        res([
            { id: 1234, cat: 'autos', stock: 8, title: 'BMW X6', price: 40000, pictureUrl: 'https://www.diariomotor.com/imagenes/picscache/1920x1600c/bmw-x6-2020-fotos-30_1920x1600c.jpg' },
            { id: 2212, cat: 'motos', stock: 5, title: 'BMW m3', price: 50000, pictureUrl: 'https://i.pinimg.com/originals/1f/67/f2/1f67f29da3402e56280fd82e9a359171.jpg' },
            { id: 1595, cat: 'camionetas', stock: 2, title: 'BMW Serie 8', price: 35000, pictureUrl: 'https://autosdeprimera.com/v2/wp-content/uploads/2018/11/bmw_x5_xdrive40i_2019_c.jpg' },
            { id: 2312, cat: 'camionetas', stock: 12, title: 'BMW m3', price: 50000, pictureUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_dbb2a90961fd47c7af82bc84d8876f80.jpg' },
            { id: 1525, cat: 'autos', stock: 7, title: 'BMW Serie 8', price: 35000, pictureUrl: 'https://www.diariomotor.com/imagenes/2020/05/bmw-serie-5-2021-0520-059.jpg' },
            { id: 1634, cat: 'motos', stock: 6, title: 'BMW X6', price: 40000, pictureUrl: 'https://lifestyle.americaeconomia.com/sites/lifestyle.americaeconomia.com/files/styles/gallery_image/public/moto1.jpg?itok=2MY3SgQZ' },
            { id: 5634, cat: 'motos', stock: 2, title: 'BMW X6', price: 40000, pictureUrl: 'https://revistamoto.com/wp_rm/wp-content/uploads/2017/07/Screenshot_69.jpg' },
            { id: 4312, cat: 'camionetas', stock: 10, title: 'BMW m3', price: 50000, pictureUrl: 'https://automundo.pe/wp-content/uploads/2016/01/2015-BMW-X5-M.jpg' },
            { id: 3525, cat: 'autos', stock: 3, title: 'BMW Serie 8', price: 35000, pictureUrl: 'https://fotos.perfil.com/2018/06/01/trim/1280/720/1-nuevo-bmw-serie-8.jpg' },
        ])
    }, 1000);
})

export default function ItemListContainer({ title }) {

    const [arrayItems, setArrayItems] = useState(null);
    const { cat } = useParams()

    useEffect(() => {
        itemPromise.then(res => setArrayItems(res));
    }, [])


    if (!cat) {
        return (
            <>
                <h1 style={{ textAlign: 'center', marginTop: '10px' }} >{title}</h1>
                {arrayItems && <ItemList items={arrayItems} />}
            </>
        )
    }
    if (cat) {
        return (
            <>
                <h1 style={{ textAlign: 'center', marginTop: '10px' }} >{cat.toUpperCase()}</h1>
                {arrayItems && <ItemList items={arrayItems.filter(item => item.cat === cat)} />}
            </>
        )
    }
}
