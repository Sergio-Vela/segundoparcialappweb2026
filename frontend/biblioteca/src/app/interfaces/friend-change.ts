export interface Friend {
    id: number;
    name: string;
    table: string;
}

export interface FriendChange {
  old_value: Friend;
  new_value: Friend;
  table_name: string;
}