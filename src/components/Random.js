import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {


  const [gif,setGif]=useState('');
  const [loading,setLoading]=useState('false')
  async function fetchData(){
       setLoading(true);
       const {data}=await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    //    console.log(data);
       
       const imageSource=data.data.images.downsized_large.url;
       setLoading(false);
       console.log(imageSource)
       setGif(imageSource);
  }

  useEffect(()=>{
    fetchData();
     },[])
   function clickHandler(){
 fetchData();
  }
  return (
    <div className='flex flex-col bg-green-400 w-1/2  mt-[50px] rounded-3xl items-center h-1/2 gap-y-10 border border-black'>
       <h1 className='mt-[15px] underline text-3xl font-bold '>A RANDOM GIF</h1>
     
     {
      loading?(<Spinner></Spinner>):(<img src={gif} width="50%"></img>)
     }  
        <button className='w-10/12 bg-green-200 px-12 py-4 text-2xl font-bold mb-[20px]'
        
        onClick={clickHandler}>
            Generate
        </button>

    </div>
  )
}

export default Random