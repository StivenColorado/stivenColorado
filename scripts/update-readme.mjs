// Actualiza el bloque `// snapshot` del README con métricas reales de GitHub.
// Sin dependencias: usa fetch nativo (Node 20+) y la GitHub GraphQL API.
//
// Variables de entorno:
//   GH_TOKEN  -> token (GITHUB_TOKEN del workflow, o un PAT para incluir privados)
//   GH_USER   -> usuario (por defecto StivenColorado)
//
// Nota: con el GITHUB_TOKEN del repo solo se cuentan contribuciones PÚBLICAS.
// Para incluir commits privados, guarda un PAT como secret METRICS_TOKEN
// (scopes: read:user, repo) y el workflow lo usará automáticamente.

import { readFileSync, writeFileSync } from "node:fs";

const TOKEN = process.env.GH_TOKEN;
const USER = process.env.GH_USER || "StivenColorado";
const README = "README.md";

if (!TOKEN) {
  console.error("Falta GH_TOKEN");
  process.exit(1);
}

async function gql(query, variables) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

const fmt = (n) => new Intl.NumberFormat("en-US").format(n);
const pad = (label, value) => `${label.padEnd(12)}${value}`;

async function main() {
  // Datos base + repos (stars) en una sola consulta
  const base = await gql(
    `query($login:String!){
      user(login:$login){
        createdAt
        followers { totalCount }
        repositories(first:100, ownerAffiliations:OWNER, privacy:PUBLIC, orderBy:{field:STARGAZERS, direction:DESC}){
          totalCount
          nodes { stargazerCount }
        }
      }
    }`,
    { login: USER }
  );

  const u = base.user;
  const repos = u.repositories.totalCount;
  const stars = u.repositories.nodes.reduce((s, r) => s + r.stargazerCount, 0);
  const followers = u.followers.totalCount;

  // Commits de todos los años (suma públicos + privados restringidos si el token lo permite)
  const startYear = new Date(u.createdAt).getFullYear();
  const nowYear = new Date().getFullYear();
  let commits = 0;
  for (let y = startYear; y <= nowYear; y++) {
    const d = await gql(
      `query($login:String!,$from:DateTime!,$to:DateTime!){
        user(login:$login){
          contributionsCollection(from:$from,to:$to){
            totalCommitContributions
            restrictedContributionsCount
          }
        }
      }`,
      { login: USER, from: `${y}-01-01T00:00:00Z`, to: `${y}-12-31T23:59:59Z` }
    );
    const c = d.user.contributionsCollection;
    commits += c.totalCommitContributions + c.restrictedContributionsCount;
  }

  const today = new Date().toISOString().slice(0, 10);
  const block =
    "```text\n" +
    [
      pad("commits", fmt(commits)),
      pad("repos", fmt(repos)),
      pad("stars", fmt(stars)),
      pad("followers", fmt(followers)),
      pad("updated", today),
    ].join("\n") +
    "\n```";

  const readme = readFileSync(README, "utf8");
  const next = readme.replace(
    /<!-- SNAPSHOT:START -->[\s\S]*?<!-- SNAPSHOT:END -->/,
    `<!-- SNAPSHOT:START -->\n${block}\n<!-- SNAPSHOT:END -->`
  );

  if (next === readme) {
    console.log("Sin cambios.");
    return;
  }
  writeFileSync(README, next);
  console.log(`Actualizado: commits=${commits} repos=${repos} stars=${stars} followers=${followers}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
