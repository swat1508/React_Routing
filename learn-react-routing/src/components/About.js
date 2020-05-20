import React from 'react';


function About(props) {
    console.log('props => ' , props);
    const manageRoute = () => {
        console.log('About Page => manageRoute => Going to Contact Page');
        props.history.push('/register?ijustgotpushed=true')
    }
    return (
        <div>
            This is About Page!!
            <div>
                <button type='submitbutton' onClick={manageRoute}>Go To Contact Page</button>
            </div>
        </div>
    )
}

export default About
