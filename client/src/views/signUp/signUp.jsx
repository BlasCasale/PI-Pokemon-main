import FormSignUp from '../../components/form/signUp/formSignUp';
import Nav from '../../components/nav/nav';
import './signUp.css'

const SingUp = () => {
    return (
        <div className='box-signUp'>
            <Nav />
            <FormSignUp />
        </div>
    );
}

export default SingUp;