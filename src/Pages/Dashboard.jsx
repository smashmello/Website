import React from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCogs, faBox } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
    return (
        <div className="sidebar">
            <h2>My Dashboard</h2>
            <ul>
                <li><a href="#"><FontAwesomeIcon icon={faHome} /> Home</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faUser} /> User</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faCogs} /> Settings</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faBox} /> Product</a></li>
            </ul>
        </div>
    );
}

export default Dashboard;
