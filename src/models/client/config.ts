import env from '../../app/env';
import { Client, Account,Databases,Avatars,Storage } from "appwrite";

const client = new Client()
    .setEndpoint(env.appwrite.endpointUrl) // Your API Endpoint
    .setProject(env.appwrite.projectId); // Your project ID

const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { client, account, databases, avatars, storage };