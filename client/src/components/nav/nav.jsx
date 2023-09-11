import { Link } from 'react-router-dom';
import './nav.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../redux/actions';
import { useState } from 'react';

const Nav = () => {

    const [open, setOpen] = useState(false);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleSignOut = (e) => {
        e.preventDefault();
        dispatch(signOut());
    }
    const handleClick = (e) => {
        e.preventDefault();
        if (open)
            setOpen(false);
        else
            setOpen(true);
    }

    return (
        <>
            <header>
                <ul>
                    <li>
                        <Link to='/'>
                            Landing
                        </Link>
                    </li>
                    <li>
                        <Link to='/home'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/create'>
                            Create
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    {!user?.mail ? <>
                        <li>
                            <Link to='/signUp'>
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link to='/signIn'>
                                Sign In
                            </Link>
                        </li>
                    </> : <button onClick={handleClick}>{user?.name[0].toUpperCase()}. {user?.lastName}</button>}
                </ul>
                {(user?.mail && open) &&
                    <div>
                        <h3>{user?.mail}</h3>
                        <button onClick={handleSignOut}>Sign out</button>
                        <Link to='/myProfile'><p>My profile</p></Link>
                        <Link to='/reviews'><p>Reviews</p></Link>
                    </div>}
            </header>
        </>
    );
};

export default Nav;
