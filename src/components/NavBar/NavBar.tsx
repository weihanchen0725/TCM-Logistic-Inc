import Link from "next/link";

const NavBar = () => {
    return (
        <>
        NavBar
        <Link href='/'>Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/news">News</Link>
        <Link href="/contact">Contact</Link>
        </>
    )
}

export default NavBar;