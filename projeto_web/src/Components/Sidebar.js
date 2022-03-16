import React from "react";
import { Bar, Circle, Lines, Menu} from "./styles";

export default function Sidebar(){
    return(
        <>
            <Bar>
                <Circle>
                    <Menu href="/">
                        <Lines/>
                        <Lines/>
                        <Lines/>
                    </Menu>

                </Circle>
            </Bar>
        </>
    );
    
}