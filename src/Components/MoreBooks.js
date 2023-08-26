import  React,{useState,useEffect} from 'react';


const MoreBooks=({fetchBooks, moreBooksData})=>{
    
    const [isClicked,setisClicked]=useState(false);
    const [selectedbook,setSelectedBook]=useState({});
    useEffect(()=>{
        fetchBooks();
    },[])


    return(
        <div className='more-books'>
           <div className='grid'>
                { 
                  moreBooksData.map((book)=>{
    

                    return <div className='image-container'>
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt='book' onClick={()=>{
                            setisClicked(!isClicked);
                            setSelectedBook(book);
                            }}/>
                        {   
                            isClicked===true && selectedbook && selectedbook.id===book.id &&
                            (<div className='overlay'>
                                <div className='book-name-publish-date'>
                                    <div className='book-name'>{book.volumeInfo.title}</div>
                                    <div className='publish-date'>Published On : {book.volumeInfo.publishedDate}</div>
                                </div>
                                
                                <div className='book-author'>{book.volumeInfo.authors.join()}</div>
                                <div className='book-description'>{book.volumeInfo.description}</div>
                                <div className='details'>
                                    <div className='avg-rating'>Avg Rating : {book.volumeInfo.averageRating}</div> 
                                    <div className='rating-count'>Rating Count : {book.volumeInfo.ratingsCount}</div>
                                    <div className='publisher'>Publisher : {book.volumeInfo.publisher}</div>
                                    <div className='lang'>Language : {book.volumeInfo.language} </div>
                                </div>
                                <div className='book-link'>
                                    <a href={book.volumeInfo.previewLink}>Now Read!</a>
                                    <a href={book.volumeInfo.infoLink}>More Info!</a>
                                </div>
                            </div>)
                        }
                    </div>
                    
                  })  
                        
                }
           </div>
        
        </div>
    )
}

export default MoreBooks;