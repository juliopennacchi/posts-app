import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Box,
  Grid,
} from "@mui/material";
import { getUsers } from "../../api/userService";
import UserLayout from "../../layouts/UserLayout";
import { useEffect, useState } from "react";
import { UserType } from "../../types/UserTypes";

export default function UserHomePage() {
  const [users, setUsers] = useState<UserType[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers();
      if (response !== undefined) setUsers(response);
    };

    fetchData();
  }, []);

  return (
    <UserLayout>
        <h1>User list</h1>
      <Grid
        container
        spacing={0}
      >
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Nome</TableCell>
                  <TableCell align="right">User name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Phone</TableCell>
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
