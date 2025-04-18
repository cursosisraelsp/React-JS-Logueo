import React,{createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
export const LocalContext = createContext(); // inicializo
//
function Proveedorcontexto({children}){
    const [isUserLogueado,setIsUserLogueado] = useState(false)
    let navigate = useNavigate();
    const login=(dato)=>{
        console.log("estou en Proveedorcontexto en login: ",dato.username)
        if(dato.username == 'Israel'){
            console.log('estou dentro de filtro: ',dato.username)
            setIsUserLogueado(true)
            navigate('/paxinaapp0')
        }
    }
    const logout =(dato)=>{
        console.log("estou en Proveedorcontexto en logout: ",dato)
        setIsUserLogueado(false)
        navigate('/')
        return dato
    }
    
    return (
        <LocalContext.Provider value={{login,logout,isUserLogueado}}>
            {children}
        </LocalContext.Provider>
    )
}

export{
    Proveedorcontexto
}