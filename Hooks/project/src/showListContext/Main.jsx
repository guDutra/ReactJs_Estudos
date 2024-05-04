import React from 'react'
import { PRODUCTS } from '../objects/products'
import { STUDENTS } from '../objects/alunos'
import { useState, useEffect } from 'react';
import UseCreateList from './ShowListContext';
const Main = () => {
    const [listOne, setListOne] = useState(null)
    const [listSec, setListSec] = useState(null)
   
    function handleChangeOne(e) {

        { e.target.value === "products" ? setListOne(PRODUCTS) : setListOne(STUDENTS) }
        console.log(e.target.value);
        console.log(listOne);
    }
    function handleChangeTwo(e) {
        { e.target.value === "students" ? setListSec(STUDENTS) : setListSec(PRODUCTS) }

    }

    return (
        <div>

            <select onChange={(e) => handleChangeOne(e)} name="" id="">
                <option value="products"> Produtos </option>
                <option value="students">Estudantes</option>

            </select>
            {listOne && <UseCreateList key={listOne} list={listOne} />}



            <select onChange={(e) => handleChangeTwo(e)} name="" id="">
                <option value="products"> Produtos </option>
                <option value="students">Estudantes</option>

            </select>
            {listSec && <UseCreateList list={listSec} />}
        </div>
    )
}

export default Main