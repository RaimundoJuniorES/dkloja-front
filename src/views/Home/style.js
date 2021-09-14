import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    //flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;

    button{
        background: none;
        border: none;
    }
    button:focus {
        outline: none;
        box-shadow: none;
    }
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