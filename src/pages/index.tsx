import Link from 'next/link';
import { Fragment } from 'react';

// our-domain.com/

const HomePage = () => {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-great'>NextJS is Great</Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
