import "@/styles/globals.css";
import { wrapper } from "@/redux/store";
import { Provider } from "react-redux";
import { Layout } from "@/components/Layout";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props} />
      </Layout>
    </Provider>
  );
}
