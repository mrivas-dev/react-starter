import { Button, Image } from 'antd';
import { NotFoundWrapper } from './styles';
import { useNavigate } from 'react-router-dom';

const NotFound = (): JSX.Element => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (<NotFoundWrapper>
        <section>
            <h1>404 error 😰</h1>
            <h3>Oh snap! The cat eat your page again!</h3>
            <Button onClick={() => { goToHome() }} type="primary"> Go back home! </Button>
        </section>
        <section>
            <Image preview={false} src="notFoundKitty.png" alt='Not found' />
        </section>
    </NotFoundWrapper>);
};

export default NotFound;