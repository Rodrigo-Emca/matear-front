import React from 'react';
import iconSearch from '../../Img/buscar.png'

export default function TextFilter({ defaultText, onChange }) {
    return (
        <div className='cont-only-search'>

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
{/* <div className="buscar">
    <input
    defaultValue={defaultText} 
    type="text"
    name='title'
    id='title'
    placeholder='Find your product here'
    onChange={onChange}
    />
    <div className='btn-search'>
        <img src={iconSearch} alt="" className='icon-search' />
    </div>
</div> */}