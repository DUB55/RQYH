#!/usr/bin/env python3
"""
Green Background Remover for Designer(19).png
Follows blueprint exactly - removes #46B214 and creates transparent version
"""

import os
import sys
import numpy as np
from PIL import Image

def process_designer_icon():
    """
    Process Designer(19).png to remove green background and save as icon-transparent.png
    Following blueprint exactly with Pillow + NumPy
    """
    
    # Config from blueprint
    INPUT_FILE = "Designer (19).png"
    OUTPUT_FILE = "icon-transparent.png"
    TARGET = np.array([70, 178, 20])  # #46B214
    TOLERANCE = 40
    FEATHER = True  # Set False to skip OpenCV (blueprint says optional)
    
    print("🎨 Ruqiyah Icon Background Remover")
    print("=" * 50)
    print(f"📁 Input file: {INPUT_FILE}")
    print(f"🎨 Output file: {OUTPUT_FILE}")
    print(f"🎯 Target: Remove green #46B214")
    print(f"🎯 Tolerance: {TOLERANCE}")
    print(f"🪶 Feather: {FEATHER}")
    print()
    
    if not os.path.exists(INPUT_FILE):
        print(f"❌ Error: {INPUT_FILE} not found!")
        return False
    
    try:
        # Step 1: Load image and convert to RGBA (blueprint line 25)
        img = Image.open(INPUT_FILE).convert("RGBA")
        data = np.array(img)  # shape: (H, W, 4)
        
        # Step 2: Build color mask with tolerance (blueprint line 33)
        r, g, b = data[:,:,0], data[:,:,1], data[:,:,2]
        mask = (
            (np.abs(r.astype(int) - TARGET[0]) <= TOLERANCE) &
            (np.abs(g.astype(int) - TARGET[1]) <= TOLERANCE) &
            (np.abs(b.astype(int) - TARGET[2]) <= TOLERANCE)
        )
        
        # Step 3: Zero out matched pixels' alpha channel (blueprint line 38)
        data[mask, 3] = 0
        
        # Step 4: Optional edge feathering (blueprint line 48-80)
        if FEATHER:
            try:
                import cv2
                alpha = data[:,:,3].astype(np.float32)
                alpha = cv2.GaussianBlur(alpha, (3,3), 0)
                data[:,:,3] = alpha.astype(np.uint8)
                print("🪶 Applied edge feathering with (3,3) kernel")
            except ImportError:
                print("⚠️ OpenCV not available - skipping edge feathering")
                FEATHER = False
        
        # Step 5: Convert back to PIL image and save (blueprint line 89-90)
        result = Image.fromarray(data)
        result.save(OUTPUT_FILE, "PNG")
        
        print(f"✅ Success! Created {OUTPUT_FILE}")
        print(f"📏 Original size: {img.size}")
        print(f"🎨 Green background removed and replaced with transparency")
        
        return True
        
    except Exception as e:
        print(f"❌ Error processing {INPUT_FILE}: {str(e)}")
        return False

if __name__ == "__main__":
    success = process_designer_icon()
    
    if success:
        print("\n🎉 Success! Your icon is ready for PWA use!")
        print("📱 Follow the blueprint for professional results!")
        print("💡 TIP: The transparent background will look much better as PWA icon!")
    else:
        print("\n❌ Failed to process icon")
