import { gql, useQuery } from "@apollo/client";
import React, {useState} from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { logUserOut } from "./apollo";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import ScreenLayout from "../components/nav/ScreenLayout";
import Photo from "../components/Photo";

const FEED_QUERY = gql`
        query seeFeed($offset: Int!) {
            seeFeed(offset:$offset) {
              ...PhotoFragment
              user {
                  id
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
  const  {data, loading, refetch, fetchMore} = useQuery(FEED_QUERY, {
    variables: {
      offset: 0,
    }
  });
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
        onEndReachedThreshold={0.05}
        onEndReached={() => 
          fetchMore({
            variables: {
              offset: data?.seeFeed?.length,
            },
          })
        }
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