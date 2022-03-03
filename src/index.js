import React from "react";
import ReactDOM from "react-dom";
import ColoradoStateParks from "./ColoradoStateParks";
import HowManyParks from "../src/parks/howManyParks";
import MesaVerde from "../src/parks/MesaVerde";
import RockyMountain from "../src/parks/RockyMountain";


ReactDOM.render(<ColoradoStateParks />,
    
    <HowManyParks/>,
    <MesaVerde/>,
    <RockyMountain/>,
    
    document.getElementById("root"));
