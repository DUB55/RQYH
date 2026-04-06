#!/usr/bin/env python3
"""
Script to remove green background (#46B214) from Designer(19).png
and replace with transparent background
"""

import os
import sys
from PIL import Image, ImageDraw
import requests
from io import BytesIO

def remove_green_background(input_file, output_file):
    """
    Remove green background (#46B214) and replace with transparency
    """
    try:
        # Open the image
        img = Image.open(input_file).convert("RGBA")
        
        # Create a transparent image of the same size
        transparent_img = Image.new("RGBA", img.size, (0, 0, 0, 0))
        
        # Get pixel data
        pixels = img.load()
        transparent_pixels = transparent_img.load()
        
        # Define green color (RGB for #46B214)
        green_r, green_g, green_b = 70, 178, 20
        
        # Process each pixel
        for y in range(img.height):
            for x in range(img.width):
                r, g, b, a = pixels[x, y]
                
                # Check if pixel is green (with some tolerance)
                if (abs(r - green_r) < 30 and 
                    abs(g - green_g) < 30 and 
                    abs(b - green_b) < 30 and 
                    a > 200):  # Only modify pixels with high alpha (visible)
                    
                    # Make pixel transparent
                    transparent_pixels[x, y] = (0, 0, 0, 0)
                else:
                    # Keep original pixel
                    transparent_pixels[x, y] = (r, g, b, a)
        
        # Save the result
        transparent_img.save(output_file, "PNG")
        print(f"✅ Successfully processed: {output_file}")
        print(f"📏 Original size: {img.size}")
        print(f"🎨 Green background removed and replaced with transparency")
        
        return True
        
    except Exception as e:
        print(f"❌ Error processing {input_file}: {str(e)}")
        return False

def download_and_process():
    """
    Download a fresh version of the icon and process it
    """
    # This would be used if we had a URL to download from
    # For now, we'll process the local file
    
    input_file = "Designer (19).png"
    output_file = "icon-transparent.png"
    
    if not os.path.exists(input_file):
        print(f"❌ Input file not found: {input_file}")
        return False
    
    print(f"🔄 Processing {input_file}...")
    print(f"🎨 Removing green background (#46B214)...")
    
    success = remove_green_background(input_file, output_file)
    
    if success:
        print(f"✅ Complete! New file saved as: {output_file}")
        print(f"📱 You can now use {output_file} as your PWA icon")
        print(f"💡 Replace 'icon.png' with '{output_file}' for transparent background")
    
    return success

if __name__ == "__main__":
    print("🎨 Ruqiyah Icon Background Remover")
    print("=" * 40)
    
    success = download_and_process()
    
    if success:
        print("\n🎉 Success! Your icon is ready for PWA use!")
    else:
        print("\n❌ Failed to process icon")
