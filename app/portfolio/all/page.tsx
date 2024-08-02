

const Page = async() => {
 const data = await fetch('https://fakestoreapi.com/products/1');
 const res = await data.json();
 await setTimeout(async()=>{
    console.log('hello')
 },3000)
 console.log(res)
  return (
    <div>
       {JSON.stringify(res)}
    </div>
  )
}

export default Page
