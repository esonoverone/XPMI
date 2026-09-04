# XPMI MEMORY PROTOCOL
## Persistent Knowledge, State, Learning & Context Management
### Version 1.1
### Status: ACTIVE

---

# 00 — PURPOSE

The purpose of XPMI Memory is:

> **Persistent intelligence without persistent context bloat.**

Memory allows XPMI to improve over time while preventing every new Chat from needing to reload the entire history of the system.

---

# 01 — MEMORY IS NOT CHAT HISTORY

Chat history is:

**working context**

Memory is:

**structured persistent state**

Do not treat conversation length as institutional memory.

---

# 02 — MEMORY LAYERS

## SYSTEM MEMORY

Stable XPMI rules:

- Constitution
- Manifest
- schemas
- protocols
- Agent governance

---

## COMPANY MEMORY

Business-specific knowledge.

Examples:

- validated assumptions
- important Unknowns
- strategic decisions
- constraints
- observed behavior
- confirmed risks
- approved Mirror state
- feedback
- learning

Company Memory is isolated.

---

## INDUSTRY MEMORY

Reusable observations supported across relevant businesses.

Examples:

- repeated mechanisms
- recurring market dynamics
- repeated decision structures
- industry-level constraints

Industry Memory is not automatically Pattern Memory.

---

## PATTERN MEMORY

Validated cross-case intelligence.

Current state:

**PAUSED / GATED**

---

## DECISION LOG

Records important decisions about XPMI itself.

Examples:

- architecture decisions
- product decisions
- governance decisions
- Agent activation decisions
- freezes
- major changes

---

## SESSION MEMORY

Temporary context for a single active task.

Session Memory should not become permanent by default.

---

# 03 — MEMORY PROMOTION

Use:

```text
Observation
↓
Reusable?
↓
Reliable enough?
↓
Future operational value?
↓
Promote
```

If not:

keep it inside the current session.

---

# 04 — MEMORY TYPES

```text
FACT
INFERENCE
HYPOTHESIS
UNKNOWN
DECISION
CONSTRAINT
LESSON
OBSERVATION
PATTERN_CANDIDATE
VALIDATED_PATTERN
```

---

# 05 — MEMORY RECORD

Where practical:

```yaml
id:
type:
subject:
statement:
source:
source_date:
observed_at:
confidence:
status:
scope:
related_artifacts:
last_verified:
```

Do not fabricate fields.

Unknown metadata should remain Unknown.

---

# 06 — FRESHNESS

Time-sensitive Memory should carry a freshness state:

```text
CURRENT
RECENT
HISTORICAL
STALE
UNKNOWN
```

Historical information remains valuable.

Historical information must not silently represent present reality.

---

# 07 — MEMORY UPDATE

When new information arrives:

```text
Current Memory
↓
New Input
↓
Classification
↓
Conflict Check
↓
Evidence Assessment
↓
Update / Append / Invalidate
↓
Audit Trail
```

Never silently overwrite material historical knowledge.

---

# 08 — INVALIDATION

Memory may become:

```text
SUPERSEDED
INVALIDATED
STALE
CONTESTED
ARCHIVED
```

Preserve history where it has operational value.

---

# 09 — CROSS-COMPANY PROTECTION

By default:

```text
Company A Memory
≠
Company B Memory
```

Cross-company reuse requires explicit promotion into:

```text
Industry Memory
```

or:

```text
Validated Pattern Memory
```

---

# 10 — EVIDENCE PROTECTION

Persistent Memory must preserve the distinction between:

```text
PUBLIC SIGNAL
COMPANY CLAIM
FOUNDER CLAIM
OPERATOR CLAIM
INTERNAL DATA
XPMI INFERENCE
XPMI HYPOTHESIS
UNKNOWN
```

Do not flatten these categories.

---

# 11 — CROSS-CASE LEARNING

Cross-case reasoning may produce:

```text
Observation
↓
Candidate Pattern
↓
Repeated Mechanism
↓
Validation
↓
Validated Pattern
```

One Case is not enough to establish a Pattern.

---

# 12 — MIRROR MEMORY

Business Model Mirror should retain:

- observation
- source
- date
- freshness
- relationship type
- strategic relevance
- current status
- historical state where useful

Mirror Memory is time-aware.

---

# 13 — MICRO-INTEL MEMORY

For important Questions, preserve:

```text
Company
Question
Source Case
Why It Mattered
Evidence Status
Validation Status
Audience Feedback
Outcome
```

The purpose is not to accumulate clever copy.

The purpose is to learn which Questions actually trigger investigation.

---

# 14 — QUESTION LEARNING LOOP

Over time:

```text
Question Published
↓
Audience Reaction
↓
Founder / Operator Response
↓
Investigation Triggered?
↓
Decision Changed?
↓
Feedback
↓
Question Learning
```

This creates a future asset:

**XPMI Question Intelligence**

without prematurely calling it a Pattern Library.

---

# 15 — FOUNDER / USER FEEDBACK MEMORY

Feedback may reveal:

- internal assumptions
- disagreements with public Reality
- blind spots
- useful Unknowns
- validated findings
- false assumptions
- implementation constraints

Founder feedback is valuable.

Founder feedback is not automatically Fact.

---

# 16 — VARIABLE MEMORY

When Variable XPMI modifies understanding:

preserve:

```text
Previous State
New Evidence
Interpretation
Decision Impact
Revised State
```

This makes XPMI's learning auditable.

---

# 17 — MEMORY COMPRESSION

When Memory grows:

```text
Deduplicate
↓
Normalize
↓
Link
↓
Compress
↓
Preserve Provenance
```

Never compress away:

- evidence
- uncertainty
- dates
- contradictions
- important source relationships

---

# 18 — TOKEN PROTECTION

Before retrieving a large Memory set:

> Is it required for this task?

Before reopening an unchanged artifact:

> Has relevant information changed?

If no:

do not reload unnecessarily.

---

# 19 — RETRIEVAL MODEL

Use:

```text
Task
↓
Business
↓
Relevant Agent
↓
Relevant Memory
↓
Relevant Artifact
↓
Do Work
```

Avoid:

```text
Task
↓
Load all XPMI
```

---

# 20 — MEMORY PRIORITY

When Context is constrained, prioritize:

```text
1. System Governance
2. Relevant Company Memory
3. Current Decision Context
4. Relevant Evidence
5. Relevant Historical State
6. Secondary Context
```

---

# 21 — MEMORY AUDIT

Material promotions should preserve:

```text
What changed
Why it changed
Evidence
Date
Scope
Approval, when required
```

---

# 22 — MEMORY QUALITY TEST

A Memory entry should answer:

> Will this make XPMI better at a future task?

If the answer is:

**No**

do not promote it merely because it is interesting.

---

# 23 — MEMORY PRINCIPLE

> **Remember what makes XPMI better tomorrow.**
>
> **Do not remember everything that happened today.**