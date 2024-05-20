import React from 'react';
import CareerCard from '../Componenets/CareerCard';

const Career = ({data}) => {
    const career = data.filter((ele)=>ele.courses==="career")
    return (
        <div><h1>Cateer Programs</h1>
            {career.map((element, index)=>{
                return(<CareerCard element={element} index={index}/>)
            }
            )}
        </div>
    );
};

export default Career;