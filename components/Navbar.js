import Link from 'next/link'

export default function Navbar({style}) {
    return (
        <div className="navbar" style={style}>
            <div className="left">
                <Link href="/">
                    <a className="logo">
                        <img src="/assets/lilfrens-logo.png"></img>
                    </a>
                </Link>
            </div>
            <div className="right">
                <Link href="/buy"><a>BUY</a></Link>
                <Link href="/blueprint"><a>BLUEPRINT</a></Link>
                <Link href="/story"><a>STORY</a></Link>
                <Link href="/gallery"><a>GALLERY</a></Link>

            </div>
        </div>
    )
}