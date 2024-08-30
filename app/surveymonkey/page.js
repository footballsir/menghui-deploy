import '../style.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';
import dividerS from '../img/divider-s.svg'
import p1 from '../img/surveymonkey1.png'

export default function Microedge() {
    return (
        <main className="background-1 w-full min-h-screen flex flex-col items-center">
            
            <Header page={true} title={"Surveymonkey - core survey creation and onboarding"}></Header>

            <div className='container-project'>
                <div className='container-page'>
                    <div className='container-page-flex'>
                        <div className='h1 max-w-3xl'>Surveymonkey - core survey creation and onboarding</div>
                        <div className='p1 mt-10 max-w-3xl'>Deisgned survey Monkey's onbaording experience and core survey creation expreince with <a target="_blank" className={'link'} href="https://www.linkedin.com/in/luciaciccio/">Lucia Ciccio</a> and core survey experience with <a target="_blank" className={'link'} href="https://www.linkedin.com/in/supafrenz/">Jonathan Remulla</a>. Created survey templates, search question experience etc.</div>
                        <Link href={'https://www.surveymonkey.com'} target='_black' className='button mt-10'>Visit SurveyMonkey</Link>
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