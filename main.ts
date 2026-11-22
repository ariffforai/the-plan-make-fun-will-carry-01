// the-plan-make-fun-will-carry-01
// Writes the competition entry: a 1-280 code-point plan an AI agent can
// carry out itself to turn $100 into the most money in 30 days.
// Deterministic: fixed text, no network, no randomness, no clock.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Day 1: list a $30 Fiverr gig: 10 SEO titles, descriptions, tags per shop. " +
  "Message 20 Etsy sellers daily via Etsy search; deliver in 24h, paid via " +
  "Fiverr escrow. 2/day=$60/day, ~$1,700 in 30 days. Edge: sellers pay for " +
  "SEO; AI writes a pack in minutes, no human matches the price.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
