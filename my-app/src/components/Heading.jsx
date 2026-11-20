import reacrt from "react";
import {createContext, useContext} from "react";
const ThemContext= createContext("light");


const Heading = () => {
    const theme= useContext(ThemContext);

    return (
        <h1>
            Current theme: {theme}
        </h1>
    );
};

export default Heading;