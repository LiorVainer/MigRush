import { Status } from "../models/Status";

export interface Participant {
  name: string;
  status: Status;
  img?: string;
}
