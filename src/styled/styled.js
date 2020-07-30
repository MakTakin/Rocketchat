import styled from "styled-components"

export const Container = styled.div` 
    max-width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    border: 2px grey solid;
    border-radius: 20px;
    padding: 5px;
    `
export const Header = styled.h1` 
    text-align: center;
    font-size: 40px;
    margin: 10px 0;
    `
 export const Input = styled.input`
    border: 2px #00b9ffa6 solid;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding:5px;
    
    :focus {
     outline: blue;
     }
     `
export const Post = styled.div`
    background: #9e9e9e14;
    border: 3px #00b9ffa6 solid;
    border-radius: 20px;
    margin-bottom: 10px;
    padding:10px;
    `
export const Name = styled.div`
     font-weight: 800;
     font-size:20px;
     `
export const UserName = styled.div`
     font-style: italic;
     margin-left:5px;
     color: grey;     
     `
export const Ul = styled.ul`
     display:flex;
     flex-wrap: wrap;
     margin-left: 20px;
    `
export const Li = styled.li`
     font-size: 20px;
     border-radius: 5px;
     margin-right: 4px;
     border: ${props =>
     props.active ? '2px blue solid': '1px #00b9ffa6 solid'};
    `

export const A = styled.a`
     text-decoration: none;
     padding: 0 5px;
     
     color: ${props =>
     props.active ? 'blue': 'black'};
     
     font-weight: ${props =>
     props.active ? 'bold': 'normal'};
    `
