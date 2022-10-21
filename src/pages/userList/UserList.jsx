import {
  UserListContainer,
  UserWrapper,
  EditButton,
  ButtonWrapper
} from "./UserList.styled";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../Store";

function UserList() {
  // const [userData, setUserData] = useState(userRows);
  const [userData, setUserData] = useContext(UserContext);

  const handleDelete = (id) => {
    setUserData(userData.filter((user) => user.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 170,
      renderCell: (params) => {
        return (
          <UserWrapper>
            <img src={params.row.avatar} alt="" />
            {params.row.userName}
          </UserWrapper>
        );
      }
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 130
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 170
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <ButtonWrapper>
            <Link to={`/user/${params.row.id}`}>
              <button className="editBtn">Edit</button>
            </Link>
            <DeleteOutline
              className="deleteBtn"
              onClick={() => handleDelete(params.row.id)}
            />
          </ButtonWrapper>
        );
      }
    }
  ];

  return (
    <UserListContainer>
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </UserListContainer>
  );
}

export default UserList;
