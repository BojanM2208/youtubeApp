import React, {useState} from 'react';

const SearchBar = ({ onSearchSubmit }) => {
    const [keyword, setKeyword] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();
        onSearchSubmit(keyword);
    }

    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Search videos</label>
                    <input type="text" value={ keyword } onChange={event => {setKeyword(event.target.value)}} />
                </div>
            </form>
        </div>
    );
}


export default SearchBar;