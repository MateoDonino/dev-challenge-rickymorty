export const CharacterCard = ({ name, image, status, species, onClick }) => {
  return (
    <div
      onClick={onClick}
      className=" relative cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        className="w-full aspect-square min-w-[20vw] rounded-lg"
        src={image}
        alt={name}
      />

      <div className="p-5 w-full rounded-lg absolute bottom-0 bg-[linear-gradient(360deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0)_100%)]">
        <h5 className="text-center text-xl font-bold tracking-tight text-white ">
          {name}
        </h5>
      </div>
    </div>
  );
};
