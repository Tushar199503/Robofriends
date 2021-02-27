import React from 'react';
import 'tachyons';

const SearchBox = ({searchchange})=> {
    return(
        <div className='pa2'>
       <input 
       className='pa3 ba b--blue bg-lightest-blue' 
       type='search' 
       placeholder='search robots'
       onChange={searchchange}
       />
       

        </div>
    );
}

export default SearchBox;