---
name: form-review
description: Review a diff against Velora form conventions.
---
# Form review

Walk the current diff and check:
1. Reuse of shared form components
2. Colour token usage (no new raw hex)
3. Accessibility helper text linked to inputs

Report a markdown table with columns: Check | Status | Evidence (file:line).
Status must be: pass, fail, or could not verify.
