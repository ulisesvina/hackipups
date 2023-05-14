import Link from 'next/link';
import { SyntheticEvent } from 'react';

const Login = () => {
    const isLoggedIn = false;

    const hadleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const { login, password } = e.target as typeof e.target & {
            login: { value: string };
            password: { value: string };
        };

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: login.value,
                password: password.value,
            }),
        }).then((res) => res.json());

        if (response.success) {
            window.location.href = '/';
        }
    }

    return (
        <div className="flex flex-col h-[75vh]">
            {isLoggedIn ? (
                <meta http-equiv="refresh" content="0; url=/" />
            ) : (
                <div className="flex flex-col items-center">
                    <p className="text-2xl my-5 text-center">Login</p>
                    <form onSubmit={hadleSubmit} className="w-full max-w-md">
                        <div className="mt-5 w-full">
                            <input type="text" placeholder="Username or email" name="login" className="border w-full py-2 px-4 bg-white text-black my-2" />
                            <input type="password" placeholder="Password" name="password" className="border w-full py-2 px-4 bg-white text-black my-2" />
                            <button className="bg-blue-600 text-white w-full py-2 px-4 mt-2 hover:bg-white hover:text-black">
                                Login
                            </button>
                            <Link href="/register">
                                <button className="border w-full py-2 px-4 mt-2 hover:bg-white hover:text-black">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );

}

export default Login;