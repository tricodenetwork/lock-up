import axios from "axios";
import { NextRequest } from "next/server";

const add = async (req: NextRequest) => {
  try {
    // Extract URL params from the request
    const params = req.nextUrl.searchParams;
    const from = params.get("from");
    const to = params.get("to") as string;

    if (!from || !to) {
      return Response.json(
        { message: "From or to currency is missing" },
        { status: 400 }
      );
    }

    const res = await axios.get(
      `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`
    );

    const response = res.data[to];
    if (res.data.Response == "Error") {
      return Response.json(
        { message: res.data.Message },
        {
          status: 500,
        }
      );
    }
    console.log(res.data, "response");

    // Return a successful response
    return Response.json({ message: response }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);

    // Return an error response
    return Response.json(
      { message: "Something went wrong" },
      {
        status: 500,
      }
    );
  }
};

export { add as GET };
