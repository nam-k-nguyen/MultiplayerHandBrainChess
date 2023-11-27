import Link from "next/link"

export default function Nav() {
    const linkClass = 'text-xl bg-orangered hover:bg-red-600 duration-200 ease-in py-[5px] px-[10px] rounded'

    return (
        <nav className={`flex gap-5`}>
            <Link className={linkClass} href="/play">
                <i className="fa-solid fa-circle-play"></i>
            </Link>
            <Link className={linkClass} href="/info">
                <i className="fa-solid fa-circle-info"></i>
            </Link>
        </nav>
    )
}