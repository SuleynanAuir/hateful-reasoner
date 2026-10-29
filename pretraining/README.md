# Pretraining

Run commands from the repository root using the environment described in the main README.

```bash
python pretraining/main.py --dataset masked --image_pair text --freeze_strategy projection_only --gpus 0 --batch_size 32 --lr 5e-4 --max_epochs 20
python pretraining/extract_projection.py --help
```

Prepare the paths listed in `data/README.md` first. `prepare_hateful_csv.py` converts local `data/all_data/{train,dev,test}.jsonl` to a basic image/text/label/split CSV for pretraining; it does not generate the richer metadata needed by the main classifiers. Original pretraining code is retained and has not been training-tested after cleanup.
