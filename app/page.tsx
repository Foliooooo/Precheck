import Link from "next/link";
import { Bell, Check, Clock3, RefreshCw, ShieldCheck, Smartphone, Users } from "lucide-react";
import { AndroidIcon, AppleIcon, PoweredByFolioo, Wordmark } from "@/components/brand";
import { Phone } from "@/components/phone";
import { Reveal } from "@/components/reveal";
import { HoverCards } from "@/components/hover-cards";
import { ThemeSwitch } from "@/components/theme-switch";
import { ANDROID_URL, FOLIOO_PRICING } from "@/lib/links";

function Tick() {
  return <Check size={16} strokeWidth={2.4} aria-hidden="true" />;
}

/** Headline words that rise out of a mask one after another (once, on load). */
function Words({ children, from }: { children: string; from: number }) {
  const words = children.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <span className="w" aria-hidden="true">
            <span style={{ "--i": from + i } as React.CSSProperties}>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}

function DownloadButtons({ size = "" }: { size?: string }) {
  return (
    <div className="ctas">
      <a className={`btn btn-primary ${size}`} href={ANDROID_URL}>
        <AndroidIcon />
        Download for Android
      </a>
      <span className={`btn btn-secondary ${size}`} aria-disabled="true">
        <AppleIcon />
        iPhone <small>Coming soon</small>
      </span>
    </div>
  );
}

const steps = [
  {
    title: "Say what the job is",
    body: "Tap the mic and describe it like you'd brief someone new. No forms, no typing. PreCheck writes the steps for you.",
    points: ["Works for any trade: kitchens, repairs, cleaning, shops", "Speak or type, whichever is quicker"],
    shots: [{ src: "/screens/speak.png", alt: "Describing a job out loud in PreCheck" }],
  },
  {
    title: "Check it and approve",
    body: "Read the steps, change anything that's off, and approve. PreCheck asks for a photo only on the few steps that really matter.",
    points: ["Photo checks on the risky steps, not every step", "Edit, reorder or add steps in place"],
    shots: [{ src: "/screens/review.png", alt: "Reviewing an AI-drafted workflow" }],
  },
  {
    title: "Run it with proof",
    body: "Tick steps off as you go. At a photo check, hold the phone steady for a 5-second live scan. It keeps the sharpest frame.",
    points: ["Live camera only, so photos can't come from the gallery", "Saved with the time and place, even offline"],
    shots: [
      { src: "/screens/run.png", alt: "Running a job step by step" },
      { src: "/screens/scan.png", alt: "The 5-second live scan at a checkpoint" },
    ],
  },
  {
    title: "Share what got done",
    body: "Every finished job becomes a report: steps, verified photos, times and places. Send your customer a link that opens in any browser.",
    points: ["Links expire when you choose, and you can turn them off", "Skipped checks are shown honestly, with the reason"],
    shots: [{ src: "/screens/report.png", alt: "A finished job report ready to share" }],
  },
];

const features = [
  { title: "Works offline", body: "Jobs and scans are saved on the phone and upload by themselves when you're back online.", icon: <RefreshCw size={20} strokeWidth={1.8} aria-hidden="true" /> },
  { title: "Proof you can trust", body: "Each photo gets a fingerprint linked to the one before, so a changed or swapped photo shows up.", icon: <ShieldCheck size={20} strokeWidth={1.8} aria-hidden="true" /> },
  { title: "Alerts when it matters", body: "Get a notification when a photo check is skipped or a photo fails its check.", icon: <Bell size={20} strokeWidth={1.8} aria-hidden="true" /> },
  { title: "Team optional", body: "Use it on your own. When you need help, share a one-time code. People you invite join free.", icon: <Users size={20} strokeWidth={1.8} aria-hidden="true" /> },
  { title: "You decide how long", body: "Keep proof photos for 90 days up to 3 years. The record of each check stays after the photo goes.", icon: <Clock3 size={20} strokeWidth={1.8} aria-hidden="true" /> },
  { title: "Made for one hand", body: "Big buttons near your thumb, clear steps, and a dark mode for early starts and late shifts.", icon: <Smartphone size={20} strokeWidth={1.8} aria-hidden="true" /> },
];

const faqs = [
  { q: "How much does it cost?", a: "PreCheck is free for 7 days, no card needed. After that it's included with Folioo Pro or Business plans with 6 or more project slots. People you invite to your team join free." },
  { q: "Do I need a team?", a: "No. Most people use PreCheck on their own. If you want others to run your workflows, invite them with a one-time code whenever you like." },
  { q: "Does it work without signal?", a: "Yes. Jobs, steps and photo checks work offline and are saved on your phone. Proof uploads by itself once you're connected again." },
  { q: "Who can see my photos?", a: "Only you and the people in your team, plus anyone you send a report link to. Links expire when you choose, and you can turn them off at any time." },
  { q: "Is there an iPhone app?", a: "Not yet. PreCheck is on Android today, and the iPhone app is coming soon." },
];

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="wrap">
          <a href="#top" aria-label="PreCheck home"><Wordmark /></a>
          <nav className="nav" aria-label="Main">
            <a className="hide-sm" href="#how">How it works</a>
            <a className="hide-sm" href="#features">Features</a>
            <a className="hide-sm" href="#pricing">Pricing</a>
            <ThemeSwitch className="hide-xs" />
            <a className="btn btn-primary btn-sm" href={ANDROID_URL}>Get the app</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="glow" aria-hidden="true" />
          <div className="wrap">
            <div className="hero-copy">
              <span className="eyebrow rise"><PoweredByFolioo /></span>
              <h1 className="headline" aria-label="Checklists that prove the work got done.">
                <Words from={0}>Checklists that</Words>{" "}
                <span className="hl"><Words from={2}>prove the work</Words></span>{" "}
                <Words from={5}>got done</Words>
                <span className="dot" aria-hidden="true">.</span>
              </h1>
              <p className="lede rise d2">
                <b>Say what the job is.</b> PreCheck writes the steps, asks for a photo only where it matters, and keeps time-stamped proof you can share.
              </p>
              <div className="rise d3"><DownloadButtons /></div>
              <p className="fineprint rise d3">
                <span className="tick"><Tick /></span> Free for 7 days
                <span aria-hidden="true">·</span> No card needed
                <span aria-hidden="true">·</span> Works offline
              </p>
            </div>
            <div className="hero-phones" aria-hidden="false">
              <Phone className="back" src="/screens/run.png" alt="A job in progress, with a photo checkpoint" priority />
              <Phone className="front" src="/screens/home.png" alt="PreCheck home: free trial and three steps to get started" priority />
            </div>
          </div>
        </section>

        <div className="wrap"><hr className="rule" /></div>

        <section id="how" className="section">
          <div className="wrap">
            <Reveal><div className="section-head">
              <span className="eyebrow">How it works</span>
              <h2>From a sentence to signed-off proof<span className="dot">.</span></h2>
              <p className="lede">Four steps, all on your phone. Most jobs are set up in under a minute.</p>
            </div></Reveal>
            <div className="steps">
              {steps.map((s, i) => (
                <Reveal key={s.title}>
                <article className="step">
                  <div className="step-copy">
                    <span className="step-num">{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                    <ul className="points">
                      {s.points.map((p) => (
                        <li key={p}><Tick />{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="step-shots">
                    {s.shots.map((shot) => (
                      <Phone key={shot.src} src={shot.src} alt={shot.alt} />
                    ))}
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal><div className="section-head">
              <span className="eyebrow">Built for the job</span>
              <h2>Simple on the surface. Solid underneath<span className="dot">.</span></h2>
            </div></Reveal>
            <Reveal><HoverCards items={features} /></Reveal>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap split">
            <Reveal><div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Light and dark</span>
              <h2>Easy to read at 6 am or at midnight<span className="dot">.</span></h2>
              <p className="lede">PreCheck follows your phone&apos;s theme, with high-contrast text and large touch targets in both.</p>
            </div></Reveal>
            <Reveal className="phones-reveal"><div className="phones">
              <Phone src="/screens/run-dark.png" alt="A job in dark mode" />
              <Phone src="/screens/saved.png" alt="Proof saved after a live scan" />
            </div></Reveal>
          </div>
        </section>

        <section id="pricing" className="section" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <Reveal><div className="section-head">
              <span className="eyebrow">Pricing</span>
              <h2>Try it free. Keep it with Folioo<span className="dot">.</span></h2>
            </div></Reveal>
            <Reveal><div className="plans">
              <div className="plan featured">
                <span className="tag brand">Start here</span>
                <div className="price">Free <span>for 7 days</span></div>
                <ul className="points">
                  <li><Tick />Everything unlocked</li>
                  <li><Tick />No card needed</li>
                  <li><Tick />One trial per person</li>
                </ul>
                <a className="btn btn-primary" href={ANDROID_URL}><AndroidIcon />Download for Android</a>
              </div>
              <div className="plan">
                <span className="tag">Then</span>
                <div className="price">Included <span>with Folioo Pro or Business</span></div>
                <ul className="points">
                  <li><Tick />Plans with 6 or more project slots</li>
                  <li><Tick />Sign in with the same Google account</li>
                  <li><Tick />People you invite join free</li>
                </ul>
                <a className="btn btn-secondary" href={FOLIOO_PRICING}>See Folioo plans</a>
              </div>
            </div></Reveal>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <Reveal><div className="section-head" style={{ marginBottom: 16 }}>
              <span className="eyebrow">Questions</span>
              <h2>Good to know<span className="dot">.</span></h2>
            </div></Reveal>
            <div className="faq">
              {faqs.map((f, i) => (
                <div key={f.q}>
                  {i > 0 && <hr className="rule" />}
                  <details>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="final">
              <div className="glow" aria-hidden="true" />
              <h2>Do the job. Keep the proof<span className="dot">.</span></h2>
              <p className="lede">Free for 7 days. Set up your first job in a minute.</p>
              <DownloadButtons />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <hr className="rule" />
          <div className="footer-row">
            <Wordmark />
            <nav className="footer-links" aria-label="Footer">
              <a href="#how">How it works</a>
              <a href="#pricing">Pricing</a>
              <Link href="/privacy">Privacy</Link>
              <a href="https://folioo.tech">Folioo</a>
            </nav>
          </div>
          <div className="footer-row">
            <PoweredByFolioo />
            <ThemeSwitch />
            <span className="copy">© {new Date().getFullYear()} Folioo. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
