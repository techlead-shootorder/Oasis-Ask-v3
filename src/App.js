import Home from "./Page/Home";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from '@clerk/clerk-react'
import Login from "./Page/Login/Login";

function App() {
  const { isSignedIn, user, isLoaded } = useUser()
  return (
    <>
      <header>
        <SignedOut>
          {/* Use SignInButton with an onClick event */}
          <div className=" flex justify-end mt-4 absolute top-0 right-0 z-50">
            <SignInButton className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"></SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
        <div className=" flex justify-end mt-4 absolute top-0 right-4 z-50">
          <UserButton className="bg-gray-500 text-black px-4 py-2 rounded-md mr-4"></UserButton>
          </div>
        </SignedIn>
      </header>
      <div className="overflow-hidden">
       <Home />
      </div>
    </>
  );
}

export default App;
