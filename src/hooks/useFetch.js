import axios from "axios"
import { useState } from "react"

const useFetch = url => {
    const [resp, setResp] = useState()
    const [hasError, setHasError] = useState(false)
    const [loading, setLoading] = useState(true);

    const getApi = () => {
        setLoading(true);
        axios.get(url)
            .then(res => {
                setTimeout(() => {
                    setResp(res.data);
                    setHasError(false);
                    setLoading(false); 
                }, 2000);
        })
            .catch(err => {
                setHasError(true)
                console.log(err)
                setLoading(false);
        })
    }
    
    return [resp , getApi, hasError, loading]

    }

export default useFetch