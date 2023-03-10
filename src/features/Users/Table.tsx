import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, message, Popconfirm, Table as AntdTable } from "antd";
import { Link } from "react-router-dom";
import { ColumnsType } from "antd/es/table";

import { remove, selectUser } from "../../app/slices/userSlice";
import { User } from "../../app/services/UserStore";

function Table() {
  const users = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(remove(id));
    message.success("User Removed");
  };

  const columns: ColumnsType<User> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Action",
      key: "action",
      render: (_, { id }) => (
        <span key={id}>
          <Link to={`edit/${id}`}>Edit</Link>
          <Divider type={"vertical"}></Divider>
          <Popconfirm
            title="Delete"
            description="Are you sure to delete this?"
            onConfirm={() => handleRemove(id)}
            okText="Yes"
            cancelText="No"
          >
            <a>Remove</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return <AntdTable bordered columns={columns} dataSource={users} />;
}

export default Table;
