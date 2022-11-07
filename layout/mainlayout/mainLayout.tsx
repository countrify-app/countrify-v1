import Head from 'next/head'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';
import { ReactNode } from 'react';
import styles from "./mainLayout.module.css";

type mainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: React.FunctionComponent<mainLayoutProps> = (props: mainLayoutProps) => {
  return (
    <div>
      <Head>
        <title>Countrify</title>
        <meta name="description" content="Countrify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div>{props.children}</div>
      </main>
      <Footer />
    </div>
  );
}
