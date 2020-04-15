import React from "react";

import "./Signin.scss";

import Layout from "../components/Layout";

const {
  CURRENT_URL = window.location.href,
  CLIENT_ID = "63414da0d30c45cfb234e64103619981",
} = process.env;

function getAuthorization() {
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${CURRENT_URL}`;
}

const Logo = () => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{ enableBackground: "new 0 0 512 512" }}
    xmlSpace="preserve"
  >
    <g>
      <g>
        <path
          d="M256,0C114.848,0,0,114.848,0,256s114.848,256,256,256s256-114.848,256-256S397.152,0,256,0z M373.44,369.536
c-3.136,4.448-8.064,6.816-13.088,6.816c-3.2,0-6.4-0.928-9.184-2.912c-60-42.176-159.808-44.512-227.2-28.8
c-8.544,2.016-17.216-3.36-19.2-11.968c-1.984-8.608,3.328-17.216,11.968-19.232c74.08-17.152,184.8-14.016,252.8,33.824
C376.768,352.352,378.496,362.304,373.44,369.536z M404.672,307.104c-3.136,4.352-8.032,6.656-12.992,6.656
c-3.264,0-6.496-0.96-9.344-3.008c-69.6-49.952-155.104-62.368-269.216-39.072c-8.608,1.696-17.12-3.808-18.88-12.48
c-1.792-8.64,3.808-17.12,12.448-18.88c123.424-25.184,216.928-11.104,294.304,44.416
C408.16,289.92,409.824,299.904,404.672,307.104z M436.224,223.264c-3.104,4.576-8.16,7.008-13.248,7.008
c-3.104,0-6.24-0.896-8.992-2.752c-88.224-59.872-222.336-60.16-309.152-29.44c-8.32,2.88-17.472-1.44-20.416-9.792
c-2.944-8.32,1.408-17.472,9.76-20.416C188.608,134.496,334.944,135.2,432,201.024
C439.296,205.984,441.152,215.936,436.224,223.264z"
        />
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);

export default function Signin() {
  return (
    <Layout title="Signin">
      <section className="Signin">
        <Logo />
        <button onClick={() => getAuthorization()}>Sign In With Spotify</button>
      </section>
    </Layout>
  );
}
