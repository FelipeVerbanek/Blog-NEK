import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    
    h1{
        width: 200px;
        margin: 100px auto;
    }
`;
export const Title = styled.div`    
    display: flex;    
    width: 100%;
    margin-top: 50px;
    text-align: center;    
    font-size: 18px;
    font-weight: 1px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    align-items: center;    
    span{
        margin-left: 50px;
    }
    p {        
        width: 100px;
        margin: 0 auto;
        text-align: center;
    }
    
`;


export const Content = styled.div`
    width: 100%;
    height: 400px;
    background: #fff;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 20px;
    list-style: none;    
`;

export const Sifr = styled.span`
    margin-top: 15px;    
    color: ${props => ( props.best ? '#00c7b1' : '#000' )};

`;

export const Card = styled.div`
    flex-direction:column; 
    border-left: solid 1.5px #eee;


    ul li {
        padding-top: 5px;
        text-align: center;
        opacity: 0.7;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    button {        
        margin: 20px auto;
        padding: 10px 15px 10px 15px;
        align-items: center;
        border: none;
        background: linear-gradient(to left, #00c7b1, #00aaf8 100%);
        color: #fff;
        font-size: 12px; 

        letter-spacing: 1px;
        font-family: 'Space Mono', monospace;

        &:hover{
            transition: all .15s ease-in;
            background:#00aaf8;
                
        }
        
    }
`;

export const ContentPrice = styled.div`        
    width: 100px;
    margin: 40px auto;
    display: flex;
    font-family: 'Bebas Neue', arial;
`;
        
    
export const Price = styled.span`
    font-size: 60px;
    margin-left: 5px;
    margin-right: 5px;
    color: ${props => ( props.best ? '#00c7b1' : '#000' )};

`;
export const Bestseller = styled.div`
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
    color: #ffffff;
    background-image: -webkit-linear-gradient(left, #00a9ff 0%, #00caad 100%);
    background-image: -o-linear-gradient(left, #00a9ff 0%, #00caad 100%);
    background-image: linear-gradient(to right, #00a9ff 0%, #00caad 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF00A9FF', endColorstr='#FF00CAAD', GradientType=1);
    font-size: 12px;
    line-height: 22px;
    white-space: nowrap;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .075em;

    &::before{
        content: '';
        position: absolute;
        left: calc(121% - 20px);        
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-bottom: 11px solid transparent;
        border-top: 11px solid transparent;
        border-left: 12px solid rgb(0,201,175);
    }

`;