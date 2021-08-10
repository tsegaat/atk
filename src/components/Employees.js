import React from 'react';

const Employees = ({name, img, title, description}) => {
    return(
        <>
            {/* Employee photo */}
            <img src={img} alt={name.split(" ")[0]} style={{"width":"100%"}}/>
            {/* Employee name */}
            <h3>{name}</h3>
            {/* Employee title */}
            <p className="w3-opacity">{title}</p>
            {/* Employee description */}
            <p>{description}</p>
        </>
    )
}

export default Employees