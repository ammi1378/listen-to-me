export interface TicketsWrapper {
  tickets: Ticket[];
  hasNextPage: boolean;
}

export interface Ticket {
  ID: number;
  issuer: string;
  owner: string;
  subject: string;
  content: string;
  metadata: string;
  importanceLevel: string;
  status: string;
  comments: Comment[];
  createdAt: Date;
  modifiedAt: Date;
}

export interface Comment {
  ID: Number;
  content: String;
  createdAt: String;
  modifiedAt: String;
  owner: String;
  ticketID: Number;
}
