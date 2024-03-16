import React, { useState } from "react";

interface Props {
    makePayment: (data: { productId: string }) => void;
}

const Register: React.FC<Props> = ({ makePayment }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <button
            onClick={() => {
                makePayment({ productId: "example_ebook" });
            }}
            disabled={isLoading}
            className={`btn-primary w-full max-w-[320px] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
        >
            {isLoading ? 'Processing...' : 'Register Now'}
        </button>
    );
};

export default Register;
