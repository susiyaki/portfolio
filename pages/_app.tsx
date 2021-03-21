import "twin.macro";
import "./index.css";

const App = ({ Component, pageProps }) => {
  return (
    <div tw="h-screen w-screen">
      <Component {...pageProps} />
    </div>
  );
};

export default App;
