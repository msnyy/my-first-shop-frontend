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
                    <div class='flex justify-center h-64'>
                        <div class="file-upload-box bg-sky-100 rounded-lg border-dashed border-4 border-violet-400 w-1/4">
                            <div class='flex justify-center'>
                                <input type="file" accept="image/*" onChange={onImageChange} />
                                {imageURLs.map(imageSrc=> (
                                <img class='w-2/3' src={imageSrc}/>)
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};