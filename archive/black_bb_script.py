from PIL import Image
import numpy as np
from scipy.ndimage import distance_transform_edt

def extend_background_with_gradient(
    input_path: str,
    output_path: str,
    extra_px: int = 200
):
    # Load image
    img = Image.open(input_path).convert("RGB")
    w, h = img.size
    arr = np.array(img, dtype=np.float32)

    # Create larger canvas
    new_w = w + 2 * extra_px
    new_h = h + 2 * extra_px
    new_arr = np.zeros((new_h, new_w, 3), dtype=np.float32)

    # Paste original in the center
    new_arr[extra_px:extra_px+h, extra_px:extra_px+w] = arr

    # Create a mask for the original image area
    mask = np.zeros((new_h, new_w), dtype=bool)
    mask[extra_px:extra_px+h, extra_px:extra_px+w] = True

    # For each color channel, extrapolate from edges
    for c in range(3):
        # Get distance from each pixel to nearest original pixel
        dist = distance_transform_edt(~mask)

        # Normalize distance for gradient effect
        max_dist = dist.max()
        if max_dist > 0:
            dist_norm = np.clip(dist / max_dist, 0, 1)
        else:
            dist_norm = dist

        # For border pixels, extrapolate using nearest edge values with gradient
        for y in range(new_h):
            for x in range(new_w):
                if not mask[y, x]:
                    # Find nearest edge pixel
                    if y < extra_px:  # Top border
                        edge_val = arr[0, max(0, min(x - extra_px, w-1)), c]
                    elif y >= extra_px + h:  # Bottom border
                        edge_val = arr[h-1, max(0, min(x - extra_px, w-1)), c]
                    elif x < extra_px:  # Left border
                        edge_val = arr[max(0, min(y - extra_px, h-1)), 0, c]
                    elif x >= extra_px + w:  # Right border
                        edge_val = arr[max(0, min(y - extra_px, h-1)), w-1, c]
                    else:
                        edge_val = 0

                    # Apply gradient fade (darken slightly as we go outward)
                    fade = 1.0 - (dist_norm[y, x] * 0.15)  # Max 15% darkening
                    new_arr[y, x, c] = edge_val * fade

    # Convert back to uint8 and save
    new_arr = np.clip(new_arr, 0, 255).astype(np.uint8)
    new_img = Image.fromarray(new_arr)
    new_img.save(output_path)

# Usage:
if __name__ == "__main__":
    extend_background_with_gradient(
        "Gemini_Generated_Image_fc7ropfc7ropfc7r (1) 2.png",
        "extended_gradient_output.png",
        extra_px=300
    )
