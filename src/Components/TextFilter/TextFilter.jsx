import React from 'react';

export default function TextFilter({ defaultText, onChange }) {
    return (
        <div className='filtroTexto'>
        <form className='form-search'>
            <input
            defaultValue={defaultText}
            className='input-search'
            type='text'
            name='title'
            id='title'
            placeholder='Find your product here'
            onChange={onChange}
            />
        </form>
        </div>
    );
}
