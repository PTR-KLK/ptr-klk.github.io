import { rgba } from "polished";

export const sectionContainer = (theme) => `
  border: none;
  background: ${theme.primary};
  box-shadow: 4px 4px 0px 0px ${rgba(theme.secondary, 0.8)};
  display: flex;
  width: 100%;
`;
