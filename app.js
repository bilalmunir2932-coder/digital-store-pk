const WHATSAPP_NUMBER = "923198682932";
const categories = [
  {id:"all", label:"All Categories", title:"Browse by Category", icon:"✦"},
  {id:"tiktok", label:"TikTok", title:"TikTok Services", icon:"♪"},
  {id:"instagram", label:"Instagram", title:"Instagram Services", icon:"◎"},
  {id:"youtube", label:"YouTube", title:"YouTube Services", icon:"▶"},
  {id:"facebook", label:"Facebook", title:"Facebook Services", icon:"f"},
  {id:"whatsapp", label:"WhatsApp", title:"WhatsApp Services", icon:"◉"},
  {id:"ai", label:"AI Tools", title:"AI Tools & Subscriptions", icon:"✧"},
  {id:"design", label:"Design & Video", title:"Design & Video Tools", icon:"▧"},
  {id:"streaming", label:"Streaming", title:"Streaming Subscriptions", icon:"▷"},
  {id:"software", label:"Software & VPN", title:"Software & VPN", icon:"◈"},
  {id:"other", label:"Other Digital Services", title:"Other Digital Services", icon:"＋"}
];
// Initial catalog is populated from the prices supplied so far. Verify ambiguous duplicate offers before launch.
const services = [
  {name:"Instagram Followers",category:"instagram",desc:"1,000 followers package",price:3000,unit:"per 1K",icon:"◎"},
  {name:"Instagram Likes",category:"instagram",desc:"1,000 likes package",price:200,unit:"per 1K",icon:"♡"},
  {name:"Instagram Comments",category:"instagram",desc:"1,000 comments package",price:300,unit:"per 1K",icon:"▤"},
  {name:"Instagram Reels Views",category:"instagram",desc:"50,000 views package",price:500,unit:"50K views",icon:"▷"},
  {name:"TikTok Followers",category:"tiktok",desc:"1,000 followers package",price:1200,unit:"per 1K",icon:"♪"},
  {name:"TikTok Likes",category:"tiktok",desc:"1,000 likes package",price:500,unit:"per 1K",icon:"♡"},
  {name:"TikTok Comments",category:"tiktok",desc:"1,000 comments package",price:1500,unit:"per 1K",icon:"▤"},
  {name:"TikTok Views",category:"tiktok",desc:"10,000 views package",price:250,unit:"10K views",icon:"▷"},
  {name:"TikTok UK Account",category:"tiktok",desc:"UK TikTok account",price:500,unit:"per account",icon:"♪"},
  {name:"TikTok USA Account",category:"tiktok",desc:"USA TikTok account",price:400,unit:"per account",icon:"♪"},
  {name:"TikTok Account Unfreeze",category:"tiktok",desc:"Permanent unfreeze service",price:970,unit:"per service",icon:"❄"},
  {name:"TikTok Coins — 300",category:"tiktok",desc:"300 coins package",price:1216.5,unit:"300 coins",icon:"◉"},
  {name:"TikTok Coins — 500",category:"tiktok",desc:"500 coins package",price:1883.5,unit:"500 coins",icon:"◉"},
  {name:"TikTok Coins — 1,000",category:"tiktok",desc:"1,000 coins package",price:3580,unit:"1,000 coins",icon:"◉"},
  {name:"YouTube Subscribers",category:"youtube",desc:"1,000 subscribers package",price:7000,unit:"per 1K",icon:"▶"},
  {name:"YouTube Views",category:"youtube",desc:"1,000 views package",price:350,unit:"per 1K",icon:"▷"},
  {name:"YouTube Likes",category:"youtube",desc:"1,000 likes package",price:450,unit:"per 1K",icon:"♡"},
  {name:"YouTube Comments",category:"youtube",desc:"1,000 comments package",price:1200,unit:"per 1K",icon:"▤"},
  {name:"YouTube Watch Time",category:"youtube",desc:"4,000 watch hours package",price:2500,unit:"4K hours",icon:"◷"},
  {name:"Facebook Page Likes",category:"facebook",desc:"1,000 page likes package",price:1200,unit:"per 1K",icon:"f"},
  {name:"Facebook Followers",category:"facebook",desc:"1,000 followers package",price:1200,unit:"per 1K",icon:"f"},
  {name:"Facebook Post Likes",category:"facebook",desc:"1,000 post likes package",price:250,unit:"per 1K",icon:"♡"},
  {name:"Facebook Shares",category:"facebook",desc:"1,000 shares package",price:250,unit:"per 1K",icon:"↗"},
  {name:"Facebook Comments",category:"facebook",desc:"1,000 comments package",price:300,unit:"per 1K",icon:"▤"},
  {name:"WhatsApp Poll Votes",category:"whatsapp",desc:"1,000 poll votes package",price:500,unit:"per 1K",icon:"◉"},
  {name:"CapCut Pro — 1 Month",category:"design",desc:"1 account subscription",price:350,unit:"1 month",icon:"✂"},
  {name:"CapCut Pro — 4 Accounts",category:"design",desc:"4 accounts subscription",price:825,unit:"1 month",icon:"✂"},
  {name:"CapCut Pro — 5 Accounts",category:"design",desc:"5 accounts subscription",price:970,unit:"1 month",icon:"✂"},
  {name:"CapCut Pro — 10 Accounts",category:"design",desc:"10 accounts subscription",price:2130,unit:"1 month",icon:"✂"},
  {name:"CapCut Pro — 180 Days",category:"design",desc:"Long-term subscription",price:680,unit:"180 days",icon:"✂"},
  {name:"CapCut Pro — Own Email",category:"design",desc:"Use your own email",price:535,unit:"1 month",icon:"✂"},
  {name:"Canva Pro",category:"design",desc:"1 Canva Pro account",price:500,unit:"per account",icon:"C"},
  {name:"ChatGPT Plus — Private",category:"ai",desc:"Private account subscription",price:4000,unit:"subscription",icon:"✧"},
  {name:"ChatGPT Plus — Shared",category:"ai",desc:"Shared subscription",price:400,unit:"1 month",icon:"✧"},
  {name:"ChatGPT Plus — Semi-Private",category:"ai",desc:"Semi-private subscription",price:535,unit:"1 month",icon:"✧"},
  {name:"ChatGPT — Own Account",category:"ai",desc:"Subscription on your account",price:3000,unit:"1 month",icon:"✧"},
  {name:"Gemini — 18 Months / 5 Users",category:"ai",desc:"Gemini plan for 5 users",price:497.3,unit:"18 months",icon:"✦"},
  {name:"Gemini — 18 Months / 5 Accounts",category:"ai",desc:"Plan for 5 accounts",price:1550,unit:"18 months",icon:"✦"},
  {name:"ElevenLabs Private",category:"ai",desc:"131K credits subscription",price:2500,unit:"1 month",icon:"◉"},
  {name:"Muise AI Private",category:"ai",desc:"2 billion credits package",price:2200,unit:"subscription",icon:"✧"},
  {name:"Google Premium Plan",category:"ai",desc:"Drive & Photos 5TB, Gemini Pro, Flow credits",price:2500,unit:"18 months",icon:"G"},
  {name:"YouTube Premium",category:"streaming",desc:"Premium subscription",price:419,unit:"30 days",icon:"▶"},
  {name:"Netflix — Single Screen",category:"streaming",desc:"Single screen subscription",price:390,unit:"1 month",icon:"N"},
  {name:"Netflix — Private Single Screen",category:"streaming",desc:"Private single screen",price:477,unit:"1 month",icon:"N"},
  {name:"Netflix — 5 Screens",category:"streaming",desc:"Five screen package",price:1405,unit:"1 month",icon:"N"},
  {name:"NordVPN",category:"software",desc:"VPN subscription",price:332,unit:"3 months",icon:"◈"},
  {name:"Surfshark — Private",category:"software",desc:"Private VPN account",price:1800,unit:"2 months",icon:"◈"},
  {name:"Surfshark — Shared",category:"software",desc:"Shared VPN account",price:800,unit:"subscription",icon:"◈"},
  {name:"Windows 10/11 Activation",category:"software",desc:"Lifetime activation",price:400,unit:"lifetime",icon:"⊞"},
  {name:"USA Debit Card",category:"other",desc:"Digital debit card service",price:1550,unit:"1 month",icon:"▤"},
  {name:"Top 200 Shopify Themes",category:"other",desc:"Theme collection",price:199.76,unit:"lifetime",icon:"◇"},
  {name:"YouTube CPM Software",category:"other",desc:"Software license",price:593,unit:"lifetime",icon:"▶"},
  {name:"IDM",category:"other",desc:"Internet Download Manager license/course",price:600,unit:"course",icon:"↓"},
  {name:"Website Design & Development",category:"other",desc:"Professional business, portfolio or online store website — share your requirements for a quote",price:null,unit:"custom quote",icon:"⌘"}
];

const brandLogos = {
  tiktok: `<svg viewBox="0 0 48 48" aria-label="TikTok logo"><path fill="#25F4EE" d="M29 5h7c.5 5 3.2 8.1 8 9v7c-4.2-.1-7.3-1.6-10-4v13.2c0 8.2-5.8 13.2-13.3 13.2C13.3 41.4 8 36.7 8 29.8c0-7.4 6.2-12.5 14.2-11.7v7.4c-4-.8-7.1 1.1-7.1 4.6 0 2.7 2.1 4.5 4.6 4.5 3 0 4.5-2 4.5-5.4V5z"/><path fill="#FE2C55" d="M26 3h7c.5 5 3.2 8.1 8 9v7c-4.2-.1-7.3-1.6-10-4v13.2c0 8.2-5.8 13.2-13.3 13.2-3 0-5.5-1-7.4-2.7 2 1 4.5 1.3 6.7.4 3.7-1.4 5.7-4.6 5.7-9V3z" opacity=".9"/><path fill="#fff" d="M27 5h6c.5 5 3.2 8.1 8 9v6.2c-4-.5-7.1-2.1-9.6-4.4v13.4c0 8.2-5.8 13.2-13.3 13.2-2.6 0-4.9-.8-6.7-2.2 2.3 1.1 4.9 1.3 7.1.3 3.5-1.5 5.3-4.6 5.3-8.8V5z"/></svg>`,
  instagram: `<svg viewBox="0 0 48 48" aria-label="Instagram logo"><defs><linearGradient id="igGradient" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#FFB43A"/><stop offset=".45" stop-color="#F04479"/><stop offset="1" stop-color="#8C45D8"/></linearGradient></defs><rect x="5" y="5" width="38" height="38" rx="11" fill="url(#igGradient)"/><rect x="13" y="13" width="22" height="22" rx="7" fill="none" stroke="#fff" stroke-width="3"/><circle cx="24" cy="24" r="5.5" fill="none" stroke="#fff" stroke-width="3"/><circle cx="32" cy="16.5" r="2" fill="#fff"/></svg>`,
  youtube: `<svg viewBox="0 0 48 48" aria-label="YouTube logo"><rect x="4" y="10" width="40" height="28" rx="9" fill="#FF0033"/><path d="M21 17.5 32 24 21 30.5z" fill="#fff"/></svg>`,
  facebook: `<svg viewBox="0 0 48 48" aria-label="Facebook logo"><circle cx="24" cy="24" r="20" fill="#1877F2"/><path fill="#fff" d="M27.5 40V26.2h4.7l.7-5.4h-5.4v-3.5c0-1.6.5-2.7 2.7-2.7h2.9v-4.8c-.5-.1-2.3-.2-4.4-.2-4.4 0-7.4 2.7-7.4 7.6v3.6h-5v5.4h5V40z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 48 48" aria-label="WhatsApp logo"><circle cx="24" cy="23" r="19" fill="#25D366"/><path fill="#fff" d="M15.4 35.2 17 29.8a13.2 13.2 0 1 1 5.2 4.1zm7-5.1c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5-8.5 3.8-8.5 8.5c0 1.6.4 3.1 1.2 4.4l-.9 3.1 3.2-.8c1.2 1.1 3 1.8 5 1.8zm4.8-6.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.3 3.5 5.6 4.8.8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.2-.6-.4z"/></svg>`,
  ai: `<svg viewBox="0 0 48 48" aria-label="AI tools icon"><rect x="4" y="4" width="40" height="40" rx="13" fill="#6B5BDB"/><path d="M24 10 27.4 20.6 38 24l-10.6 3.4L24 38l-3.4-10.6L10 24l10.6-3.4z" fill="#fff"/><circle cx="34" cy="12" r="3" fill="#9FE8FF"/></svg>`,
  design: `<svg viewBox="0 0 48 48" aria-label="Design and video tools icon"><rect x="4" y="4" width="40" height="40" rx="12" fill="#2E8BFF"/><path d="M15 15h18v18H15z" fill="none" stroke="#fff" stroke-width="2.5" rx="3"/><path d="m18 29 6-8 4 5 2-3 3 6z" fill="#fff"/></svg>`,
  streaming: `<svg viewBox="0 0 48 48" aria-label="Streaming services icon"><rect x="4" y="4" width="40" height="40" rx="12" fill="#D81F32"/><path d="M19 13v22l17-11z" fill="#fff"/></svg>`,
  software: `<svg viewBox="0 0 48 48" aria-label="Software and VPN icon"><rect x="4" y="4" width="40" height="40" rx="12" fill="#21A6A1"/><path d="M24 10 35 15v8c0 7-4.7 12-11 15-6.3-3-11-8-11-15v-8z" fill="none" stroke="#fff" stroke-width="2.5"/><path d="m18 24 4 4 8-9" fill="none" stroke="#fff" stroke-width="2.5"/></svg>`,
  other: `<svg viewBox="0 0 48 48" aria-label="Other digital services icon"><rect x="4" y="4" width="40" height="40" rx="12" fill="#8A68F8"/><path d="M15 24h18M24 15v18" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`
};
function categoryLogo(id){
  const markup=brandLogos[id];
  return markup ? `<span class="brand-logo">${markup}</span>` : `<span class="brand-logo fallback-logo">${(categories.find(c=>c.id===id)||{}).icon||"✦"}</span>`;
}

// Service-level brand marks: don't use a generic design-tools image for named products.
const serviceBrandLogos = {
  capcut: `<svg viewBox="0 0 64 64" aria-label="CapCut logo"><rect x="2" y="2" width="60" height="60" rx="16" fill="#080808"/><g fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20h28L18 44h28"/><path d="M18 28h28L18 52h28"/><path d="M22 16 42 48M42 16 22 48" stroke="#080808" stroke-width="2.5"/></g></svg>`,
  canva: `<svg viewBox="0 0 64 64" aria-label="Canva logo"><defs><linearGradient id="canvaGradient" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#00C4CC"/><stop offset=".52" stop-color="#7D2AE8"/><stop offset="1" stop-color="#FF6F91"/></linearGradient></defs><rect x="2" y="2" width="60" height="60" rx="17" fill="url(#canvaGradient)"/><text x="32" y="43" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="37" font-weight="bold" fill="#fff">C</text></svg>`,
  nordvpn: `<svg viewBox="0 0 64 64" aria-label="NordVPN inspired mountain shield mark"><rect x="2" y="2" width="60" height="60" rx="16" fill="#4687FF"/><path d="M11 45 24 20l8 15 7-10 14 20H11Z" fill="#fff"/><path d="m17 45 8-15 7 13 7-10 9 12H17Z" fill="#B8D4FF"/></svg>`,
  surfshark: `<svg viewBox="0 0 64 64" aria-label="Surfshark inspired wave shield mark"><rect x="2" y="2" width="60" height="60" rx="16" fill="#178BFF"/><path d="M13 36c8-13 15-13 23-3 5 6 9 6 15-1-2 12-12 18-21 10-5-4-9-6-17-6Z" fill="#fff"/><path d="M16 24c7-5 13-4 18 1" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
  windows: `<svg viewBox="0 0 64 64" aria-label="Windows logo"><rect x="3" y="3" width="28" height="28" fill="#F35325"/><rect x="34" y="3" width="27" height="28" fill="#81BC06"/><rect x="3" y="34" width="28" height="27" fill="#05A6F0"/><rect x="34" y="34" width="27" height="27" fill="#FFBA08"/></svg>`,
  chatgpt: `<svg viewBox="0 0 64 64" aria-label="ChatGPT logo"><rect x="2" y="2" width="60" height="60" rx="17" fill="#10A37F"/><g fill="none" stroke="#fff" stroke-width="4.3" stroke-linecap="round" stroke-linejoin="round"><path d="M32 13c-5-4-12-1-13 5-7 0-11 7-7 13-4 6 0 13 7 13 2 7 10 9 15 4 6 3 13-1 13-8 6-3 6-12 0-15 1-7-6-12-13-9Z"/><path d="m24 20 16 9v15M17 28l16 9 14-8M19 44l1-16 13-8M32 48l-1-11 13-8"/></g></svg>`,
  elevenlabs: `<svg viewBox="0 0 64 64" aria-label="ElevenLabs logo"><rect x="2" y="2" width="60" height="60" rx="17" fill="#111111"/><g fill="#fff"><rect x="16" y="16" width="7" height="32" rx="3.5"/><rect x="28" y="11" width="7" height="42" rx="3.5"/><rect x="40" y="20" width="7" height="24" rx="3.5"/></g></svg>`,
  muise: `<svg viewBox="0 0 64 64" aria-label="Muise AI logo"><defs><linearGradient id="muiseGradient" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#FF8A3D"/><stop offset=".55" stop-color="#A64DFF"/><stop offset="1" stop-color="#4D7CFE"/></linearGradient></defs><rect x="2" y="2" width="60" height="60" rx="17" fill="#171126"/><path d="M13 45V20l10 14 9-14 9 14 10-14v25h-7V32l-12 16-12-16v13z" fill="url(#muiseGradient)"/></svg>`,
  google: `<svg viewBox="0 0 64 64" aria-label="Google logo"><rect x="2" y="2" width="60" height="60" rx="17" fill="#fff"/><path fill="#4285F4" d="M51 33c0-1.5-.1-3-.4-4.4H32v8.3h10.7a9.2 9.2 0 0 1-4 6v5.2h6.5C49.3 44.7 51 39.4 51 33Z"/><path fill="#34A853" d="M32 52c5.3 0 9.8-1.8 13.1-4.9l-6.5-5.2c-1.8 1.2-4 2-6.6 2-5.1 0-9.5-3.5-11-8.2h-6.7v5.4A19.8 19.8 0 0 0 32 52Z"/><path fill="#FBBC05" d="M21 35.7a12 12 0 0 1 0-7.4v-5.4h-6.7a20 20 0 0 0 0 18.2z"/><path fill="#EA4335" d="M32 20.1c2.9 0 5.5 1 7.5 3l5.7-5.7C41.8 14.1 37.3 12 32 12a19.8 19.8 0 0 0-17.7 10.9l6.7 5.4c1.5-4.7 5.9-8.2 11-8.2Z"/></svg>`,
  netflix: `<svg viewBox="0 0 64 64" aria-label="Netflix logo"><rect x="2" y="2" width="60" height="60" rx="17" fill="#111111"/><path d="M17 12h10l10 28V12h10v40H37L27 24v28H17z" fill="#E50914"/><path d="M27 12h-10l20 40h10z" fill="#B20710"/> </svg>`,
  idm: `<svg viewBox="0 0 64 64" aria-label="Internet Download Manager logo"><rect x="2" y="2" width="60" height="60" rx="15" fill="#f4f8ff"/><circle cx="32" cy="32" r="23" fill="#138bd1"/><path d="M32 12a20 20 0 0 1 19 14H32z" fill="#6bc7f0"/><path d="M32 18v22m-9-9 9 10 9-10" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 45h34" stroke="#e84b3c" stroke-width="4" stroke-linecap="round"/></svg>`,
  shopify: `<svg viewBox="0 0 64 64" aria-label="Shopify themes logo"><rect x="2" y="2" width="60" height="60" rx="15" fill="#95bf47"/><path d="M18 21 14 53h36l-4-32-8-2-6 4-6-4z" fill="#fff"/><path d="M25 24c0-8 3-13 8-13s8 5 8 13" fill="none" stroke="#315b22" stroke-width="4"/><path d="M25 35c3-4 12-4 15 0" fill="none" stroke="#95bf47" stroke-width="3"/><text x="32" y="46" text-anchor="middle" font-size="15" font-weight="bold" fill="#315b22">S</text></svg>`,
  debit: `<svg viewBox="0 0 64 64" aria-label="Debit card logo"><rect x="3" y="10" width="58" height="44" rx="8" fill="#1769aa"/><rect x="3" y="20" width="58" height="9" fill="#f4b942"/><rect x="11" y="38" width="15" height="9" rx="2" fill="#fff"/><path d="M36 42h16" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
  webdev: `<svg viewBox="0 0 64 64" aria-label="Website development logo"><rect x="3" y="5" width="58" height="54" rx="9" fill="#111827" stroke="#38bdf8" stroke-width="2"/><path d="M4 17h56" stroke="#38bdf8" stroke-width="2"/><circle cx="12" cy="11" r="2" fill="#fb7185"/><circle cx="19" cy="11" r="2" fill="#fbbf24"/><circle cx="26" cy="11" r="2" fill="#34d399"/><path d="m22 29-9 8 9 8m20-16 9 8-9 8m-5-20-9 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};
function serviceLogo(s){
  const n=s.name.toLowerCase();
  if (n.startsWith("capcut pro")) return serviceBrandLogos.capcut;
  if (n.startsWith("canva pro")) return serviceBrandLogos.canva;
  if (n.startsWith("nordvpn")) return serviceBrandLogos.nordvpn;
  if (n.startsWith("surfshark")) return serviceBrandLogos.surfshark;
  if (n.startsWith("windows 10/11 activation")) return serviceBrandLogos.windows;
  if (n.startsWith("chatgpt")) return serviceBrandLogos.chatgpt;
  if (n.startsWith("elevenlabs")) return serviceBrandLogos.elevenlabs;
  if (n.startsWith("muise ai")) return serviceBrandLogos.muise;
  if (n.startsWith("google premium") || n.startsWith("gemini")) return serviceBrandLogos.google;
  if (n.startsWith("netflix")) return serviceBrandLogos.netflix;
  if (n === "idm" || n.startsWith("idm ")) return serviceBrandLogos.idm;
  if (n.includes("shopify")) return serviceBrandLogos.shopify;
  if (n.includes("debit card")) return serviceBrandLogos.debit;
  if (n.includes("website design") || n.includes("web development")) return serviceBrandLogos.webdev;
  if (n.startsWith("youtube")) return brandLogos.youtube;
  return brandLogos[s.category] || brandLogos.other;
}

const state = {category:"all", query:""};
const categoryTabs = document.getElementById("categoryTabs");
const serviceGrid = document.getElementById("serviceGrid");
const categoryTitle = document.getElementById("categoryTitle");
const categoryKicker = document.getElementById("categoryKicker");
const resultCount = document.getElementById("resultCount");
const searchInput = document.getElementById("serviceSearch");
const toast = document.getElementById("toast");

function formatPrice(value){return value===null||value===undefined?"Custom Quote":new Intl.NumberFormat("en-PK",{maximumFractionDigits:2}).format(value);}
function renderTabs(){
  categoryTabs.innerHTML = categories.map(c=>`<button role="tab" aria-selected="${state.category===c.id}" class="category-tab ${state.category===c.id?"active":""}" data-category="${c.id}"><span>${c.icon}</span> &nbsp;${c.label}</button>`).join("");
  categoryTabs.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{state.category=btn.dataset.category;renderTabs();renderServices();}));
}
const serviceImages = {
  tiktok: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=900&q=80",
  instagram: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=900&q=80",
  youtube: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80",
  facebook: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=900&q=80",
  whatsapp: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=900&q=80",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  design: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
  streaming: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
  software: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  other: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
};
function renderServices(){
  const q=state.query.trim().toLowerCase();
  const filtered=services.filter(s=>(state.category==="all"||s.category===state.category)&&(!q||`${s.name} ${s.desc} ${s.category}`.toLowerCase().includes(q)));
  const selected=categories.find(c=>c.id===state.category);
  categoryTitle.textContent=state.category==="social"?"Social Media Services":selected.title;
  categoryKicker.textContent=state.category==="all"?"THE FULL COLLECTION":`${selected.label.toUpperCase()} COLLECTION`;
  resultCount.textContent=`${filtered.length} ${filtered.length===1?"service":"services"}`;
  if(state.category==="all" && !q){
    const visibleCategories=categories.filter(c=>c.id!=="all");
    serviceGrid.innerHTML=visibleCategories.map((c,i)=>{
      const count=services.filter(s=>s.category===c.id).length;
      const sample=services.find(s=>s.category===c.id);
      return `<button class="category-card" data-open-category="${c.id}" style="animation-delay:${Math.min(i*35,300)}ms">${categoryLogo(c.id)}<span class="category-card-copy"><b>${c.label}</b><small>${count} services</small></span><span class="category-card-arrow">↗</span><span class="category-card-sample">${sample?sample.name:"More services coming soon"}</span></button>`;
    }).join("");
    serviceGrid.querySelectorAll("[data-open-category]").forEach(btn=>btn.addEventListener("click",()=>{state.category=btn.dataset.openCategory;renderTabs();renderServices();document.getElementById("services").scrollIntoView({behavior:"smooth"});}));
    return;
  }
  if(!filtered.length){serviceGrid.innerHTML='<div class="empty-state">No matching services found. Try another search or category.</div>';return;}
  serviceGrid.innerHTML=filtered.map((s,i)=>{const platformLogo=serviceLogo(s);const brandClass=/^CapCut Pro/i.test(s.name)?" service-visual-capcut":/^Canva Pro/i.test(s.name)?" service-visual-canva":/^NordVPN/i.test(s.name)?" service-visual-nordvpn":/^Surfshark/i.test(s.name)?" service-visual-surfshark":/^Windows 10\/11 Activation/i.test(s.name)?" service-visual-windows":/^ChatGPT/i.test(s.name)?" service-visual-chatgpt":/^ElevenLabs/i.test(s.name)?" service-visual-elevenlabs":/^Muise AI/i.test(s.name)?" service-visual-muise":/^(Google Premium|Gemini)/i.test(s.name)?" service-visual-google":/^Netflix/i.test(s.name)?" service-visual-netflix":/^IDM$/i.test(s.name)?" service-visual-idm":/Shopify/i.test(s.name)?" service-visual-shopify":/Debit Card/i.test(s.name)?" service-visual-debit":/Website Design|Web Development/i.test(s.name)?" service-visual-webdev":"";return `<article class="service-card service-card-${s.category}" style="animation-delay:${Math.min(i*25,250)}ms"><div class="service-photo-wrap service-visual service-visual-${s.category}${brandClass}" data-platform="${s.category}" role="img" aria-label="${s.name} brand logo visual"><span class="service-visual-orbit orbit-one"></span><span class="service-visual-orbit orbit-two"></span><span class="service-visual-logo"><span class="brand-logo">${platformLogo}</span></span><span class="service-photo-badge">${/^CapCut Pro/i.test(s.name)?"CAPCUT PRO":/^Canva Pro/i.test(s.name)?"CANVA PRO":s.category.toUpperCase()}</span><span class="service-photo-mark">${s.icon}</span></div><div class="service-card-content"><h4>${s.name}</h4><p class="service-desc">${s.desc}</p><div class="service-card-bottom"><div><span class="price-label">${s.price===null?"PRICING":"PRICE · PKR"}</span><div class="service-price">${formatPrice(s.price)} <small>${s.unit}</small></div></div><button class="order-btn" data-order="${encodeURIComponent(s.name)}">Order Now ↗</button></div></div></article>`}).join("");
  serviceGrid.querySelectorAll("[data-order]").forEach(btn=>btn.addEventListener("click",()=>orderService(decodeURIComponent(btn.dataset.order))));
}
function orderService(name){
  const s=services.find(x=>x.name===name);if(!s)return;
  const priceLine=s.price===null?"Price: Please share a custom quote":"Price: PKR "+formatPrice(s.price); const message=`Assalam-o-Alaikum! I want to order from DIGITAL STORE.%0A%0AService: ${encodeURIComponent(s.name)}%0A${encodeURIComponent(priceLine)}%0APackage: ${encodeURIComponent(s.unit)}%0A%0APlease share the order details.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,"_blank","noopener,noreferrer");
}
searchInput.addEventListener("input",e=>{state.query=e.target.value;renderServices();});
document.getElementById("year").textContent=new Date().getFullYear();
renderTabs();renderServices();

const overlay=document.getElementById("searchOverlay"), globalSearch=document.getElementById("globalSearch");
function openSearch(){overlay.classList.add("open");overlay.setAttribute("aria-hidden","false");setTimeout(()=>globalSearch.focus(),30);}
function closeSearch(){overlay.classList.remove("open");overlay.setAttribute("aria-hidden","true");}
document.getElementById("searchOpen").addEventListener("click",openSearch);
document.getElementById("closeSearch").addEventListener("click",closeSearch);
overlay.addEventListener("click",e=>{if(e.target===overlay)closeSearch();});
globalSearch.addEventListener("input",e=>{state.query=e.target.value;searchInput.value=e.target.value;state.category="all";renderTabs();renderServices();});
globalSearch.addEventListener("keydown",e=>{if(e.key==="Enter"){closeSearch();document.getElementById("services").scrollIntoView({behavior:"smooth"});}});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeSearch();});
document.getElementById("menuToggle").addEventListener("click",()=>document.querySelector(".desktop-nav").classList.toggle("open"));
document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>document.querySelector(".desktop-nav").classList.remove("open")));
document.querySelectorAll('a[href="#services"]').forEach(link=>link.addEventListener("click",()=>{document.querySelector(".desktop-nav").classList.remove("open");}));
