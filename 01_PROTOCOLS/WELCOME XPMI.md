# WELCOME XPMI
## New Business Onboarding & Registration Protocol
### Version 1.1
### Status: ACTIVE

---

# 00 — PURPOSE

WELCOME XPMI is the standard entry protocol for introducing a new Business into the XPMI system.

Its purpose is:

**Integrate approved intelligence without reanalyzing or corrupting it.**

---

# 01 — WELCOME IS NOT RESEARCH

WELCOME XPMI does not independently invent:

- Strategy
- Case Reports
- Micro-Intel
- Business Model Mirror conclusions
- Patterns

The strategic intelligence must already be supplied or approved.

WELCOME is:

```text
Register
↓
Connect
↓
Validate
↓
Integrate
```

---

# 02 — EXPECTED INPUT

A Business package may contain:

```text
Business Name
Business Slug
Business Type
Market
Country / Region
Public Signals
Approved Case Report
Approved Micro-Intel
Approved Question
Approved Mirror
Language
Visibility Status
```

Missing information must remain:

**UNKNOWN / REQUIRED**

---

# 03 — SOURCE HIERARCHY

Use:

```text
1. Approved Case Report
2. Approved Micro-Intel
3. Approved Mirror
4. Approved Business Metadata
5. Existing XPMI Conventions
6. Nothing else
```

Do not silently enrich the Business with unsupported assumptions.

---

# 04 — ONBOARDING PIPELINE

```text
NEW BUSINESS
↓
Validate Package
↓
Register Identity
↓
Register Slug
↓
Register Case
↓
Register Micro-Intel
↓
Register Mirror
↓
Connect Viewer
↓
Connect Library
↓
Apply Visibility
↓
Run QA
```

---

# 05 — CASE REPORT

Treat the approved Case Report as frozen intelligence.

Do not:

- rewrite
- shorten
- expand
- reclassify
- alter evidence labels
- alter strategic conclusions
- invent data

---

# 06 — MICRO-INTEL

Register the approved Micro-Intel.

The Question must remain exactly the approved Question unless a new Variable XPMI process explicitly revises it.

Do not:

- invent a replacement Question
- add a score
- add unsupported claims
- expand the Micro-Intel into another Case

---

# 07 — BUSINESS MODEL MIRROR

If an approved Mirror exists:

register it.

If it does not exist:

do not fabricate one merely to complete onboarding.

It may be added later using the XPMI MIRROR protocol.

---

# 08 — PATTERN LIBRARY

Do not create a Pattern during onboarding.

A new Business may generate:

**Observation**

but not automatically:

**Validated Pattern**

---

# 09 — ROUTING

Use the canonical dynamic Case route:

```text
/cases/[slug]
```

Do not create a one-off viewer.

---

# 10 — VISIBILITY

Allowed visibility states:

```text
PUBLIC
HIDDEN
ARCHIVED
DRAFT
INTERNAL
CONFIDENTIAL
```

### PUBLIC

Visible in approved public navigation.

### HIDDEN

Stored but excluded from public navigation.

### ARCHIVED

Retained but removed from active public navigation.

### DRAFT

Not publicly accessible.

### INTERNAL

Available only to authorized workflows.

### CONFIDENTIAL

Protected information; public rendering prohibited.

Do not introduce Password UI unless separately authorized.

---

# 11 — NO CONTENT LEAKAGE

Hidden / Archived / Draft / Internal / Confidential Businesses must not appear in:

- public Case Library
- Featured sections
- related cards
- search
- Prev / Next
- public recommendations

---

# 12 — ENGLISH-FIRST

The Business must render correctly in the primary English product.

Persian localization may be added when supplied.

Do not create mixed-language UI noise.

---

# 13 — TOKEN CONTROL

Onboarding one Business does not justify rereading all existing Businesses.

Read:

```text
Manifest
+
Relevant Protocol
+
New Business Package
+
Minimum Required Registry / Routing Files
```

Do not load the entire XPMI project.

---

# 14 — FILE SAFETY

Only modify files required for this Business.

Do not:

- refactor unrelated Cases
- rewrite unrelated Micro-Intels
- modify frozen strategic content
- rebuild the whole application

---

# 15 — FAILURE RULE

If essential information is missing:

```text
ONBOARDING BLOCKED

Missing:
[exact item]

Reason:
[why it is required]
```

Do not invent a substitute.

---

# 16 — QA

Verify:

### Content

- Case exists
- Micro-Intel exists
- Question exists
- Metadata is consistent

### Routing

```text
/cases/[slug]
```

loads correctly.

### Visibility

Public exposure matches approved visibility.

### Navigation

Protected content does not leak through navigation.

### Rendering

English rendering works.

Responsive rendering works.

---

# 17 — FINAL OUTPUT

Return only:

```text
WELCOME XPMI RESULT

Business:
[Name]

Slug:
[slug]

Status:
REGISTERED / BLOCKED

Case:
[status]

Micro-Intel:
[status]

Mirror:
[status]

Route:
/cases/[slug]

Visibility:
[status]

Files Changed:
[list]

QA:
PASS / FAIL

Notes:
[material issues only]
```

Do not reproduce large source documents.

---

# FINAL RULE

> **REGISTER → CONNECT → VERIFY → STOP.**