# SUMA Mini-GA Day 2 Brief Visual Outline

Status: internal Rhoe slide-planning outline  
Date context: 13 May 2026  
Purpose: prepare a short Day 2 visual deck for the Thessaloniki Mini-GA, where WP5/SUMA is the focal point for functionality and architecture discussions.

## 1. Recommended Format

Use a short presentation deck plus discussion-anchor slides.

The spoken part should stay within five minutes. The follow-up discussion slides can then be used as workshop canvases during the agenda sessions.

Recommended deck:

| Part | Slide count | Role |
|---|---|---|
| Cover | 1 | Frame SUMA and the purpose of Day 2. |
| Core five-minute presentation | 7 | Give the tables a common reference point: SUMA role, SUMA path, architecture, current platform screenshots, D5.1 structure, decision gates. |
| Closing bridge | 1 | Move from presentation into table work. |
| Discussion slides | 6 | One topic per slide, aligned with the agenda and `Rhoe_MiniGA_Thessaloniki_Working_Guide_v0.3.md`. |

Core message:

```text
SUMA is the WP5 API-driven orchestration layer.
Day 2 should convert project knowledge into traceable D5.1 contracts and T5.2 implementation decisions.
```

## 2. Main Deck

### Cover Slide - Day 2 WP5/SUMA Reference

Suggested title:

```text
SUMA: From Project Outputs To API Contracts And Integration Decisions
```

Subtitle:

```text
Mini-GA Thessaloniki, Day 2 - WP5 functionality and architecture workshop
```

Suggested visual:

```text
Use cases -> requirements -> ontology/data -> KPIs -> SUMA functions -> API/modules -> owner/fallback
```

Speaker note:

This is not a formal deliverable presentation. It is a shared reference point for the charrette-style work of Day 2.

### Slide 1 - SUMA Role

Suggested title:

```text
What SUMA Needs To Do In AntifragiCity
```

Main message:

SUMA is the integration and orchestration layer that turns WP2/WP3/WP4/WP6/pilot outputs into scenario execution, KPI/evidence outputs, and role-aware decision support.

Suggested visual:

```text
WP2 events / ontology / requirements / KPIs
WP3 triage and response actions
WP4 control and routing methods
WP6/pilots data and validation
DMO UI and reporting expectations
        |
        v
SUMA API + orchestration + evidence layer
```

Suggested bullets:

- D5.1 should define the first Core SUMA API specification.
- T5.2 should implement and integrate the confirmed parts in stages.
- The Mini-GA should clarify what is core, what is a stub, what is an external dependency, and what is deferred.

Optional speaker note:

```text
The detailed WP inputs are: WP2 events, ontology, requirements and KPIs; WP3 triage and response actions; WP4 control/routing methods; WP6 and pilot data/validation; DMO UI/reporting expectations. The slide should not become a second architecture slide.
```

Draft-deck adjustment:

```text
v0.2 keeps the role slide and path slide separate. That is acceptable if the role slide is spoken quickly and the path slide is used as the conversion logic for the workshop.
```

Source basis:

Grant Agreement, D2.6 Executive Summary, D2.1-D2.7 analyses, WP5 MoM/context.

### Slide 2 - The SUMA Path

Suggested title:

```text
The SUMA Path
```

Main visual:

```text
Use cases -> requirements -> ontology/data -> KPIs -> SUMA functions -> API/modules -> owner/fallback
```

Suggested message:

```text
Today we convert broad project outputs into concrete D5.1 contracts and T5.2 implementation decisions.
```

Speaker note:

This slide should be a clean bridge from consortium discussion to owner-assigned table rows. Do not overload it with WP detail; that detail belongs in discussion slides.

### Slide 3 - Current SUMA Architecture

Suggested title:

```text
Working/Target Architecture Logic: Five Layers
```

Main visual:

```text
1. Semantic + Requirement Layer
   D2.1 events, D2.5 ontology, D2.6 requirements, D2.7 KPIs

2. Core API / Contract Layer
   scenarios, jobs, runs, KPIs, requirements, adapters, provenance

3. Simulation + Method Adapter Layer
   SUMO first; WP3, WP4, CUSP, Vissim/Aimsun/VISUM through contracts

4. Assessment + Evidence Layer
   KPI observations, resilience/AF maturity labels, data readiness, assumptions

5. UI / Documentation / Export Layer
   working web app, dashboards, reports, documentation, guided/expert workflows
```

Suggested bullets:

- SUMA should preserve source traceability: every object or endpoint must connect to a requirement, deliverable, partner output, or Mini-GA decision.
- SUMO is the first executable reference path.
- External methods/tools should enter through explicit adapter contracts.

Speaker note:

Use this slide to avoid abstract discussion. Every table output should land somewhere in this architecture.

### Slide 4 - Current Working Platform: Documentation / Orchestration

Suggested title:

```text
Current Working Platform: Prototype, Not Final Validation
```

Recommended content:

- One screenshot from the web app showing either the documentation index or the simulation/job setup workflow.

Suggested caption:

```text
Current working platform/reference prototype. It demonstrates the SUMO workflow and documentation structure, but WP2/WP3/WP4/WP6 integration and validation are still to be aligned.
```

Suggested bullets:

- Existing platform provides a practical starting point for D5.1 examples and T5.2 implementation.
- It should not be presented as the final AntifragiCity SUMA interface.
- Current outputs must carry labels such as `prototype`, `proxy`, `synthetic`, `unvalidated`, or `pilot_to_confirm` where appropriate.

Screenshot recommendation:

In v0.2, two screenshot slides are acceptable because they help make the platform concrete. Use them to show current technical progress, not validation.

### Slide 5 - Current Working Platform: Results / Scenario View

Suggested title:

```text
Current Working Platform: Prototype, Not Final Validation
```

Recommended content:

- One screenshot showing simulation results, scenario comparison, map output, or KPI/proxy results.
- Keep the caveat visible: `prototype / proxy / synthetic / unvalidated / pilot_to_confirm`.
- Avoid explaining every UI element; only say what the screenshot proves technically.

Suggested caption:

```text
Current SUMO-first workflow and reporting view. The scientific KPI/antifragility semantics remain subject to D2.7/D2.3 alignment and pilot validation.
```

Avoid screenshots that show:

- unvalidated antifragility scores without caveats,
- sensitive or unclear city data,
- too many low-level controls,
- broken/unfinished UI states,
- obsolete documentation names.

### Slide 6 - D5.1 Structure

Suggested title:

```text
D5.1: Core SUMA API Specification, Boundary, And Roadmap
```

Suggested visual:

```text
Chapter 1  Introduction, objective, T5.1 scope, SUMA role, evidence boundary
Chapter 2  SUMA overview and high-level workflow
Chapter 3  System architecture and integration model
Chapter 4  Core domain model, inputs, outputs, and data readiness
Chapter 5  Core SUMA API functionalities
Chapter 6  Initial implementation scope and deferred items
Chapter 7  Roadmap, open dependencies, and next steps
```

Suggested bullets:

- D5.1 specifies what the Core SUMA API must expose, how partner/pilot inputs connect, and which outputs can be claimed with which validation status.
- T5.2 implements the confirmed contracts in stages; D5.1 should not be written as if all integrations already exist.
- The Mini-GA should close enough open items to turn Chapters 4-6 into stable examples, schemas, endpoint families, adapter contracts, and deferred-item statements.

Compact table version for the actual slide:

| Chapter | What the slide should say |
|---|---|
| 1. Introduction | Scope, objective, SUMA role, evidence boundary. |
| 2. Overview | SUMA workflow from pilot/data inputs to scenario comparison/export. |
| 3. Architecture | Modular layers; SUMO first; partner/future tools through adapters. |
| 4. Data I/O | Events, scenarios, runs, KPIs, response actions, control strategies, pilot configs, data quality, provenance. |
| 5. API | Simulation execution, event handling, scenario management, metrics retrieval, configuration management, async jobs, validation/error model. |
| 6. Scope/deferred | Current SUMO workflow versus placeholders/dependencies for WP3, WP4, ontology/KG, pilots, UI. |
| 7. Roadmap | Dependencies on D2.6, WP3, WP4, ontology/KG, KPI subset, pilot data, validation ownership. |

Visual coding:

```text
Use three small tags across the table:
SPECIFY IN D5.1    IMPLEMENT IN T5.2    RESOLVE AT MINI-GA
```

Source basis:

Active D5.1 draft skeleton, Grant Agreement WP5 scope, D2.6 requirement traceability, D2.5 ontology, D2.7 KPI framework, current SUMA codebase.

Terminology note:

```text
KG = knowledge graph. In this deck, use "ontology/KG" only where the distinction matters; otherwise prefer "ontology/data" for broader consortium readability.
```

### Slide 7 - What Day 2 Must Decide

Suggested title:

```text
Day 2 Output: Owner-Assigned Rows, Not Generic Notes
```

Main visual:

```text
use case
  -> D2.6 requirement
  -> ontology/data object
  -> KPI/evidence
  -> SUMA function/API
  -> architecture module/UI role
  -> owner + fallback
```

Decision gates:

| Gate | Decision needed |
|---|---|
| Requirements | Essential/deferred D2.6 requirements per use case. |
| Ontology | First class/property subset, IDs, JSON/JSON-LD expectations. |
| KPIs | KPI subset, units, formulas, baselines, thresholds, owners. |
| WP3/WP4/CUSP | Handoff formats, inputs, outputs, runtime, fallback. |
| Pilots | Study area, data owner, permissions, validation target. |
| UI/DMO | Roles, dashboards, warnings, exports, guided/expert workflows. |

Closing sentence:

```text
Anything without owner, interface, validation status, due date, and fallback remains a dependency, not a Rhoe implementation commitment.
```

### Closing Bridge Slide - From Reference To Workshop

Suggested title:

```text
How We Use This In The Workshop
```

Suggested bullets:

- Use the architecture slide to place each function/module.
- Use the D5.1 structure slide to decide what must be specified.
- Use the discussion slides to close the open gates one topic at a time.
- Record decisions as tables with owner, status, due date, and fallback.

Transition line:

```text
The rest of the slides are discussion canvases, not presentation slides.
```

## 3. Discussion Slides

These slides should come after the short deck. Use one slide per topic during the relevant agenda segment. They can be sparse and table-driven.

### Discussion Slide A - D2.6 Requirements

Suggested title:

```text
Discussion A: Which D2.6 Requirements Are Essential Per Use Case?
```

Prompt:

```text
For each retained use case, classify requirements as essential, deferred, or not relevant.
```

Table columns:

| Use case | Requirement ID | Essential/deferred | Verification method | Acceptance evidence | Owner | Fallback |
|---|---|---|---|---|---|---|

Questions:

- Is D2.6 accepted as the D5.1 requirement baseline?
- Can the 47-statement count be reconciled with the extracted 35/10/1 consensus counts?
- Which `Should` requirements are actually RP1-critical?

Pre-fill from sources:

| What is already partly filled | Source pointer | Still to decide in Mini-GA |
|---|---|---|
| Baseline SUMA requirement groups FR/DR/IR/UR/NFR/GR and priorities. | D2.6 Abstract pp.1-2; Executive Summary p.8; Sec. 7.3-7.8 pp.43-47. | Essential/deferred/not relevant per retained use case. |
| Consensus evidence and 47 versus 35/10/1 count issue. | D2.6 Sec. 6 pp.39-42; Table 5 p.39. | Whether Cardiff/CU confirms the machine-readable count before D5.1 freezes the registry. |
| Verification methods and acceptance criteria. | D2.6 Sec. 8.1 pp.48-53; Sec. 8.2 p.54. | Owner and realistic acceptance evidence per October/RP1 target. |
| Assumptions, constraints, and open issues. | D2.6 Sec. 8.3 p.54. | Fallback if data, latency, simulator connector, role, or validation evidence is missing. |

Example row to show on the slide if space allows:

| Use case | Requirement ID | Essential/deferred | Verification method | Acceptance evidence | Owner | Fallback |
|---|---|---|---|---|---|---|
| AHEPA hospital-access disruption | FR-02 | essential if corridor confirmed | SUMO scenario demo + API response | baseline/disrupted/intervention run exported with caveats | Rhoe + AUTH to confirm | synthetic corridor scenario, labelled proxy |

### Discussion Slide B - Ontology And JSON/JSON-LD

Suggested title:

```text
Discussion B: What Is The First Ontology Subset SUMA Must Use?
```

Table columns:

| Class/property | Mandatory? | SUMA object/field | Identifier/IRI rule | JSON/JSON-LD expectation | Owner | Due date |
|---|---|---|---|---|---|---|

Questions:

- Which D2.5 classes are mandatory for first prototype?
- What is the stable ID/IRI convention?
- What does CU expect from `/api/v1/ontology/context.jsonld`?
- Which mappings are required versus optional semantic lift work?

Pre-fill from sources:

| What is already partly filled | Source pointer | Still to decide in Mini-GA |
|---|---|---|
| 12 top-level ontology classes and coverage backbone. | D2.5 Sec. 6.3 pp.66-68; Table 1 p.68; D2.6 Sec. 5.1.1 p.20. | Which classes/properties are mandatory for the first SUMA prototype. |
| Semantic relation to network models, simulation outputs, and AI analytics. | D2.5 Sec. 2.4 p.21; Sec. 9.1 p.140. | Which simulator outputs must be semantically mapped first. |
| Shared TBox, city-specific ABoxes/named graphs, semantic lifting pattern. | D2.5 Sec. 8.1 pp.111-112; Sec. 8.2.2 pp.113-114. | City graph, local ID, IRI, mapping owner, and mapping status conventions. |
| JSON-LD/REST/GraphQL are discussed without concrete SUMA API semantics. | D2.5 Sec. 9.1.2 p.140. | Whether D5.1 requires JSON-LD in payloads or only context/export compatibility. |
| Rule/SHACL/SPARQL examples are illustrative. | D2.5 Appendix E pp.241-246. | Whether semantic validation is deferred or required for first prototype. |

Example row to show on the slide if space allows:

| Class/property | Mandatory? | SUMA object/field | Identifier/IRI rule | JSON/JSON-LD expectation | Owner | Due date |
|---|---|---|---|---|---|---|
| `DisruptionEvent.affects` | yes for scenarios | `DisruptionEvent.affected_assets` / `ScenarioEvent` | provisional `urn:afc:{pilot}:{class}:{local_id}` until CU confirms | include `@context` optional, plain JSON required | CU + Rhoe | Mini-GA confirmation |

### Discussion Slide C - KPI And Evidence Ledger

Suggested title:

```text
Discussion C: Which KPIs Can SUMA Claim, Compute, Or Only Show As Proxy?
```

Table columns:

| Use case | KPI | Unit | Formula | Baseline/threshold | Dataset | Calculation mode | Owner | Validation status |
|---|---|---|---|---|---|---|---|---|

Questions:

- Which D2.7 KPI subset is realistic per pilot/use case?
- Which D2.3/AF indicators are required even if not in practitioner top lists?
- Which KPIs are observed, simulated, derived, survey-based, proxy, or theoretical?
- Which claims should be explicitly blocked until baseline/post-event windows exist?

Pre-fill from sources:

| What is already partly filled | Source pointer | Still to decide in Mini-GA |
|---|---|---|
| KPI catalogue scale and grouping. | D2.7 Sec. 3.2 pp.30-31. | Which subset is selected per pilot/use case rather than importing all 209 KPIs. |
| Practitioner-selected subsets and top-22 limitations. | D2.7 Sec. 3.4 pp.35-37; Sec. 3.4.2 pp.42-46. | Which network/system/AF-critical KPIs are included as overrides. |
| Composite D2.3 indicators are complex and data-hungry. | D2.7 Sec. 3.4.3 pp.47-48; D2.3 Table 2 p.15; Appendix B p.55. | Which are computed outputs, proxies, or deferred. |
| IPOO model, service layer, catalogue, and feedback-loop concepts. | D2.7 Sec. 4.3 pp.57-58; Sec. 4.4 pp.59-61. | Concrete API endpoint families and evidence ledger fields. |
| Thresholds needed but not fully defined. | D2.7 Sec. 6.3 p.81. | Threshold owner/status and baseline owner/status per selected KPI. |
| AF validation requires baseline/post-event/equity/causal checks. | D2.3 pp.22-23; p.36. | What may be labelled validated versus proxy/theoretical. |

Example row to show on the slide if space allows:

| Use case | KPI | Unit | Formula | Baseline/threshold | Dataset | Calculation mode | Owner | Validation status |
|---|---|---|---|---|---|---|---|---|
| AHEPA hospital access | emergency access travel time | minutes | route travel time | baseline missing / threshold owner missing | SUMO synthetic route output | simulated proxy | AUTH/AHEPA to confirm | unvalidated |

### Discussion Slide D - WP3/WP4/CUSP Adapter Contracts

Suggested title:

```text
Discussion D: What Enters SUMA As An Executable Module, Adapter, Or Placeholder?
```

Table columns:

| Module/tool | Owner | Input schema | Output schema | Runtime | KPI mapping | Maturity | Licence/NDA | Fallback |
|---|---|---|---|---|---|---|---|---|

Questions:

- WP3: what is the response-action/triage handoff format and timing?
- WP4/ETH: what inputs, outputs, parameters, control zones, and retraining assumptions are required?
- CUSP/Optimize AI: what is blocked by NDA, what I/O can be relied on, and what fallback applies?
- External simulators: which are working integrations versus future adapter contracts?

Pre-fill from sources:

| What is already partly filled | Source pointer | Still to decide in Mini-GA |
|---|---|---|
| SUMA must integrate simulation environments and external tooling through modular/API-first contracts. | D2.6 FR-05, IR-01, IR-02 in Sec. 7.3-7.8 pp.43-47; acceptance examples Sec. 8.2 p.54. | Which integrations are executable in T5.2 versus specified only in D5.1. |
| WP4 should enter SUMA through adapter contracts, not hidden algorithm ownership by Rhoe. | WP5 MoM 1 Apr and 22 Apr 2026; WP4/WP5 meeting 29 Apr 2026 in context analysis. | ETH/WP4 input schema, output schema, parameters, runtime mode, control zones, retraining, KPI mapping. |
| CUSP/NDA and technical access are unresolved. | WP5 MoM 22 Apr 2026 in context analysis. | What I/O can be relied on and what fallback applies if access is late. |
| D2.2/D2.4 define acceptability/equity/communication constraints relevant to response actions. | D2.2 pp.76-78, 120-121, 162-164, 196-206; D2.4 prioritisation, justice/equity, transparency questions. | LISER/WP3 response-action/triage handoff format and social/vulnerability variables. |

Example row to show on the slide if space allows:

| Module/tool | Owner | Input schema | Output schema | Runtime | KPI mapping | Maturity | License/NDA | Fallback |
|---|---|---|---|---|---|---|---|---|
| ETH signal/control method | ETH | network state + control-zone definition + demand assumptions | control recommendation + KPI deltas + assumptions | batch/prototype until confirmed | D2.7 KPI IDs to confirm | adapter contract | none known | static intervention scenario |

### Discussion Slide E - Pilot Configuration And Data Readiness

Suggested title:

```text
Discussion E: What Can Each Pilot Support By RP1?
```

Table columns:

| Pilot | Use case | Study area | Data item | Data role | Availability | Owner | Permission/privacy | Proxy/degraded mode | Validation target |
|---|---|---|---|---|---|---|---|---|---|

Questions:

- What is the exact study area and critical route/asset?
- Which data are raw inputs, computed outputs, or parameters?
- What can be shared, redacted, aggregated, or only simulated?
- What is the validation target: usefulness, accuracy, emergency relevance, equity, or usability?

Pre-fill from sources:

| What is already partly filled | Source pointer | Still to decide in Mini-GA |
|---|---|---|
| Event/domain/scale/severity and source limitations. | D2.1 Sec. 2.1 Tables 1-2 pp.12-14; Sec. 2.2 Table 3 p.14; Sec. 7.2 Table 38 pp.97-99. | Pilot-specific event profile, AOI, affected assets/modes/groups, validation owner. |
| Data diversity, provenance, and quality requirements. | D2.6 DR-01/DR-02 in Sec. 7.3-7.8 pp.43-47; Sec. 8.3 p.54. | Which data are available, proxy, restricted, redacted, or deferred. |
| Data inventory and pilot briefings seed rows. | Mini-GA working pack: data inventory report/CSV and pilot briefings. | Confirmed study area, owner, permissions, and RP1 validation target. |
| Emergency access, equity burden, explanations, monitoring, and trusted data-source preferences. | D2.4 prioritisation, justice/equity, transparency/governance, communication and data-use questions. | Protected routes/assets, zone definitions, mitigation rules, communication channels. |

Example row to show on the slide if space allows:

| Pilot | Use case | Study area | Data item | Data role | Availability | Owner | Permission/privacy | Proxy/degraded mode | Validation target |
|---|---|---|---|---|---|---|---|---|---|
| AHEPA | hospital access under flood/congestion | hospital approach corridor to confirm | ambulance approach travel time | computed output if SUMO-derived | proxy now | AUTH/AHEPA to confirm | aggregate only / living lab permission needed | synthetic route travel time | emergency relevance + usefulness |

### Discussion Slide F - DMO/UI Roles, Warnings, Exports

Suggested title:

```text
Discussion F: What Must The UI Show To Each Role?
```

Table columns:

| Role | Decision supported | Visible data | Actions allowed | Warnings required | Export/report needed | Guided/expert? |
|---|---|---|---|---|---|---|

Questions:

- Which roles are required for first demonstration?
- What warnings are mandatory: data quality, proxy mode, missing baseline, unvalidated AF, acceptability not assessed?
- What exports are needed for pilots, WP6 validation, and reporting?
- Which workflows should be guided versus expert?

Pre-fill from sources:

| What is already partly filled | Source pointer | Still to decide in Mini-GA |
|---|---|---|
| Role-based workflows, dashboards, scenario comparison, labels, units, and role-specific outputs. | D2.6 UR-01/UR-02 in Sec. 7.3-7.8 pp.43-47. | Minimum first-demo roles and which actions each role can perform. |
| Data protection, auditability, transparency, stakeholder input governance. | D2.6 GR-01 to GR-04 in Sec. 7.3-7.8 pp.43-47; assumptions/open issues Sec. 8.3 p.54. | Export permissions, audit events, privacy labels, retention/minimisation constraints. |
| Communication, non-digital fallback, explanations, and reports. | D2.2 pp.76-78, 120-121, 162-164, 203-206; D2.4 transparency/governance and communication questions. | Required warnings and report/export formats for DMO, pilots, and WP6 validation. |
| DMO UI/workflow expectations are live project context rather than fully specified deliverable content. | WP5 MoM/context analysis and Mini-GA Day 2 agenda. | Guided versus expert workflows and which UI panels belong in RP1. |

Example row to show on the slide if space allows:

| Role | Decision supported | Visible data | Actions allowed | Warnings required | Export/report needed | Guided/expert? |
|---|---|---|---|---|---|---|
| pilot mobility planner | compare baseline/disrupted/intervention scenario | KPI deltas, assumptions, data quality, map output | run scenario, export report, not approve deployment | proxy mode, missing baseline, unvalidated AF, acceptability not assessed | scenario comparison PDF/CSV | guided first, expert optional |

## 4. Review Notes For Current PDF Draft

Source reviewed:

```text
/Users/kgrizos/Downloads/AntifragiCity_GA03_WP5_20260519_v0.2.pdf
```

Deck-level recommendation:

```text
v0.2 is a coherent workshop deck. Keep the separate SUMA role/path slides and the two screenshot slides if the talk remains brisk and the discussion slides are treated as canvases, not presented in full.
```

Slide-specific adjustments:

| Draft slide | Adjustment |
|---|---|
| 1. Cover | Keep. Consider changing the subtitle to `WP5/SUMA functionality and architecture workshop` so the deck reads less like a formal deliverable presentation. |
| 2. SUMA role | Keep. Speak it as the reason WP5 is the Day 2 focal point. |
| 3. SUMA path | Keep. Add one small subtitle or spoken line: `Project evidence -> owner-assigned D5.1/T5.2 rows`. |
| 4. Five layers | Keep. `Working Architecture Logic` is better than `Current Architecture Logic`; it avoids overclaiming partner integrations. |
| 5. Platform screenshot 1 | Keep. Label it explicitly as `prototype / not final validation`. |
| 6. Platform screenshot 2 | Keep if it shows a different capability than slide 5. Use one sentence only: `this is the current technical scaffold, not validated SUMA science`. |
| 7. D5.1 | Much improved. If space is tight, reduce bullet text and keep the 7-row table dominant. |
| 8. Owner-assigned rows | Keep as the bridge into the workshop. Add `status`, `due date`, and `fallback` if space allows, because those are what prevent generic notes. |
| 9. Let's crunch | Acceptable for a workshop tone. If you want a slightly more diplomatic close, use `Let's turn this into decisions`. |
| 10. How we use this | Keep as the transition into table work. |
| 11-16. Discussion A-F | Keep, but replace `Lorem ipsum` with a source cue and example/pre-filled row. |
| 17. Discussion G | Remove. It duplicates the owner/fallback logic from slide 8 and can be handled during wrap-up. |

Minimum edits before using the draft:

- Remove all remaining lorem ipsum.
- Make every slide title a claim, not only a topic.
- Use `prototype`, `specified`, `implemented`, `dependency`, and `deferred` consistently.
- Keep detailed partner questions in the discussion slides; the intro should only set up the table logic.

## 5. Screenshot Guidance

Including screenshots is useful if the audience needs a concrete reference. In v0.2, two screenshot slides are acceptable because one shows the working platform state and one shows the scenario/results view.

- Main deck: two screenshots maximum.
- Backup/discussion: additional screenshots only if they support a specific table discussion.
- Always label screenshots as current working platform/prototype.
- Avoid any screenshot that could be mistaken for validated SUMA outputs.

Recommended main screenshot:

| Preferred screenshot | Reason |
|---|---|
| Documentation page with AntifragiCity docs index | Shows that D5.1 traceability and project context are being consolidated systematically. |
| Simulation/job/results workflow | Shows practical technical progress and SUMO-first orchestration. |

If using a results screenshot, add visible caveat text:

```text
Prototype output. KPI and antifragility semantics still require D2.7/D2.3 alignment and pilot validation.
```

## 6. Timing Plan For Five Minutes

| Slide | Time |
|---|---|
| Cover | 10 seconds |
| Slide 1: SUMA role | 35 seconds |
| Slide 2: SUMA path | 25 seconds |
| Slide 3: architecture | 45 seconds |
| Slide 4: platform screenshot 1 | 25 seconds |
| Slide 5: platform screenshot 2 | 25 seconds |
| Slide 6: D5.1 structure | 70 seconds |
| Slide 7: Day 2 decision gates | 40 seconds |
| Closing bridge | 15 seconds |

Do not explain every box. The goal is to set up productive table work.

## 7. Visual Style Recommendation

- Use the AntifragiCity template, but keep slides sparse.
- Use one colour for current/prototype, one for D5.1 contract, one for T5.2/dependency.
- Use simple arrows and tables rather than dense architecture diagrams.
- Make `owner/fallback` visually prominent.
- Put detailed questions in discussion slides, not in the five-minute presentation.
