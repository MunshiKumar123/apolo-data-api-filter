import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST } from "./Queries";
import { useState } from "react";

const Testing = () => {
  const [search, setSearch] = useState("");

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  const { error, data, loading } = useQuery(GET_USER_LIST, {
    onError: () => {
      console.log("error");
    },

    onCompleted: (data) => {},
    fetchPolicy: "no-cache",
  });

  console.log({ data, error });

  if (loading) return "Loading...";

  return (
    <>
      <div className="container mt-2">
        <input type="text" placeholder="Search" onChange={handleChange} />

        <table className="table table-striped mt-2">
          <tbody>
            <tr className="fs-5 table-dark">
              <td>User Name</td>
              <td>User Email Id</td>
              <td>User Role</td>
            </tr>
            {data.User.filter((value) => {
              if (search === "") {
                return value;
              } else if (
                value.UserName.toLowerCase().includes(search.toLowerCase()) ||
                value.Role.toLowerCase().includes(search.toLowerCase()) ||
                value.Email.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
            }).map((launch) => (
              <tr key={launch.id}>
                <td>{launch.UserName}</td>
                <td>{launch.Email}</td>

                <td>{launch.Role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Testing;
