export interface Item {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads?: Array<{
    id: string;
    firstName: string;
    lastName: string;
  }>;
  traits?: Array<{
    id: string;
    name: string;
  }>
}
