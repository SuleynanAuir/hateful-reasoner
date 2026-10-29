# Hateful Reasoner

CLIP-based hateful meme classification with multimodal fusion and optional LLM-guided reasoning. This repository contains source code; datasets, model weights, training logs and bundled third-party projects are excluded.

## Setup

Use Python 3.11 and install a PyTorch build appropriate for your GPU, then:

```bash
python -m pip install -r requirements.txt
```

The dependency list is reduced from the original machine-specific Conda export. Full training has not been revalidated in a fresh environment. Training currently assumes a CUDA GPU.

## Data

Prepare your own dataset following [data/README.md](data/README.md). Images, labels and checkpoints are not distributed in this repository. The retained metadata notebooks in `data_preprocess/` are reference helpers; update their local paths before use.

## Training entry points

- `new_main_enhanced.py` / `new_engine_enhanced.py`: enhanced multimodal reasoning pipeline.
- `new_main_LLM.py` / `new_engine_LLM.py`: LLM variant, using `datasets_new.py`.
- `main.py` / `engine.py`: original classification baseline, using `datasets.py`.
- `pretraining/`: representation pretraining and projection extraction.

For LLM-backed pipelines, set `OPENAI_API_KEY` in your shell. Set `OPENAI_BASE_URL` only when using an alternative OpenAI-compatible provider. Credentials must not be committed. These pipelines may send inputs to the configured API and incur API costs.

After preparing data and API configuration:

```bash
python new_main_enhanced.py --dataset inpainted --labels original --batch_size 16 --max_epochs 1 --wandb_mode offline
```

Run the relevant entry point with `--help` for arguments. Existing training behavior is retained: the enhanced pipeline validates on both eval and test splits, and some CLI logging/checkpoint options are not wired into its Trainer. Review this before using results for evaluation.

## Repository scope

Removed: image datasets and CSV/JSON exports, pretrained weights, experiment outputs, caches, duplicate experimental entry points, machine-specific launcher scripts, and vendored OFA/LaMa/CLIP-captioning source trees. Preprocessing models and their environments must be obtained separately if regenerating image variants.

The small reference files in `assets/` are retained. See [CLEANUP.md](CLEANUP.md) for the cleanup inventory.

## Academic project page

The English project page is in `index.html`, with local styles and scripts in `static/`. It follows the Academic Project Page Template and uses all supplied assets. The benchmark PDF is explicitly distinguished from the project manuscript excerpts; no unsupported project scores are reported.

Preview from the repository root:

```bash
python3 -m http.server 8765
```

Open `http://localhost:8765`. For GitHub Pages, select the `main` branch and `/ (root)` folder in the repository's Pages settings. Hosting from a private repository depends on the account's GitHub Pages entitlement. The website adaptation is CC BY-SA 4.0; supplied research assets retain their respective rights.
