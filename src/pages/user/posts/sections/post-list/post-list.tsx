import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PostType } from "../../../../../types/PostTypes";

interface PostListProps {
  posts?: PostType[];
}

export default function PostList(props: PostListProps) {
  const { posts } = props;

  const handlePostDetails = (title: string) => {
    alert(title);
  };

  return (
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
                  <IconButton onClick={() => handlePostDetails(post.title)}>
                    <ArrowForwardIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
