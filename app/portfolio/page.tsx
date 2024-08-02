import { PortfolioNavbar } from '@/components/portfolio-navbar';
import { Heading } from '@/components/heading';
import {Navbar} from '@/components/navbar'
const Page = () => {

  return (
    <>
      <div className="bg-big-card relative ml-0 text-white m-10 rounded-2xl p-5 ">
      <Navbar portfolio/>
      <Heading title="Portfolio"/>
     </div>
    </>
  );
};
export default Page;
