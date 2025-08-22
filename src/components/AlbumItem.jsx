//-----> Displays a single album card with details and actions

export default function AlbumItem({ album, onDelete, onEdit }) {
  return (
    <>
      <div className="bg-white border rounded-lg shadow hover:shadow-lg transition p-4 w-64">
        <img
          src="public/dummy.webp"
          className="w-full h-40 object-cover rounded-md"
          alt="dummy"
        />
        <div className="mt-3">
          <h4 className="text-sm font-semibold">User-Id: {album.userId}</h4>
          <h4 className="text-sm text-gray-700">
            <span className="font-semibold">id: {album.id}</span>
          </h4>
          <p className="font-semibold mt-1 text-gray-900">
            <span className="font-extrabold">Title: {album.title}</span>
          </p>
        </div>
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => onEdit(album)}
            className="px-4 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(album.id)}
            className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
