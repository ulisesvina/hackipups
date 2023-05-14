import Link from 'next/link';
import stringEntropy from 'fast-password-entropy';
import { useRef, useState, SyntheticEvent } from 'react';
import ProgressBar from '@/components/ProgressBar';

const Register = () => {
    const [entropy, setEntropy] = useState(0),
        errorDiv = useRef<HTMLDivElement>(null);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const { username, email, password, passwordconfirm } = e.target as typeof e.target & {
            username: { value: string };
            email: { value: string };
            password: { value: string };
            passwordconfirm: { value: string };
        };

        if (password.value !== passwordconfirm.value) {
            errorDiv.current!.classList.remove("hidden");
            errorDiv.current!.innerText = "Passwords do not match";
            return;
        }

        if (entropy < 59) {
            errorDiv.current!.classList.remove("hidden");
            errorDiv.current!.innerText = "Password is too weak";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{5,29}$/;

        if (!emailRegex.test(email.value)) {
            errorDiv.current!.classList.remove("hidden");
            errorDiv.current!.innerText = "Invalid email";
            return;
        }

        if (!usernameRegex.test(username.value)) {
            errorDiv.current!.classList.remove("hidden");
            errorDiv.current!.innerText = "Invalid username";
            return;
        }

        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username.value,
                email: email.value,
                password: password.value,
            }),
        }).then((res) => res.json());

        if (response.success) {
            return window.location.href = '/';
        }

        errorDiv.current!.classList.remove("hidden");
        errorDiv.current!.innerText = response.status;

    }

    const handlePasswordChange = (e: SyntheticEvent) => {
        const { value } = e.target as typeof e.target & {
            value: string;
        };

        setEntropy(stringEntropy(value));
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-2xl my-5 text-center">Sign up</p>
            <form onSubmit={handleSubmit} autoComplete="off" autoCapitalize="false" className="w-full max-w-md">
                <div ref={errorDiv} className="text-sm my-5 bg-red-500 text-white p-2 w-full hidden">
                </div>
                <input type="text" placeholder="Username" name="username" className="border w-full py-2 px-4 bg-white text-black my-2" />
                <input type="email" placeholder="Email" name="email" className="border w-full py-2 px-4 bg-white text-black my-2" />
                <input autoComplete='off' onChange={handlePasswordChange} type="password" placeholder="Password" name="password" className="border w-full py-2 px-4 bg-white text-black my-2" />
                <input autoComplete='off' type="password" placeholder="Confirm password" name="passwordconfirm" className="border w-full py-2 px-4 bg-white text-black my-2" />
                <span className={`mt-2 text-sm ${entropy >= 59 ? "text-green-500" : "text-gray-500"}`}>Password strength: <ProgressBar progress={entropy} /></span>
                <button className="bg-blue-600 text-white w-full py-2 px-4 mt-2 hover:bg-white hover:text-black">
                    Register
                </button>
                <Link href="/login">
                    <button className="border w-full py-2 px-4 mt-2 hover:bg-white hover:text-black">
                        Login
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default Register;
