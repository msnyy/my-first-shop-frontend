import React, { useState } from 'react'

export default function AddGoods() {
    const [Name, setNames,] = useState('');
    const [Details, setDetails] = useState('');
    const [Price, setPrice] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

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

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };




    return (
        <div className='flex justify-center'>
            <div class="border-2 m-12 rounded shadow-lg w-2/3">
                <div class="grid grid-cols-1  bg-pink-100">
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
                <div className='px-4 mx-auto md:flex md:items-center '>
                    <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded  transition-colors duration-300">ราคา</a>
                    <form class="w-full max-w-sm  " onSubmit={handleSubmit}>
                        <div class="m-4 md:w-3/3 ">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-300" id="inline-FillPrice" type="text" placeholder="รายละเอียด" value={Price} onChange={handlePriceChange}>
                            </input>
                        </div>
                    </form>
                </div>
                <div class='pt-4 px-4'>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {selectedImage && (
                        <div>
                            <img src={selectedImage} alt="Selected" style={{ maxWidth: '300px' }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};