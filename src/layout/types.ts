export interface IMenus {
  id: number;
  reskey: string;
  resourcesType: number;
  resourcesName: string;
  resourceUrl: string;
  own: number;
  suns?: IMenus[];
}
