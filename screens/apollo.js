import { ApolloClient, createHttpLink, InMemoryCache, makeVar, useReactiveVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/client/link/context";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const TOKEN = "incheolisbest";

export const logUserIn = async (token) => {
  await AsyncStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
  tokenVar(token);
};

export const logUserOut = async() => {
  await AsyncStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  tokenVar(null);
};

const httpLink = createHttpLink({
  uri:"http://localhost:4000/graphql"
});

const authLink = setContext((_,{headers}) => {
  return {
    headers: {
      ...headers,
      incheolisbest: tokenVar(),
    } // header 변경 및 세팅 부분
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
export default client;