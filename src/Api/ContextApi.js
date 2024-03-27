import React,{useState,useEffect} from "react";

export const ContextApi =React.createContext();


export const ContextApiProvider = ({children})=>{

    const [userData,setUserData]=useState({});

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
        .then(response => response.json())
        .then(response =>{
            setUserData(response.user); 
            
        });
    },[]);
    console.log(userData);
  

    return (
            <ContextApi.Provider value={{userData}}>
                {children}
            </ContextApi.Provider>
        );

};

