import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center p-5 px-5 shadow-md">
      <img width={50} height={50} src="./logo.svg" alt="logo" />
      {isSignedIn ? (
        <div className="flex gap-2 items-center justify-center">
          <Link to={"/dashboard"}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
