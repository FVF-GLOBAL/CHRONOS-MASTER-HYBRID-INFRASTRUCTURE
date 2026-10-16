import { createServer } from "node:http";
import { randomUUID } from "node:crypto";

const port = Number(process.env.PORT ?? 8080);
const serviceName = process.env.SERVICE_NAME ?? "chronos-master-api";

const server = createServer((request, response) => {
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.setHeader("x-content-type-options", "nosniff");
  response.setHeader("cache-control", "no-store");

  if (request.method === "GET" && request.url === "/health/live") {
    response.writeHead(200).end(JSON.stringify({ status: "alive", service: serviceName }));
    return;
  }
  if (request.method === "GET" && request.url === "/health/ready") {
    // Readiness must be extended to check configured dependencies before deployment.
    response.writeHead(200).end(JSON.stringify({
      status: "development-scaffold",
      dependenciesVerified: false,
      requestId: randomUUID()
    }));
    return;
  }
  response.writeHead(404).end(JSON.stringify({ error: "not_found" }));
});

server.listen(port, () => {
  process.stdout.write(`${serviceName} listening on ${port} (development scaffold)\n`);
});
