import { useState } from 'react';

//-----> Modal form to edit and album's details
export default function EditForm({ album, onSave, onCancel }) {
  const [editedAlbum, setEditedAlbum] = useState(album);

  //-----> handles input changes and update the state
  const handleChange = (e) => {
    setEditedAlbum({ ...editedAlbum, [e.target.name]: e.target.value });
  };

  //-----> Submit form and save changes
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedAlbum);
  };

  return (
    <>
       <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-50 ">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h4 className="text-xl font-bold mb-4 text-center">Edit Album</h4>

        {/* form fields */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label>
            <span className="block text-sm font-medium">User ID:</span>
            <input
              type="text"
              name="userId"
              value={editedAlbum.userId}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </label>

          <label>
            <span className="block text-sm font-medium">ID:</span>
            <input
              type="text"
              name="id"
              value={editedAlbum.id}
              onChange={handleChange}
              disabled
              className="w-full px-3 py-2 border rounded-md bg-gray-100"
            />
          </label>

          <label>
            <span className="block text-sm font-medium">Title:</span>
            <input
              type="text"
              name="title"
              value={editedAlbum.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </label>


          {/* action buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
