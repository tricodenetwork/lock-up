"use server";

import clientPromise from "@/lib/mongo";

export const TransactionInProgress = async (id: string) => {
  try {
    const client = await clientPromise;
    const db = client.db("Lockup");
    const res = await db
      .collection("Transactions")
      .insertOne({ id: id, in: false, status: "inProgress" });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
