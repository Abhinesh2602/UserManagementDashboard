const DeleteConfirmationModal = ({ user, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[24rem] max-h-[90vh]">
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Confirm Delete
          </h3>
          <p className="mt-2 text-gray-600">
            Are you sure you want to delete this user? This action cannot be
            undone.
          </p>
        </div>
        <div className="border-t px-6 py-4 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
