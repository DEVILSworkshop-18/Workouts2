import React from 'react';
import Cards from '../Componenets/Cards';

const Fsd = ({data}) => {
    const fsd = data.filter((ele)=>ele.courses === "fsd")
    return (
        <div>
            <h1>Full Stack Development</h1>
            {fsd.map((element, index)=>{
                return(<Cards element={element} index={index}/>)
            }
            )}
        </div>
    );
};

export default Fsd;