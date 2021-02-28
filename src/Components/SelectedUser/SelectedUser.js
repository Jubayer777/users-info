import React from 'react';
import SelectedIndividual from './SelectedIndividula/SelectedIndividual';
import './SelectedUser.css';

const SelectedUser = (props) => {
    const selectedUser=props.selectedUser;

    let totalSalary=0;
    for(let i=0;i<selectedUser.length;i++){
        totalSalary=totalSalary+selectedUser[i].salary;
    }
    return (
        <div>
            <div className="selected-user-summary">
                <h4>Selected User: {selectedUser.length}</h4>
                <p>Total Salary/Year: ${totalSalary}</p>
                
            </div>
            <div>
                  {
                      selectedUser.map(user=><SelectedIndividual user={user} ></SelectedIndividual>)
                  }

            </div>
        </div>
    );
};

export default SelectedUser;