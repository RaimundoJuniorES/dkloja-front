import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 80px;

    a{
        text-decoration: none;
        color: #000;
    }
`

export const ButtonEditar = styled.div`
    margin: 2px;
    background-color: #B0C4DE;
    color: #fff;
    width: 45%;
    height: 25px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    border-radius: 7px;
`

export const ButtonExcluir = styled.div`
    margin: 2px;
    background-color: #FF6347;
    color: #fff;
    width: 45%;
    height: 25px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    border-radius: 7px;
    cursor: pointer;

`

export const Title = styled.div`
    width: 98%;
    height: 30px;
    border-bottom: 1px solid #20295F;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 20px;


    h3{
        color: #20295F;
        position: relative;
        top: 15px;
        background: #fff;
        padding: 0 20px;
    }
`