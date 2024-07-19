import { NavLink } from 'react-router-dom';
import shoe from '/src/assets/components/shoe.jpg'

function Body(){
    
    return(
        <div className=''>
        <div className='flex flex-col lg:flex-row justify-between mb-4 '>
        

<div className=" mt-20 px-8 max-w-xl">
 <div className="  mx-auto max-w-8xl px-2 sm:p-6 lg:px-8"> 
 
           <div
            className="  md:items-stretch md:justify-start">
                
                <div className="md:ml-auto "></div> 
  <div className="text-black font-bold">Sneaker Collection</div><br />
<  div className="text-4xl font-extrabold text-black sm:text-4xl md:text-6xl">GOOD SHOES <br />TAKE YOU <br />GOOD PLACES</div>
<div className="mb-10 m-2 text-white">all shoes you can imagine</div>
<span><NavLink to="/ggg" className="p-3  border border-black text-black mr-3 hover:bg-black hover:text-white">Shop Now</NavLink></span>

    


</div>
</div> 



</div>
<img src={shoe} alt="image" id='pica' className='float-right  mb-6 mr-20 mt-5'/>
</div>

</div>
    )
}
export default Body;