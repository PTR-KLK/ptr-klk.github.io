import { rgba } from "polished";

export const boxShadow = (theme) => `
  box-shadow: 2px 2px 0px 0px ${rgba(theme.secondary, 0.8)};
`;
