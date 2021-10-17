import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading,setIstLoading] = useState(false);
    const [error,setError] = useState('');

    const fetching = async () => {
        try {
            setIstLoading(true);
            await callback();
        }catch (e){
            setError(e.message);
        } finally {
            setIstLoading(false);
        }
    }

    return [fetching, isLoading, error];
}