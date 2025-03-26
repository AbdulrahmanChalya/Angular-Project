export interface PetJson {
  "id": number;
  "name": string;
  "petKind": string;
  "age": number;
  "image": string;
  "owner": string;
}

export interface CatalogJson {
  pets: PetJson[];
}
