import React from 'react'
import { NavLink } from 'react-router-dom'

const Assessment = () => {
    return (
        <div style={{ marginTop: '200px' }}>
            <h1>Assessment</h1>
            <ul type="circle" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <li><NavLink to='/spell'><h3>Spell</h3></NavLink></li>
                <li> <NavLink to='/read'><h3>Reading</h3></NavLink></li>
                <li><NavLink to='/math'><h3>Math</h3></NavLink></li>
                <li><NavLink to='/imagequiz'><h3>ImageQuiz</h3></NavLink></li>
            </ul>
        </div>
    );
}

export default Assessment