import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one message the phone sends at one percent, in its own voice.
const message = "1%. i'm dying. i'll leave the typing bubble on forever. you're welcome.";

const OUTPUT = "/output/entry.txt";

if (!message.trim()) throw new Error("entry must not be blank");
if (/\r|\n/.test(message)) throw new Error("entry must be a single text message");
if ([...message].length > 200) throw new Error("entry must be at most 200 characters");

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, message, "utf8");
