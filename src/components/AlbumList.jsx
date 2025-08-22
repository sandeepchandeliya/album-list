import AlbumItem from './AlbumItem';

//-----> Displays a list of albums using AlbumItem component
export default function AlbumList({ albums, onDelete, onEdit }) {
  //-----> recieves albums array and event handlers as props
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
