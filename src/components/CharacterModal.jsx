/* eslint-disable react/prop-types */
export const CharacterModal = ({ character, onClick }) => {
  const { name, image, status, species, origin, location, type, gender } =
    character;

  return (
    <div
      className={`bg-black/70 h-screen w-screen grid place-content-center fixed inset-0`}
    >
      <div className="relative rounded-xl overflow-hidden">
        <div className="bg-slate-800 grid grid-cols-12 gap-5 ">
          <div className="h-full col-span-6">
            <img src={image} className="h-full object-cover" alt="" />
          </div>
          <ul className="col-span-6 flex flex-col gap-4 py-4 px-5 text-white">
            <li>
              <h5 className="text-3xl text-center text-white font-bold">
                {name}
              </h5>
            </li>
            <li>
              <p>
                <span className="text-sky-300">Status:</span>{" "}
                <span>{status}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="text-sky-300">Gender:</span>{" "}
                <span>{gender}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="text-sky-300">Species:</span>{" "}
                <span>{species}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="text-sky-300">Type:</span>{" "}
                <span>{type || "unknown"}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="text-sky-300">Location:</span>{" "}
                <span>{location.name}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="text-sky-300">Origin:</span>{" "}
                <span>{origin.name}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="text-sky-300">Dimension:</span>{" "}
                <span>{location.dimension}</span>
              </p>
            </li>
          </ul>
        </div>

        <button
          onClick={onClick}
          className="text-small font-bold absolute top-3 right-3 bg-white rounded-full px-[9px] py-[3px]"
        >
          X
        </button>
      </div>
    </div>
  );
};
