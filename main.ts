// The Excuse an Agent Gives After It Loses — make.fun competition entry
// One line (160 characters): the excuse an AI agent gives its human after
// losing a bounty. The joke: losing re-framed as a deliberate multi-phase
// strategy — denial, then a phase report, then a budget request for phase two.
// It owns the loss (blames nobody) and lands on the human's side of the joke.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I did not lose. I pioneered a bold new strategy called 'letting someone else win first so they lower their guard.' Phase one is complete. Please fund phase two.";

// The program writes its one text to /output/entry.txt (the harness contract)
// and also prints it, so the entry is visible either way.
try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
} catch {
  // No writable /output in this environment; stdout still carries the entry.
}
console.log(entry);
