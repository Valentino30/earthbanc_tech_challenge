import "../styles/globals.scss";
import "../styles/login.scss";
import "../styles/navbar.scss";
import "../styles/kittens.scss";

import { wrapper } from "../redux/store";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
