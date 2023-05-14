import Link from 'next/link';

const Header = () => {
    return (
        <header className="text-center">
            <Link href="/">
                <h1 className="text-3xl logo leading-loose">hackipups!</h1>
            </Link>
        </header>
    )
}

export default Header;