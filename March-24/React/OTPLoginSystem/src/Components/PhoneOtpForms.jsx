import React, { useState } from 'react';
import OtpInput from './OtpInput';
const PhoneOtpForms = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpField, setShowOtpField] = useState(false);

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handlePhoneSubmit = (e) => {
        e.preventDefault(); // Correcting the preventDefault method

        // Phone validations
        const regex = /[^0-9]/g;

        if (phoneNumber.length < 11 || regex.test(phoneNumber)) {
            alert("Invalid Phone Number");
            return; // Exiting the function if phone number is invalid
        }

        // Call Be Api
        // Show OTP FIELD
        setShowOtpField(true); // Correcting the function call to setShowOtpField
    };

    const onOtpSubmit = (otp) => {

        console.log("Login Suceessfully", otp)

    }

    return (
        <div>
            {!showOtpField ? (
                <form onSubmit={handlePhoneSubmit}>
                    <input
                        type='text'
                        value={phoneNumber}
                        placeholder='Enter Phone Number'
                        onChange={handlePhoneNumber} // Corrected function reference
                    />
                    <button type='submit'>Submit</button>
                </form>
            ) : (
                <div>
                    <p>Otp sent to {phoneNumber}</p>
                    <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
                </div>
            )}
        </div>
    );
};

export default PhoneOtpForms;
