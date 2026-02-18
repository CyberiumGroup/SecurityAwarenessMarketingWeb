# CyberEscape Platform — Marketing Feature Summary

> For website creators and marketing teams. All features listed below are implemented and functional unless explicitly marked as **planned**.

---

## 1. Product Overview

CyberEscape Platform is an enterprise cybersecurity awareness training platform that replaces passive slide-based training with gamified escape-room-style challenges. Employees face realistic security scenarios — classifying sensitive data, spotting phishing, identifying physical security violations — in timed, team-based sessions that feel like games but build real, measurable security skills.

The platform combines real-time team collaboration, adaptive difficulty, and resilience analytics into a single SaaS product that security leaders can deploy org-wide, track engagement, and prove ROI.

---

## 2. Key Selling Points

| Value Proposition | Detail |
|---|---|
| **Engagement over compliance** | Escape-room gameplay replaces click-through slideshows. Employees actually want to play. |
| **Measurable resilience** | 6-domain security resilience score per employee, team, and org. Track improvement over time. |
| **Real-time collaboration** | Built-in voice, chat, and live telemetry. Teams solve challenges together, facilitators observe in real time. |
| **Enterprise-grade multi-tenancy** | Tenant-isolated data, RBAC, audit logs (7-year retention), GDPR export/delete — built for regulated industries. |
| **Actionable analytics** | Risk heatmaps, watchlists, and per-user remediation recommendations turn training data into security decisions. |
| **Pluggable game modes** | Schema-driven content system lets you add new training scenarios without code changes. |
| **Campaign-based learning** | Multi-step campaigns unlock progressively, building skills sequentially across game modes. |

---

## 3. Core Features by Audience

### For Security Leaders / CISOs

- **Resilience Score Dashboard** — Aggregate security resilience across 6 domains: Identity, Social Engineering, Data Protection, Network Defense, Threat Hunting, Incident Response.
- **Org Health Pulse** — Organization-wide average scores per domain with total scored-user counts.
- **Risk Heatmap** — Group × domain matrix color-coded from green (high resilience) to red (critical risk).
- **Engagement Scatter Plot** — Sessions played vs. resilience score, proving "more training = higher security" for budget justification.
- **Watchlist** — Automatically flags High Risk (bottom 10%) and Champion (top 10%) employees. Includes per-user remediation recommendations with suggested game modes.
<!-- - **Domain Weight Customization** — Adjust per-domain scoring weights to align with your organization's threat model. -->
- **Compliance & Audit** — Immutable append-only audit logs with 7-year retention. GDPR Article 15 data export and right-to-erasure support.
- **Reports** — Session Summary, Campaign Progress, Audit Extract, Tenant Usage, GDPR Export, and Resilience Watchlist reports in CSV and PDF.

### For Training Managers / Facilitators

- **Session Management** — Create facilitated (team-based), solo practice, or peer group sessions. Schedule, invite, launch, and monitor from one dashboard.
- **Campaign Builder** — Design multi-step training campaigns that sequence game modes progressively. Steps unlock automatically on completion.
- **Content Editor** — Visual form-based editor (schema-driven) for creating and versioning training content. Draft → Publish workflow with immutable published versions.
- **Mode Marketplace** — Enable or disable game modes per organization. Each mode has its own configurable content library.
- **Real-Time Monitoring** — Live telemetry streaming during active sessions. See scores, alerts resolved, and risk levels as they happen.
- **Team Management** — Create teams, assign/move players between teams during lobby phase, observe all team channels simultaneously.
- **Email Invitations** — One-click join links with 24-hour expiry. Track invitation status per session.
- **Exportable Reports** — Generate session summaries and campaign progress reports on demand, delivered as async background jobs.

### For Employees / Players

- **Gamified Gameplay** — Timed escape-room challenges with escalating difficulty. Earn points, build streaks, compete on leaderboards.
- **Team Collaboration** — Built-in voice and chat during gameplay. Coordinate with teammates to resolve alerts faster.
- **Progressive Campaigns** — Multi-step training paths that unlock sequentially, building skills from fundamentals to advanced scenarios.
- **Educational Debrief** — Every challenge includes educational tips explaining the real-world security principle (e.g., GDPR Article 33 breach notification, FERPA transfer of rights, CCPA notice-at-collection).
- **Solo Practice** — Self-paced sessions available anytime without a facilitator.
<!-- - **Peer Rooms** — Create informal group sessions and invite colleagues for practice. -->
- **In-App Notifications** — Real-time alerts for session invites, campaign unlocks, session starts, and report readiness.

---

## 4. Game Modes

### Data Lockdown *(Fully Implemented)*
Employees act as SOC analysts working a timed shift, triaging a stream of escalating data security alerts. See detailed deep dive in Section 5.

### Phishing Pond *(Planned)*
A cybersecurity awareness game set in a virtual pond where players act as fishermen scanning for suspicious “movement” in the water. Clicking a ripple reveals digital content — emails, URLs, attachments, SMS messages, or voicemail transcripts — that may or may not be phishing. The game supports both individual and collaborative team play. Players must decide whether the content is safe or malicious before casting their fishing rod. Correct decisions catch fish and earn points; incorrect ones reel in trash and lose points. The goal is to build phishing awareness, reinforce safe response behavior, and encourage discussion (in team mode) under time pressure. 

### Password Fortress *(Planned)*
A cybersecurity awareness game where players defend a digital fortress by practicing strong password hygiene. Players create resilient passwords, analyze common attack techniques, apply password managers, and activate multi-factor authentication to stop simulated intrusions. The game supports solo play for self-paced learning and team-based play, where participants collaborate, debate choices, and collectively secure the fortress against escalating attacks.

### Other gamemodes to be designed soon

### Additional Planned Modes
- **Password Fortress** — Identity security: password strength, MFA, credential reuse
- **Packet Patrol / Network Maze** — Network defense: safe browsing, firewall logic
- **Breach Autopsy / Hazard Hunter** — Threat hunting: anomaly detection

> All planned modes map to the 6 resilience scoring domains, ensuring comprehensive coverage of the NIST-aligned security skill framework.

---

## 5. Data Lockdown — Deep Dive

### Concept
Players operate as SOC analysts during a timed shift. A stream of security alerts arrives at increasing speed and complexity. Classify data, respond to handling scenarios, answer privacy regulation questions, and spot physical security violations on camera feeds — all under time pressure.

### Four Alert Types

| Alert | What Players Do | Points |
|---|---|---|
| **Classification** | Categorize files/emails into Public, Internal, Confidential, or Highly Restricted | +100 correct / −50 wrong |
| **Handling** | Choose the correct response to a data handling scenario | +120 correct / −60 wrong |
| **Privacy** | Answer regulation-specific questions (GDPR, CCPA, FERPA) | +150 correct / −40 wrong |
| **Camera** | Spot physical security violations on CCTV feeds (tailgating, shoulder surfing, clean desk violations, etc.) | +80 correct / −30 missed |

### Scoring & Bonuses
- **Speed bonus**: +25 points for responses under 5 seconds, +10 under 10 seconds
- **Streak bonus**: +50 points for 3+ consecutive correct answers
- **Time penalty**: −5 seconds per mistake

### Risk Meter
A real-time risk gauge rises with every mistake and times out. The game ends if risk reaches 100%.
- Classification wrong: +5% | Handling wrong: +7% | Privacy wrong: +4% | Camera missed: +3% | Alert timeout: +6% | Correct answer: −1%

### Educational Content
- **70 content items** covering GDPR, CCPA, and FERPA regulations
- Every item includes an educational tip explaining the real-world principle
- Examples: GDPR Article 33 (72-hour breach notification), FERPA transfer of rights at age 18, CCPA notice-at-collection requirements, Standard Contractual Clauses for cross-border EU data transfers
- **13 camera violation types**: tailgating, unattended bag, photography, social engineering, unauthorized access, USB device, door propping, shoulder surfing, clean desk, data exfiltration, eavesdropping, recording device, unattended laptop

---

## 6. Communication & Collaboration

### Real-Time Chat
- **Session-wide chat thread** — All participants in a session share a main chat channel.
- **Team-scoped threads** — Each team gets a private chat channel. Facilitators can observe all team threads.
- Powered by Azure Communication Services. Messages delivered in real time.

### Voice Calling
- **Session-wide voice room** — Open voice channel for the entire session.
- **Team-scoped voice rooms** — Private voice channels per team. Facilitators join as presenters with access to all rooms.
- Features: join/leave, mute/unmute, live participant list with speaking indicators.

### In-App Notifications
10 notification types delivered in real time via SignalR:
Session Invite, Session Starting, Session Ended, Auto-Cancelled, Auto-Ended, Role Changed, System Announcement, Campaign Step Unlocked, Campaign Completed, Report Ready.

### Email Invitations
- Branded session invite emails with one-click join links
- 24-hour expiry, invitation tracking per session

---

## 7. Analytics & Reporting

### Resilience Scoring
6 security domains scored per employee, team, and organization:

1. **Identity Security** — Password practices, MFA adoption, credential hygiene
2. **Social Engineering** — Phishing detection, pretexting awareness
3. **Data Protection** — Classification accuracy, PII handling, regulation knowledge
4. **Network Defense** — Safe browsing, firewall concepts, network hygiene
5. **Threat Hunting** — Anomaly detection, log analysis, indicator recognition
6. **Incident Response** — Containment speed, communication, escalation

**Scoring formula**: `(accuracy × 0.7 + speed factor × 0.3) × 100` per domain, aggregated with configurable weights.

**Skill decay**: Scores decay ~5% per month of inactivity, incentivizing continuous training.

**Weekly snapshots**: Automatic weekly materialization for historical trend analysis (12-week history charts).

**Percentile ranking**: Each user's score includes their percentile position within the organization.

### Analytics Views

| View | Purpose |
|---|---|
| **Org Health Pulse** | Organization-wide averages per domain with total scored users |
| **Risk Heatmap** | Group × domain matrix, color-coded green→red, with user counts per cell |
| **Engagement Scatter** | Sessions played vs. resilience score — proves training ROI |
| **Watchlist** | Auto-flagged High Risk (bottom 10%) and Champions (top 10%) with remediation recommendations |
| **Domain Radar Chart** | Per-user spider chart showing strengths and weaknesses across all 6 domains |
| **Score History** | 12-week trend line per user showing improvement trajectory |

### Reports

| Report Type | Description |
|---|---|
| Session Summary | Per-session breakdown of scores, participation, alert resolution |
| Campaign Progress | Multi-step campaign completion rates and per-step performance |
| Audit Extract | Full audit trail export for compliance review |
| Tenant Usage | Organization-wide usage statistics and engagement metrics |
| GDPR Export | Complete user data export per GDPR Article 15 |
| Resilience Watchlist | High-risk and champion employee lists with recommendations |

**Formats**: CSV and PDF (generated via QuestPDF). Large reports processed asynchronously with notification on completion.
