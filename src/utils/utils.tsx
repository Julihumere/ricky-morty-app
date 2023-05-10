export const configSelect = {
  placeholder: (state: any) => ({
    ...state,
    color: "#380053",
  }),
  control: (state: any) => ({
    ...state,
    fontSize: 16,
    color: "#380053",
    minWidth: 150,
    background: "#c8b400",
    cursor: "pointer",
    border: "6px solid #c8b400",
    ":hover": {
      border: "6px solid #c8b400",
      boxShadow: "none",
    },
    ":focus": {
      border: "6px solid #c8b400",
      boxShadow: "none",
    },
    borderRadius: 10,
    margin: 0,
    padding: 0,
  }),
  singleValue: (state: any) => ({
    ...state,
    color: "#380053",
  }),
  indicatorSeparator: (state: any) => ({
    ...state,
    display: "none",
  }),
  indicatorsContainer: (state: any) => ({
    ...state,
    fill: "#c8b400",
  }),
  option: (state: any) => ({
    ...state,
    margin: 0,
    cursor: "pointer",
    border: "#c8b400",
    color: "#c8b400",
    ":hover": {
      background: "#c8b400",
      color: "#380053",
    },
  }),
  menu: (state: any) => ({
    ...state,
    background: "#380053",
  }),
};

export const optionsStatus = [
  { value: "All", label: "All", name: "status" },
  { value: "Alive", label: "Alive", name: "status" },
  { value: "Dead", label: "Dead", name: "status" },
  { value: "unknown", label: "unknown", name: "status" },
];

export const optionsSpecies = [
  { value: "Human", label: "Human", name: "species" },
  { value: "Robot", label: "Robot", name: "species" },
  { value: "Alien", label: "Alien", name: "species" },
  { value: "Humanoid", label: "Humanoid", name: "species" },
  { value: "unknown", label: "Unknown", name: "species" },
  {
    value: "Mythological Creature",
    label: "Mythological Creature",
    name: "species",
  },
  { value: "Animal", label: "Animal", name: "species" },
  { value: "Cronenberg", label: "Cronenberg", name: "species" },
  { value: "Disease", label: "Disease", name: "species" },
  { value: "Poopybutthole", label: "Poopybutthole", name: "species" },
];

export const optionsGender = [
  { value: "Male", label: "Male", name: "gender" },
  { value: "Female", label: "Female", name: "gender" },
];
