import '../style.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';
import dividerS from '../img/divider-s.svg'


export default function Microedge() {
    return (
        <main className="background-1 w-full min-h-screen flex flex-col items-center">
            
            <Header page={true} title={"Dark mode switcher, integrated with Bytedance\'s design system"}></Header>

            <div className='container-project'>
                <div className='container-page'>
                    <div className='container-page-flex'>
                        <div className='h1 max-w-3xl'>Dark mode switcher, integrated with Bytedance's design system</div>
                        <div className='p1 mt-10 max-w-3xl'>The dark mode swtich plugin switches Figma design between light and dark in a snap. It greatly improve the efficiency for designers to adapt design for different themes.</div>
                        <Link href={'https://github.com/footballsir/dmscript'} target='_black' className='button mt-10'>Source code on Github</Link>

                        <div className='w-full mt-20 overflow-hidden rounded-3xl ' style={{ backgroundColor: '#f4f4f4' }}>
                            <video autoPlay loop muted preload="auto" className='w-full rounded-3xl shadow-lg'>
                                <source src="/v61.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className='w-full flex justify-center'>
                        <Image src={dividerS} alt="divider" className="my-20" />
                    </div>
                        
                </div>
            </div>

            <Footer></Footer>

        </main>
    );
}