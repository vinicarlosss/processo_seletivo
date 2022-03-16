import React from "react";
import { ControllerDiv, Main } from './styles';
import chart from "./img/bar-chart@2x.png";

export default function Controller(){
    return(
        <>
            <ControllerDiv>
                <Main>
                    <a href="">
                        <img src ={chart}/>
                        <p>Painel de Controle</p>
                    </a>

                </Main>
            </ControllerDiv>
        </>
    )
}