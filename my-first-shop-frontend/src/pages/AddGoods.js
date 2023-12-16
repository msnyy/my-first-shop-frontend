import React, { useState, useEffect } from 'react'

export default function AddGoods() {
    const [Name, setNames,] = useState('');
    const [Details, setDetails] = useState('');
    const [Price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    const handleNameChange = (event) => {
        setNames(event.target.value);
    };

    const handleDetailChange = (event) => {
        setDetails(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (images.length < 1) return;
        const newImagesUrls = [];
        images.forEach(image => newImagesUrls.push(URL.createObjectURL(image)))
        setImageURLs(newImagesUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }





    return (
        <div>
            <div className='flex justify-center '>
                <div class=" m-12 rounded-lg shadow-lg w-2/3 h-screen">
                    <div class="grid grid-cols-1 rounded-t-lg bg-pink-100">
                        <h1 class='m-3'>กรุณากรอกข้อมูลสินค้าของท่าน</h1>
                    </div>
                    <div className='pt-4 px-4 mx-auto md:flex md:items-center '>
                        <h1 class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded transition-colors duration-300">ชื่อสินค้า</h1>
                        <h1 class="md:mx-2 text-zinc-400 rounded transition-colors duration-300">( ระบุได้ไม่เกิน 200 ตัวอักษร )</h1>
                        <form class="w-full max-w-sm  " onSubmit={handleSubmit}>
                            <div class="m-4 md:w-3/3 ">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-300" id="inline-full-name" type="text" placeholder="รายละเอียด" value={Name} onChange={handleNameChange}>
                                </input>
                            </div>
                        </form>
                    </div>
                    <div className='px-4 mx-auto md:flex md:items-center '>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded  transition-colors duration-300">รายละเอียดของสินค้า</a>
                        <h1 class="md:mx-2 text-zinc-400 rounded transition-colors duration-300">( ระบุได้ไม่เกิน 1000 ตัวอักษร )</h1>
                        <form class="w-full max-w-sm  " onSubmit={handleSubmit}>
                            <div class="m-4 md:w-3/3 ">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-300" id="inline-FillDetails" type="text" placeholder="รายละเอียด" value={Details} onChange={handleDetailChange}>
                                </input>
                            </div>
                        </form>
                    </div>
                    <div className='px-4 mx-auto md:flex md:items-center'>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded  transition-colors duration-300">ราคา</a>
                        <form class="w-full max-w-sm  " onSubmit={handleSubmit}>
                            <div class="m-4 md:w-3/3 ">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-300" id="inl  ine-FillPrice" type="text" placeholder="รายละเอียด" value={Price} onChange={handlePriceChange}>
                                </input>
                            </div>
                        </form>
                    </div>
                    <div class="flex items-center my-5 space-x-10 w-full">
                        <input id="dropzone-file" type="file" class="hidden" accept="image/*" onChange={onImageChange} />
                        {imageURLs.map((image, index) => (
                            <img class='w-1/6' key={index} alt={`Selected Image ${index + 1}`} src={image} />
                        ))}
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-1/5 h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            </div>

                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};