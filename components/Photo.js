import React, {useState} from "react";
import { Image, TouchableOpacity, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
    border: 1px solid blue;
`;
const Header = styled.TouchableOpacity`
    padding: 10px;
    flex-direction: row;
    align-items: center;
`;
const UserAvatar = styled.Image`
    margin-right: 10px;
    width:25px;
    height:25px;
    border-radius:12.5px;
`;
const Username = styled.Text`
    color:white;
    font-weight: 600;
`;
const File = styled.Image``;
const Actions = styled.View`
    flex-direction: row;
    align-items:center;
`;
const Action = styled.TouchableOpacity`
    margin-right:10px;
`;
const Caption = styled.View`
    flex-direction: row;
`;
const CaptionText = styled.Text`
    color:white;
    margin-left:10px;
`;
const Likes = styled.Text`
    color:white;
    margin: 7px 0px;
    font-weight: 600;
`;
const ExtraContainer = styled.Text`
    padding: 10px;
`;

export default function Photo({id, user, caption, file, isLiked, likes}){
    const navigation = useNavigation();
    const {width, height} = useWindowDimensions();  // 브라우저 넓이를 가져옴. 
    const [imageHeight, setImageHeight] = useState(height - 450);

    const goToProfile = () => {
        navigation.navigate("Profile", {
          userName: user.userName,
          id: user.id,
        });
    };

    useEffect(()=> {
        Image.getSize(file, (width, height) => {
            setImageHeight(height);
        });
    },[file]);

    return <Container>
            <Header onPress={goToProfile}>
                <UserAvatar 
                    resizeMode="cover" 
                    style={{width:30,height:30,borderRadius:25}}
                    source={{uri: user.avatar}}
                />
                <Username>{user.userName}</Username>
            </Header>
            <File
                resizeMode="contain"
                style={{
                width,
                height: imageHeight,
                }}
                source={{ uri: file }}
            />
            <Actions>
                <Action>
                    <Ionicons name={isLiked ? "heart" : "heart-outline"} color={isLiked ? "tomato":"white"} size={22} />
                </Action>
                <Action onPress={()=> navigation.navigate("Comments")}>
                    <Ionicons name="chatbubble-outline" color="white" size={22} />
                </Action>
            </Actions>
            <TouchableOpacity  onPress={()=> navigation.navigate("Likes", {
                photoId: id,
            })}>
                <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
            </TouchableOpacity>
            <Caption>
                <TouchableOpacity onPress={goToProfile}>
                    <Username>{user.userName}</Username>
                </TouchableOpacity>
                <CaptionText>{caption}</CaptionText>
            </Caption>
            <ExtraContainer />
        </Container>
}

Photo.propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string,
      userName: PropTypes.string.isRequired,
    }),
    caption: PropTypes.string,
    file: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    commentNumber: PropTypes.number,
  };