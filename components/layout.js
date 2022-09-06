import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Pai Qu';
export const siteTitle = "Pai's Personal Website";

export default function Layout({ children, home }) {
  return (
    <div className='container mx-auto'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Pai's personal website"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header >
        {home ? (
          <div 
            className='flex flex-col items-center'
          >
            <Image
              priority
              src="/images/profile.png"
              height={144}
              width={144}
              alt={name}
            />
            <h1 class="text-4xl underline decoration-sky-500 underline-offset-auto">{name}</h1>
          </div>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main >{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}