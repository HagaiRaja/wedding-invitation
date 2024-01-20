import { mappings } from "../../data";

export async function GET(
  _request: Request,
  { params: { id } }: { params: { id: string } }
) {
  return Response.json({
    name: mappings.find((m) => m.id === id && m.isHolyMatrimony === "TRUE")?.name || null,
  });
}