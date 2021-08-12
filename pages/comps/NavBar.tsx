// export interface Props {
    
// }

import Link from "next/link"
import Image from "next/image"
import logo from "../../public/logo.png"
 
const NavBar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src={logo} width={45} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/songwriters"><a>Songwriter Listing</a></Link>
        </nav>
     );
}
 
export default NavBar;