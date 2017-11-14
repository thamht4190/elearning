import React, { Component } from 'react'
import { connect } from 'react-redux'

const GRADES = [
    {
        index: "P",
        name: "Pre-K",
        description: "Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more",
        subjects: [{ name: "Math", skills: 77 }, { name: "Language arts", skills: 48 }]
    }
]

class ComponentGradeList extends Component {
    render() {
        return (
            <ul className="grade-list-wrapper">
                {GRADES.map(grade => {
                    return (
                        <li key={grade.index}>
                            <span className="index">{grade.index}</span>
                            <h4>{grade.name}</h4>
                            <p>{grade.description}</p>
                            <hr />

                            {grade.subjects.map((subj, index) => {
                                return (
                                    <div key={index}>
                                        <span>{subj.name}</span>
                                        <span>{subj.skills}</span>
                                    </div>
                                )
                            })}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ComponentGradeList