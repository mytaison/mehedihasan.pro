import { readFile } from "fs/promises";
import path from "path";
export async function GET(request: Request) {
  const filePath = path.resolve(
    ".",
    "public",
    "docs",
    "MehediHasan-Resume-SE.pdf"
  );
  const buffer = await readFile(filePath);
  const headers = new Headers();
  headers.append(
    "Content-Disposition",
    'attachment; filename="MehediHasan-Resume-SE.pdf"'
  );
  headers.append("Content-Type", "application/pdf");
  const response = new Response(buffer, { headers });
  // console.log(response);
  return response;
}
