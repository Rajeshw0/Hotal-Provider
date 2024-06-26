import React, {useState , useEffect} from 'react';
import Sdata from './Sdata';
import Card from './Card';

  const Cards = () => {
  const [search, setSearch] = useState({
    name:"",
    title:""
  });
  const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setSearch({...search,[name]: value});
  }
   const sdata  = Sdata.filter(item => {
    if(search.title !=="" && search.name !==""){
       
      return item.title===search.title && item.name===search.name;
    
    }else if(search.title==="" && search.name!==""){
   
      return item.title!==search.title && item.name===search.name;
   
    }else if(search.title!=="" && search.name===""){
    
      return item.title===search.title && item.name!==search.name;
    
    }else{
    
      return item.title!==search.title && item.name!==search.name;
    
    }
     });
    return (
      <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <button className="nav-link" href="#" value="" name="name" onClick={handleChange}>All</button>
      </li>
      {Sdata.map(({name}) => (
      <li className="nav-item">
        <button className="nav-link" href="#" value={name} name="name" onClick={handleChange}>{name}</button>
      </li>
      ))}
      </ul>
    </div>
  </div>
</nav>
<select className='form-select' name="title" onChange={handleChange}>
  <option value="">All</option>
{Sdata.map(({title}) => (
  <option value={title}>{title}</option>
))}
</select>
<section className="vh-100">
  <div className="container-fluid py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
        {sdata.map(({name, title}) => (
          <Card
          name={name}
          title={title}
          />
      ))}
    </div>
  </div>
</section>      
      </>
    );
  };
export default Cards;