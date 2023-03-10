import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, message, Popconfirm, Table as AntdTable } from "antd";
import { Link } from "react-router-dom";
import { ColumnsType } from "antd/es/table";

import { remove, selectProduct } from "../../app/slices/productSlice";
import { Product } from "../../app/services/ProductStore";

function Table() {
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(remove(id));
    message.success("Product Removed");
  };

  const columns: ColumnsType<Product> = [
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
      title: "Count",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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

  return <AntdTable bordered columns={columns} dataSource={products} />;
}

export default Table;
