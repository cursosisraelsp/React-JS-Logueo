import { Route, Routes } from 'react-router-dom'
import {useDatosContext} from '../componentes/useDatosContext.jsx'
import PaxinaApp0 from '../Pages/PaxinaApp0.jsx'
export default function UtilizoSeleccion({children}){
    const {isUserLogueado} = useDatosContext()
    
    return <>
    {isUserLogueado ? <div><Routes>
        <Route path="paxinaapp0" element={<PaxinaApp0 />} />
        </Routes></div> : <div>{children}</div>}
    </>
}