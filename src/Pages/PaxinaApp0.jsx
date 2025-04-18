import { useDatosContext } from "../componentes/useDatosContext";

const PaxinaApp0 = () => {
  const {logout} = useDatosContext();
    return <h1>
      <div>PaxinaApp0</div>
  <button onClick={logout}>Saír</button>
    </h1>;
  };
  
  
  export default PaxinaApp0;