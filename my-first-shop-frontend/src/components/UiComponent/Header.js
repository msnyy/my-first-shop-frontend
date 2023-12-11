import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
  };

    return (
        <div class="header-2">
            <nav class="bg-white py-2 md:py-4">
                <div class="container px-4 mx-auto md:flex md:items-center">
                    <div class="flex justify-between items-center">
                        <a href="#" class="font-bold text-xl text-blue-600">MSNY SHOP</a>
                    </div>
                    <form class="w-full max-w-sm " onSubmit={handleSearchSubmit}>
                    <div class="m-4 md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange}>
                    </input>
                    </div>
                    </form>
                    <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                    <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"><FontAwesomeIcon icon={faSearch} /></a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">ติดต่อเรา</a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">บริการช่วยเหลือ</a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"><FontAwesomeIcon icon={faHeart} /></a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Login</a>
                    </div>
                </div>
            </nav>

        </div>
    )
}
