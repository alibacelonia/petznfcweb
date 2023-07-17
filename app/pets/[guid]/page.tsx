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
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    const isValidUUID = (uuid: string) => {
        return uuidRegex.test(uuid);
    };

    if (isValidUUID(params.guid)){
        const response = await getData(params.guid);
        console.log(response)
        if(response.status_code == 200){
            return (
                <main className='bg-slate-100 w-full'>
                    {/* <pre>
                        {JSON.stringify(response)}
                    </pre> */}
                <h1 className="text-center">{response["data"]["pet"]["breed"]}</h1>
                </main>
            );
        }
        else if(response.status_code == 404){
            return <>
                <div className="min-h-screen min-w-screen relative flex items-center justify-center">
                    <div className="absolute top-50 end-50 translate-middle-y flex items-center justify-center">
                        <span className="text-2xl font-medium">404</span>
                        <div className=" border border-r-slate-900 py-6 mx-5"></div>
                        <span className="text-sm font-medium">No record found.</span>
                    </div>
                </div>
            </>
        }
    }
    else {
        return <>
            <div className="min-h-screen min-w-screen relative flex items-center justify-center">
                <div className="absolute top-50 end-50 translate-middle-y flex items-center justify-center">
                    <span className="text-2xl font-medium">404</span>
                    <div className=" border border-r-slate-900 py-6 mx-5"></div>
                    <span className="text-sm font-medium">This page could not be found.</span>
                </div>
            </div>
            </>
    }
  }
