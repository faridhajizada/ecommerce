import { useEffect, useState } from "react";
import { Form, useActionData, useLoaderData, useNavigate } from "react-router-dom";

const SigninAdmin: React.FC = () => {

    const [error, setError] = useState<string>("")

    const navigate = useNavigate();
    const loaderdata = useLoaderData();
    const action  = useActionData();

    useEffect(() => {
      console.log(loaderdata)
        if (loaderdata) {
            navigate('/admin/dashboard');
        }
    }, [loaderdata]);


    useEffect(() => {
        if (action) {
            if (action.status !== 200) {
                setError(action.error && action.error)
            }else {
                navigate('/admin/dashboard');
            }
        }
    }, [action])

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-700">Login to Your Account</h2>
          {
            error != "" ? 
                <div className="w-[200px] h-[60px] bg-red-100 text-white">
                    {error}
                </div> :

                <>
                
                </>

          }
          <Form method="post" action="#" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-700 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
};

export { SigninAdmin };
