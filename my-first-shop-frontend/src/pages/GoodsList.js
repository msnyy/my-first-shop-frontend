import React, { useEffect, useState } from 'react'
import './GoodsList.css'

export default function GoodsList() {
  const [products, setProducts] = useState();
  async function getData(url = "http://localhost:8080/products") {
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  }
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
  
    fetchData();
  }, []);


  return (
    <div>
    <div class="flex flex-wrap" >
      {products?.map(item => (
        <div>
          <div class="border-2 m-12 rounded shadow-lg">
            <img width={500} src={item.image} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{item.productName}</div>
              <p class="text-gray-700 text-base">
                eiei
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.price}</span>
            </div>
          </div>
        </div>
      ))}
</div>
    </div>
  )
}
