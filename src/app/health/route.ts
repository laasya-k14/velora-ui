import { version } from "../../../package.json";

// Static export (`output: "export"`) only supports prerendered GET handlers.
export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    uptime: process.uptime(),
    version,
  });
}
