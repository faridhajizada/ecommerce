import { useContext, useEffect, useState } from "react";
import { Form, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/authentication";

const Signin: React.FC = () => {

    const [error, setError] = useState<string>("")

    const navigate = useNavigate();
    const loaderdata = useLoaderData();
    const action  = useActionData();
    const {setUser} = useContext(AuthenticationContext);

    useEffect(() => {
        if (loaderdata) {
            navigate('/home');
        }

    }, [loaderdata]);


    useEffect(() => {
        if (action) {
            if (action.status !== 200) {
                setError(action.error && action.error)
            }else {
                console.log(action.user)
                setUser(action.user)
                navigate('/home');
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
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
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
};

export { Signin };
