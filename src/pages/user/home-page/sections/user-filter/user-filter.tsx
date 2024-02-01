import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { UserType } from "../../../../../types/UserTypes";

interface UserFilterProps {
  users: UserType[] | undefined; //list de usuarios do filtro
  filterValue: string;
  handleFilter: (event: SelectChangeEvent) => void;
}

export default function UserFilter(props: UserFilterProps) {
  const { users, filterValue, handleFilter } = props;

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">User</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={filterValue}
        label="User"
        onChange={handleFilter}
      >
        {users &&
          users.map((user) => <MenuItem value={user.id}>{user.name}</MenuItem>)}
      </Select>
    </FormControl>
  );
}
