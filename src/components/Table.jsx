import { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmation";

export const Table = ({ users, onDeleteUser, onEditUser }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      onDeleteUser(userToDelete.id);
    }
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const handleEditClick = (user) => {
    onEditUser(user.id);
  };

  if (!users || users.length === 0) {
    return (
      <div className="w-full mt-8 text-center text-gray-500">
        No users found
      </div>
    );
  }

  return (
    <div className="w-full mt-8 overflow-x-auto">
      <table className="w-full bg-white rounded-lg shadow-custom">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm text-gray-600 font-medium">
              Id
            </th>
            <th className="px-6 py-4 text-left text-sm text-gray-600 font-medium">
              Name
            </th>
            <th className="px-6 py-4 text-left text-sm text-gray-600 font-medium">
              Website
            </th>
            <th className="px-6 py-4 text-left text-sm text-gray-600 font-medium">
              Email
            </th>
            <th className="px-6 py-4 text-left text-sm text-gray-600 font-medium">
              Department
            </th>
            <th className="px-6 py-4 text-left text-sm text-gray-600 font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <TableRow
              user={user}
              key={user.id}
              onDeleteClick={handleDeleteClick}
              onEditClick={handleEditClick}
            />
          ))}
        </tbody>
      </table>

      {showDeleteModal && userToDelete && (
        <DeleteConfirmationModal
          user={userToDelete}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

const TableRow = ({ user, onDeleteClick, onEditClick }) => {
  return (
    <tr id={user.id} className="hover:bg-gray-50">
      <td className="px-6 py-4 text-black">{user.id}</td>
      <td className="px-6 py-4">{user.name}</td>
      <td className="px-6 py-4">{user.website}</td>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.company.bs}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            className="text-blue-600 hover:text-blue-800 font-medium"
            onClick={() => onEditClick(user)}
          >
            Edit
          </button>
          <button
            className="text-red-600 hover:text-red-800 font-medium"
            onClick={() => onDeleteClick(user)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
