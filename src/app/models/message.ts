import { Channel } from "./channel";
import { User } from "./user";

export interface Message {
  id: number,
  sender: User['id'],
  content: string,
  channel: Channel['name']
  time: Date
}
