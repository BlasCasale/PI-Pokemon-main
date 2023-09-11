import './searchBar.css';

export default function SearchBar({ handleChange, handleSubmit, SearchString }) {
    return (
        <form onChange={handleChange} className='form--search'>
            <input placeholder="Search" type="search" value={SearchString} id="input" className='input--search'/>
            <button type="search" onClick={handleSubmit} className='btn--form'>Search</button>
        </form>
    );
}