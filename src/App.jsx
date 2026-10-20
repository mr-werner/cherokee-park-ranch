import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Clock, FileText, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import LOGO from "./assets/cpr-logo.png";
import LOGO_WHITE from "./assets/cpr-logo-white.png";
import BADGE_EQUI from "./assets/equitrekking-top-20-.png";
import BADGE_TA from "./assets/qvs-trip-advisor-certificate-of-excellence.png";
import BADGE_TA_OLD from "./assets/Certificate-of-Excellence.jpeg";
import BADGE_TTD from "./assets/Small-Trips-Badge.png";
import BADGE_DRA from "./assets/CherokeeParkRanch-DudeRanchAssociationLogo2.png";
import BADGE_CDGRA from "./assets/cdgra-black.png";

// ---------------------------------------------------------------- Content (from cherokeeparkranch.com, Oct 2026)
const COMPANY = "Cherokee Park Ranch";
const ABBR = "cpr";
const END_DATE = "2026-11-24T23:59:59-07:00";
const PHONE = "(970) 493-6522";
const PHONE_HREF = "tel:+19704936522";
const EMAIL = "info@cherokeeparkranch.com";
const ADDRESS = "436 Cherokee Hills Drive, Livermore, Colorado 80536";
const ORIGINAL = "https://www.cherokeeparkranch.com/";
const BOOK = "https://app.mews.com/distributor/9d20cb08-3aae-4940-a315-b28f00a12091";
const UP = "https://www.cherokeeparkranch.com/wp-content/uploads";
const TRIPADVISOR = "https://www.tripadvisor.com/Hotel_Review-g33525-d623853-Reviews-Cherokee_Park_Ranch-Livermore_Colorado.html";

const SOCIAL = [
  ["Facebook", "https://www.facebook.com/CherokeeParkRanch"],
  ["Instagram", "https://www.instagram.com/cherokeeparkranch/"],
  ["Pinterest", "https://www.pinterest.com/ccpranch/"],
  ["Flickr", "https://www.flickr.com/photos/cherokeeparkranch"],
  ["X", "https://twitter.com/CherokeeRanch"],
];

const img = (name) => `/img/${name}.jpg`;

const NAV = [
  ["#week", "The Week"],
  ["#riding", "Riding"],
  ["#rates", "Rates"],
  ["#lodging", "Lodging"],
  ["#ranch", "Activities"],
  ["#family", "Our Story"],
  ["#visit", "Contact"],
];

const STATS = [
  ["1886", "Welcoming guests since a stagecoach stop on the Fort Collins–Laramie road"],
  ["130", "Quarter horses in the herd, many bred on the ranch"],
  ["86%", "Of guests come back"],
  ["300", "Acres, ringed by Roosevelt National Forest"],
  ["7,200 ft", "On the North Fork of the Cache la Poudre"],
];

const DAY_ONE = [
  ["8:00", "am", "Breakfast", "Biscuits & gravy, parmesan grits and bottomless bacon."],
  ["8:45", "am", "Staff & guest orientation", "Meet the wranglers, counselors and the Prince family."],
  ["9:30", "am", "Horse orientation ride", "Get matched with your horse for the week."],
  ["12:30", "pm", "Lunch", "Back at the lodge, or packed for the trail later in the week."],
  ["1:30", "pm", "Your pick", "Ride (walk, trot or lope), a fly fishing lesson, a guided nature hike, or the kids' horseback scavenger hunt."],
  ["6:30", "pm", "Dinner", "Family style, with the Head Wrangler stopping by to plan tomorrow's ride."],
  ["7:30", "pm", "Hayride & campfire", "Up to Prairie Divide for the sunset, s'mores and live music."],
];

const RIDE_POINTS = [
  ["Your speed, every day", "Tell the Head Wrangler at dinner: slow, medium or fast. You ride with a group at the same pace."],
  ["Not nose-to-tail", "Side-by-side on designated trails, and loping where the footing is good. A wrangler always leads."],
  ["Half-day or all-day", "Morning and/or afternoon rides with lunch at the ranch, or a packed picnic on the trail."],
  ["One horse all week", "You're assigned your own horse. Many were bred here, and every colt is started by Townsend."],
  ["All abilities", "From never-touched-a-horse to born in the saddle. Pony rides for ages 2–5."],
  ["Rain or shine", "A new indoor arena, an outdoor arena for team penning, and Friday's rodeo."],
];

const SEASONS = [
  {
    key: "high",
    name: "High Season",
    dates: "May 29 – Aug 13, 2027",
    stay: "Saturday to Friday · 6 nights",
    who: "Family season. All ages, with the Kids' Program for ages 2–12.",
    prices: [["Adults", "$3,300"], ["Ages 2–12", "$2,724"], ["Under 2", "Free"]],
  },
  {
    key: "late",
    name: "Late Season",
    dates: "Aug 14 – Sep 17, 2027",
    stay: "Saturday to Friday · 6 nights",
    who: "Ages 13 and up. Every activity except the Kids' Program, and tons of riding.",
    prices: [["Adults", "$3,300"]],
  },
  {
    key: "getaway",
    name: "Getaway Week",
    dates: "Sep 5 – Sep 9, 2027",
    stay: "Sunday to Thursday · 4 nights",
    who: "Late-season riding and fun packed into a shorter stay. Ages 13+.",
    prices: [["Adults", "$2,475"]],
  },
];

const INCLUDED = [
  "Private lodge suite or cabin", "Breakfast, lunch & dinner", "Daily horseback riding", "Fly fishing with Orvis gear",
  "Kids' Program (High Season)", "Daily maid service", "Heated pool, hot tub & fire pit", "Nightly entertainment",
  "Indoor riding arena", "Game room & rec hall", "Petting zoo", "Skeet shooting, hiking & team penning",
];

const LODGING = [
  { n: 8, name: "Lodge Suites", sleeps: "2–6 per suite", text: "Four suites (Sunrise, Poudre, Campton, Tower) in the historic two-story log lodge with its big stone fireplace. Ideal with children under 2.", img: "lodge-stair" },
  { n: 9, name: "Cache", sleeps: "Sleeps 6", text: "Our most spacious cabin, with room for big families." },
  { n: 2, name: "Cherokee", sleeps: "Sleeps 6", text: "Perfect for larger families or groups." },
  { n: 4, name: "Cheyenne", sleeps: "Sleeps 6", text: "An inviting cabin fit for large groups." },
  { n: 5, name: "Birdhouse", sleeps: "Rooms for 2–4", text: "Four cozy, individual private rooms." },
  { n: 1, name: "Beaver", sleeps: "Sleeps 4", text: "Cozy and rustic, with a fishing theme." },
  { n: 3, name: "Pawnee", sleeps: "Sleeps 4", text: "Quaint, next to a peaceful creek." },
  { n: 10, name: "Outlaw", sleeps: "Sleeps 4", text: "A gorgeous western cabin with high ceilings." },
  { n: 11, name: "Porcupine", sleeps: "Sleeps 2", text: "Wonderful for couples looking for seclusion." },
];

const ACTIVITIES = {
  water: {
    label: "On the water",
    img: "flyfish",
    alt: "A guest fly fishing the North Fork of the Cache la Poudre",
    items: [
      ["Fly fishing", "The North Fork of the Cache la Poudre runs through the ranch, plus a stocked rainbow trout pond. Orvis rods and reels, and a certified instructor for a half-day lesson."],
      ["Fishing ride", "Ride out to the river, tie up the horses and fish with a packed lunch. License required for ages 16+."],
      ["Pool, hot tub & fire pit", "A heated 40×60 ft pool (3–8 ft deep), then stars from the hot tub. Wranglers often bring a guitar to the fire."],
      ["Boat trip & rafting", "Weekly off-ranch trip to Horsetooth Reservoir for tubing and skiing, and river rafting. Optional, at extra cost."],
    ],
  },
  land: {
    label: "On the land",
    img: "penning",
    alt: "Team penning cattle in the ranch arena",
    items: [
      ["Team penning", "Move each numbered cow, in order, from one pen to another with your horse and your team."],
      ["Friday rodeo", "Barrels, keyhole racing, pole bending, the egg toss and the boot race. Games on horses, with rodeo clowns."],
      ["Skeet shooting", "Once a week, with instruction and supplies."],
      ["Hiking & wildlife", "Trails into Roosevelt National Forest. Pronghorn, elk, moose, eagles, foxes and beavers."],
    ],
  },
  night: {
    label: "After dark",
    img: "hayride",
    alt: "Guests on a hay-filled truck for the sunset hayride",
    items: [
      ["Sunset hayride", "Hay-filled trucks up to Prairie Divide, then s'mores, hot chocolate and guitar, violin and banjo by the campfire."],
      ["Square dance", "Roger, our caller, teaches square and line dances. Boot, skoot & boogie."],
      ["Art class", "Professional artist and neighbor Amy Brackenbury teaches you to draw a horse, glass of wine in hand."],
      ["Staff show", "The crew shows off its talents, and the rodeo winners get their awards."],
    ],
  },
  kids: {
    label: "Kids & teens",
    img: "kids-horse",
    alt: "A young guest with her horse",
    items: [
      ["The Cowpoke Corral", "Counselors meet kids 2–12 each morning: arrowhead hunts, bows and arrows, gold panning, fort building, teepee camping and daily rides."],
      ["Pony & trail rides", "Pony rides for ages 2–5, trail rides for 6–12, with on-trail instruction."],
      ["Petting zoo chores", "Chickens, goats, ducks, geese and a calf to bottle feed."],
      ["Teens", "Ride with friends or family, guided hikes, the rec hall, and no cell service to distract anyone."],
    ],
  },
};

const MEALS = [
  ["Breakfast", "Fresh fruit, buttery biscuits & gravy, scrambled eggs, cheesy parmesan grits and bottomless bacon."],
  ["Lunch", "Philly cheese steaks, homemade seasoned fries, coleslaw and famous gooey seven-layer bars."],
  ["Dinner", "Fall-off-the-bone BBQ ribs, roasted chicken, buttery corn and a fresh salad."],
  ["Date night", "A candlelit wine dinner for the grown-ups while the kids have their own cookout."],
  ["Saddle Sore Saloon", "On the veranda, 5–7pm daily. Local beers and wines, or bring your own."],
  ["Every diet", "Locally sourced, with gluten-free, vegetarian and allergy options at no extra charge. Tell us ahead."],
];

// Verbatim guest quotes as published on cherokeeparkranch.com (homepage, testimonials, rates, kids and dining pages).
const REVIEWS = [
  { quote: "The most unique family vacation we have ever had! Fresh air, beautiful area, amazing trail rides, good food and a friendly, welcoming staff! We loved every minute of the week!", name: "JC Hall", from: "Virginia" },
  { quote: "14 dude ranches in 14 years…We enjoy new ranches each year to meet new owners, people and see new scenery. The owners and staff were excellent. Horses and riding were superb and they accommodated each rider perfectly. The loping was outstanding along with beautiful scenery, cookouts, and great wranglers, friendly staff…we just might go back to Cherokee Park Ranch!", name: "Mickie", from: "Arizona" },
  { quote: "I don’t know who had more fun, us (the parents) or the little kids or even our teenager! We took a poll from our kids and another family’s kids. Which vacation did you like better, Cherokee Park Ranch or Disney World? They all voted for the Ranch! WE’RE GOING BACK!", name: "Marty", from: "North Carolina" },
  { quote: "I can’t justly put into words what my time at CPR, the owners, staff and horses have meant to me. The scenery is breathtaking, the horses are fantastic and I made lifelong friends during our stay.", name: "Sophie", from: "Maine" },
  { quote: "The food was outstanding. Every meal was different and well planned. Fruit, veg, tasty burgers, cook outs, hot cookies in the jar, coffee, and more. I was impressed the kitchen fed 50 of us with hot fresh tasty meals so wonderfully.", name: "Ross T.", from: "London" },
  { quote: "The scenery is gorgeous. If you don’t want to ride, no problem, there are plenty of other activities to keep you busy, or you can sit on your porch swing and read a book!", name: "Cheryl", from: "Illinois" },
];

const AWARDS = [
  { img: null, year: "2023", title: "Best Dude Ranch", sub: "USA Today 10Best Readers' Choice · 2023 winner" },
  { img: null, year: "2017", title: "Best Dude Ranch", sub: "USA Today 10Best Readers' Choice · 2017 winner" },
  { img: BADGE_EQUI, title: "Equitrekking Top 20 Ranches", href: "http://www.top20ranches.com/best-dude-ranches/cherokee-park-ranch-colorado-dude-ranch" },
  { img: BADGE_TA, title: "Tripadvisor Certificate of Excellence", href: TRIPADVISOR },
  { img: BADGE_TA_OLD, title: "Tripadvisor Certificate of Excellence", href: TRIPADVISOR },
  { img: BADGE_TTD, title: "Featured on TripsToDiscover" },
  { img: BADGE_DRA, title: "Dude Ranchers' Association Approved Ranch", href: "https://duderanch.org/" },
  { img: BADGE_CDGRA, title: "Colorado Dude & Guest Ranch Association", href: "https://www.coloradoranch.com/" },
];

const PAPERWORK = [
  ["Packing & planning", `${UP}/2025/03/WHAT-TO-BRING-2025.pdf`],
  ["Advanced riding information", `${UP}/2025/03/ADVANCED-RIDING-INFORMATION.pdf`],
  ["Dining & diets", `${UP}/2025/03/DINING-DIETS-INFO.pdf`],
  ["Ranch rules", `${UP}/2025/03/RANCH-RULES.pdf`],
  ["Assumption of risk", `${UP}/2025/03/Assumption-of-Risk.pdf`],
];

// ---------------------------------------------------------------- Motif: the North Fork of the Poudre as a winding line
function River({ className = "" }) {
  return (
    <svg className={`river ${className}`} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 34 C 120 6, 240 6, 360 30 S 600 58, 720 32 S 960 4, 1080 28 S 1320 56, 1440 26" />
      <path className="river-thin" d="M0 44 C 140 18, 260 20, 380 40 S 620 62, 740 42 S 980 14, 1100 38 S 1330 60, 1440 36" />
    </svg>
  );
}

function Horseshoe({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <path d="M9 34 C 4 26, 4 12, 12 7 C 17 4, 23 4, 28 7 C 36 12, 36 26, 31 34" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {[[8.5, 27], [8, 19], [11, 11.5], [31.5, 27], [32, 19], [29, 11.5]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.1" fill="var(--paper)" />)}
    </svg>
  );
}

const Ext = ({ href, children, className }) => <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;

// ---------------------------------------------------------------- Sections
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="award-bar">
        <span className="award-star">★</span> Voted America's #1 Dude Ranch by USA Today · 10Best Readers' Choice 2017 &amp; 2023
      </div>
      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <div className="wrap header-row">
          <a href="#top" className="brand" aria-label="Cherokee Park Ranch home"><img src={LOGO} alt="Cherokee Park Ranch" /></a>
          <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
            {NAV.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a className="nav-phone-mobile" href={PHONE_HREF}><Phone size={16} /> {PHONE}</a>
          </nav>
          <div className="header-cta">
            <a className="header-phone" href={PHONE_HREF}><Phone size={15} /> {PHONE}</a>
            <Ext className="btn btn-copper btn-sm" href={BOOK}>Reserve</Ext>
            <button type="button" className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-photo">
        <img src={img("creek")} alt="A rider crossing a creek on a summer trail ride at Cherokee Park Ranch" />
      </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow light">Livermore, Colorado · Est. 1886</p>
          <h1>Come find your <em>wilderness.</em></h1>
          <p className="hero-lede">A family-owned, all-inclusive dude ranch in the Rocky Mountains northwest of Fort Collins. A week of riding, rodeo, river and family-style meals. <span>Come as strangers, leave as family.</span></p>
          <div className="hero-ctas">
            <Ext className="btn btn-copper" href={BOOK}>Reserve your week <ArrowRight size={18} /></Ext>
            <a className="btn btn-ghost" href={PHONE_HREF}><Phone size={17} /> {PHONE}</a>
          </div>
        </div>
        <aside className="ticket hero-ticket" aria-label="2027 season at a glance">
          <div className="ticket-head">
            <span>Booking now</span>
            <strong>2027 Season</strong>
          </div>
          <div className="ticket-body">
            <div className="ticket-line"><span>High Season</span><b>May 29 – Aug 13</b></div>
            <div className="ticket-line"><span>Late Season (13+)</span><b>Aug 14 – Sep 17</b></div>
            <div className="ticket-line"><span>Getaway Week</span><b>Sep 5 – 9</b></div>
            <div className="ticket-price"><span>All-inclusive from</span><strong>$3,300</strong><span>per adult · 6 nights</span></div>
          </div>
          <div className="ticket-stub">
            <span>Saturday arrival · Friday departure</span>
            <a href="#rates">See rates <ArrowRight size={14} /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats" aria-label="The ranch in numbers">
      <div className="wrap stats-row">
        {STATS.map(([n, t]) => <div key={n} className="stat"><strong>{n}</strong><span>{t}</span></div>)}
      </div>
      <River className="river-stats" />
    </section>
  );
}

function Week() {
  return (
    <section className="week" id="week">
      <div className="wrap week-grid">
        <div className="week-intro">
          <p className="eyebrow">A week at the ranch</p>
          <h2>Saturday to Friday, <em>everything included.</em></h2>
          <p>Your rate covers the cabin or suite, three meals a day, horseback riding and every daily and nightly activity. The only extras are Colorado sales tax, a 25% service charge, and the optional rafting, boat trip and massage.</p>
          <figure className="week-photo">
            <img src={img("herd")} alt="The horse herd running into the corral at sunrise" loading="lazy" />
            <figcaption>Each morning the wranglers run the 130-head herd into the corral. Bring your coffee and watch from the benches.</figcaption>
          </figure>
        </div>
        <div className="timetable" aria-label="Your first full day">
          <div className="timetable-head">
            <span>Timetable</span>
            <strong>Day one on the ranch</strong>
          </div>
          <ol>
            {DAY_ONE.map(([t, ap, title, text]) => (
              <li key={t}>
                <time>{t}<small>{ap}</small></time>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Riding() {
  return (
    <section className="riding" id="riding">
      <div className="riding-photos">
        <img className="rp-a" src={img("trio")} alt="Three riders on the trail with the mountains behind" loading="lazy" />
        <img className="rp-b" src={img("sunset-ride")} alt="Two riders at sunset on the ranch" loading="lazy" />
        <img className="rp-c" src={img("arena")} alt="A rider in the indoor arena" loading="lazy" />
      </div>
      <div className="wrap">
        <div className="riding-head">
          <p className="eyebrow light">The horse program</p>
          <h2>Ride the way <em>you</em> want to ride.</h2>
          <p>A herd of 130 quarter horses (no leased horses), a crew picked from more than 2,000 applicants a year, and wranglers who hold CPR and First Aid cards. Trails climb to overlooks and lope through open meadows.</p>
        </div>
        <div className="ride-grid">
          {RIDE_POINTS.map(([t, d], i) => (
            <div key={t} className="ride-card">
              <span className="ride-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <p className="riding-note"><Horseshoe className="hs-inline" /> Helmets are bring-your-own; have one professionally fitted before you come. Retired horses are rehomed through Drifters Hearts of Hope Horse Rescue.</p>
      </div>
    </section>
  );
}

function Rates() {
  return (
    <section className="rates" id="rates">
      <div className="wrap">
        <div className="section-head center">
          <p className="eyebrow">Rates + reservations</p>
          <h2>What's your <em>season?</em></h2>
          <p>Per person, all-inclusive. Pick a Saturday arrival and Friday departure (Getaway Week runs Sunday to Thursday). No riding on arrival and departure days.</p>
        </div>
        <div className="season-grid">
          {SEASONS.map((s) => (
            <article key={s.key} className={`ticket season season-${s.key}`}>
              <div className="ticket-head">
                <span>{s.stay}</span>
                <strong>{s.name}</strong>
              </div>
              <div className="ticket-body">
                <p className="season-dates">{s.dates}</p>
                <p className="season-who">{s.who}</p>
                <ul className="season-prices">
                  {s.prices.map(([who, p]) => <li key={who}><span>{who}</span><b>{p}</b></li>)}
                </ul>
              </div>
              <div className="ticket-stub">
                <Ext href={BOOK}>Reserve {s.name} <ArrowUpRight size={14} /></Ext>
              </div>
            </article>
          ))}
        </div>
        <div className="rates-lower">
          <div className="included">
            <h3>Included in every stay</h3>
            <ul>{INCLUDED.map((i) => <li key={i}><Check size={16} /> {i}</li>)}</ul>
          </div>
          <div className="policy">
            <h3>Booking &amp; cancellation</h3>
            <ul>
              <li><b>25% deposit</b> to reserve, 100% refundable until March 5.</li>
              <li>Final balance due <b>May 1</b>. Bookings after May 1 pay in full.</li>
              <li>Trip insurance strongly recommended (Travel Guard, 1-800-826-1300).</li>
              <li>Plus Colorado sales tax and a 25% service charge.</li>
            </ul>
            <div className="policy-ctas">
              <Ext className="btn btn-copper" href={BOOK}>Book online <ArrowRight size={18} /></Ext>
              <a className="btn btn-outline" href={PHONE_HREF}><Phone size={17} /> Call the ranch</a>
            </div>
            <p className="fine">Not finding what you need? Call {PHONE} or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lodging() {
  return (
    <section className="lodging" id="lodging">
      <River className="river-top" />
      <div className="wrap">
        <div className="lodging-head">
          <div>
            <p className="eyebrow">Old West + modern amenities</p>
            <h2>A porch swing <em>by the river.</em></h2>
          </div>
          <p>Four suites in the 120-year-old log lodge and eight themed cabins, each with a private bath, a front porch and swing, hummingbird feeders and original antiques. Three cabins have fireplaces. Watch for elk, mule deer and bald eagles from the porch. Numbers match the ranch map.</p>
        </div>
        <div className="lodging-grid">
          <figure className="lodging-feature">
            <img src={img("suite")} alt="A lodge suite with log walls and a queen bed" loading="lazy" />
            <img className="lodging-inset" src={img("cabin-room")} alt="A cabin bedroom with Western quilts" loading="lazy" />
          </figure>
          <ul className="cabin-list">
            {LODGING.map((c) => (
              <li key={c.name} className={c.img ? "is-lodge" : ""}>
                <span className="pin" title={`Map #${c.n}`}><span>{c.n}</span></span>
                <div>
                  <h3>{c.name}<small>{c.sleeps}</small></h3>
                  <p>{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <details className="map-details">
          <summary><MapPin size={16} /> Bird's-eye ranch map</summary>
          <img src={img("ranch-map")} alt="Illustrated map of Cherokee Park Ranch with numbered cabins and facilities" loading="lazy" />
        </details>
      </div>
    </section>
  );
}

function Ranch() {
  const [tab, setTab] = useState("water");
  const a = ACTIVITIES[tab];
  return (
    <section className="ranch" id="ranch">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Take 'em or leave 'em</p>
          <h2>From roping to rafting, <em>or the porch swing.</em></h2>
          <p>Nothing is required. Do as much or as little as you like.</p>
        </div>
        <div className="tabs" role="tablist" aria-label="Activities">
          {Object.entries(ACTIVITIES).map(([k, v]) => (
            <button key={k} type="button" role="tab" aria-selected={tab === k} className={tab === k ? "is-active" : ""} onClick={() => setTab(k)}>{v.label}</button>
          ))}
        </div>
        <div className="ranch-panel" role="tabpanel">
          <img src={img(a.img)} alt={a.alt} loading="lazy" />
          <div className="ranch-items">
            {a.items.map(([t, d]) => <div key={t} className="ranch-item"><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Dining() {
  return (
    <section className="dining" id="dining">
      <div className="wrap dining-grid">
        <div className="dining-photos">
          <img src={img("table")} alt="A dining table set with red gingham in the log lodge" loading="lazy" />
          <img src={img("saloon")} alt="A drink at the Saddle Sore Saloon" loading="lazy" />
        </div>
        <div>
          <p className="eyebrow">Sunrise to sunset</p>
          <h2>Home cookin', <em>family style.</em></h2>
          <dl className="menu">
            {MEALS.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Family() {
  return (
    <section className="family" id="family">
      <div className="wrap family-grid">
        <div className="family-photo">
          <img src={img("prince")} alt="The Prince family at Cherokee Park Ranch" loading="lazy" />
          <span className="family-stamp">Est.<b>1886</b></span>
        </div>
        <div className="family-copy">
          <p className="eyebrow light">Our storied past</p>
          <h2>The guests that <em>never went away.</em></h2>
          <p>One of Colorado's first guest ranches began in the late 1880s as a stagecoach stop between Fort Collins and Laramie, when a week cost $8. The old post office cabinet still stands in the lodge office, and the wagons, buggies and sleighs are still around.</p>
          <p>The Prince family vacationed here four summers in a row, then bought the ranch in 1996 and brought their Knoxville, Tennessee hospitality with them. After eleven years of pro rodeo, Townsend came home, married Caree from the cattle ranch across the road, and now starts every colt born on the ranch. Caree takes the photographs you see here.</p>
          <ol className="timeline">
            <li><b>1886</b> Stagecoach stop, first guests</li>
            <li><b>1996</b> The Prince family buys the ranch</li>
            <li><b>2013</b> Townsend &amp; Caree marry at Trails End Ranch</li>
            <li><b>2023</b> USA Today's Best Dude Ranch</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section className="awards" aria-labelledby="awards-title">
      <div className="wrap">
        <div className="section-head center">
          <p className="eyebrow">Awards &amp; memberships</p>
          <h2 id="awards-title">The trophy <em>saddle rack.</em></h2>
        </div>
        <div className="award-grid">
          {AWARDS.map((a, i) => {
            const inner = a.img ? (
              <><img src={a.img} alt="" loading="lazy" /><span>{a.title}</span></>
            ) : (
              <><div className="award-ribbon"><small>USA Today 10Best</small><strong>#1</strong><small>{a.year} winner</small></div><span>{a.title}<br /><em>{a.sub}</em></span></>
            );
            return a.href ? <Ext key={i} className="award" href={a.href}>{inner}</Ext> : <div key={i} className="award">{inner}</div>;
          })}
        </div>
        <p className="fine center">Permitted to operate by the Roosevelt National Forest and Colorado Division of Wildlife.</p>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Singing our praises</p>
          <h2>Our past guests <em>tell their tales.</em></h2>
          <p className="fine">Quoted word for word from the guest testimonials published on cherokeeparkranch.com. <Ext href={TRIPADVISOR}>Read more reviews on Tripadvisor <ArrowUpRight size={13} /></Ext></p>
        </div>
        <div className="review-grid">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="review">
              <blockquote>“{r.quote}”</blockquote>
              <figcaption><Horseshoe className="hs-cap" /> <span><b>{r.name}</b>, {r.from}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="wrap visit-grid">
        <div>
          <p className="eyebrow">Getting here</p>
          <h2>42 miles northwest of <em>Fort Collins.</em></h2>
          <p>About 1 hour 45 minutes from Denver International Airport, climbing from 5,200 to 7,200 feet. Rent a car at DIA (you'll need one for the off-ranch rafting, boat trip and guided mountain hike), or take Uber, a door-to-door shuttle or a limo.</p>
          <dl className="details">
            <div><dt><MapPin size={16} /> Address</dt><dd>{ADDRESS}</dd></div>
            <div><dt><Phone size={16} /> Phone</dt><dd><a href={PHONE_HREF}>{PHONE}</a></dd></div>
            <div><dt><Mail size={16} /> Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
            <div><dt><Clock size={16} /> Season</dt><dd>Late May to mid-September · Saturday arrivals</dd></div>
          </dl>
          <div className="visit-ctas">
            <Ext className="btn btn-copper" href={BOOK}>Reserve now <ArrowRight size={18} /></Ext>
            <Ext className="btn btn-outline" href="https://www.google.com/maps/dir/?api=1&destination=436+Cherokee+Hills+Drive+Livermore+CO+80536"><MapPin size={17} /> Directions</Ext>
          </div>
          <div className="paperwork">
            <h3>Guest paperwork</h3>
            <ul>{PAPERWORK.map(([t, u]) => <li key={t}><Ext href={u}><FileText size={15} /> {t}</Ext></li>)}</ul>
          </div>
        </div>
        <div className="map">
          <iframe title="Map to Cherokee Park Ranch" src="https://maps.google.com/maps?q=436%20Cherokee%20Hills%20Drive%2C%20Livermore%2C%20CO%2080536&z=10&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <River className="river-footer" />
      <div className="wrap footer-row">
        <img src={LOGO_WHITE} alt="Cherokee Park Ranch" className="footer-logo" />
        <div className="footer-cols">
          <div>
            <h4>The ranch</h4>
            {NAV.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </div>
          <div>
            <h4>Reach us</h4>
            <a href={PHONE_HREF}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>{ADDRESS}</span>
            <Ext href={`${ORIGINAL}contact/jobs/`}>Work at the ranch</Ext>
          </div>
          <div>
            <h4>Follow along</h4>
            {SOCIAL.map(([t, u]) => <Ext key={t} href={u}>{t}</Ext>)}
          </div>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Cherokee Park Ranch. Concept redesign by Blueprint WebStudio · Independent concept, not for official use. Current site: <a href={ORIGINAL}>cherokeeparkranch.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Week />
        <Riding />
        <Rates />
        <Lodging />
        <Ranch />
        <Dining />
        <Family />
        <Awards />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
