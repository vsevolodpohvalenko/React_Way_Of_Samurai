import ProfileReducer, {addPostActionCreator, deletePost} from "./profile_reducer"
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";
let state = {
    posts: [
        { id: 1, Ava:"https://imgur.com/I80W1Q0.png" ,message:"Hi! How are you", likeCount: "1,128 "},
        {id: 2,Ava:"https://image.flaticon.com/icons/png/512/186/premium/186313.png" ,message:"It's my first post, lol;)", likeCount: "193 "},
        {id: 3,Ava:"https://imgur.com/I80W1Q0.png" ,message:"Wow", likeCount: "1,328 "},
        {id: 4,Ava:"https://image.flaticon.com/icons/png/512/186/premium/186313.png" ,message:"What is the weather today?", likeCount: "393 "},
        {id: 5,Ava:"https://imgur.com/I80W1Q0.png" ,message:"Nice day", likeCount: "2,428 "},
        {id: 6,Ava:"https://image.flaticon.com/icons/png/512/186/premium/186313.png" ,message:"I have done it", likeCount: "6,893 "}],

    newPostText: 'it-kamasutra.com'

};
test('shouldnt be deleted if id is incorrect', () => {
    let action = deletePost(1000)

    let newState = ProfileReducer(state, action);

    expect(newState.posts.length).toBe(6)
});


