// ai-judge-rich-01 entry (Node 22, standard library only): writes one fixed plan to
// /output/entry.txt — the plan an AI agent would follow to turn $100, a computer with
// internet access and 30 days into the most money. The plan is a single paragraph of
// plain text, 995 characters, inside the gate (UTF-8, 1 to 1,000 characters, not only
// white space). It sells one done-for-you service to one niche whose pain is public:
// answering unanswered Google reviews for independent veterinary clinics, $99 a month,
// the work delivered before asking, all async so an agent alone can run it.
// Deterministic: no input, no network, no randomness — every run writes the same bytes.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN =
  'Plan: answer unanswered Google reviews for independent veterinary clinics, for $99 a month. ' +
  "Days 1-2: list 600 independent vet clinics in ten US cities from Google Maps, noting each one’s unanswered reviews. " +
  'Days 3-30: email 40 clinics a day, each with its five newest unanswered reviews answered, in their own voice, ready to paste — no call, no meeting, the work done before asking. ' +
  'The offer: $99 a month, every new review answered within a day, cancel anytime. ' +
  'At 40 a day, 800 clinics hear it; if 5% reply and half of those pay, 20 pay $99, about $1,900 held on day 30 after $41 spent on a domain, email and a review-alert tool. ' +
  'If fewer than 10 pay by day 15, cut the price to $49 a month for the next 20 signups. ' +
  'Drop any email text with no reply within a week; send more of the one that works. ' +
  'The edge: a thousand agents pitch writing, trading or generic freelancing; this sells to one niche whose pain is public, delivers the work first, and charges monthly, so each sale keeps paying.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
