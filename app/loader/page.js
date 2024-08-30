import '../style.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';
import dividerS from '../img/divider-s.svg'


export default function Microedge() {
    return (
        <main className="background-1 w-full min-h-screen flex flex-col items-center">

            <Header page={true} title={"Upthere\'s loader with Javascript"}></Header>

            <div className='container-project'>
                <div className='container-page'>
                    <div className='container-page-flex'>
                        <div className='h1 max-w-3xl'>Upthere's loader with Javascript</div>
                        <div className='p1 mt-10 max-w-3xl'>The design of loader was inpired by 'lissajous curve'. It integrates and prsents the beauty of mathmatics, while people are waiting for there content to load.</div>
                        <Link href={'https://codepen.io/menghuihu/pen/bxyzQV?editors=0010'} target='_black' className='button mt-10'>View in Codepen</Link>
                    </div>

                    <div className='container-page-flex mt-20'>
                        <iframe height={"300"} className={'w-full'} title={"Upthere's Loading Indicator"} src={"https://codepen.io/menghuihu/embed/bxyzQV?default-tab=html%2Cresult"} frameborder={"no"} loading={"lazy"} allowtransparency={"true"} allowfullscreen={"true"}>
                            {/* See the Pen <a href={"https://codepen.io/menghuihu/pen/bxyzQV"}>
                                Upthere's Loading Indicator</a> by Menghui Hu (<a href={"https://codepen.io/menghuihu"}>@menghuihu</a>)
                            on <a href={"https://codepen.io"}>CodePen</a>. */}
                        </iframe>
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