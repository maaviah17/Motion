'use client'

import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";

function Header(){
    const { user } = useUser();

    return(
    <div className="bg-blue-200 flex items-center justify-between p-5">
        {user && (
            <h1 className="text-2xl">{user?.firstName}{`'s`} Space</h1>
        )}

        {/* Breadcrumbs */}

        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>

    </div>
)}

export default Header;