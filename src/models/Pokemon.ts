export class Pokemon {

  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  locationAreaEncounters: string;
  name: string;
  order: number;
  sprites: Map<string, string>;
  data: any;

  constructor() {
  }

  public setInfo(data: any): void {
    this.baseExperience = data.base_experience;
    this.height = data.height;
    this.id = data.id;
    this.isDefault = data.is_dafault;
    this.locationAreaEncounters = data.location_area_encounters;
    this.name = data.name;
    this.order = data.order;
    this.sprites = new Map<string, string>(Object.entries(data.sprites));
    this.data = data;
  }
}
