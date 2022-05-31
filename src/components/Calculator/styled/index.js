import styled from "styled-components";

export const Container = styled.div`

justify-content :center;
align-content: center;
width:400px;
hieght:500px;
margin:40px auto ;
grid-template-columns :repeat (4, 100px);
grid-template-rows :minmax (120px ,auto) repeat(5, 100px);
box-shadow:2px 2px 10px #333;
border-radius:10px;
height:550px;
background-color:yellow;
`
export const  Screen = styled.div`
grid-column: 1/ -1 ;
background-color:gray;
display :flex;
justify-content :space-around;
flex-direction :column;
padding:10px;
width:400px;
left:100px;
height:150px;
word-wrap :break-word;
word-break :break-all;
text-align :right;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
` 
export const Previous = styled.div`
color:(255,2555,255,0.75);
font-saze:1.5rem;
`

export const Current = styled.div`
color: white;
font-size: 2.5rem;
letter-spacing: 3px;
`
export const Button = styled.button`
cursor: pointer;
height:80px;
width:100px;
font-size:2rem;
border: 3px outset white;
outline: none;
background-color: rgba(255, 255, 255, 0.75);

&:hover {
    background-color:red;
}



${({gridSpan}) => gridSpan &&`grid-column- span ${gridSpan};`}
${({operation}) => operation &&`background-color: gray;`}
${({control}) => control &&`background-color:skyblue;`}
${({dot}) => dot &&`background-color:skyblue;border-bottom-left-radius:10px;`}
${({equal}) => equal &&`background-color:gray;border-bottom-right-radius:10px;`}


`
