export const Heading = ({title}:{title:string})=>{
    return <div className='mt-4 mx-2 text-white'>
    <h1 className='text-4xl font-semibold  after:bg-primary '> {title}</h1>
    <div className='bg-primary w-40 my-5 h-1  shadow-primary shadow'/>
</div>
}