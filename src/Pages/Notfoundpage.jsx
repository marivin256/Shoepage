import {Link} from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa';
function Notfoundpage(){
    return(
<section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className=' text-red-600 text-6xl mb-4'/>
      <h1 className="text-6xl text-black font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5 text-white">This page does not exist</p>
      <Link
        to="/"
        className="text-black border border-2 border-black hover:bg-black hover:text-white rounded-md px-3 py-2 mt-4"
        >Go back to home </Link>
    </section>
    )
}
export default Notfoundpage;