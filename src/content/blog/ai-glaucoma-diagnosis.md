---
title: "Artificial Intelligence in Glaucoma Detection: Promise and Reality"
description: AI-powered tools are showing remarkable accuracy in detecting glaucomatous damage from fundus photographs and OCT scans. We examine the current evidence, clinical applications, and the important limitations that remain.
date: 2025-03-01
author: ashkan-khalili
categories:
  - Technology
  - Glaucoma
tags:
  - artificial intelligence
  - machine learning
  - OCT
  - fundus photography
  - deep learning
  - glaucoma screening
---

Artificial intelligence is no longer a future prospect in ophthalmology — it is already embedded in clinical practice in several domains. Diabetic retinopathy screening using AI received FDA clearance in 2018, and the technology has since been deployed at scale in multiple national screening programmes. Glaucoma has proven a more complex challenge, but the pace of progress over the past three years has been remarkable.

## The Diagnostic Challenge in Glaucoma

Glaucoma diagnosis is fundamentally multimodal. It requires integrating structural data (optic disc appearance, retinal nerve fibre layer thickness on OCT), functional data (visual field testing), biometric data (corneal thickness, IOP), and clinical context (family history, disc haemorrhages, progressive change over time). No single test is sufficient, and even experienced glaucoma specialists disagree on borderline cases with meaningful frequency.

This complexity makes glaucoma both a hard problem for AI and, arguably, a domain where AI can add the most value — by processing and integrating large quantities of data more consistently than human observers.

## What AI Can Currently Do Well

### Optic Disc and RNFL Analysis

Deep learning models trained on tens of thousands of fundus photographs have achieved ophthalmologist-level accuracy in classifying glaucomatous optic discs. A landmark study from Google Health demonstrated that a convolutional neural network could identify referable glaucoma from fundus images with a sensitivity and specificity comparable to fellowship-trained specialists.

Similarly, AI tools applied to spectral-domain OCT data have shown strong performance in distinguishing glaucomatous from healthy eyes, and — critically — in detecting progression in serial scans. Several commercially available OCT platforms now incorporate guided progression analysis algorithms that flag statistically significant change between visits.

### Predicting Conversion from Ocular Hypertension

Perhaps the most clinically impactful near-term application is risk stratification. Models incorporating baseline IOP, disc parameters, central corneal thickness, age, and family history can predict which ocular hypertensive patients will convert to glaucoma with greater accuracy than traditional risk calculators such as the Ocular Hypertension Treatment Study (OHTS) model. This could allow more targeted use of treatment in genuinely high-risk individuals while avoiding unnecessary drops in those at low risk.

## Important Limitations

Despite impressive performance metrics, several important caveats apply:

**Generalisability**: Most high-performing AI models are trained and validated on datasets from single institutions or specific ethnic populations. Performance can degrade substantially when applied to different populations or imaging equipment.

**Explainability**: The "black box" nature of deep learning means clinicians often cannot interrogate why a model reached a particular conclusion. This limits trust and makes it difficult to identify error modes.

**Functional–structural correlation**: Current AI tools are strongest on structural imaging. Automated interpretation of visual field data remains less mature, and models that integrate both modalities are still largely in the research phase.

**Regulatory and governance frameworks**: In the UK, AI medical devices used for diagnosis require UKCA marking and must comply with MHRA regulations. Clinicians should be cautious about deploying unvalidated tools in clinical workflows.

## The Clinician's Role

AI in glaucoma is best understood as a tool to augment, not replace, clinical judgment. The most plausible near-term clinical impact is in community-based screening — enabling optometrists and screening technicians to triage patients more accurately, reducing unnecessary referrals to hospital eye services while improving sensitivity for genuine disease.

In secondary care, AI-assisted progression detection and workload management have genuine near-term utility. But for complex diagnostic and management decisions — particularly in borderline or atypical cases — the integrative judgment of an experienced clinician remains essential.

The field is moving fast. Prospective, randomised evaluations of AI-assisted versus standard care in glaucoma are now underway, and their results will be critical in determining how and where these tools should be adopted.
