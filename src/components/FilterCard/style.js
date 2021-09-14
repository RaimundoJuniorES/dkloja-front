import styled from 'styled-components';

export const Container = styled.div`
    width: 230px;
    height: 70px;
    background-color: ${ props => props.actived ? '#EE6B22' :  '#20295f' };
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    border-radius: 5px;

    img{
        width: 25px;
        height: 25px;
    }

    span{
        color: white;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover{
        background-color: #EE6B22;
        cursor: pointer;
    }
`


