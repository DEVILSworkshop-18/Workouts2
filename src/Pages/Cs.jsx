import React from 'react';
import Cards from '../Componenets/Cards';

const Cs = ({data}) => {
const cs = data.filter((ele)=>ele.courses==="cs")
    return (
        <div>
            <h1>Cybersecurity</h1>
            {cs.map((element, index)=>{
                return(<Cards element={element} index={index}/>)
            }
            )}
        </div>
    );
};

export default Cs;