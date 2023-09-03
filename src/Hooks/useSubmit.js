import { useState, useEffect } from "react";

const url = "http://localhost:5000";
const useSubmit = (props) => {
    const [fomData, setFormData] = useState({});
    const [response, setResponse] = useState({});
    useEffect(() => {
        setFormData({...fomData, props});
    }, [props, fomData]);

    async function login(){
        const response = await fetch(`${url}/getUser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fomData)
        });
        const json = await response.json();
        console.log(json);
        setResponse(json);
    }
    login();
    return response
}
 
export default useSubmit;