import styled from 'styled-components'

export const Container = styled.div`
    width: 220px;
    height: 180px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    cursor: pointer;
    transition: all 0.3s;
    opacity: ${props => props.done ? 0.5 : 1};

    &:hover{
        opacity: 0.5;
    }
`

export const TopCard = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 10px;
   
    strong{
        margin-top: 5px;
        font-size: 18px;
        padding: 5px;
    }
`

export const BottomCard = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 4px;
    margin-top: 10px;
    strong{
        color: #EE6B26;
        font-weight: bold;
    }

    span{
        color: #707070
    }
`