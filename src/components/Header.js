import React from "react";
import { Children } from "react/cjs/react.production.min";

export default function Header ({title , children}){
    return(
        <header>
            <h1>{title}</h1>

            {children}
        </header>
    )
}