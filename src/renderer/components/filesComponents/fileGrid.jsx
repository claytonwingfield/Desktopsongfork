import Fileimage from '../../../../assets/folder.png';

const files = [
  {
    title: 'Turban',
    artist: 'Yeat - Up 2 Me',
    size: '8.9 MB',
    source: Fileimage,
  },
  {
    title: '#ThemThangsThangin',
    artist: 'ericdoa2',
    size: '12.9 MB',
    source: Fileimage,
  },
];

export default function Filegrid() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 p-5 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-white  focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              src={file.source}
              alt=""
              className="pointer-events-none group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-0 block text-center text-sm font-medium text-gray-900">
            {file.title}
          </p>
          <p className="pointer-events-none mt-1 block text-center text-sm font-medium text-gray-900">
            {file.artist}
          </p>
          <p className="pointer-events-none block text-sm text-center font-medium text-gray-500">
            {file.size}
          </p>
        </li>
      ))}
    </ul>
  );
}
