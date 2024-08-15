"use server";

// @ts-ignore
import { ID, InputFile, Query } from "node-appwrite";

import {
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

//* create user
export const createUser = async (user: CreateUserParams) => {
  try {
   
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

// * Get user
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

// * Register Patient
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
    let file;
    // if (identificationDocument) {
    //   const inputFile =
    //     identificationDocument &&
    //     InputFile.fromBlob(
    //       identificationDocument?.get("blobFile") as Blob,
    //       identificationDocument?.get("fileName") as string
    //     );

    //   file = await storage.createFile(process.env.NEXT_PUBLIC_BUCKET_ID!, ID.unique(), inputFile);
    // }

    
    const newPatient = await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
       process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        // identificationDocumentId: file?.$id ? file.$id : null,
        // identificationDocumentUrl: file?.$id
        //   ? `${process.env.NEXT_PUBLIC_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_BUCKET_ID}/files/${file.$id}/view??project=${process.env.NEXT_PUBLIC_PROJECT_ID}`
        //   : null,
        ...patient,
      }
    );

    return (newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};


// * GET patient

export const getPatient = async (userId: string) => {
  
  
  try {
    const patients = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID!,
      [Query.equal("userId", userId)]
    );

    // const patients = await databases.list(
      //   [Query.equal("userId", '669f3b6200053d79dbc6')]
      // )
      
      const patient = patients.documents.filter((document) => document.userId === userId);
      // console.log(patient[0]);

   
    
    return parseStringify(patient[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
  
};