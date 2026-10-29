# Local dataset layout

Obtain the dataset separately. All contents here except this README are ignored by Git.

| Pipeline | Metadata | Images |
| --- | --- | --- |
| Main/enhanced original | `data/hateful_memes/hateful_memes_expanded.csv` | `data/hateful_memes/img/` |
| Main/enhanced masked/inpainted | `data/sample_data/10000_info.csv` | `data/sample_data/top_10000_mask/` or `top_10000_inpaint/` |
| LLM masked/inpainted | `data/sample_data/top_800_new_info.csv` | `data/sample_data/top_800_mask/` or `top_800_inpaint/` |
| Pretraining original | `data/hateful_memes/hateful_memes_expanded.csv` | `data/img/` |
| Pretraining masked/inpainted | `data/sample_data/top_800_info.csv` | `data/sample_data/top_800_mask/` or `top_800_inpaint/` |

Main classifiers expect `img`, `text`, `label`, `split`, `id`, `pseudo_img_idx`, and `pseudo_text_idx`; captions and fine-grained labels depend on selected options. Image entries use `img/<filename>.png`. Masked/inpainted image variants may require `_masked.png`/`_inpainted.png` suffixes as specified in each loader.

The enhanced entry point requests `train`, `eval`, and `test`; its subset loader maps `eval` to `dev`. Original-image CSV splits must match the selected entry point exactly. Check the loader before preparing splits: legacy and pretraining paths also use `dev_seen`.

No datasets, labels, generated predictions, or pretrained checkpoints are bundled. Missing data must be supplied before training.
