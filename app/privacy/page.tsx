import type { Metadata } from "next";
import Link from "next/link";
import { PoweredByFolioo, Wordmark } from "@/components/brand";

export const metadata: Metadata = { title: "Privacy · PreCheck", description: "What PreCheck stores, why, and how to delete it." };

export default function Privacy() {
  return (
    <>
      <header className="header">
        <div className="wrap"><Link href="/" aria-label="PreCheck home"><Wordmark /></Link></div>
      </header>
      <main className="legal">
        <span className="eyebrow">Last updated 14 November 2026</span>
        <h1 style={{ fontSize: "clamp(34px, 5vw, 48px)" }}>Privacy<span className="dot">.</span></h1>
        <p>PreCheck is made by Folioo. This page explains what the app stores, why, and how you can remove it.</p>

        <h2>What we store</h2>
        <ul>
          <li><b>Your account:</b> your email address and the name you give. If you sign in with Google, we receive the email and name on that account.</li>
          <li><b>Your work:</b> the workflows you create, the jobs you run, which steps were done and when.</li>
          <li><b>Proof photos:</b> photos taken with the live scan at photo checks, with the time, the phone&apos;s location at that moment, and a fingerprint used to show the photo wasn&apos;t changed.</li>
          <li><b>Notifications:</b> a device token so we can send alerts, if you allow notifications.</li>
        </ul>

        <h2>Why</h2>
        <p>Only to run PreCheck: signing you in, saving and syncing your jobs, showing proof to you, your team and anyone you share a report link with, and sending the alerts you asked for. We don&apos;t sell your data or use it for advertising.</p>

        <h2>Services we use</h2>
        <ul>
          <li><b>Google Firebase</b> for sign-in, app integrity checks and notifications.</li>
          <li><b>An AI model from Google</b> to draft workflow steps from the job description you give. Only that description is sent.</li>
          <li><b>MongoDB Atlas</b> and <b>Amazon Web Services</b> to store your data and photos.</li>
          <li><b>Folioo</b>, to check whether your Folioo plan includes PreCheck, using your email address.</li>
        </ul>

        <h2>How long we keep it</h2>
        <p>The team owner chooses how long proof photos are kept, from 90 days to 3 years. After that the photo is deleted; the record that the check happened stays. Report links stop working when they expire or are turned off.</p>

        <h2>Deleting your data</h2>
        <p>Open Settings in the app and choose Delete account. Owners delete their whole team&apos;s workflows, jobs, photos and links. People who were invited have their name and email removed; proof they captured stays with the team as its record of work done.</p>

        <h2>Contact</h2>
        <p>Questions about privacy? Reach Folioo through <a href="https://folioo.tech">folioo.tech</a>.</p>
        <div style={{ marginTop: 32 }}><PoweredByFolioo /></div>
      </main>
    </>
  );
}
