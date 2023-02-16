import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import myStore from "../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={myStore}>
      <Component {...pageProps} />;
    </Provider>
  );
}
