# openmoonray-site - part of the [MoonRay](https://github.com/OpenMoonRay/openmoonray) project
Policies concerning [Governance](https://github.com/OpenMoonRay/openmoonray/blob/main/GOVERNANCE.md), [Code of Conduct](https://github.com/OpenMoonRay/openmoonray/blob/main/CODE_OF_CONDUCT.md), and [Contribution](https://github.com/OpenMoonRay/openmoonray/blob/main/CONTRIBUTING.md) are available in the overarching MoonRay project, defined in the [`OpenMoonRay/openmoonray` GitHub repository superproject](https://github.com/OpenMoonRay/openmoonray).

## OpenMoonRay Website — Developer Guide

This repository contains the source code for the **OpenMoonRay** website, built using **Astro** and styled with **Tailwind CSS**.  
This guide explains how to modify static pages, add news posts, and manage images or other public assets.

### 📁 Project Structure

Static pages are located in:
src
- pages 
  - **about.astro** → https://openmoonray.org/about
  - **documentation.astro** → https://openmoonray.org/documentation
  - **faq.astro** → https://openmoonray.org/faq
  - **index.astro** → https://openmoonray.org/
  - **license.astro** → https://openmoonray.org/license

Pages are composed of **Astro components** and standard HTML.
Components live in:
src/
  components

The site uses **Tailwind CSS** for styling.

### 📰 Adding a News & Releases Post

1. Open: src/index.astro
2. Add a `<NewsItem />` component under the **News & Releases** section.

#### Required properties
- `date`
- `story`

#### Optional properties
- `youTubeVideoURL`
- `imageURL`

#### Example

```astro
<NewsItem
  date="23-June-2025"
  story={`We presented the journey of open-sourcing MoonRay at this year's <a href="https://ubuntu.com/blog/ubuntu-summit-2023-reflections" class='text-blue-600'>Open Source Summit North America</a>, hosted by The Linux Foundation. We invite you to see our path and experiences to open-source.`}
  youTubeVideoURL="https://www.youtube.com/embed/eEbPbSvfhRI?si=QdB-dBnee1m5H0NX"
/>
```

### Add an image (or other files)

  In order for an image to be published on GitHub Pages along with this project it must be added in the __public__ folder. You may follow the project's current conventions and add the image to public/images. 
  
  You will be able to access the image utilizing the following file path: 
  - {domain}/images/imageName
  - Example: An image about_cover.png, added to the images folder can be located at the following URL https://maabscorner.com/images/about_cover.png
  - Example: A PDF MoonRayPressRelease.pdf added to the public folder directly can be located at the following URL https://maabscorner.com/MoonRayPressRelease.pdf

  This project also utilizes src/scripts/ImagePath.js to store file paths for all images (or other files). Simply add a reference, 
  ```astro 
  export const about_cover = "https://openmoonray.org/images/d3_hiccup2.png"
```

Then you may use this reference in an Astro file. For example, in __about.astro__
```astro ---
---
import Layout from '../components//Layout.astro';
import FullscreenImage from '../components/FullscreenImage.astro';
import * as Image from '../scripts/ImagePath'
---

<Layout>
  <img src={Image.about_cover} class="w-full" />
</Layout>
```
