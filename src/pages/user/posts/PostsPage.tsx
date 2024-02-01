import { useEffect, useState } from "react";
import UserLayout from "../../../layouts/UserLayout";
import { PostType } from "../../../types/PostTypes";
import { getPosts } from "../../../api/postService";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPosts();
      if (response !== undefined) {
        const userIdFilter = getUserIdFromURL(searchParams);
        if (userIdFilter != undefined) {
          const postsFilteredByUserId = response.filter((post) => {
            return post.userId.toString() == userIdFilter;
          });
          setPosts(postsFilteredByUserId);
        } else {
          setPosts(response);
        }
      }
    };

    fetchData();
  }, []);

  const getUserIdFromURL = (searchUrlParams: URLSearchParams) => {
    return searchUrlParams.get("userId");
  };

  const handlePostDetails = (title: string) => {
    alert(title);
  };

  return (
    <UserLayout>
      <h1>Posts</h1>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>UserId</TableCell>
                  <TableCell align="right">Id</TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Body</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts &&
                  posts.map((post) => (
                    <TableRow
                      key={post.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {post.userId}
                      </TableCell>
                      <TableCell align="right">{post.id}</TableCell>
                      <TableCell align="right">{post.title}</TableCell>
                      <TableCell align="right">{post.body}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => handlePostDetails(post.title)}
                        >
                          <ArrowForwardIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </UserLayout>
  );
}
