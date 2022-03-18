import React from "react";
import { Main, MainRow, LittleBar, LittleBarDiv } from "./styles";

export default function HistoricalBar(){
    return(
        <>
            <Main>
                <LittleBarDiv style={{position: "absolute",top: "205px", left: "80px"}}>
                    <LittleBar style={{background:"#4B9EEA", width:"20px"}}></LittleBar>
                    <LittleBar style={{position:"relative",top:"5px",background:"#C00808", width:"10px"}}></LittleBar>
                    <LittleBar style={{position:"relative",top:"4px",background:"#A91B79", width:"15px"}}></LittleBar>
                </LittleBarDiv>
                <LittleBarDiv style={{position: "absolute",top: "202px", left: "90px"}}>
                    <LittleBar style={{position:"relative",bottom:"50px",background:"#4B9EEA", width:"130px"}}></LittleBar>
                    <LittleBar style={{position:"relative",bottom:"60px", right:"125px",background:"#C00808", width:"150px"}}></LittleBar>
                    <LittleBar style={{position:"relative",top:"10px",background:"#A91B79", right:"190px", width:"10px"}}></LittleBar>
                </LittleBarDiv>
            </Main>

        </>
    )
}