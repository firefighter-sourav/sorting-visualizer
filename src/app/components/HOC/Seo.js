import { useEffect } from 'react';
import ReactGA from 'react-ga';


const Seo = (props) => {
    const { children } = props
    useEffect(()=>{
        ReactGA.initialize('G-8MS9G8WQEQ');
        ReactGA.pageview(window.location.pathname + window.location.search);
    },[])

    return (
        <>
            {children}
        </>
    )

}

export default Seo