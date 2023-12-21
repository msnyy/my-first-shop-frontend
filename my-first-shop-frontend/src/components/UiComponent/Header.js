import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useLocation } from 'react-router-dom';


export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isLogin, setIslogin] = useState(false);

    let location = useLocation();


    const showAlertLogin = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to login?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login!!!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                setIslogin(true);
                // go to /goods page
            }
        })
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const onLoginHandler = () => {

    }


    return (
        <div class="header-2">
            <nav class="bg-white py-2 md:py-4">
                <div class="container px-4 mx-auto md:flex md:items-center">
                    <div class="flex justify-between items-center">
                        <a href="#" class="font-bold text-xl text-blue-500">MSNY SHOP</a>

                        <div className='px-4 mx-auto md:flex md:items-center '>
                            <form class="w-full max-w-sm  " onSubmit={handleSearchSubmit}>
                                <div class="m-4 md:w-3/3 ">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-300" id="inline-full-name" type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange}>
                                    </input>
                                </div>
                            </form>
                            <a href="#" class="p-2 lg:px-4 text-violet-400 rounded hover:text-pink-300 transition-colors duration-300"><FontAwesomeIcon icon={faSearch} /></a>
                        </div>

                        <div className="md:hidden">
                            <button onClick={handleMenuToggle}>
                                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-teal-500 rounded hover:text-sky-400 transition-colors duration-300">ติดต่อเรา</a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-teal-500 rounded hover:text-sky-400  transition-colors duration-300">บริการช่วยเหลือ</a>
                        {isLogin === true ?
                            <>
                                <a
                                    href="#"
                                    class="p-2 lg:px-4 md:mx-2 text-violet-300 rounded hover:bg-amber-100 hover:text-pink-300 transition-colors duration-300">
                                    <FontAwesomeIcon
                                        icon={faHeart} />
                                </a>
                                <a
                                    onClick={showAlertLogin}
                                    class="p-2 lg:px-4 md:mx-2 text-rose-300 text-center border border-solid border-sky-200 rounded hover:bg-pink-100 hover:text-sky-400 hover:border-pink-100 transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                                    Logout</a>
                            </>
                            : <a onClick={showAlertLogin} class="p-2 lg:px-4 md:mx-2 text-rose-300 text-center border border-solid border-sky-200 rounded hover:bg-pink-100 hover:text-sky-400 hover:border-pink-100 transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Login</a>

                        }
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-violet-300 rounded hover:bg-amber-100 hover:text-pink-300 transition-colors duration-300"><FontAwesomeIcon icon={faShoppingCart} /></a>
                    </div>
                    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                        <a href="#" class="block px-4 py-2 text-teal-500 rounded hover:text-sky-400 transition-colors duration-300">ติดต่อเรา</a>
                        <a href="#" class="block px-4 py-2 text-teal-500 rounded hover:text-sky-400 transition-colors duration-300">บริการช่วยเหลือ</a>
                        <a href="#" class="block px-4 py-2 text-violet-300 rounded hover:bg-amber-100 hover:text-pink-300 transition-colors duration-300"><FontAwesomeIcon icon={faHeart} />    สินค้าที่ถูกใจ</a>
                        <a href="#" class="block px-4 py-2 text-violet-300 rounded hover:bg-amber-100 hover:text-pink-300 transition-colors duration-300"><FontAwesomeIcon icon={faShoppingCart} />    ตะกร้าของฉัน</a>
                        <a href="/loginpage"
                            class="block px-4 py-2 text-rose-300 text-center border border-solid border-sky-200 rounded hover:bg-pink-100 hover:text-sky-400 hover:border-pink-100 transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                            Login
                        </a>
                    </div>
                </div>
            </nav>
        </div>

    );
};