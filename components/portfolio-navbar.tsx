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

export const PortfolioNavbar = (params: inputType) => {
    return (
        <div>
            <ul>
                {nameList.map((el, i) => (
                    <div key={el}>
                        <li className={`tracking-lighter font-semibold ${params[el] && 'text-primary'}`}>
                            <Link href={`/portfolio/${el}`}>{list[i]}</Link>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}
