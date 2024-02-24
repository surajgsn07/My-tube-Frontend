import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Home from "./pages/Home.jsx";
import Video from "./components/Video.jsx";
import VideoPage from "./pages/VideoPage.jsx";
import Videocard from "./components/Videocard.jsx";
import Container from "./components/Container.jsx";
import CreatorProfile from "./pages/CreatorProfile.jsx";
import CustomizeChannel from "./pages/CustomizeChannel.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Comment from "./components/Comment.jsx";
import UploadVideo from "./components/UploadVideo.jsx";
import UploadTweet from "./components/UploadTweet.jsx";
import Subscribed from "./pages/Subscribed.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Container />,
          },
          {
            path: "/home/creatorProfile/:userId",
            element: <CreatorProfile />,
            children: [
              {
                path: "/home/creatorProfile/:userId/videos",
                element: <Container />,
              },
              {
                path: "/home/creatorProfile/:userId/tweets",
                element: <Comment />,
              },
            ],
          },
          {
            path: "/home/customizeChannel",
            element: <CustomizeChannel />,
          },
          {
            path: "/home/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/home/UploadVideo",
            element: <UploadVideo />,
          },
          {
            path: "/home/PostTweet",
            element: <UploadTweet />,
          },
          {
            path: "/home/subscribed",
            element: <Subscribed />,
          },
        ],
      },
      {
        path: "/video/:videoId",
        element: <VideoPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
