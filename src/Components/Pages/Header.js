import {useState} from 'react';

function Header() {

    const [userCode, setuserCode] = useState();

    const handleForm =(e)=>{
        e.preventDefault();
    }

  return (
    <form method="get" onSubmit={handleForm} className='user-form'>
        <input
            type="number"
            placeholder="Find your broker"
            value={userCode} 
            className='user-input'
        />
        <button className='search-button' type='submit'>Search</button>
    </form>
);
}

export default Header