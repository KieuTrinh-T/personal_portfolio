export interface IProject {
  ID: number;
  Title: string;
  Subtitle: string;
  Label: string;
  Image: string;
  Content: IContent[];
  Actions: IAction[];
  IsVisible: boolean;
}
export interface IContent {
  Section: string;
  Text: string;
}
export interface IAction {
  Label: string;
  Link: string;
}
