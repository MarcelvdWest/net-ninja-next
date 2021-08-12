// export interface Props {
    
// }

import styles from '../../styles/Songs.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    return {
        props: {
            songwriters: data,
        }
    }
}

const Songs = ({ songwriters }) => {
    return ( 
        <div>
            <h1>All Songwriters</h1>
            {
                songwriters.map(songwriter => (
                    <Link href= {"/songwriters/" + songwriter.id} key={songwriter.id}>
                        <a className={styles.single}>
                            <h3>{songwriter.name}</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
     );
}
 
export default Songs;