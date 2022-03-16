import React from "react";
import { HistoricalDiv, MainRow, Selection } from "./styles";
import config from "./img/config.png";


export default function Historical(){
    return(
        <>
            <HistoricalDiv>
                <MainRow>
                    <h4>Histórico de eventos</h4>
                    <Selection>
                        <option>Diário</option>
                        <option>Semanal</option>
                        <option>Mensal</option>
                    </Selection>
                    <a href="/"><img src={config}/></a>
                </MainRow>
            </HistoricalDiv>
        </>
    )
}