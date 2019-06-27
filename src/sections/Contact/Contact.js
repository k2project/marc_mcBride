import React from 'react';
import './Contact.scss';

export default function Contact (){
    return(
        <section className="Contact" id="contact">
            <div className="Contact_bg"></div>
            <div className="cover"></div>
            <div className="wrapper">
                <div className="footer">
                    {/* <div className="section__title">Contacts</div> */}
                    <small>Marc McBride Official Website&copy; {new Date().getFullYear()}</small>
                </div>
                <div className="section__content">
                    <p>
                        Global Artists <br/>
                        www.globalartists.com<br/>
                        michaelgarrett@globalartists.com<br/>
                    </p>
                    <p>
                        Get In Touch Directly<br/>
                        mail@marcmcbrde.co.uk
                    </p>
                </div>
            </div>
        </section>
    )
};
