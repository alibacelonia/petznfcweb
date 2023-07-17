import { UUID } from "crypto";
import { redirect } from "next/navigation"


async function getData(guid: string){
    // try{
        // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${guid}`);
        const res = await fetch(`http://127.0.0.1:8000/pet/${guid}/details`);

        if (!res.ok) {
            throw new Error('Failed to fetch data from server');
        }

        return res.json()
    // }
    // catch(err){
    //     // redirect('/signin')
    // }
}

export default async function PetDetailsPage({ params }: {params: {guid: string}}) {
    const response = await getData(params.guid);
    if (!response) { 
        // redirect('/signin'); 
    }
    return (
        <main className='bg-slate-100 w-full'>
          <h1 className="text-center">{response["data"]["pet"]["breed"]}</h1>
        </main>
    );
  }
