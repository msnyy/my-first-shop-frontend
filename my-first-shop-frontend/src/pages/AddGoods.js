import React, { useState, useEffect } from 'react'

export default function AddGoods() {
    const [Name, setNames,] = useState('');
    const [Details, setDetails] = useState('');
    const [Price, setPrice] = useState('');
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

    const onImageChange = (event) => {
        const files = event.target.files;
    
        const newImages = Array.from(files);
    
        Promise.all(
          newImages.map((image) => {
            return new Promise((resolve) => {
              const reader = new FileReader();
              reader.onload = (e) => resolve(e.target.result);
              reader.readAsDataURL(image);
            });
          })
        ).then((urls) => {
          setImageURLs((prevImages) => [...prevImages, ...urls]);
        });
      };




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
                                <input htmlFor='Name' class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-300" id="inline-full-name" type="text" placeholder="รายละเอียด" value={Name} onChange={handleNameChange}>
                                </input>
                            </div>
                        </form>
                    </div>
                    <div className='px-4 mx-auto md:flex md:items-center '>
                        <a class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded  transition-colors duration-300">รายละเอียดของสินค้า</a>
                        <h1 class="md:mx-2 text-zinc-400 rounded transition-colors duration-300">( ระบุได้ไม่เกิน 1000 ตัวอักษร )</h1>
                        <form class="w-full max-w-sm  " onSubmit={handleSubmit}>
                            <div class="m-4 md:w-3/3 ">
                                <input  htmlFor='details' class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-300" id="inline-FillDetails" type="text" placeholder="รายละเอียด" value={Details} onChange={handleDetailChange}>
                                </input>
                            </div>
                        </form>
                    </div>
                    <div className='px-4 mx-auto md:flex md:items-center'>
                        <a class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded  transition-colors duration-300">ราคา</a>
                        <form class="w-full max-w-sm  " onSubmit={handleSubmit}>
                            <div class="m-4 md:w-3/3 ">
                                <input htmlFor='price' class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-300" id="inl  ine-FillPrice" type="text" placeholder="รายละเอียด" value={Price} onChange={handlePriceChange}>
                                </input>
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-wrap items-center space-y-10 space-x-10 w-full">
                        <input htmlFor='imageURLs' id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={onImageChange} multiple/>
                        {imageURLs.map((image, index) => (
                            <img className="w-1/6" key={index} alt={`Selected Image ${index + 1}`} src={image}/>
                        ))}
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-1/5 h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">เพิ่มรูปภาพ</p>
                            </div>
                        </label>
                    </div>
                    <div className="kb-buttons-box m-10">
                                            <button type="submit" className="form-submit p-2 lg:px-4 md:mx-2 text-rose-400 text-center border border-solid border-sky-400 rounded hover:bg-pink-100 hover:text-sky-400 hover:border-pink-100 transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Upload</button>
                                        </div>
                </div>
            </div>
        </div>
    );
};