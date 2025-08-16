import { useEffect, useState } from 'react';
import api from './api';
import AlbumList from './components/AlbumList';
import EditForm from './components/EditForm';
export default function Home() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    try {
      const res = await api.get('/albums');
      // console.log(res);
      setAlbums(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAlbum = async (id) => {
    try {
      await api.delete(`/albums/${id}`);
      setAlbums(albums.filter((album) => album.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateAlbum = async (updatedAlbum) => {
    try {
      await api.put(`/albums/${updatedAlbum.id}`, updatedAlbum);
      setAlbums(
        albums.map((album) =>
          album.id === updatedAlbum.id ? updatedAlbum : album
        )
      );

      setSelectedAlbum(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className="p-6"  >
      <h1 className='text-2xl uppercase font-bold text-center bg-emerald-300 rounded-2xl text-slate-900'>Album list</h1>
      <div >
        <AlbumList
          albums={albums}
          onDelete={deleteAlbum}
          onEdit={setSelectedAlbum}
        />

        {selectedAlbum && (
          <EditForm
            album={selectedAlbum}
            onSave={updateAlbum}
            onCancel={() => setSelectedAlbum(null)}
          />
        )}
      </div>

      </div>
    </>
  );
}
