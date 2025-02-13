 import {Link} from 'react-router-dom'
export default function StarshipCard() {
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