import React from 'react'
import "./header.scss";


export default function Header() {
    return (
        <div className='header-section'>
            <div className='search-box d-flex'>
                <input type='search' />
                <span class="material-icons search-icon">
                    search
                </span>
            </div>
            <div className='header-items'>
                <div className='header-item'>
                    navbar
                </div>
                <div className='header-item'>
                    navbar
                </div>
                <div className='header-item'>
                    navbar
                </div>
                <div className='header-item'>
                    navbar
                </div>
            </div>
        </div>
    )
}
