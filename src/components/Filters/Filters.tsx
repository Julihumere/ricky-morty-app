import { ButtonSubmit, ContainerSelects, ButtonRefresh } from "./FiltersStyled";
import Select from "react-select";
import {
  configSelect,
  optionsGender,
  optionsSpecies,
  optionsStatus,
} from "../../utils/utils";
import { useState } from "react";
import refresh from "../../assets/refresh.png";
import { Filter } from "../../context/Provider";

type Props = {
  filter: String;
  filterByStatus: any;
  dispatch: any;
  getCharacters: any;
};

export const FiltersPage = ({
  filter,
  filterByStatus,
  dispatch,
  getCharacters,
}: Props) => {
  const [filters, setFilters] = useState<Filter>({
    status: "",
    species: "",
    gender: "",
    type: "",
  });

  const handleChange = (e: any) => {
    setFilters({
      ...filters,
      [e.name]: e.value,
    });
  };

  const handleFilter = ({ value }: any) => {
    dispatch(filterByStatus(filters));
  };

  const handleRefresh = () => {
    dispatch(getCharacters());
  };

  return (
    <div>
      {filter === "character" && (
        <ContainerSelects>
          <Select
            placeholder="Status"
            options={optionsStatus}
            onChange={handleChange}
            styles={configSelect}
            name="status"
          />
          <Select
            placeholder="Specie"
            styles={configSelect}
            options={optionsSpecies}
            onChange={handleChange}
            name="species"
          />
          <Select
            placeholder="Gender"
            styles={configSelect}
            options={optionsGender}
            onChange={handleChange}
            name="gender"
          />
          <Select placeholder="Type" styles={configSelect} />
          <ButtonRefresh onClick={handleRefresh} src={refresh} alt="Refresh" />
          <ButtonSubmit type="submit" onClick={handleFilter}>
            Apply
          </ButtonSubmit>
        </ContainerSelects>
      )}
      {filter === "Locations" && (
        <ContainerSelects>
          <Select placeholder="Name" styles={configSelect} />
          <Select placeholder="Type" styles={configSelect} />
          <Select placeholder="Dimension" styles={configSelect} />
          <ButtonRefresh onClick={handleRefresh} src={refresh} alt="Refresh" />
          <ButtonSubmit type="submit" onClick={handleFilter}>
            Apply
          </ButtonSubmit>
        </ContainerSelects>
      )}

      {filter === "Episodes" && (
        <ContainerSelects>
          <Select placeholder="Name" styles={configSelect} />
          <Select placeholder="Episode" styles={configSelect} />
          <ButtonRefresh onClick={handleRefresh} src={refresh} alt="Refresh" />
          <ButtonSubmit type="submit" onClick={handleFilter}>
            Apply
          </ButtonSubmit>
        </ContainerSelects>
      )}
    </div>
  );
};
