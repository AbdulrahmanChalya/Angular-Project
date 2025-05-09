export interface PetJson {
  "id": string;
  "name": string;
  "petKind": string;
  "age": number;
  "image": string;
  "owner": string;
}

export interface CatalogJson {
  pets: PetJson[];
}
