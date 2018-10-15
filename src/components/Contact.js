import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faMobile, faEnvelope)

const Contact = () => {
    return (
        <div>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faMobile} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                </li>
                <li>
                    <FontAwesomeIcon icon={['fab', 'github-alt']} />
                </li>
            </ul>
        </div>    
    )
};

export default Contact;