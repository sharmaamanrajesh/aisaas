import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Auth = () => {
  return (
    <div>
       <SignedOut>
        <SignInButton>Sign in</SignInButton>
       </SignedOut>
       <SignedIn>
        <UserButton></UserButton>
       </SignedIn>
    </div>
  )
}

export default Auth