// BankLogosDiv.js
import React from 'react';
import './ClientDiv.css';  // Import the CSS for styling

const ClientDiv = () => {
    const style = { height: "36px", color: "white" }
    return (
        <div className="container client-logos-container mb-5 mt-4 ">
            <div className="client-logos-wrapper">
                <div className="client-logos">
                    {/* Repeat logo divs with bank logos */}
                    <img style={style} src="ClientLogos/cadbury.png" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/bikano.png" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/haldiram.png" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/cadbury.png" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/bikano.png" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/haldiram.png" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/cadbury.png" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/bikano.png" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/haldiram.png" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/cadbury.png" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/bikano.png" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/haldiram.png" alt="client Logo" className="client-logo" />


                </div>
            </div>
        </div>
    );
};

export default ClientDiv;

