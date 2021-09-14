import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity: 0.5;
    }

    .actived{
        border: 1px solid #EE6B26;
        border-radius: 10px;
    }

    button{
        border: none;
        background: none;
    }

    button:focus {
        outline: none;
        box-shadow: none;
    }

    img{
        width: 80%;
        height: 70%;
        margin: 10px;
        cursor: pointer;
        padding: 10px;
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    label{
        color: #707070;
        margin-bottom: 5px;
    }

    input{
        font-size: 16px;
        padding: 15px;
        border: 1px solid #EE6B26;
        border-radius: 10px;
    }

    img{
        width: 20px;
        height: 20px;
        position: relative;
        left: 95%;
        bottom: 30px;
    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    label{
        color: #707070;
        margin: 5px 0;
    }

    textarea{
        font-size: 16px;
        padding: 15px;
        border: 1px solid #EE6B22;
        border-radius: 10px;
        font-family: 'Roboto', sans-serif;
    }

    textarea:focus{
        outline: none;
        box-shadow: none;
    }
`

export const InputData = styled.div`
    display: flex;

    input{
        width: 50%;
        cursor: pointer;
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        font-weight: bold;
        color: #20295F;
        border: none;
        background: none;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

    button:focus {
        outline: none;
        box-shadow: none;
    }

    div{
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
        font-size: 18px;

    }
`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button{
        width: 100%;
        background: #EE6B26;
        border: none;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

    button:focus {
        outline: none;
        box-shadow: none;
    }

`
   
