import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 125px;
  background: #fff;
`;

export const ContentFull = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5px 10px 0 10px;
    display: flex;

`;

export const Content = styled.div`
  padding-left: 80px;
  flex-grow: 1;

`;
export const Logo = styled.div`
      display: flex;
      align-items: center;
`;

export const Cabeca = styled.div`
  

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 20px 0;
    margin-left: 40px;
    border-top: 1px solid #eee;
    li {    
      margin-left: 10px;      
      font-size: 12px;
      font-weight: 700;      
      letter-spacing: .1em;
      color: #333333;
      font-family: Lato,"Helvetica Neue",Helvetica,Arial,sans-serif;
      
      cursor: pointer;
      &:hover{
        color: #1E90FF;
        opacity: 0.8;
      }
    }
    aside{
      margin-left: 100px;
    }
  }
`;
export const Option = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0 12px 0;    
    margin-left: 30px;

    li {
      margin-left: 10px;
      font-size: 12px;
      aside{
        display:flex;
        flex-direction: row;          
        div{ 
         margin-left: 10px;
          cursor: pointer;
          &:hover{
            opacity: 0.6;
          }

        } 
      }
      span{
        opacity: 0.5;
      }
      a{
        cursor: pointer;  
        &:hover{
          color: #1E90FF;
          opacity: 0.8;
        }
      }

    }
    
    button{
      display: flex;
      align-items: center;
      border: none;
      background: #eee;
      padding: 7px 20px 7px 20px;
      font-family: "Space Mono", Menlo, Monaco, Consolas, "Courier New", monospace;
      font-weight:bold;
      font-size: 12px;
      div{
        margin-right: 2px;                
      }
      &:hover{        
        background: #1E90FF;
        color: #fff;
      }

    }
  }
`;