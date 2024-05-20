import React from 'react';
import Cards from '../Componenets/Cards';

const Ds = ({data}) => {
    const ds = data.filter((ele)=>ele.courses==="ds");
    return (
        <div>
            <h1>Data Science</h1>
            {ds.map((element, index)=>{
                return(<Cards element={element} index={index}/>)
            }
            )}
        </div>
    );
};

export default Ds;