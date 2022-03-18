import React from "react";
import { HistoricalDiv, MainRow, Selection, Circle, Text } from "./styles";
import config from "./img/config.png";
import HistoricalBar from "./HistoricalBar";


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
                <HistoricalBar></HistoricalBar>
                <Circle style={{position:"relative", top:"180px", left:"70px",border:"2px solid #7FC008", width:"5px", height:"5px", borderRadius:"10px"}}></Circle>
                <Circle style={{position:"relative", top:"185px", left:"70px",border: "2px solid #DB8C28", width:"5px", height:"5px", borderRadius:"10px"}}></Circle>
                <Text style={{position:"relative", top:"150px", left:"83px"}}>Inspeções realizadas</Text>
                <Text style={{position:"relative", top:"138px", left:"83px"}}>Planos de ação criados</Text>
            </HistoricalDiv>
        </>
    )
}