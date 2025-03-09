import clientPromise from "@/lib/mongo";
import { handleUpload } from "@vercel/blob/client";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const add = async (req:NextRequest) => {
  try {
    // Extract body from the request
    const body = await req.json();
    // console.log("Request Body:", body);
    // console.log("Request:", req);
    const params = req.nextUrl.searchParams;
    const id = params.get("id") as string;

    const jsonResponse = await handleUpload({
      body,
      request: req,
      onBeforeGenerateToken: async (pathname /*, clientPayload */) => {
        // Generate a client token for the browser to upload the file
        // ⚠️ Authenticate and authorize users before generating the token.
        // Otherwise, you're allowing anonymous uploads.

        return {
          // allowedContentTypes: ["image/jpeg", "image/png", "image/gif"],
          tokenPayload: JSON.stringify({
            // optional, sent to your server on upload completion
            // you could pass a user id from auth, or a value from clientPayload
          }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Get notified of client upload completion
        // ⚠️ This will not work on `localhost` websites,
        // Use ngrok or similar to get the full upload flow

        console.log("blob upload completed", blob, tokenPayload);

        try {
          // Run any logic after the file upload completed
          // const { userId } = JSON.parse(tokenPayload);
          // await db.update({ avatar: blob.url, userId });
          const client = await clientPromise;

          const db = client.db("Lockup");
          if (id) {
              await db
                .collection("Transactions")
                .updateOne(
                  { _id: new ObjectId(id) },
                  { proof: blob.url,sent:true,received:false }
                );
           
          }
        } catch (error) {
          throw new Error("Could not upload proof");
        }
      },
    });

    // Return a successful response
    return NextResponse.json(jsonResponse, { status: 200 });
  } catch (error) {
    console.error("Error:", error);

    // Return an error response
    return NextResponse.json(
      { error: "Something went wrong" },
      {
        status: 500,
      }
    );
  }
};

export { add as POST };
