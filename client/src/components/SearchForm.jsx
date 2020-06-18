import React, { useState }from 'react';
import Axios from 'axios';

const SearchBar = ({ products }) => {
    const [value, setValue] = useState('');
    const [isTextFieldEmpty, setTextField] = useState(true);
    const [query, setQuery] = useState('');
    

    const handleOnChange = (event) => {
      if(isTextFieldEmpty){
        setTextField(false);
      }else {
        setTextField(true);
      }
    //   setValue(event.target.value)
    };
    //conditional render
    let component;
    if(!isTextFieldEmpty){
      component = <button onClick={() => setTextField(true)}>X</button>;
    }
    return(
      <div className="search-container">
        <input
          type="text" 
          value={value} 
          onChange={(e) => handleOnChange(e)}
          className='search-bar'
          placeholder="Search Best Buy"
        />
        {component}
        <button
        className="search-button" 
        
        >Search</button>
        <p>{query}</p>
      </div>
    );
};

export default SearchBar;

