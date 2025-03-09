"use server";

import clientPromise from "@/lib/mongo";

export const joinWaitlist = async (name: string, email: string) => {
  try {
    const client = await clientPromise;
    const db = client.db("Lockup");

    const existingUser = await db
      .collection("waitlist")
      .findOne({ email: email });
    if (existingUser) {
      return { ok: false, exist: true };
    }

    const res = await db
      .collection("waitlist")
      .insertOne({ name: name, email: email });
    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
};
