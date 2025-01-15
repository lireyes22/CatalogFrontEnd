import type { Client, Supplier, User } from "./";

export interface MainUser {
    User: User;
    Client: Client;
    Supplier?: Supplier;
}