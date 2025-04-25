import { Routes ,Route} from "react-router-dom";
import Pockedex from "../components/Pockedex/Pockedex";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";
function CustomRoutes(){
    return(
       <Routes>
          <Route path="/" element={<Pockedex/>}/>
          <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
       </Routes>
    );
}
export default CustomRoutes;