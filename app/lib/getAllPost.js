export default async function getAllPost(){
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

      if(!result.ok){
        throw new error('there was a error when fatching all post data');
      }

    return result.json()
}