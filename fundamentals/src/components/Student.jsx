{/*import React from 'react';

const students= [
        {name: 'jane', id:34, grade: 70, course: 'Maths', status: 'Active'},
        {name: 'Evans', id: 45, grade: 19, course:'Chemistry', status: 'Inactive'},
        {name: 'Carrington', id:55, grade: 65, course: 'Biology', status: 'active'},
        {name: 'Kipngeno', id:65, grade: 59, course: 'Braille', status: 'active'}
    ];

function Student(){
    
    return(
        <>
        <h1>promotion status</h1>
        <StudentStatus  students={students}/>
        </>
    )
}

function StudentStatus({students}){
    const activeStudents= students.filter( (student) => student.status.toLowerCase() === 'active');
    return(
        <ul>
            {activeStudents.map( (student) =>{
                if(student.grade >= 60){
                    return(
                        <li key={student.id}><p>{student.name}, you have been promoted, congratulations</p></li>
                    );
                    
                } else{
                    return(
                    <li key={student.id}><p>{student.name}, you didn't attain the promotion</p></li>
                    );
                }
            }       
            )}

        </ul>
    )
}
export default Student;*/}