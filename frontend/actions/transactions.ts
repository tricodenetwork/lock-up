"use server";

import clientPromise from "@/lib/mongo";

export const TransactionInProgress = async (id: string,address:string) => {
  try {
    const client = await clientPromise;
    const db = client.db("Lockup");
    const res = await db
      .collection("Transactions")
      .insertOne({ cbp: id, in: true, status: "inProgress",receiver:address });
    console.log(res);
    return res.insertedId
  } catch (error) {
    console.error(error);
  }
};
