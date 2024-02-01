import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { getUsers } from "../../../api/userService";
import UserLayout from "../../../layouts/UserLayout";
import { useEffect, useState } from "react";
import { UserType } from "../../../types/UserTypes";
import UserList from "./sections/user-list/user-list";
import UserFilter from "./sections/user-filter/user-filter";

export default function UserHomePage() {
  const [users, setUsers] = useState<UserType[]>();
  const [usersFiltered, setUsersFiltered] = useState<UserType[]>();
  const [userFilter, setUserFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers();
      if (response !== undefined) {
        setUsers(response);
        applyFilter(response);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (users == undefined) return;

    applyFilter(users);
  }, [userFilter]);

  const handleUserFilter = (event: SelectChangeEvent) => {
    setUserFilter(event.target.value as string);
  };

  const applyFilter = (paramUsers?: UserType[]) => {
    if (userFilter !== "") {
      const filtered = paramUsers?.filter((user) => {
        return user.id.toString() == userFilter;
      });

      setUsersFiltered(filtered);
    } else {
      setUsersFiltered(paramUsers);
    }
  };

  return (
    <UserLayout>
      <h1>User list</h1>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <UserFilter users={users} filterValue={userFilter} handleFilter={handleUserFilter} />
        </Grid>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <UserList users={usersFiltered} />
        </Grid>
      </Grid>
    </UserLayout>
  );
}
