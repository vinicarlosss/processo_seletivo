import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
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