"use server";

import clientPromise from "@/lib/mongo";

export const updatePersonalDetails = async (
  address: string,
  name: string,
  country: string
) => {
  try {
    const client = await clientPromise;
    const db = client.db("Lockup");

    const existingUser = await db
      .collection("intermediaries")
      .findOne({ address: address });
    if (existingUser) {
      await db
        .collection("intermediaries")
        .updateOne(
          { address: address },
          { $set: { name: name, country: country } }
        );
      return { ok: true, exist: true };
    }

    await db
      .collection("intermediaries")
      .insertOne({ address: address, name: name, country: country });
    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
};

export const getIntermediary = async (address: string) => {
  try {
    const client = await clientPromise;
    const db = client.db("Lockup");

    const existingUser = await db
      .collection("intermediaries")
      .findOne({ address: address }, { projection: { _id: 0 } });
    if (existingUser) {
      return { ok: true, data: existingUser };
    }
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
};

export const getIntermediaries = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("Lockup");

    const existingUser = await db
      .collection("intermediaries")
      .find({}, { projection: { _id: 0 } })
      .toArray();
    if (existingUser) {
      return { ok: true, data: existingUser };
    }
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
};
