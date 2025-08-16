import AlbumItem from './AlbumItem';

export default function AlbumList({ albums, onDelete, onEdit }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 place-items-center">
        {albums.map((album) => (
          <AlbumItem
            key={album.id}
            album={album}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </>
  );
}
