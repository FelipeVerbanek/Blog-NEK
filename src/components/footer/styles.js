import styled from 'styled-components';
export const Container = styled.footer`
    background: #23242a;
    width: 100%;
    height: 400px;
    margin-top: 100px;


`;

export const Header = styled.div`
    display: flex;    
    
`;

export const Rp = styled.div`
    width: 100%;
    height: 50px;
    background: #1e1f24;
    color: #fff;  
    div{
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px 0 10px 0;
    }
    
`;

export const ContentInitial = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 40px;    
    justify-content: space-between;
`;

export const ContentSuport = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background: #393a42;
    background: linear-gradient(to right, #393a42, #23242a 100%);

    padding-top: 30px;
      
    color: #fff; 

`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;

    h1{
       
       font-size: 23px;
   }
   p{
       margin-top: 10px;

   }
`;

export const Icon = styled.div`
    width: 50px;
    margin-left: 200px;
    svg{

        margin: 12px auto;
    }
`;

export const LabelSubscribe = styled.div`
    display: flex;
    color: #fff;
    
    p{
        margin-top: 10px;
        margin-left: 30px;
    }
`;
export const ContentSubscribe = styled.div`
    display:flex;
    margin-top: 15px;   
    button {
        align-items: center;
        border: none;
        background: #eee;
        padding: 7px 20px 7px 20px;
        margin-left: 20px;
        font-family: "Space Mono", Menlo, Monaco, Consolas, "Courier New", monospace;
        background: linear-gradient(to left, #00c7b1, #00aaf8 100%);
        color: #fff;
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

    input{
        background: none;   
        padding-left: 10px;
        
        height: 50px;
        width: 480px;
        border: solid 1px #61636b;
        color: #61636b;
        
    }
`;

export const ContentDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 200px;
    list-style: none; 
    max-width: 1200px;
    margin: 0 auto;
    div{
        width: 260px;
        
        h1{
            border-left: 7px solid #1E90FF;
            padding-left: 10px;
            margin-top: 20px;
            color: #fff;
            font-size: 14px;
        }
        ul{
            margin-top: 20px;
            border-top: 1px solid #61636b;
            padding: 30px 0 10px 0;
            color: #fff;
        }
    }
`;

