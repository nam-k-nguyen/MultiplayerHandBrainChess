import Link from "next/link"
import Nav from "./Nav"

export default function Header() {
    return (
        <header className={`flex px-5 py-2.5 bg-whitesmoke items-center justify-between gap-2.5`}>
            <Link href="/" className={`flex items-center text-orangered hover:text-red-600 ease-in duration-200 gap-2.5`}>
                <div className={`text text-3xl`}>
                    <i className="fa-solid fa-chess-king"></i>
                </div>
                <p>HB Chess</p>
            </Link>
            <Nav />
        </header>
    )
}