import Link from 'next/link';
import style from './Header.module.css';

export default function Header() {
    return (
        <div>
            <header className={style.container}>
                <ul className={style.list}>
                    <li className={style.item}><Link href="/"><a>Home</a></Link></li>
                    <li className={style.item}><Link href="/blog"><a>Blog</a></Link></li>
                    <li className={style.item}><Link href="/users"><a>Users</a></Link></li>
                </ul>
            </header>
        </div>
    )
}
