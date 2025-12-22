---
title: Home Page
layout: hextra-home
---

<div class="mt-6 mb-6">
{{< hextra/hero-headline >}}
  Hello there! &nbsp;<br class="sm:block hidden" />Welcome to my website
{{< /hextra/hero-headline >}}
</div>

<div class="mb-10">
{{< hextra/hero-subtitle >}}
  Feel free to explore around...
{{< /hextra/hero-subtitle >}}
</div>

<div class="mt-4 mb-4 w-full text-center text-4xl font-bold">Projects</div>

{{< cards >}}
  {{< project-card
        link="/blog/2025-07-07-magnetic-core-memory-controller/"
        title="Magnetic Core Memory Controller"
        subtitle="A low-level controller for memory read/write operations, implementing custom logic and timing-critical electronics interfacing."
        codeTags="C++"
        otherTags="Digital Logic"
        image="images/magneticcorememory16x32v3.jpg"
        method="Resize"
        options="1200x webp q80" 
        imageStyle="object-fit:cover; aspect-ratio:16/9;"
  >}}
  
  {{< project-card
        link="/blog/2025-03-17-remote-piloting-system-for-lidar-equipped-robot"
        title="Remote Piloting System for LiDAR Equipped Robot"
        subtitle="A Qt-based user interface for real-time robot control over TLS, with LiDAR SLAM processing running in parallel via Python multiprocessing."
        codeTags="Python, C++"
        otherTags="Qt"
        image="images/remotepilotingsystem.png"
        method="Resize"
        options="1200x webp q80" 
        imageStyle="object-fit:cover; aspect-ratio:16/9;"
  >}}
    
  {{< project-card
        link="/blog/2025-08-03-label-printer"
        title="Android application for printing labels over USB"
        subtitle="Utilized native Jetpack Compose framework for Android with Material Design 3 UI components. USB OTG driver was implemented for communication with PT-D600 label printer."
        codeTags="Kotlin"
        otherTags=""
        image="images/labelprinterlabels.jpg"
        method="Resize"
        options="1200x webp q80" 
        imageStyle="object-fit:cover; aspect-ratio:16/9;"
  >}}

  {{< project-card
        link="/blog/2025-07-23-waveseek"
        title="Waveseek"
        subtitle="A GPU accelerated waveform viewer for oscilloscope traces that can be easily embedded into any web page using an `<iframe>`."
        codeTags="Javascript"
        otherTags="WebGPU"
        image="images/waveseek.png"
        method="Resize"
        options="1200x webp q80" 
        imageStyle="object-fit:cover; aspect-ratio:16/9;"
  >}}
  
  {{< project-card
        link="https://mods.paradoxplaza.com/mods/77260/Windows"
        title="Water Visual Tweaks"
        subtitle="Reverse engineered water material system to enable dynamic customization of color, reflectivity and wave effects. Adopted by top creators in the community."
        codeTags="C#"
        otherTags="Unity"
        image="images/watervisualtweaks.png"
        method="Resize"
        options="1200x webp q80" 
        imageStyle="object-fit:cover; aspect-ratio:16/9;"
  >}}

  {{< project-card
        link="/blog/2025-12-22-rp2040-dsp-audio-amplifier"
        title="Audio Amplifier with DSP co-processor"
        subtitle="Implemented an infrared-controlled audio amplifier system featuring a DSP co-processor, with DSP firmware and audio parameters configured via I²C from the main RP2040 microcontroller."
        codeTags="Python"
        otherTags=""
        image="images/rp2040audioamplifierdsp.jpg"
        method="Resize"
        options="1200x webp q80" 
        imageStyle="object-fit:cover; aspect-ratio:16/9;"
  >}}

  {{< project-card
        link="https://hackaday.io/project/175668-reflow-oven"
        title="Smart Reflow Oven"
        subtitle="Retrofited household oven implementing modern user interface (LVGL) running on a ESP32 Microcontroller. It has a round IPS LCD, PID temperature control, automatic door control and more."
        codeTags="C"
        otherTags="Embedded Systems"
        image="images/smartreflowoven.png"
        method="Resize"
        options="1200x webp q80" 
        imageStyle="object-fit:cover; aspect-ratio:16/9;"
  >}}

  {{< project-card
        link="https://workspace.google.com/marketplace/app/word_counter_max_for_google_docs/364683295233"
        title="Word Counter Max for Google Docs"
        subtitle="A Google Workspace Editor Addon. Obtain detailed word count with the possibility of omitting text between parenthesis, tables, certain text and even set targets for motivation."
        codeTags="Javascript"
        otherTags=""
        image="images/wordcountermax.png"
        method="Resize"
        options="1200x webp q80" 
        imageStyle="object-fit:cover; aspect-ratio:16/9;"
  >}}

  {{< project-card
        link="/Label-Generator"
        title="Label Generator"
        subtitle="A web app to generate labels for inventory management. Manage different labels and create images for easy printing."
        codeTags="Javascript"
        otherTags=""
        image="images/labelgenerator.png"
        method="Resize"
        options="1200x webp q80" 
        imageStyle="object-fit:cover; aspect-ratio:16/9;"
  >}}
{{< /cards >}}

<div class="mb-6 mt-6 w-full text-center">
{{< hextra/hero-button text="View All" link="projects" >}}
</div>
