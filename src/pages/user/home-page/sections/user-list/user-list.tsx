import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { UserType } from "../../../../../types/UserTypes";
import { useNavigate } from "react-router-dom";

interface UserListProps {
    users?: UserType[];
}

export default function UserList(props : UserListProps) {
    const { users } = props;
    const navigate = useNavigate();

    const handlePostNavigation = (user: UserType) => {
        navigate(`/posts?userId=${encodeURI(user.id.toString())}`, {
          state: {
            user: user
          }
        });
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Nome</TableCell>
                  <TableCell align="right">User name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Phone</TableCell>
                  <TableCell align="right">Posts</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users &&
                  users.map((user) => (
                    <TableRow
                      key={user.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {user.id}
                      </TableCell>
                      <TableCell align="right">{user.name}</TableCell>
                      <TableCell align="right">{user.username}</TableCell>
                      <TableCell align="right">{user.email}</TableCell>
                      <TableCell align="right">{user.phone}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => handlePostNavigation(user)}
                        >
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