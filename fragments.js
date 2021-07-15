import { gql } from "@apollo/client";

export const PHOTO_FRAGMENT = gql`
    fragment PhotoFragment on Photo {
        id
        file
        likes
        commentNumber
        isLiked
    }
`;

export const COMMENT_FRAGMENT = gql`
    fragment CommentFragment on Comment {
        id 
        user {
            userName
            avatar
        }
        payload
        isMine
        createAt
    }
`;

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    userName
    avatar
    isFollowing
    isMe
  }
`;