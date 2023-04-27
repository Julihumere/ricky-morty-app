export const configSelect = {
  placeholder: (state: any) => ({
    ...state,
    color: "#c8b400",
  }),
  control: (state: any) => ({
    ...state,
    fontSize: 16,
    color: "#c8b400",
    minWidth: 150,
    background: "none",
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
    color: "#c8b400",
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
