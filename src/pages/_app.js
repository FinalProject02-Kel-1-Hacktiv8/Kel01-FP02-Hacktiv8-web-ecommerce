import "@/styles/globals.css";
import { wrapper } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const persistore = persistStore(store);
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <QueryClientProvider client={queryClient}>
          <Component {...props.pageProps} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
