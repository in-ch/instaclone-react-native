import { gql, useQuery } from "@apollo/client";
import React from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { logUserOut } from "./apollo";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import ScreenLayout from "../components/nav/ScreenLayout";
import Photo from "../components/Photo";

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
  const  {data, loading} = useQuery(FEED_QUERY);
  const renderPhoto = ({item: photo}) => {
    return <Photo {...photo} />
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        style={{width:"100%"}}
        showsVerticalScrollIndicator = {false}
        data={data?.seeFeed}
        renderItem={renderPhoto}
        keyExtractor={photo => "" + photo.id}
      />
    </ScreenLayout>
  );
}