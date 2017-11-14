import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MultilangStrings from '../../languages';

class Header extends Component {
    render() {
        return (
            <div className="page-header">
                <div className="logo page-header-item">
                    <a href="/"><img src="/img/logo.png" /></a>
                </div>
                <div className="page-menu">
                    <ul>
                        <li><Link to="/wiki">Wiki</Link></li>
                        <li><Link to="/under-frade-2">Under grade 2</Link></li>
                        <li><Link to="/grage-2-5">Grade 2 - 5</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;