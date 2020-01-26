import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    h1{        
        text-align: center;
        margin: 50px auto;
        font-size: 50px;
    }    
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 20px;
    list-style: none;
    font-family: 'Space Mono', monospace;
    
    li{
        display: flex;
        flex-direction:column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        align-items: center;
        text-align: center;        
        max-width: 350px;
        height: 300px;
        margin: 0 auto;
        h1{
            margin-top: 20px;
            margin-bottom: 10px;
            color: #333;
            font-size: 20px;
                       
        }
        p{
            color:#aaa;
        }
        button {
            background: #eaeced;
            margin-top: 20px;    
            padding: 10px 25px 10px 25px;
            border: none;                        
            font-family: 'Space Mono', monospace;
            font-weight: bold;
            font-size: 12px;
            letter-spacing: 1px;
            transition: all .25s ease-in;
            &:hover {
                
                background: #00adf3;
                transition: all .4s;
                color: #fff;
                
            }  
        }
        
        &:hover{
           svg {
               font-size: 80px;
               transition: all .20s ease-in;
           }
        }
        

        

        

    }
`;
