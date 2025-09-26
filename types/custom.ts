export type Usuari = {
  id: number;
  nom: string;
  correu: string;
  authenticationToken?: string | null;
  contrassenya: string;
};
