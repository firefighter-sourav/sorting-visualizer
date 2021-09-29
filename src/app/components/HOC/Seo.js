import { useEffect } from 'react';
import ReactGA from 'react-ga';


const Seo = (props) => {
    const { children } = props
    useEffect(()=>{
        ReactGA.initialize('UA-288162717');
        ReactGA.pageview(window.location.pathname + window.location.search);
    },[])

    return (
        <>
            {children}
        </>
    )

}

export default Seo