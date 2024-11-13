import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AddEditUser = ({
  handleClosePopup,
  onUserAdded,
  editUser,
  onUserEdited,
}) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Reset form function
  const resetForm = () => {
    setFullName("");
    setEmail("");
    setDepartment("");
    setWebsite("");
    setError(null);
  };

  useEffect(() => {
    if (editUser) {
      setFullName(editUser.name || "");
      setEmail(editUser.email || "");
      setDepartment(editUser.company?.bs || "");
      setWebsite(editUser.website || "");
    } else {
      resetForm();
    }

    // Cleanup function
    return () => {
      resetForm();
    };
  }, [editUser]);

  const handleClose = () => {
    resetForm();
    handleClosePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!fullname || !email || !department) {
      setError("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const userData = {
        name: fullname,
        email: email,
        company: {
          bs: department,
        },
        website: website,
      };

      let response;

      if (editUser) {
        // Update existing user
        response = await axios.put(
          `https://jsonplaceholder.typicode.com/users/${editUser.id}`,
          {
            ...userData,
            id: editUser.id,
          }
        );

        if (response.status === 200) {
          onUserEdited(response.data);
        }
      } else {
        // Add new user
        response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          userData
        );

        if (response.status === 201) {
          onUserAdded(response.data);
        }
      }

      handleClose();
    } catch (err) {
      setError(
        err.message ||
          `An error occurred while ${editUser ? "updating" : "adding"} the user`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[32rem] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {editUser ? "Edit User" : "Add New User"}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none text-4xl"
          >
            ×
          </button>
        </div>

        {error && (
          <div className="mx-6 mt-4 p-3 bg-red-50 text-red-500 rounded-md">
            {error}
          </div>
        )}

        <div className="px-6 py-4">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-custom-darkblue focus:outline-none"
                placeholder="Enter full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-custom-darkblue focus:outline-none"
                placeholder="Enter email address"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-custom-darkblue focus:outline-none"
                placeholder="Enter department"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-custom-darkblue focus:outline-none"
                placeholder="Enter Website"
              />
            </div>
          </form>
        </div>

        <div className="border-t px-6 py-4 flex justify-end gap-4">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`px-4 py-2 bg-custom-red text-white rounded-md hover:bg-opacity-90 
              ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading
              ? editUser
                ? "Updating..."
                : "Adding..."
              : editUser
              ? "Update User"
              : "Add User"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditUser;
