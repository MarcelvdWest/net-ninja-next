// export interface Props {
    
// }
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    const paths = data.map(songwriter => {
        return {
            params: { id: songwriter.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id) 
    const data = await res.json();

    return {
        props: { songwriter: data }
    }
}
 
const Details = ({ songwriter }) => {
    return ( 
        <div>
            <h1>{ songwriter.name }</h1>
            <p>{ songwriter.email }</p>
            <p>{ songwriter.website }</p>
            <p>{ songwriter.address.city }</p>
        </div>
    );
}
 
export default Details;