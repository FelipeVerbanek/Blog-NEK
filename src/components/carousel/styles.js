import styled from 'styled-components';
//url('${props=>(props.src)}');
export const Container = styled.div`    
    @import url('https://fonts.googleapis.com/css?family=Space+Mono&display=swap');
    height: 500px;
    background-image: url(${props => (props.src)});
    background-size: cover;
    background-repeat: no-repeat;
    div{
        max-width: 800px;
        padding-right: 15px;
        padding-left: 15px;
        display: flex;    
        justify-content:center;
        flex-direction: column;
        margin: 100px auto;
        font-family: 'Space Mono', monospace;
        color: #fff;
        h1{
            font-size: 70px;
            font-weight: normal;
        }
        p{
            margin-top: 20px;
            font-size: 20px;
            opacity: 0.8;
        }
        button{
            width: 140px;
            height: 60px;
            padding: 5px auto;
            margin-top: 40px;
            border: none;
            background: linear-gradient(to left, #00c7b1, #00aaf8 100%);
            color: #fff;
            font-size: 16px;            
            
            letter-spacing: 1px;
            font-family: 'Space Mono', monospace;

            &:hover{
                transition: all .15s ease-in;
                background:#00aaf8;
                
            }
        }
    }

`;
