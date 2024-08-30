import '../style.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';
import dividerS from '../img/divider-s.svg'
import p1 from '../img/darkmode.png'


export default function Microedge() {
    return (
        <main className="background-1 w-full min-h-screen flex flex-col items-center">
            
            <Header page={true} title={"Bytedance - 2.0 Lark design system, dark mode and color systems"}></Header>

            <div className='container-project'>
                <div className='container-page'>
                    <div className='container-page-flex'>
                        <div className='h1 max-w-3xl'>Bytedance - 2.0 Lark design system, dark mode and color systems</div>
                        <div className='p1 mt-10 max-w-3xl'>Lead the design system of darkmode. As the product design lead on darkmode design system, I came up with darkmode guideline & designed key screens. I Lead 10+ designers to collborate and make all pillars of Lark suites adapt darkmode. We have 25%+ mobile adoption, 8%+ desktop adoption for darkmode on launch Darkmode fullfilled user needs by making Lark suites to be compatible with the theme of operating system. As one of the core features, Darkmode was luanched in Nov 2021 on Bytedance Lark conference.</div>
                        <Link href={'https://mp.weixin.qq.com/s/mFbCZbF5bSkyEsHZ5ZUBnA'} target='_black' className='button mt-10'>Read my article</Link>
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