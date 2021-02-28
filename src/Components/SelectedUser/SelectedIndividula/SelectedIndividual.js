import React from 'react';
import './SelectedIndividual.css';

const SelectedIndividual = (props) => {
    const {img,name}=props.user;
    return (
        <div className="selected-individual">
            <img src={img} alt=""/>
            <p>{name}</p>
        </div>
    );
};

export default SelectedIndividual;