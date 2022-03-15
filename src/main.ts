import { createApp } from "vue";
import { createApolloProvider } from "@vue/apollo-option";
import { apolloClient } from "./plugins";
import "./assets/index.css";

import App from "./App.vue";

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

createApp(App).use(apolloProvider).mount("#app");
