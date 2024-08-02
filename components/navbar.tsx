type PageStates = {
    about?: boolean | null ;
    resume?: boolean | null;
    portfolio?: boolean | null;
    blog?: boolean | null;
    contact?: boolean | null;
  };
 
import Link from 'next/link'
export const Navbar = ({about,resume,portfolio,blog,contact}:PageStates) => {
    return (
      <>
       
          <div className="bg-card-bg-1 absolute top-0 right-0 rounded-tr-2xl px-10 rounded-bl-2xl h-20 ">
            <ul className="flex flex-row items-center justify-center text-2xl gap-x-14 w-full h-full">
              <li className={`tracking-lighter font-semibold  ${about  && ' text-primary '}`}><Link href='/about'>About</Link></li>
              <li className={`tracking-lighter font-semibold  ${resume  && ' text-primary '}`}><Link href='/resume'>Resume</Link></li>
              <li className={`tracking-lighter font-semibold  ${portfolio  && ' text-primary '}`}><Link href='/portfolio'>Portfolio</Link></li>
              <li className={`tracking-lighter font-semibold  ${blog  && ' text-primary '}`}><Link href='/blog'>Blog</Link></li>
              <li className={`tracking-lighter font-semibold  ${contact  && ' text-primary '}`}><Link href='/contact'>Contact</Link></li>
            </ul>
          </div>
        
      </>
    );
  };
  
