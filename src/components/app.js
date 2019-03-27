import React from "react";
import Table from "./table";

const students = [
    {
        student: "Peter Parker", 
        course: "Intro to Photography", 
        grade: 85
    }, 
    {
        student: "Bruce Banner",
        course: "Psychology", 
        grade: 91
    }, 
    {
        student: "Tony Stark", 
        course: "Mechanical Engineering", 
        grade: 100
    }
];

export default function App(){
    return <div className="container">
                <h1>Student Grade Table</h1>
                <Table data={students}/>
            </div>
}