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
      incheolisbest: tokenVar(),   // 이거 꼭 변수일 필요 없고 header에 저장될 변수명을 적어주면 됨. 
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
export default client;