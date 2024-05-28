import React, { useEffect } from 'react'

const useInfiniteScroll = (setLoading, setPage) =>{
    useEffect(()=>{
        const handleInfiniteScroll = async()=>{
            try{
                if(window.innerHeight + document.documentElement.scrollTop + 1 >=  document.documentElement.scrollHeight){
                  setLoading(true); 
                  setPage((prev)=> prev + 1);
                }
              }catch(error){
                console.log(error)
              };
        };

     window.addEventListener("scroll", handleInfiniteScroll);

     return ()=> window.removeEventListener('scroll', handleInfiniteScroll)
    },[setLoading, setPage]);

}

export default useInfiniteScroll