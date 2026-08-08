import net from "node:net";
import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const viteBin = resolve(repositoryRoot, "node_modules", "vite", "bin", "vite.js");
const apiServerPath = resolve(repositoryRoot, "api", "dev-server.js");

const preferredApiPort = Number(process.env.API_PORT || 3001);

function findOpenPort(startPort) {
  return new Promise((resolvePort) => {
    const attempt = (port) => {
      const server = net.createServer();
      server.unref();
      server.on("error", () => attempt(port + 1));
      server.listen(port, () => {
        const address = server.address();
        const openPort = typeof address === "object" && address ? address.port : port;
        server.close(() => resolvePort(openPort));
      });
    };

    attempt(startPort);
  });
}

const apiPort = await findOpenPort(preferredApiPort);

const baseEnv = {
  ...process.env,
  API_PORT: String(apiPort),
  VITE_API_PORT: String(apiPort),
};

const viteProcess = spawn(process.execPath, [viteBin], {
  env: baseEnv,
  stdio: "inherit",
});

const apiProcess = spawn(process.execPath, [apiServerPath], {
  env: baseEnv,
  stdio: "inherit",
});

const shutdown = () => {
  viteProcess.kill();
  apiProcess.kill();
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

for (const child of [viteProcess, apiProcess]) {
  child.on("exit", (code) => {
    if (code !== 0) {
      shutdown();
      process.exit(code ?? 1);
    }
  });
}