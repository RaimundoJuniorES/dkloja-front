import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height: 70px;
    background-color: #20295f;
    display: flex;
    border-bottom: 5px solid #EE6B22;
    color: white;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 30px;

    img{
        width: 80px; 
        height: 60px;
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button{
        background: none;
        border: none;
        cursor: pointer;
    }

    button:focus {
        outline: none;
        box-shadow: none;
    }

    a, button{
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

       &:hover{
        color: #EE6B22;
    } 

    }

    #notification{
        
        img{
            width: 25px;
            height: 30px;
        }

        span{
            background-color: white;
            color: #EE6B22;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px; 
        }

        &:hover{
            opacity: 0.5;
        }
    }

    .dividir::after{
            content: "|";
            margin: 0 10px;
            color: white;
    }

    .dropbtn {
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #20295f;
  min-width: 210px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  padding: 0;
  border-radius: 10px;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  margin: 0;

}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
   color: #EE6B22
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
`