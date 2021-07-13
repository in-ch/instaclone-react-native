import { gql, useQuery } from "@apollo/client";
import React, {useState} from "react";
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
  const  {data, loading, refetch} = useQuery(FEED_QUERY);
  const renderPhoto = ({item: photo}) => {
    return <Photo {...photo} />
  };
  const [refreshing, setRefreshing] = useState(false);
  const refresh = async() => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        refreshing={refreshing}  // 끌어서 새로고침
        onRefresh={refresh}  // 끌어서 새로고침
        style={{width:"100%"}}
        showsVerticalScrollIndicator = {false}
        data={data?.seeFeed}
        renderItem={renderPhoto}
        keyExtractor={photo => "" + photo.id}
      />
    </ScreenLayout>
  );
}