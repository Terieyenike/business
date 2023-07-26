import { Client, Databases } from "appwrite";

const projectID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

export const PROJECT_ID = projectID;
export const DATABASE_ID = databaseID;
export const COLLECTION_ID = collectionID;

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(projectID);

export const databases = new Databases(client);
