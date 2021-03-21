import "twin.macro";
import Head from "next/head";

import "./index.css";

const App = ({ Component, pageProps }) => {
  return (
    <div tw="h-screen w-screen">
      <Head>
        <title>Portfolio | susiyaki</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
