import Link from "next/link"
import Image from "next/image"

export const NoEncontrado = () => {
    return (
        <div className="container  page-error">
        <h1>4 0 4</h1>
        <h2>! SOMETHING DIDN'T GO RIGHT...</h2>

        <div className="row back">
            <button>
                <Link href={"/"}>Back To top </Link>

            </button>
        
       
        </div>
         
      

      
    </div>
    )

}
    


export default NoEncontrado