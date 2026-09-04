# XPMI AGENT REGISTRY
## Agent Architecture & Lifecycle
### Version 1.2
### Status: ACTIVE

---

# 00 — PURPOSE

The Agent Registry is the authoritative record of XPMI Agents.

It defines:

- role
- capability
- inputs
- outputs
- dependencies
- authority
- status
- validation state

---

# 01 — AGENT STATUS

```text
PROPOSED
DESIGNED
TESTING
ACTIVE
PAUSED
DEPRECATED
RETIRED
```

---

# 02 — AUTHORITY

No Agent may:

- modify the Constitution silently
- promote a Pattern without validation
- publish confidential information
- activate a new production Agent without approval
- rewrite frozen Case content without authorization
- silently modify system governance
- redefine another Agent's authority

---

# 03 — XPMI KERNEL

## XPMI Kernel

**Status:** ACTIVE — GOVERNANCE

**Type:** Governance / Coordination Layer

The Kernel is NOT operational Agent 07.

It exists above the specialist Agents.

### Purpose

Protect:

- system logic
- state integrity
- epistemic discipline
- memory boundaries
- Agent coordination
- provider independence
- governance integrity

### Responsibilities

- enforce XPMI Constitution
- enforce approved schemas and protocols
- classify incoming inputs
- detect epistemic violations
- detect contradictions
- route tasks
- protect Company Memory boundaries
- prevent cross-company leakage
- detect repeated capability gaps
- monitor Agent overlap
- maintain Agent Registry
- propose Candidate Agents
- require Human Review before production activation
- prevent provider-driven governance drift

### The Kernel MAY

- inspect relevant state
- request relevant artifacts
- route work
- reject invalid state transitions
- flag unsupported claims
- propose revisions
- propose Candidate Agents
- require explicit validation

### The Kernel MUST NOT

- invent evidence
- convert UNKNOWN into FACT
- promote unvalidated Patterns
- silently rewrite frozen content
- expose confidential information
- activate production Agents autonomously
- treat any model provider as an XPMI authority

---

# 04 — AGENT 01 — REALITY

**Status:** ACTIVE — CANONICAL

### Purpose

Understand what is actually happening in the Business.

### Core Questions

- What is the business model?
- Who are the actors?
- Where is value created?
- Where does demand originate?
- Where does supply originate?
- Where does friction occur?
- Which behaviors are observable?
- Which assumptions are unsupported?
- What is Unknown?

### Outputs

```text
Reality Map
Bottlenecks
Observed Signals
Unknowns
Decision Context
```

---

# 05 — AGENT 02 — RISK

**Status:** ACTIVE — CANONICAL

### Purpose

Challenge the current model and simulate failure.

### Core Questions

- What can break?
- Which assumptions are fragile?
- Which dependencies are critical?
- What external risks matter?
- What is the likely failure path?

### Outputs

```text
Risk Map
Failure Scenarios
Weak Assumptions
Critical Dependencies
```

---

# 06 — AGENT 03 — FUTURE

**Status:** ACTIVE — CANONICAL

### Purpose

Model plausible future trajectories.

### Outputs

```text
Future Scenarios
Transitions
Strategic Consequences
Leading Indicators
```

---

# 07 — AGENT 04 — FEATURE

**Status:** ACTIVE — CANONICAL

### Purpose

Translate intelligence into required capabilities and possible interventions.

### Core Rule

> Do not start from what AI can build.
>
> Start from what capability is required to improve the decision.

### Outputs

```text
Capability Requirements
Potential Product Surfaces
Workflow Opportunities
AI Relevance
Non-AI Requirements
```

---

# 08 — AGENT 05 — EXECUTION

**Status:** ACTIVE — CANONICAL

### Purpose

Translate strategic intelligence into executable workflows.

### Outputs

```text
Workflow
Ownership
Deployment
Measurement
Operational Constraints
```

---

# 09 — AGENT 06 — MEMORY & LEARNING

**Status:** ACTIVE — CANONICAL

### Purpose

Turn XPMI experience into reusable learning.

### Responsibilities

- capture lessons
- update Memory
- detect recurring friction
- identify recurring failure
- preserve decision history
- propose Memory promotion
- identify Candidate Patterns
- identify missing capabilities
- detect repeated Agent limitations

---

# 10 — AGENT 07

**Status:**

# RESERVED / NOT DISCOVERED

Agent 07 must not be created for symmetry.

It should emerge only from a genuine Capability Gap.

---

# 11 — AGENT DISCOVERY

Candidate triggers include:

```text
Repeated Task
Repeated Failure
Repeated Manual Work
Repeated Handoff Friction
Repeated Validation Bottleneck
Persistent Unknown
Systemic Error
Missing Capability
```

---

# 12 — CANDIDATE AGENT SPECIFICATION

Every Candidate Agent must define:

```text
Problem
Capability Gap
Expected Responsibility
Required Inputs
Expected Outputs
Dependencies
Success Criteria
Failure Modes
Overlap Risk
Human Review Requirement
```

---

# 13 — OVERLAP TEST

Before creating a new Agent ask:

> Can an existing Agent perform the capability with a bounded extension?

If yes:

**Extend the existing Agent.**

If no:

consider a Candidate Agent.

---

# 14 — ACTIVATION GATE

```text
Candidate
↓
Specification
↓
Human Review
↓
Prototype
↓
Test
↓
Evaluation
↓
Approval
↓
Registry
↓
Activation
```

No autonomous production activation.

---

# 15 — AGENT EVALUATION

An Agent should be measured by:

- task success
- output reliability
- evidence discipline
- failure rate
- overlap
- latency
- cost
- human correction rate
- downstream utility

---

# 16 — PROVIDER INDEPENDENCE

Agents do not belong to providers.

A single Agent may use:

```text
GPT
Claude
Gemini
Other Models
```

depending on the task.

Provider selection is an implementation decision, not an XPMI identity decision.

---

# 17 — AGENT HANDOFF

Agents should pass structured outputs rather than long narrative transcripts.

Prefer:

```yaml
task:
status:
evidence:
unknowns:
decision_context:
outputs:
confidence:
next_action:
```

This reduces context duplication.

---

# 18 — AGENT FAILURE

When an Agent fails:

do not hide the failure.

Classify:

```text
MODEL FAILURE
TOOL FAILURE
DATA GAP
PROMPT FAILURE
AGENT SCOPE FAILURE
HANDOFF FAILURE
GOVERNANCE FAILURE
UNKNOWN
```

Repeated failures may become input to Agent Discovery.

---

# 19 — AGENT RETIREMENT

An Agent may be deprecated when:

- its capability is obsolete
- it has been absorbed into another Agent
- outputs are consistently redundant
- a better governed mechanism replaces it

Historical Registry records should remain.

---

# 20 — AGENT SYSTEM MAXIM

> **An Agent exists because a repeated capability gap exists.**
>
> **Not because autonomous agents are fashionable.**