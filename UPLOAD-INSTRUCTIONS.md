# Logo and Favicon Upload Instructions for Renvia IT Website

Hello! Your website has been prepared to display your logo and favicon. Follow these simple steps to upload your images.

## What You Need to Upload

You need **TWO image files**:

1. **Favicon** - The small icon that appears in browser tabs
2. **Logo** - Your company logo that appears in the navigation bar

## Step-by-Step Instructions

### Step 1: Prepare Your Files

#### Favicon Requirements:
- **File name:** Name your file either `favicon.ico` OR `favicon.png`
- **Size:** 32x32 pixels or 64x64 pixels recommended
- **Format:** .ico or .png file

#### Logo Requirements:
- **File name:** Name your file `logo.png` (or `logo.svg` if you have a vector version)
- **Size:** Height should be 40-50 pixels (width will scale automatically)
- **Format:** .png is best (with transparent background), or .svg, .jpg

### Step 2: Upload to GitHub

1. **Go to your GitHub repository:** https://github.com/Lyrion1/renviaIT.org

2. **Navigate to the images folder:**
   - Click on the `assets` folder
   - Then click on the `images` folder

3. **Upload your files:**
   - Click the **"Add file"** button (near the top right)
   - Select **"Upload files"**
   - Drag and drop your two files OR click "choose your files" to browse:
     - Your favicon file (named `favicon.ico` or `favicon.png`)
     - Your logo file (named `logo.png` or `logo.svg`)

4. **Commit the changes:**
   - Scroll down to the bottom of the page
   - You'll see a "Commit changes" section
   - Add a message like "Upload logo and favicon"
   - Click the green **"Commit changes"** button

### Step 3: View Your Website

That's it! Your logo and favicon will now appear on your website:
- The **favicon** will show up in browser tabs next to your page title
- The **logo** will appear in the top-left corner of the navigation bar on every page

### What Happens if the Files Don't Upload Correctly?

Don't worry! The website is designed to handle missing images gracefully:
- If the logo file is missing or incorrectly named, the text "Renvia IT" will still appear
- The website will continue to work perfectly

### File Location Summary

Your files must be uploaded to this exact location:
```
/assets/images/favicon.ico (or favicon.png)
/assets/images/logo.png (or logo.svg)
```

### Need Help?

If you have any questions or if the images don't appear as expected:
1. Double-check the file names match exactly (including lowercase/uppercase)
2. Make sure the files are in the correct folder: `assets/images/`
3. Try refreshing your browser (sometimes you need to do a "hard refresh": Ctrl+Shift+R on Windows or Cmd+Shift+R on Mac)

### Alternative: Using the GitHub Web Interface (Detailed)

If you're not familiar with GitHub, here's a more detailed walkthrough:

1. **Open your web browser** and go to: https://github.com/Lyrion1/renviaIT.org
2. **Make sure you're logged in** to GitHub
3. **Click on the `assets` folder** (you'll see it in the list of files)
4. **Click on the `images` folder** inside assets
5. **Look for the "Add file" button** (it's near the top, next to a green "Code" button)
6. **Click "Upload files"** from the dropdown
7. **Drag your two image files** into the box, or click "choose your files"
8. **Scroll down** to the bottom of the page
9. **Type a message** in the "Commit changes" box (something like "Adding logo and favicon")
10. **Click the green "Commit changes" button**

Your images are now uploaded and will appear on your website automatically!

---

**Technical Note:** The website code now includes:
- Favicon links in all 6 HTML pages
- Logo image support in the navigation bar
- Graceful fallback to text if images are missing
- CSS styling to properly display the logo at the right size
