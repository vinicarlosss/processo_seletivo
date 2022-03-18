import styled from 'styled-components';


export const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Bar = styled.div`
    position: absolute;
    width: 51px;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: linear-gradient(180deg, #0DB2D6 8.12%, #4FDA91 71.62%);
`;

export const Circle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 61px;
    height: 61px;
    left: -5px;
    top: 136px;
    background: #FAFAFA;
    border-radius: 30px;
`;

export const ControllerDiv = styled.div`
    position: absolute;
    width: 300px;
    height: 100vh;
    left: 80px;
    border-right: 1px solid #EBEBEB;
    p{
        position: absolute;
        width: 153px;
        height: 26px;
        left: 106px;
        top: 111px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 26px;
        color: #0794B2;
    }
    img{
        position: absolute;
        width: 40px;
        height: 30px;
        left: 59px;
        right: 93.26%;
        top: 125px;
    }
`;

export const Menu = styled.a`
    cursor: pointer;
`;
export const Lines = styled.div`
    width: 20px;
    height: 2px;
    background: black;
    margin: 3px;
`;

export const Tittle = styled.h1`
    position: relative;
    width: 364px;
    height: 26px;
    left: 390px;
    top: 33px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 26px;
    color: #333333;
`;

export const HistoricalDiv = styled.div`
    position: relative;
    background: #FFFFFF;
    margin: 40px;
    width: 1000px;
    height: 300px;
    left: 350px;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px
        rgba(0,0,0,0.05);
    border-radius: 5px;
    h4{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 21px;
        color: #333333;
    }
    img{
        position: relative;
        width: 30px;
        height: 25px;
        top: 15px;
        left: 565px;
    }
`;

export const Selection = styled.select`
    position: relative;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    top: 15px;
    left: 550px;
    margin-left: 10px;
    background: #C4C4C4;
    border-radius: 100px;
    width: 244px;
    height: 28px;
    option{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
    }
`;

export const LittleBar = styled.div`
    height: 13.5px;
    margin: 2px;
    transform: rotate(-90deg);
`;

export const LittleBarDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Text = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 9px;
    line-height: 17px;
    color: #161616;
`;
