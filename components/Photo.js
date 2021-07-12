import React from "react";
import { useWindowDimensions } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.View`
    background-color:white;
`;
const Header = styled.View``;
const UserAvatar = styled.Image``;
const Username = styled.Text`

`;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text`

`;
const Likes = styled.Text`

`;

export default function Photo({id, user, caption, file, isLiked, likes}){

    const {width, height} = useWindowDimensions();  // 브라우저 넓이를 가져옴. 

    return <Container>
            <Header>
                <UserAvatar />
                <Username>{user.userName}</Username>
            </Header>
            <File styled={{width,height:height-500,}} source={{uri:file}} />
            <Actions>
                <Action />
                <Action />
            </Actions>
            <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
            <Caption>
                <Username>{user.userName}</Username>
                <CaptionText>{caption}</CaptionText>
            </Caption>
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
    commentNumber: PropTypes.number.isRequired,
  };