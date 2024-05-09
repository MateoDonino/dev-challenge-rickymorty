/* eslint-disable no-unused-vars */
import { CharacterList } from "./CharacterList";
import { SearchBar } from "./SearchBar";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../service/characters";
import { Skeleton } from "./Skeleton";
import { Paginator } from "./Paginator";

export const CharacterListContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    gender: "",
    status: "",
    species: "",
  });

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page, name: searchTerm, ...filters },
  });

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilters = (event) => {
    if (event === "deleteFilters") {
      setFilters({ gender: "", status: "", species: "" });
      return;
    }
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handlePagination = (action) => {
    if (loading) return;

    if (action === "next") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <SearchBar
        value={searchTerm}
        onFilter={handleFilters}
        onChange={handleChange}
        deleteFilters={() => handleFilters("deleteFilters")}
      />

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {new Array(20).fill(0).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          <CharacterList list={data?.characters?.results} />
          <Paginator
            handlePagination={handlePagination}
            page={page}
            maxPages={data?.characters?.info?.pages}
          />
        </>
      )}

      {error && <h5 className="text-white font-bold text-5xl">Error</h5>}
    </div>
  );
};
