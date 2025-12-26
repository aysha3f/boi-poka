import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
   const [allbooks, setAllBooks]= useState([]);

   useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/B11-boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json')
    .then(res=>res.json())
    .then(data =>{
        console.log(data)
    })
   },[])
    return (
        <div>
           <Banner></Banner>
           <Books></Books>
        </div>
    );
};

export default Home;