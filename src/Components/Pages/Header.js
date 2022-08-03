import {useState} from 'react';
import Card from './Card';

function Header() {

    const [search, setSearch]= useState('');
    const inputHandler = (e) => {
        //allowing only 4-digit number in search bar
        const { value, maxLength } = e.target;
        let code = value.slice(0, maxLength);
        setSearch(code);
    }

    const handleForm =(e)=>{
        e.preventDefault();
    }

  return (
    <>
    <form onSubmit={handleForm} className='user-form' data-testid='search-bar'>
        <input
            type="number"
            value={search}
            placeholder="Enter the Post Code (Ex: 2000, 3000, ...)"
            className='user-input'
            onChange={inputHandler}
            maxLength='4'
            //removing the scroll option for number input.
            onWheel={(e) => e.target.blur()}
            //only 0-9 numbers allowed
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            required
        />
        <button className='search-button' type='submit'>Search</button>
    </form>
    <Card search={parseInt(search)}/>
    </>
);
}

export default Header