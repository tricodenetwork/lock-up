import TelegramBot from "node-telegram-bot-api";
import { NextRequest, NextResponse } from "next/server";

const TOKEN = "6536370558:AAFwmAwxAqW4sbGlzpe6XvHHWfv45MrfIqg";

export const bot = new TelegramBot(TOKEN);
export const chatId = 5835833708;

export const POST = async (request: NextRequest) => {
  try {
    bot.sendMessage(chatId, "**UnMounted**", { parse_mode: "Markdown" });
    return NextResponse.json("UnMounted Successfully", {
      status: 200,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        error: "Could not send bot message.",
      },
      {
        status: 500,
      }
    );
  }
};
