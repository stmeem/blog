import Head from 'next/head';
import {Nav} from './index';

const Layout =({children})=>{
    return(
        <>
        <Head>
        <title>Sumaiya's Blog</title>
        </Head>
        <Nav/>
        <div >
            <main >
            {children}
            </main>
        </div>
        </>
    )
}
export default Layout;