import Head from "next/head";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const signInHandler = () => {
    signIn("github");
  };
  const signOutHandler = () => {
    signOut();
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next Auth | GitHub </h1>
        <button onClick={signInHandler}>Sign In</button>
        <button onClick={signOutHandler}>Sign Out</button>
        <button>
          <Link href="/dashbord">Dashbord</Link>
        </button>
        <button>
          <Link href="/ssrdashbord">SSR Dashbord</Link>
        </button>
      </main>
    </>
  );
}
