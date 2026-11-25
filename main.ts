// A one-liner about a meeting that should have been an email.
import { mkdirSync, writeFileSync } from "node:fs";

const oneLiner =
  "Our meeting about which meetings should have been emails is now weekly, and it has a pre-meeting.";

const total = [...oneLiner].length;
if (total < 1 || total > 200) throw new Error(`line is ${total} characters`);

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, oneLiner, "utf8");
