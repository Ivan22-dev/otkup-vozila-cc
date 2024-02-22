import React from 'react';
import { Link } from 'react-router-dom';

const FeatureBox = (props) => {
    return (
       <React.Fragment>
            <div className="features-box">
                <div className="number">
                    {props.number}
                </div>
                <h3>{props.title}</h3>

                <p>{props.desc1}</p>

                <p>{props.desc2}</p>

                <Link to={props.link} className="btn btn-link margin-t-30">Learn more <i className="ti-angle-double-right"></i></Link>
            </div>
       </React.Fragment>
    );
};

export default FeatureBox;
