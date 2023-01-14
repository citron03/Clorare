import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>SignGin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Start Demo</h1>
        <Link
          href="/fake"
          className="text-slate-900 text-xl border-4 border-amber-500	hover:bg-blue-400"
        >
          Fake Api Call
        </Link>
      </div>
    </>
  );
}
