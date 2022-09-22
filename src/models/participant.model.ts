import { Status } from "./status.model";

export interface Participant {
  name: string;
  status: Status;
  img?: string;
}
