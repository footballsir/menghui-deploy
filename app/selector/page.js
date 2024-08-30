import '../style.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';

export default function Microedge() {
    return (
        <main className="background-1 w-full min-h-screen flex flex-col items-center">
            
            <Header page={true} title={"Microsoft Edge browser - fundamental, differentiator and AI browsing"}></Header>

            <div className='container-project'>
                <div className='container-page'>
                    <div className='container-page-flex'>
                        <div className='h1 max-w-3xl'>Microsoft Edge browser - fundamental, differentiator and AI browsing</div>
                        <div className='p1 mt-10 max-w-3xl'>As a senior design leader for Edge design team, I work closely with Rob Frye - the head of design and lead China’s Edge design team fellows on various initiatives. My notable work includes redesigning the fundamental of Edge, build key features to re-imagine browser, integrating AI with Edge and more. Over the past 2 years Edge grew its DAU to over 240 million, with over 26% market share on Windows device globally, and become #2 as of browser usage in the world.</div>
                        <Link href={'https://www.microsoft.com/en-us/edge'} target='_black' className='button mt-10'>Visit Edge Browser</Link>
                    </div>

                    <div className='container-page-full mt-20'>
                        
                    </div>


                </div>
            </div>

            <Footer></Footer>

        </main>
    );
}