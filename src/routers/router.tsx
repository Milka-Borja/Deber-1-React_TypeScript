import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ModuloPage } from "../pages/ModuloPage";
import { Modulo2Page} from "../pages/Modulo2Page";

export function MyRoutes (){
    return(
        <BrowserRouter> 
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/modulo1" element={<ModuloPage/>}/>
            <Route path="/modulo2" element={<Modulo2Page/>}/>
        </Routes>
        </BrowserRouter>
    )
}