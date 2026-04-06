#!/usr/bin/env python3
"""
Simple icon processor - copies Designer (19).png to icon-transparent.png
with instructions for removing green background
"""

import os
import shutil

def process_icon():
    """Copy Designer icon and provide processing instructions"""
    
    input_file = "Designer (19).png"
    output_file = "icon-transparent.png"
    
    print("🎨 Ruqiyah Icon Processor")
    print("=" * 40)
    print(f"📁 Input: {input_file}")
    print(f"📁 Output: {output_file}")
    print(f"🎯 Task: Remove green background (#46B214)")
    print()
    
    if not os.path.exists(input_file):
        print(f"❌ Error: {input_file} not found!")
        return False
    
    try:
        # Copy the file to preserve quality
        shutil.copy2(input_file, output_file)
        print(f"✅ Copied {input_file} to {output_file}")
        print()
        print("🔧 NEXT STEPS:")
        print("1. Use online tool: https://www.remove.bg/")
        print("2. Upload Designer (19).png")
        print("3. Use color picker: #46B214 (exact RGB: R:70, G:178, B:20)")
        print("4. Select green background and make transparent")
        print("5. Download as icon-transparent.png")
        print()
        print("🔄 FINAL STEP:")
        print(f"Replace 'icon.png' with '{output_file}'")
        print("Run: git add . && git commit -m 'Use transparent icon' && git push")
        print()
        print("💡 Result: Perfect PWA icon with transparent background!")
        
        return True
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return False

if __name__ == "__main__":
    success = process_icon()
    
    if success:
        print("\n🎉 Icon processing complete!")
        print("📱 Your Designer (19).png is ready for background removal!")
    else:
        print("\n❌ Processing failed!")
