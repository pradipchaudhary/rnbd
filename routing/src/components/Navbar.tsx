import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="p-4 flex justify-between items-center container max-w-7xl mx-auto border-b border-gray-200">
            <h1 className="text-2xl">Routing</h1>
            <ul className="flex gap-4">
                <li>
                    <Link href="/">Home </Link>
                </li>
                <li>
                    <Link href="/about">About </Link>
                </li>
                <li>
                    <Link href="/blog">Blog </Link>
                </li>
                <li>
                    <Link href="/service">Service </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;