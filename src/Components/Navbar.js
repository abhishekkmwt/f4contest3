import  React   from 'react';


const Navbar=({setSearchText, searchText, fetchBooks})=>{
    


    return(
        <div className="navbar">
            <div className='logo'>
                <img src={require("../assets/logo1.png")} alt="logo" />
                <img src={require("../assets/logo2.png")} alt="logo1" />
            </div>
            <div className="search">
                <div className="search-bar">
                    <img src={require("../assets/search.png")} alt="search" />
                    <input type="search" placeholder="Search for the book you want and read it mow..."
                    onChange={(e)=>setSearchText(e.target.value)}
                    />
                </div>
                <div className="search-button">
                    <button type="button" onClick={fetchBooks}>Search</button>
                </div>
            </div>
            <div className="icons">
                <div className="menu-icon">
                    <img src={require("../assets/fav.png")} alt="icons1" />
                    <img src={require("../assets/bell.png")} alt="icons2" />
                    <img src={require("../assets/Group.png")} alt="icons3" />
                </div>
                <div className="photo-icon">
                    <img src={require("../assets/photo-icon.png")} alt="icons4" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;