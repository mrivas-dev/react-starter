import { animated, useSpring } from 'react-spring';
import { LayoutWrapper } from './styles';

const Layout = ({ children }: any): JSX.Element => {
    const animatedOpacity = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    });

    return (
        <LayoutWrapper>
            <animated.div style={animatedOpacity}>
                {children}
            </animated.div>
        </LayoutWrapper>
    );
};

export default Layout;