'use client'
const list = ['All', 'Websites', 'Web Apps', 'Front End', 'Backend'];

type inputType = {
    all?: string | null,
    websites?: string | null,
    webapps?: string | null,
    frontend?: string | null,
    backend?: string | null,
}

const nameList: Array<keyof inputType> = ['all', 'websites', 'webapps', 'frontend', 'backend'];

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const PortfolioNavbar = (params: inputType) => {
    const pathname = usePathname();
    const page = pathname.split('/')[2] || 'all'
    
    return (
        <div>
            <ul className='w-full flex text-2xl my-8 gap-x-4'>
                {nameList.map((el, i) => (
                    
                        <li key={el} className={`tracking-lighter font-semibold ${page ===el && 'text-primary'}`}>
                            <Link href={`/portfolio/${el}`}>{list[i]}</Link>
                        </li>
                    
                ))}
            </ul>
        </div>
    );
}
