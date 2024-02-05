import { useEffect, useState } from "react";
import UserLayout from "../../../layouts/UserLayout";
import { PostType } from "../../../types/PostTypes";
import { getPosts } from "../../../api/postService";
import { Grid } from "@mui/material";
import { useLocation, useSearchParams } from "react-router-dom";
import { UserType } from "../../../types/UserTypes";
import PostList from "./sections/post-list/post-list";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>();
  const [user, setUser] = useState<UserType>();
  let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const userIdFilter = getUserIdFromURL(searchParams);

  const hasFilter = userIdFilter != undefined && userIdFilter != null;

  useEffect(() => {
    fetchData();
  }, [searchParams]);

 
  const fetchData = async () => {
    const response = await getPosts();
    if (response !== undefined) {
      if (hasFilter) {
        setUser(location.state.user);
        const postsFilteredByUserId = response.filter((post) => {
          return post.userId.toString() == userIdFilter;
        });
        setPosts(postsFilteredByUserId);
      } else {
        setPosts(response);
      }
    }
  };

  function getUserIdFromURL(searchUrlParams: URLSearchParams) {
    return searchUrlParams.get("userId");
  }

  return (
    <UserLayout>
      {hasFilter ? <h1>{user?.name} Posts</h1> : <h1>Posts</h1>}

      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <PostList posts={posts} />
        </Grid>
      </Grid>
    </UserLayout>
  );
}
