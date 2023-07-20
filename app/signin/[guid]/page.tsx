export default async function PetDetailsPage({ params }: {params: {guid: string}}) {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  const isValidUUID = (uuid: string) => {
      return uuidRegex.test(uuid);
  };

  if (isValidUUID(params.guid)){
    return (
      <>
        <main className=''>
          <div className="flex min-h-screen flex-1 flex-col items-center place-items-center justify-center px-6 py-12 lg:px-8">
            <div className=" min-w-full sm:min-w-fit sm:mx-auto sm:w-full sm:max-w-sm bg-indigo-100">
                <h2 className="text-center mt-10 text-2xl font-bold leading-9 tracking-wide text-gray-900">RECORD FOUND!</h2>
                <p className="text-center  mb-10 mt-5 text-base">It appears that your pet is not registered yet.</p>
            </div>

            <div className="mt-5 min-w-full sm:min-w-fit sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="space-y-6" >
                  
                  <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-medium leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        REGISTER PET
                    </button>

                    <a
                        href="/"
                        className="mt-1 flex w-full justify-center bg-red-600 px-3 py-1.5 text-sm font-medium leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        RETURN HOME
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
  else{
    return(
      <>
      <div className="flex min-h-screen flex-col items-center place-items-center justify-center">
          <div className=" min-w-full sm:min-w-fit sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex items-center justify-center">
                  <span className="text-2xl font-medium">404</span>
                  <div className=" border border-r-slate-900 py-6 mx-5"></div>
                  <span className="text-sm font-medium">This page could not be found.</span>
              </div>
            </div>
      </div>
      </>
    );
  }
}
