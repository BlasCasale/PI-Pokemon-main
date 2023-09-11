import FormSignIn from '../../components/form/signIn/formSignIn'
import Nav from '../../components/nav/nav';
import './signIn.css';


const singIn = () => {
    return (
        <div className='box--singIn'>
            <Nav />
            <FormSignIn />
        </div>
    );
}

export default singIn;