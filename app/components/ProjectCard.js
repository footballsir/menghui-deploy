import '../style.css'
import Image from "next/image";
import Link from 'next/link';

import { Bricolage_Grotesque } from "next/font/google";
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export default function ProjectCard(props) {
    const tag = props.tag.map((tag, i) => <div className={`tag card-${tag[1]}`} key={i}>{tag[0]}</div>)

    return (
        <div className="project-card">
            <div>
                <div className='flex flex-wrap w-full p-6 gap-3'>{tag}</div>
                <div className={`${bricolageGrotesque.className} card-title1 color-1 w-full px-6`}>{props.title1}</div>
                <div className={`${bricolageGrotesque.className} card-title2 color-1 w-full px-6`}>{props.title2}</div>
            </div>
            <Image src={props.image} alt='illustration' className='w-full'></Image>
        </div>
    );
}