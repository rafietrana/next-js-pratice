export default async function getDynamicPostById(id){
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return result.json()
}