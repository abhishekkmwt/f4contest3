import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MoreBooks from './Components/MoreBooks';
import axios from 'axios';


function App() {
  const [searchText,setSearchText] =useState("harry+potter");
  const [presearchText,setPreSearchText] =useState("");
  const [moreBooksData,setMoreBooksData]=useState([]);

  function fetchBooks(){
    if(searchText===presearchText) return;
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
     .then(response=>{
        const harryPotterData = response.data.items;
        // Fetch data from the API for 'sherlock holmes'
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes')
          .then(response => {
            const sherlockHolmesData = response.data.items;
            // Combine and set the book data
            setMoreBooksData([...harryPotterData, ...sherlockHolmesData]);
            setPreSearchText(searchText)
          });
    })
     .catch(err=>{
      setMoreBooksData([])
      setPreSearchText(searchText)
     })
    console.log(moreBooksData);
 }

  return (
    <div>
      <Navbar setSearchText={setSearchText} searchText={searchText} fetchBooks={fetchBooks}/>
      <MoreBooks fetchBooks={fetchBooks} moreBooksData={moreBooksData}/>
      
    </div>
  )
}

export default App;
