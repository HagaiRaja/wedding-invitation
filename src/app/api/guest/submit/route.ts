import { google } from "googleapis";
import { z } from "zod";

export async function POST(request: Request) {
  const { name } = z
    .object({
      name: z.string(),
    })
    .parse(await request.json());

  await google
    .sheets({
      version: "v4",
      auth: new google.auth.GoogleAuth({
        credentials: z
          .object({
            private_key: z.string(),
            client_email: z.string(),
          })
          .parse(
            JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS_JSON || "{}")
          ),
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      }),
    })
    .spreadsheets.values.update({
      spreadsheetId: "1MvgPZuu4kFBQd_Y9eHZGdxGhwSA6dJAnxK__StgHEeE",
      range: "WebsiteDummy!A1",
      valueInputOption: "RAW",
      requestBody: {
        values: [[name]],
      },
    });

  return Response.json(
    {
      status: "ok",
    },
    { status: 200 }
  );
}
