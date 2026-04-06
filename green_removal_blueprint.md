# Blueprint: Green Screen Remover
**Task:** `designer(19).png` → transparent PNG  
**Target color:** `#46B214` (RGB: 70, 178, 20)  
**Stack:** Python · Pillow · NumPy · (optional) OpenCV — all free

---

## Step 1 — Install dependencies

```bash
pip install Pillow numpy
```

- **Pillow** — image I/O and format handling  
- **NumPy** — fast pixel array math

---

## Step 2 — Load image and convert to RGBA

```python
from PIL import Image
import numpy as np

img = Image.open("designer(19).png").convert("RGBA")
data = np.array(img)  # shape: (H, W, 4)
```

Converting to RGBA ensures we have an alpha channel to write into.

---

## Step 3 — Build color mask with tolerance

```python
TARGET = np.array([70, 178, 20])   # #46B214
TOLERANCE = 40                      # tweak if needed

r, g, b = data[:,:,0], data[:,:,1], data[:,:,2]
mask = (
    (np.abs(r.astype(int) - TARGET[0]) <= TOLERANCE) &
    (np.abs(g.astype(int) - TARGET[1]) <= TOLERANCE) &
    (np.abs(b.astype(int) - TARGET[2]) <= TOLERANCE)
)
```

Tolerance catches slight color variations and JPEG compression artifacts.  
- Raise to **60+** if edges look rough or patchy  
- Lower to **20** if the removal bleeds into non-green areas

---

## Step 4 — Zero out matched pixels' alpha

```python
data[mask, 3] = 0   # set alpha=0 → fully transparent
```

Only the alpha channel is touched — RGB values are preserved but invisible. No quality loss.

---

## Step 5 — Optional: edge feathering for soft edges

```bash
pip install opencv-python
```

```python
import cv2

alpha = data[:,:,3].astype(np.float32)
alpha = cv2.GaussianBlur(alpha, (3,3), 0)
data[:,:,3] = alpha.astype(np.uint8)
```

Prevents hard jagged edges at the removal boundary.  
Recommended for curved or diagonal edges and high-quality output.  
- `(3,3)` kernel — subtle softening  
- `(5,5)` kernel — softer, more blended edges

---

## Step 6 — Save output to working directory

```python
result = Image.fromarray(data)
result.save("designer(19)_transparent.png")   # lossless PNG
```

Always save as `.png` — it is the only common format that preserves transparency losslessly. Never use `.jpg` or `.webp` for transparent output.

---

## Full script (copy-paste ready)

```python
from PIL import Image
import numpy as np

# --- config ---
INPUT_FILE  = "designer(19).png"
OUTPUT_FILE = "designer(19)_transparent.png"
TARGET      = np.array([70, 178, 20])   # #46B214
TOLERANCE   = 40
FEATHER     = True   # set False to skip edge softening
# --------------

img  = Image.open(INPUT_FILE).convert("RGBA")
data = np.array(img)

r, g, b = data[:,:,0], data[:,:,1], data[:,:,2]
mask = (
    (np.abs(r.astype(int) - TARGET[0]) <= TOLERANCE) &
    (np.abs(g.astype(int) - TARGET[1]) <= TOLERANCE) &
    (np.abs(b.astype(int) - TARGET[2]) <= TOLERANCE)
)
data[mask, 3] = 0

if FEATHER:
    import cv2
    alpha = data[:,:,3].astype(np.float32)
    alpha = cv2.GaussianBlur(alpha, (3,3), 0)
    data[:,:,3] = alpha.astype(np.uint8)

result = Image.fromarray(data)
result.save(OUTPUT_FILE)
print(f"Saved: {OUTPUT_FILE}")
```

---

## Key parameters reference

| Parameter | Default | Notes |
|---|---|---|
| `TOLERANCE` | `40` | Raise to 60+ for JPEGs, lower to 20 for crisp PNGs |
| Feather kernel | `(3,3)` | Use `(5,5)` for softer edges |
| `FEATHER` flag | `True` | Set `False` to skip OpenCV dependency |
| Input format | PNG / JPG / WEBP | JPG compression may drift color — raise TOLERANCE |
| Output format | **Must be `.png`** | JPG/WEBP cannot store transparency |

---

## Dependencies summary

| Library | Install | Purpose |
|---|---|---|
| Pillow | `pip install Pillow` | Image open/save, RGBA conversion |
| NumPy | `pip install numpy` | Fast array masking |
| OpenCV | `pip install opencv-python` | Optional edge feathering only |

All free and open source. No API keys or paid services required.
