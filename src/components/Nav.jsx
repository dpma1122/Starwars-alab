 import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <Link to='/'>
                <p>Services</p>
            </Link>
            <Link to='/profile'>
                <p>StarWars Ship </p>
            </Link>
        </nav>
    )
}