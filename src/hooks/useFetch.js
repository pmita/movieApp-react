import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    // STATE
    const [data, setData] = useState({})
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
   
    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsPending(true)
            setError(null)
    
            try{
                const response = await fetch(url, { signal : controller.signal })
    
                if(!response){
                    throw new Error(response.statusText)
                }
    
                const json = await response.json()
                setIsPending(false)
                setError(null)
                setData(json)
            } catch(err){
                if(err.name === 'AbortError'){
                    console.log('Fetch request was aborted')
                } else {
                    setError(err.message)
                    setIsPending(false)
                }
            }
        }
        
        fetchData();

        return () => controller.abort();
    }, [url])


    return { data : data, isPending : isPending, error : error };
}
