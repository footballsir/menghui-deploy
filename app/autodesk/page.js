import '../style.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';
import dividerS from '../img/divider-s.svg'
import p1 from '../img/autodeskviewer.png'

export default function Microedge() {
    return (
        <main className="background-1 w-full min-h-screen flex flex-col items-center">
            
            <Header page={true} title={"Autodesk drive for online 3D model collaboration"}></Header>

            <div className='container-project'>
                <div className='container-page'>
                    <div className='container-page-flex'>
                        <div className='h1 max-w-3xl'>Autodesk drive for online 3D model collaboration</div>
                        <div className='p1 mt-10 max-w-3xl'>The first online 3D model collaboration platform for over 50 types of design files. As lead designer on Autodesk Drive, I wss responsible for the over all product design such as hands on design craft, design roadmap, design review etc. Th product made 3M+ user acquisition in the first half of 2020. It helped with subscription business model, provdied the add on value of Autodesk drive platform, helped Autodesk products to pivot from license to subscription.</div>
                        <Link href={'https://viewer.autodesk.com/'} target='_black' className='button mt-10'>Visit Autodesk Viewer</Link>
                    </div>


                    <div className='container-page-full'>
                        <Image src={p1} alt='components image' className='w-full mt-20'></Image>
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