#!/usr/bin/env python3
"""
Script to remove green background (#46B214) from Designer(19).png
and replace with transparency - Simple version without PIL dependency
"""

import os
import sys

def show_processing_instructions():
    """
    Show instructions for removing green background
    """
    
    input_file = "Designer (19).png"
    output_file = "icon-transparent.png"
    
    print("🎨 Ruqiyah Icon Background Remover")
    print("=" * 40)
    print(f"📁 Input file: {input_file}")
    print(f"🎨 Target color: #46B214 (green)")
    print(f"📁 Output file: {output_file}")
    print()
    
    # Instructions for manual processing
    print("🔧 PROCESSING OPTIONS:")
    print()
    print("📱 OPTION 1: Online Tool (RECOMMENDED)")
    print("   1. Go to: https://www.remove.bg/")
    print("   2. Upload 'Designer (19).png'")
    print("   3. Use color picker: #46B214")
    print("   4. Download result as 'icon-transparent.png'")
    print("   ⭐ Best quality and easy to use")
    print()
    print("🖥️  OPTION 2: Image Editor (Photoshop/GIMP/Paint.NET)")
    print("   1. Open 'Designer (19).png'")
    print("   2. Use magic wand/fuzzy select tool")
    print("   3. Select green background (#46B214)")
    print("   4. Delete/make transparent")
    print("   5. Save as 'icon-transparent.png'")
    print()
    print("🖥️  OPTION 3: Paint (Windows)")
    print("   1. Open 'Designer (19).png' in Paint")
    print("   2. Use color picker tool")
    print("   3. Pick green color (#46B214)")
    print("   4. Use eraser tool to remove green areas")
    print("   5. Save as 'icon-transparent.png'")
    print()
    print("🔄 AFTER PROCESSING:")
    print("   1. Replace 'icon.png' with 'icon-transparent.png'")
    print("   2. Run: git add . && git commit -m 'Use transparent icon' && git push")
    print()
    print("💡 TIP: Transparent background looks much better as PWA icon!")
    print()
    print("🎯 COLOR INFO:")
    print("   Green to remove: #46B214")
    print("   RGB values: R:70, G:178, B:20")
    print()

def create_auto_replacement_script():
    """
    Create a simple script to automatically replace icon files
    """
    
    script_content = '''@echo off
echo 🔄 Replacing icon with transparent version...
echo.
echo 1. Make sure "icon-transparent.png" exists in this folder
echo 2. This script will replace icon.png with the transparent version
echo.
if exist "icon-transparent.png" (
    echo ✅ Found transparent icon
    copy /Y "icon-transparent.png" "icon.png"
    echo ✅ icon.png replaced successfully!
    echo 💡 Your PWA will now use the transparent icon
) else (
    echo ❌ icon-transparent.png not found
    echo 💡 Please process Designer (19).png first using the instructions above
)
pause
'''
    
    with open("replace-icon.bat", "w") as f:
        f.write(script_content)
    
    print("✅ Created 'replace-icon.bat' for easy replacement")
    print("💡 Run this batch file after creating transparent icon")

if __name__ == "__main__":
    show_processing_instructions()
    create_auto_replacement_script()
    
    print("\n🎉 Ready to process your icon!")
    print("📱 Follow the instructions above to remove green background")
