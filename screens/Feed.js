import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { logUserOut } from "./apollo";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

const FEED_QUERY = gql`
        query seeFeed {
            seeFeed {
              ...PhotoFragment
              user {
                  userName
                  avatar
              }
              caption
              comments {
                  ...CommentFragment
              }
              createAt
              isMine
            }
        }
        ${COMMENT_FRAGMENT}
        ${PHOTO_FRAGMENT}

`;

export default function Feed() {
  const  {data} = useQuery(FEED_QUERY);


  console.log(data);

  return (
    <View style={{backgroundColor:"black",flex:1, alignItems:"center",justifyContent:"center"}}>
      <TouchableOpacity onPress={()=> logUserOut()} >
        <Text style={{color:"white"}}>Feed</Text>
      </TouchableOpacity>
    </View>
  );
}