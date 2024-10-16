// BankLogosDiv.js
import React from 'react';
import './BankLogosDiv.css';  // Import the CSS for styling

const BankLogosDiv = () => {
    const style = { height: "36px", color: "white" }
    return (
        <div className="container bank-logos-container mb-5 ">
            <div className="bank-logos-wrapper">
                <div className="bank-logos">
                    {/* Repeat logo divs with bank logos */}
                    <img style={style} src="BankLogos/YesBank.png" alt="Bank Logo" className="bank-logo" />
                    <img style={style} src="BankLogos/indusindBankNew.png" alt="Bank Logo" className="bank-logo" />
                    <img style={style} src="BankLogos/IDFC.png" alt="Bank Logo" className="bank-logo" />
                    <img style={style} src="BankLogos/IDBI.png" alt="Bank Logo" className="bank-logo" />
                    <img style={style} src="BankLogos/iciciBank.png" alt="Bank Logo" className="bank-logo" />
                    <img style={style} src="BankLogos/HDFC.png" alt="Bank Logo" className="bank-logo" />
                    <img style={style} src="BankLogos/Federal_Bank.png" alt="Bank Logo" className="bank-logo" />
                    <img style={style} src="BankLogos/DCB_Bank.png" alt="Bank Logo" className="bank-logo" />
                    <img style={style} src="BankLogos/DetusheBank.png" alt="Bank Logo" className="bank-logo" />
                    <img style={style} src="BankLogos/BandhanBank.png" alt="Bank Logo" className="bank-logo" />
                    <img style={style} src="BankLogos/CSBBANk.png" alt="Bank Logo" className="bank-logo" />
                    <img style={style} src="BankLogos/CUBNewLogo.png" alt="Bank Logo" className="bank-logo" />


                </div>
            </div>
        </div>
    );
};

export default BankLogosDiv;

