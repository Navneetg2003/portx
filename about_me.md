# Navneet Gupta — Complete Profile

---

## Personal Information

| Field | Details |
|---|---|
| **Name** | Navneet Gupta |
| **Email** | navneetg1302@gmail.com |
| **Phone** | +91 6265648927 |
| **GitHub** | github.com/Navneetg2003 |
| **Portfolio** | navneetg.vercel.app |
| **LinkedIn** | linkedin.com/in/navneetgupta |
| **LeetCode** | leetcode.com/u/navneetg1302 |

---

## Education

### University
| Field | Details |
|---|---|
| **Institution** | Vellore Institute of Technology (VIT), Vellore |
| **Degree** | B.Tech in Computer Science and Engineering |
| **CGPA** | 8.66 |
| **Duration** | Apr 2022 – Present (Graduating 2026) |

### School — Class 12
| Field | Details |
|---|---|
| **School** | Delhi Public School, Gwalior |
| **Board** | CBSE |
| **Percentage** | 90.8% |

### School — Class 10
| Field | Details |
|---|---|
| **School** | Delhi Public School, Gwalior |
| **Board** | CBSE |
| **Percentage** | 89.6% |

---

## Work Experience

### GoPrac
| Field | Details |
|---|---|
| **Role** | AI Engineer Intern (listed as AI Prompt Engineer on offer letter) |
| **Location** | Remote |
| **Duration** | Nov 2025 – Jan 2026 |
| **Type** | Internship (Unpaid) |

**Description:**

At GoPrac, a Bangalore-based early-stage startup, I worked as an AI Engineer Intern contributing to the development of an AI-powered feedback automation system designed to generate and deliver personalized feedback at scale.

**Key responsibilities and contributions:**

- **AI Feedback Pipeline:** Built an end-to-end AI-powered feedback automation pipeline that integrated LLM-based content generation with programmatic video rendering. The pipeline took structured input data, generated context-aware, personalized feedback content using LLMs, and passed the output to a video rendering layer.

- **Prompt Engineering:** Designed, tested, and iteratively refined prompts to generate structured, context-aware feedback outputs from LLMs. Applied prompt engineering techniques including few-shot prompting, output formatting constraints, and chain-of-thought instructions to improve the reliability and quality of LLM-generated content.

- **Remotion Integration:** Contributed to integrating **Remotion** (a React-based programmatic video rendering framework) into the pipeline — enabling dynamically generated feedback content to be rendered as polished video outputs without manual editing.

- **Startup Contribution:** Worked directly on product development in a fast-paced, early-stage startup environment — contributing to core product features with high ownership and minimal supervision.

**Note:** The internship was unpaid and ended after approximately 2 months with resignation before the 3-month completion mark.

---

### Axxela Research & Analytics
| Field | Details |
|---|---|
| **Role** | Algorithmic Trader |
| **Location** | Gurugram, India |
| **Duration** | Jan 2026 – Jun 2026 |
| **Type** | Full-time |

**Description:**

At Axxela Research & Analytics, a quantitative research and trading firm, I worked as an Algorithmic Trader on SOFR (Secured Overnight Financing Rate) fixed income futures — one of the most liquid and complex short-term interest rate derivatives markets globally.

**Key responsibilities and contributions:**

- **Strategy Development:** Designed and implemented quantitative trading strategies in Python, translating statistical hypotheses about market behaviour into executable algorithmic rules. Each strategy went through a rigorous research loop: hypothesis → signal construction → backtesting → performance validation.

- **Backtesting Infrastructure:** Built and maintained automated backtesting pipelines that simulated strategy execution on historical SOFR futures data. Ensured backtests were statistically robust by applying walk-forward validation to prevent overfitting and lookahead bias.

- **Signal Research:** Applied time-series analysis techniques including autocorrelation analysis, rolling statistics, momentum indicators, and mean-reversion signals to identify predictive patterns in interest rate futures data.

- **Performance Evaluation:** Evaluated all strategies rigorously against quantitative metrics — Sharpe ratio (risk-adjusted return), maximum drawdown (worst peak-to-trough loss), Calmar ratio, and granular PnL attribution broken down by trade, time period, and market regime.

- **Data Pipelines:** Built automated financial data ingestion and preprocessing pipelines to feed clean, normalized market data into strategy execution and evaluation modules — ensuring pipeline reliability and data integrity at every stage.

- **Statistical Modelling:** Applied statistical modelling techniques including regression analysis, volatility modelling, and correlation studies to understand market dynamics and refine signal generation logic.

**Impact:** Contributed directly to the firm's live trading strategy research process, with backtested strategies evaluated for potential deployment on real capital.

---

### GC Cloud Info System Pvt. Ltd
| Field | Details |
|---|---|
| **Role** | Software Engineering Intern |
| **Location** | Lucknow, India |
| **Duration** | Dec 2024 – Feb 2025 |
| **Type** | Internship |

**Description:**

At GC Cloud Info System, a software services company building enterprise backend systems, I worked as a Software Engineering Intern embedded in a backend engineering team building production-grade microservices infrastructure.

**Key responsibilities and contributions:**

- **Microservices Development:** Designed and developed scalable backend microservices using Java and Spring Boot following a clean controller-service-repository architecture. Applied SOLID principles and OOP design patterns (factory, repository, service layer) to ensure modular, maintainable, and independently deployable service components.

- **REST API Engineering:** Built and maintained 15+ RESTful API endpoints covering core business logic. Enforced strict API contracts including request-level input validation, custom exception hierarchies, structured JSON error responses, and HTTP status code standards — ensuring consistent, reliable service behaviour across all integrations.

- **Database Performance Optimization:** Identified and resolved critical PostgreSQL query performance bottlenecks using EXPLAIN ANALYZE execution plan analysis. Applied composite indexing strategies on high-cardinality columns to eliminate full table scans — achieving a 35% reduction in API response latency under 300+ concurrent requests, measured through load testing.

- **Testing:** Authored comprehensive JUnit unit and integration test suites across all service layers. Maintained high test coverage standards and used structured logging to surface runtime failures early in the development cycle, significantly improving pre-deployment stability.

- **Code Reviews & Collaboration:** Actively participated in team code reviews, providing and receiving constructive technical feedback. Contributed to technical documentation and maintained clear engineering standards across the backend codebase within an Agile sprint-based workflow.

- **DevOps:** Contributed to Docker containerization of backend services and supported CI/CD pipeline automation via GitHub Actions — enabling consistent, automated build-test-deploy workflows across development and staging environments.

**Impact:** Contributed production-ready backend services to a live system, with measurable improvements in query performance and API reliability validated through systematic testing and monitoring.

---

## Projects

### 1. GeoVision: Scalable Geospatial Data Platform
| Field | Details |
|---|---|
| **Tech Stack** | Java, Spring Boot, PostgreSQL, PostGIS, REST APIs, Docker, AWS EC2, GitHub Actions |
| **Type** | Personal/Collaborative |
| **GitHub** | https://github.com/Navneetg2003/GeoVision |

**Description:**

GeoVision is a production-grade geospatial data platform built entirely from scratch to handle large-scale storage, indexing, and retrieval of location-based data. The project was driven by the challenge of building a backend system that could efficiently manage complex geospatial workloads — a problem that exposes deep trade-offs between data modelling, query design, and infrastructure.

**Architecture & Design:**
- Designed a clean **controller-service-repository** layered architecture using Java and Spring Boot, applying OOP principles including inheritance, encapsulation, and interface segregation to ensure each service component had a single, well-defined responsibility.
- Engineered the system as a **loosely coupled microservices architecture** — each service independently deployable, with clearly defined API contracts between components.

**Geospatial Data Engineering:**
- Integrated **PostGIS** as the spatial extension on top of PostgreSQL to handle GeoJSON record storage, enabling native support for geometric data types, spatial queries (ST_Within, ST_Intersects, ST_Distance), and coordinate system transformations.
- Handled ingestion and transformation of **50,000+ GeoJSON records**, building ETL-style data pipelines to validate, normalize, and load geospatial data into the PostGIS schema.

**Query Performance Optimization:**
- Applied **GiST (Generalized Search Tree) spatial indexing** on geometry columns — a multi-dimensional index structure designed specifically for spatial data, dramatically improving query performance for range and proximity searches.
- Used **PostgreSQL EXPLAIN ANALYZE** to inspect execution plans, identify sequential scans on large tables, and validate the effectiveness of index strategies — achieving a **30% reduction in query latency** under high-volume concurrent workloads.

**API Layer:**
- Built **10+ RESTful APIs** supporting geospatial data ingestion, spatial transformation, and retrieval operations. Enforced strict request validation, custom exception hierarchies, and structured error response contracts across all endpoints.
- Designed APIs to be stateless, idempotent where appropriate, and consistent with REST conventions for predictable client integration.

**Infrastructure & DevOps:**
- Containerized 4+ Spring Boot microservices using **Docker** with environment-specific configuration management (dev/staging/prod profiles) and isolated container networking.
- Deployed on **AWS EC2** and established **GitHub Actions CI/CD pipelines** automating the full build-test-deploy lifecycle — enabling zero-downtime deployments and consistent environment parity.

**Impact:** A complete, deployable geospatial backend system demonstrating production-level Java engineering, spatial database expertise, and cloud-native deployment practices.

---

### 2. StockSentry-AI: Scalable Data Pipeline & Analytics System
| Field | Details |
|---|---|
| **GitHub** | github.com/swayum1004/StockSentry |
| **Tech Stack** | Python, XGBoost, FinBERT, Pandas, NumPy, Scikit-learn, Plotly, Streamlit, n8n, Google Sheets API, REST APIs |
| **Type** | Collaborative |

**Description:**

StockSentry-AI is a full end-to-end financial analytics system built to forecast stock price trends by combining structured market data with NLP-driven sentiment analysis from financial news. The project addresses a real-world challenge in quantitative finance: integrating heterogeneous data sources (structured time-series + unstructured text) into a unified, reliable ML pipeline.

**ETL Pipeline Architecture:**
- Designed a **4-stage modular ETL pipeline** with clean stage boundaries: (1) Data Ingestion, (2) Preprocessing & Cleaning, (3) Feature Engineering, (4) Model Inference. Each stage was implemented as an independent, testable Python module with well-defined input/output schemas.
- Implemented **schema validation and deduplication** at every stage boundary — ensuring data quality issues were caught at the point of entry rather than propagating silently into model training.
- Applied **fault isolation** patterns so failures in one pipeline stage did not cascade to downstream components, enabling graceful degradation and targeted debugging.

**ML Model Development:**
- Integrated **FinBERT** (a BERT-based transformer fine-tuned on financial text) for NLP-driven sentiment scoring of financial news headlines — extracting positive/negative/neutral sentiment signals as engineered features.
- Trained and benchmarked multiple models including **Random Forest, XGBoost, and FinBERT** in a systematic comparative evaluation framework.
- Applied **time-series-aware cross-validation** (walk-forward validation) to prevent data leakage — a critical methodological requirement when working with financial time-series data where future information must never leak into training windows.
- Achieved **R² of 0.91** and **17% MAE reduction** over baseline through iterative hyperparameter optimization using grid search and cross-validated scoring.

**Workflow Automation:**
- Automated end-to-end pipeline orchestration using **n8n** (a workflow automation tool) with webhook-based triggers and scheduled runs — eliminating manual intervention in the data ingestion and processing cycle.
- Integrated **Google Sheets API** as a lightweight operational data store for pipeline configuration and output logging — enabling non-technical stakeholders to interact with pipeline outputs without engineering involvement.

**Analytics Dashboard:**
- Built a **Streamlit analytics dashboard** with **Plotly interactive visualizations** exposing model predictions, feature importance charts, sentiment trend timelines, and pipeline health metrics — designed for consumption by non-technical financial analysts.
- Implemented **structured logging with severity levels (DEBUG, INFO, WARNING, ERROR)** at each pipeline stage for end-to-end observability and rapid incident debugging.

**Impact:** A production-grade ML system demonstrating the full spectrum of data engineering, NLP integration, quantitative model development, and analytical product delivery.

---

### 3. MiniGPT: Character-Level Language Model
| Field | Details |
|---|---|
| **Tech Stack** | Python, PyTorch, Transformers, NumPy, Google Colab (GPU) |
| **Type** | Personal |
| **GitHub** | https://github.com/Navneetg2003/MiniGPT |

**Description:**

MiniGPT is a character-level generative language model built entirely from scratch in PyTorch — without using any high-level transformer libraries like HuggingFace. The project was motivated by a desire to deeply understand how large language models actually work at the mathematical and computational level, rather than treating them as black boxes.

**Architecture Implementation:**
- Implemented the full **GPT-style transformer architecture** from first principles: tokenizer, embedding layer, positional encoding, multi-head self-attention, feedforward sublayers, layer normalization, and autoregressive output head.
- **Multi-head self-attention** was implemented manually — computing query, key, and value projections, applying scaled dot-product attention with causal masking to prevent future token leakage, and concatenating multi-head outputs through a learned linear projection.
- **Positional encoding** added sinusoidal position embeddings to token embeddings, giving the model awareness of token sequence order without recurrence.
- **Layer normalization** applied before attention and feedforward sublayers (Pre-LN architecture) for training stability.

**Training Pipeline:**
- Trained on the **Tiny Shakespeare dataset** — a classical benchmark for character-level language models, comprising the complete works of Shakespeare as a single continuous text corpus.
- Built a complete **GPU training pipeline on Google Colab** — implementing batched data loading with sliding window contexts, forward pass, cross-entropy loss computation, backpropagation, and AdamW optimizer steps.
- Monitored **loss curves across training checkpoints** to track convergence behaviour and detect overfitting or underfitting patterns.
- Debugged multiple **tensor shape mismatches** and broadcasting errors through systematic inspection of tensor dimensions at each layer — developing deep intuition for PyTorch's tensor computation model.

**Key Learnings:**
- Deep understanding of attention mechanisms, context windows, and autoregressive generation.
- Hands-on experience with GPU memory management, batch size trade-offs, and learning rate scheduling.
- Direct applicability to understanding and working with production LLMs, RAG systems, and prompt engineering.

**Impact:** A fully functional generative model capable of producing Shakespeare-style text, built with complete architectural transparency and no abstraction shortcuts.

---

### 4. VastraVerse: AI-Powered Cultural Fashion Platform
| Field | Details |
|---|---|
| **Tech Stack** | Python, Flask, Google Gemini API, ComfyUI, Stable Diffusion, IP-Adapter, PyTorch, HTML, CSS, JavaScript |
| **Type** | Collaborative (BharatGen Generative AI Hackathon — Semi-Finalist) |
| **GitHub** | https://github.com/Navneetg2003/VastraVerse |

**Description:**

VastraVerse is an AI-powered cultural fashion platform that enables users to explore traditional Indian clothing and virtually try on outfits using generative AI. Built for the BharatGen Generative AI Hackathon, the project reached the Semi-Finals and was recognized for its innovative application of LLMs and diffusion models to cultural heritage and fashion.

**Backend Architecture:**
- Built a **Python Flask backend** as the core application server — handling user requests, orchestrating AI model inference, and managing API integrations across multiple external services.
- Designed **RESTful backend services** with clean separation of concerns: separate route handlers for chatbot interactions, image upload processing, virtual try-on inference, and user authentication — maintaining maintainability as features scaled.
- Managed **Python environment configuration** with pip, venv, and python-dotenv for reproducible, dependency-isolated deployments. Integrated PyTorch, diffusers, transformers, and Flask-CORS for a stable production-ready setup.

**AI Integration:**
- Integrated **Google Gemini API** to power an intelligent cultural fashion chatbot — capable of answering queries about Indian traditional clothing, regional styles, historical context, and styling recommendations with LLM-quality responses.
- Implemented a **virtual try-on pipeline** using **ComfyUI + Stable Diffusion with IP-Adapter** — a diffusion-based image generation workflow where a user's uploaded photo is processed through the IP-Adapter to apply clothing styles from reference images while preserving the user's identity and pose.
- Built and debugged the **end-to-end AI inference pipeline**: user image upload → preprocessing → Stable Diffusion inference → rendered output delivery — resolving model integration issues across the full generation stack.

**Frontend:**
- Delivered a **responsive, multi-page frontend** (HTML, CSS, JavaScript) with dark/light mode toggle, cultural fashion catalogue search functionality, and user authentication — serving as a complete consumer-facing product experience.

**Impact:** Semi-Finalist recognition at a national-level Generative AI hackathon. Demonstrated practical integration of LLMs, diffusion models, and Flask backend engineering into a deployable, user-facing AI product.

---

### 5. Yaar: Full-Stack Web Application
| Field | Details |
|---|---|
| **GitHub** | github.com/Navneetg2003/Yaar |
| **Tech Stack** | React.js, JavaScript (ES6+), Node.js, REST APIs, PostgreSQL, HTML5, CSS3 |
| **Type** | Personal |

**Description:**

Yaar is a full-stack web application built to demonstrate end-to-end ownership across both frontend and backend layers. The project was driven by a desire to build a real, deployed product while developing deep understanding of full-stack system design, React architecture patterns, and backend API engineering.

**Frontend Architecture:**
- Engineered the frontend using **React.js** with a deliberate architectural approach — separating container components (responsible for data fetching and state management) from presentational components (purely UI-focused and stateless).
- Implemented **reusable, composable component library** — each component designed with clear props interfaces and single responsibilities, enabling consistent UI patterns and easy feature extension.
- Applied **React hooks** (useState, useEffect, useMemo, useCallback) strategically — using useMemo for expensive computations like filtered lists to avoid unnecessary re-renders, and useCallback for stable function references passed to child components.
- Managed **asynchronous data fetching** with async/await patterns and loading state flags — ensuring components never rendered with stale or undefined data, eliminating race conditions and blank flash states.
- Translated UI/UX wireframes into **pixel-perfect, fully responsive interfaces** with precise CSS grid, flexbox, and media query breakpoint control across mobile, tablet, and desktop viewports.

**Backend Architecture:**
- Built a **Node.js backend** with Express.js routing, exposing **versioned RESTful APIs** with structured JSON request-response contracts and centralized error handling middleware.
- Designed **PostgreSQL schema** with normalized relational tables, foreign key constraints, and indexed columns for efficient query performance under load.
- Enforced strict **API security contracts** — input sanitization, request body validation, and consistent HTTP status code usage across all endpoints.

**Integration Challenges Solved:**
- Resolved **API contract mismatches** between frontend expectations and backend response shapes by defining strict response schemas upfront and validating against them during development.
- Eliminated **race conditions** in data fetching by implementing proper async/await chains with request cancellation on component unmount using AbortController.

**Impact:** A fully functional, deployed full-stack application demonstrating production-quality React architecture, Node.js backend engineering, and PostgreSQL data management.

---

### 6. All About Coding: Interactive Learning Platform
| Field | Details |
|---|---|
| **Live URL** | https://dsawebsite-kappa.vercel.app |
| **Tech Stack** | React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Vercel |
| **Type** | Personal |

**Description:**

All About Coding is a live, deployed interactive learning platform for Data Structures and Algorithms — built to give students a clean, structured interface for exploring coding problems organized by topic, difficulty, and concept.

**Frontend Engineering:**
- Built the entire frontend using **React.js** from scratch with a **component-driven architecture** — decomposing the UI into a FilterBar, ProblemCard, ProblemList, and Navigation components, each with clearly scoped responsibilities and clean prop interfaces.
- Used **Tailwind CSS** utility classes for rapid, consistent styling — applying design tokens for spacing, typography, and color throughout the component tree without writing custom CSS, enabling faster iteration and visual consistency.
- Implemented **intuitive navigation and structured content architecture** — enabling users to filter problems by category, difficulty level, and topic tag with real-time UI updates driven by local React state.
- Applied **CSS grid and flexbox** with mobile-first breakpoint strategies for smooth, consistent performance across all screen sizes — tested on mobile, tablet, and desktop viewports.
- Optimized **visual hierarchy and content readability** — typography scale, whitespace, and color contrast choices made with deliberate attention to usability principles.

**Deployment:**
- Deployed on **Vercel** with continuous deployment configured from the main GitHub branch — every push to main automatically triggers a production build and deployment with zero downtime.
- Demonstrated full **end-to-end product ownership**: requirements → design → implementation → testing → deployment → post-launch maintenance.

**Impact:** A live, production-deployed React application with active users — the most direct proof of frontend engineering ownership in the portfolio.

---

### 7. Movie Recommendation System
| Field | Details |
|---|---|
| **GitHub** | github.com/Navneetg2003/Movie-Recommendation-System |
| **Tech Stack** | Python, Scikit-learn, Pandas, NumPy, TF-IDF, Cosine Similarity, Jupyter Notebook |
| **Type** | Personal |

**Description:**

A machine learning-based movie recommendation engine implementing both content-based filtering and collaborative filtering approaches — demonstrating foundational ML engineering across data preprocessing, similarity computation, and model evaluation.

**Content-Based Filtering:**
- Built a **TF-IDF (Term Frequency-Inverse Document Frequency) vectorizer** on movie metadata features (genres, cast, crew, keywords, overview) — converting textual attributes into high-dimensional sparse feature vectors that capture semantic relevance.
- Computed **cosine similarity** between all movie feature vectors to build a precomputed similarity matrix — enabling O(1) recommendation lookup at inference time by retrieving the top-N most similar movies to any query item.

**Collaborative Filtering:**
- Implemented **matrix factorization** on the user-item interaction matrix (user ratings × movies) — decomposing the sparse ratings matrix into latent user and item factor matrices using SVD-based techniques.
- Applied **dimensionality reduction** to handle the sparsity problem inherent in user-item matrices, learning latent representations that capture underlying user preference patterns and item characteristics.

**Data Processing:**
- Performed comprehensive data preprocessing using **Pandas and NumPy** — handling missing values, normalizing rating scales, encoding categorical features, and merging multiple data sources (movies metadata + ratings).
- Applied feature engineering to construct rich item profiles by combining multiple metadata attributes into unified text representations for TF-IDF vectorization.

**Frontend Interface:**
- Developed a lightweight **frontend interface** for real-time recommendation delivery — allowing users to search for a movie and instantly receive personalized recommendations from both filtering approaches.

**Impact:** Demonstrates end-to-end ML system ownership from raw data through model training to user-facing recommendation delivery.

---

### 8. Electricity Demand Forecasting
| Field | Details |
|---|---|
| **Tech Stack** | Python, TensorFlow/Keras, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn |
| **Type** | Personal |
| **GitHub** | https://github.com/Navneetg2003/Electricity-Demand-Forecasting |

**Description:**

A comprehensive time-series ML project for forecasting electricity demand using historical consumption data — covering the full ML pipeline from exploratory data analysis through model training, evaluation, and visualization.

**Exploratory Data Analysis:**
- Conducted thorough **EDA using Matplotlib and Seaborn** — generating distribution plots, correlation heatmaps, seasonal decomposition charts, and anomaly detection visualizations to surface demand patterns, weekly seasonality, holiday effects, and long-term trends in the dataset.
- Identified key predictive features through correlation analysis and domain-informed feature engineering — including lag features, rolling statistics, time-of-day indicators, and weather-related proxy variables.

**Model Development & Benchmarking:**
- Trained an **LSTM (Long Short-Term Memory) neural network** using TensorFlow/Keras — a recurrent architecture specifically suited for sequential time-series data, capable of learning long-range temporal dependencies in demand patterns.
- Benchmarked LSTM performance against classical ML baselines including **Linear Regression, Random Forest, and Gradient Boosting** using Scikit-learn — selecting optimal model architectures based on RMSE and MAE evaluation metrics.
- Applied **time-series cross-validation** (walk-forward expanding window) to ensure evaluation was methodologically sound and generalizable to unseen future demand periods.

**Impact:** Demonstrates applied deep learning for time-series forecasting with rigorous evaluation methodology and comprehensive visualization practices.

---

### 9. AushdCare: Doctor Appointment & Medicine Ordering App
| Field | Details |
|---|---|
| **Tech Stack** | Java, XML, Android Studio, Retrofit, Firebase Authentication, Firestore |
| **Type** | Personal |
| **GitHub** | https://github.com/Navneetg2003/AushdCare |

**Description:**

AushdCare is a native Android healthcare application enabling users to book doctor appointments, order medicines online, and upload blood reports for analysis — built as a complete, end-to-end mobile product.

**Android Architecture:**
- Implemented **MVVM (Model-View-ViewModel) architecture** — separating UI rendering (View), business logic and data transformation (ViewModel), and data access (Model/Repository) into clearly bounded layers. This ensured testability, maintainability, and clean separation of concerns across the application.
- Built all UI screens using **XML layout files** with ConstraintLayout for flexible, responsive interface design across different Android screen sizes and densities.

**Backend Integration:**
- Integrated **Retrofit** as the type-safe HTTP client for REST API communication — defining API interfaces as annotated Kotlin/Java interfaces and handling asynchronous network calls with Retrofit's Callback mechanism.
- Implemented efficient **network management** with request caching, timeout configuration, and error handling to ensure reliable API interactions under varying network conditions.

**Firebase Integration:**
- Used **Firebase Authentication** for secure user login and registration — supporting email/password authentication with session persistence across app restarts.
- Integrated **Cloud Firestore** as the real-time NoSQL database for storing user profiles, appointment records, and order history — leveraging Firestore's real-time listeners for live data synchronization across the app.

**Performance Optimization:**
- Optimized **UI rendering and API call patterns** — implementing lazy loading for list views, recycling ViewHolders in RecyclerAdapters, and batching Firestore reads to reduce app loading times and improve perceived performance.

**Impact:** A complete, feature-rich Android application demonstrating mobile architecture patterns, REST API integration, and Firebase backend services.

---

## Technical Skills

### Programming Languages
Java, Python, C++, JavaScript (ES6+), TypeScript, SQL, Shell Scripting

### Frontend
React.js, Next.js, HTML5, CSS3, Tailwind CSS, Responsive Design, Component-Driven Architecture, State Management (useState, useReducer), React Hooks, CSS Grid, Flexbox

### Backend & APIs
Spring Boot, Spring MVC, Node.js, Flask, FastAPI (Basics), RESTful API Design, Microservices, OOP & Design Patterns (Factory, Repository, Service Layer, MVVM), SOLID Principles, Apache Kafka, Concurrency & Multithreading

### AI & ML
PyTorch, Transformers (Multi-Head Attention, Positional Encoding, Layer Normalization), XGBoost, FinBERT, Scikit-learn, TensorFlow/Keras, LLM Concepts, Prompt Engineering, Pandas, NumPy, Feature Engineering, Time-Series Analysis, Statistical Modelling, Cosine Similarity, TF-IDF, Matrix Factorization

### Data Engineering
ETL Pipelines, Data Cleaning & Validation, Schema Validation, Feature Engineering, n8n Workflow Orchestration, Streamlit, Plotly, Matplotlib, Seaborn

### Databases
PostgreSQL, MySQL, MongoDB, Firebase Firestore, PostGIS, Schema Design, Query Optimization, GiST Indexing, Composite Indexing, EXPLAIN ANALYZE

### Cloud & DevOps
AWS (EC2, S3, IAM, VPC), Docker, Kubernetes (Basics), GitHub Actions, CI/CD, Linux, Vercel

### Core CS
Data Structures & Algorithms, System Design, DBMS, Operating Systems, Computer Networks (TCP/IP, HTTP, DNS), Distributed Systems, MVVM, Concurrency

### Tools
Git, GitHub, Maven, Google Colab, Android Studio, Retrofit, Firebase, ComfyUI, Stable Diffusion, Remotion, n8n

---

## Achievements & Certifications

| Achievement | Details | Link |
|---|---|---|
| **LeetCode** | 325+ DSA problems solved, 78% acceptance rate, 21 Hard problems, Contest Rating 1433 (Top 70% globally) | [View Profile](https://leetcode.com/u/navneetg1302/) |
| **BharatGen Hackathon** | Semi-Finalist — Led development of AI-powered cultural assistant (VastraVerse) using Google Gemini API, Stable Diffusion with IP-Adapter, LLM-based knowledge retrieval, and prompt engineering | — |
| **Oracle Cloud Infrastructure 2025 Generative AI Professional** | Advanced certification covering GenAI concepts, LLMs, RAG, vector databases, and OCI AI services | [View Certificate](https://catalog-education.oracle.com/pls/certview/sharebadge?id=19B3A6CBA5495095966AD6413C3A1B7E579EFE62CA4741754F74133F4802AB8A) |
| **Oracle Cloud Infrastructure 2025 AI Foundations Associate** | Foundational certification covering AI/ML concepts, OCI AI services, cloud infrastructure, and IAM | [View Certificate](https://catalog-education.oracle.com/pls/certview/sharebadge?id=E2F04128B014DA692CCDAF8B632312791A9B471B1705CCD385311AE7FF8D1634) |
| **NPTEL — Cloud Computing** | By IIT Kharagpur — distributed systems, cloud service models, and virtualization | Certificate not available online |
| **Google (Coursera) — Computer Networking** | The Bits and Bytes of Computer Networking — TCP/IP, DNS, DHCP, and routing protocols | Certificate not available online |

---

## Languages
- English (Fluent)
- Hindi (Native)