import React, { Component } from 'react';
import WOW from 'wow.js';
import 'animate.css';
import { Link } from 'react-router-dom';


class submenu extends Component {
    componentDidMount() {
        new WOW().init();
    }
    render() {
        // const currentPageName = this.props.breadcrumb.pagename;
        return (
            <div className="container-fluid bg-danger submenu-section">
                <div className="row sub-pages-menu">
                    <ul className="d-flex justify-content-between pt-2" style={{ width: "100%" }}>
                        <li className={this.props.pagename.pagename === 'The Journey' ? 'active' : ''}>
                            <Link to="/aboutus">The Journey</Link>
                        </li>
                        <li className={this.props.pagename.pagename === 'Where we are' ? 'active' : ''}>
                            <Link to="/Where-we-are" >Where we are</Link>
                        </li>
                        <li className={this.props.pagename.pagename === 'Awards & Recognitions' ? 'active' : ''}>
                            <Link to="/awards-recognitions">Awards & recognitions</Link>
                        </li>
                        <li className={this.props.pagename.pagename === 'CSR Initiatives' ? 'active' : ''}>
                            <Link to="/csr-initiatives">CSR Initiatives</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default submenu;
