import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MultilangStrings from '../../languages';

class Header extends Component {
    render() {
        return (
            <div className="el-header">
                <div className="logo el-header-item">
                    <a href="/"><img src="/img/logo.png" /></a>
                </div>
                <div className="el-menu">
                    <ul>
                        <li><Link to="/courses">{MultilangStrings.menu.courses}</Link></li>
                        <li><Link to="/blog">{MultilangStrings.menu.blog}</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;