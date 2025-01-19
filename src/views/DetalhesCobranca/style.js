import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h2 {
        color: #EE6B22;
    }

    .content {
        display: flex;
        width: 70%;
        justify-content: space-between;
        padding: 30px;
    }

    .saleDetail {
        width: 100%;
    }

    .paymentTable {
        width: 100%;
    }
`

export const SaleDetail = styled.div`
    display: flex;

    .details {
        display: block;
    }
`

export const PaymentTable = styled.div`
    width: 100%;
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    th {
        background-color: #20295f;
        color: #fff;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #eee;
    }
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
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
export const InputData = styled.div`
    display: flex;

    input{
        width: 50%;
        cursor: pointer;
    }
`
