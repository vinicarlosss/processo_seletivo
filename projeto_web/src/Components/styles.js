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
    width: 1088px;
    height: 100vh;
    left: 279px;
    top: 0px;
    border: 1px solid #EBEBEB;
    transform: rotate(90deg);
`;
