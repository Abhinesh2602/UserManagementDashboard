import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { Pagination } from "./Pagination";
import { Table } from "./Table";
import { UserMetrics } from "./UserMetrics";
import axios from "axios";
import { AddEditUser } from "./AddEditUser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { filterUsers } from "../Services/filteredServices";

export const Main = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);
  const [addUserPopup, setAddUserPopup] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddUser = () => {
    return setAddUserPopup(true);
  };

  const handleClosePopup = () => {
    setAddUserPopup(false);
  };

  const handleUserAdded = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    toast.success("User Added succesfully");
  };

  const handleDeleteUser = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      if (response.status === 200) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

        if (currentUsers.length === 1 && currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
        }
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user. Please try again.");
    } finally {
      setLoading(false);
      toast.success("User deleted successfully");
    }
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
      setEditingUser(userToEdit);
      setAddUserPopup(true);
    }
  };

  const handleUserEdited = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    toast.success("User updated successfully");
  };

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredUsers = filterUsers(users, searchTerm);

  // Pagination calculations
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = filteredUsers.slice(firstUserIndex, lastUserIndex);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="text-center p-4 ">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">Error: {error}</div>;
  }

  return (
    <div className="bg-custom-gradient w-[calc(100vw-16.4375rem)] h-[calc(100vh-5.5rem)] relative ">
      <div className="mt-16 mx-11">
        <Navigation
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          onAddUserClick={handleAddUser}
        />
        <UserMetrics usersLength={filteredUsers.length} />
        <Table
          users={currentUsers}
          onDeleteUser={handleDeleteUser}
          onEditUser={handleEditUser}
        />
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={paginate}
      />

      {addUserPopup && (
        <AddEditUser
          handleClosePopup={handleClosePopup}
          onUserAdded={handleUserAdded}
          editUser={editingUser}
          onUserEdited={handleUserEdited}
        />
      )}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
};

export default Main;
