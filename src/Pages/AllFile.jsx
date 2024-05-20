import React from 'react';
import Cards from '../Componenets/Cards';

const AllFile = ({data}) => {
    const all = data.filter((ele)=>ele.all==="all");
    return (
        <div>
            <h1>All Courses</h1>
            {all.map((element, index)=>{
                return(<Cards element={element} index={index}/>)
            }
            )}
        </div>
    );
};

export default AllFile;