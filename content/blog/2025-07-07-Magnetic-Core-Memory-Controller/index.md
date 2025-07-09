---
title: Magnetic Core Memory Controller
date: 2025-07-07
authors:
  - name: HX2003
    link: https://github.com/HX2003
    image: https://github.com/HX2003.png
tags: []
---
![](MagneticCoreMemory16x32V3.jpg)
In this article, I’ll share how I designed and built a 512-bit magnetic core memory system that runs at 250kHz. Through careful tuning of drive currents, several gigabytes of test data have been successfully read/written without a single error.

## Introduction
Magnetic core memory was the primary random-access memory (RAM) technology from the 1950s-1970s, used in everything from simple calculators to supercomputers. Uniquely, it was non-volatile too, allowing computers to resume operation even after a power loss. Recently, there has been a resurgence in interest in this retro computing technology.

### Writing
![](MagneticCoreMemoryBasicPrinciple.png)

It turns out that if sufficient current is passed through a ferrite core, it can be magnetised in a certain direction. This magnetism can be retained even after the current has been turned off, allowing it to store a single bit of data.

![](MagneticCoreMemoryHysteresisCurve.svg)
This behaviour can be demonstrated by the hysteresis curve (B-H curve) in the above figure. Let's suppose the core is unmagnetized at the start (point P), applying a sufficient current in the wire will generate a magnetic field \(\mathrm{H_{sat}}\) and thus we will reach point Q. Once the current is removed, the magnetic flux from the core settles at point R. We can arbitrarily define this state as a 'zero'\. Next, applying a sufficient current opposite to the previous direction in the wire will generate a magnetic field \(\mathrm{-H_{sat}}\) and thus we will reach point S. Once the current is removed, the magnetic flux from the core settles at point T. The core has now flipped from 'zero' to 'one'.

### Reading
How can a core flip be detected? Well, an additional wire (called the sense wire) is wired through the core. When the core flips from one state to another, its quickly changing magnetic flux B will cause a detectable voltage pulse to appear across the sense wire. The polarity of the voltage pulse does not matter as we will use a sense detector that is sensitive to both positive and negative pulses.

![](MagneticCoreMemorySenseDriveWaveformAndSenseVoltage.svg)
In the above figure, a test waveform of the sequence write 'zero', then write 'zero', then write 'one', then write 'one' is shown.

A read operation is done by writing a 'zero'. If the core was previously in a 'one' state, the core will flip to the 'zero' state and thus generate a large pulse on the sense wire. If the core was previously in a 'zero' state, minimal voltage is generated. As you noticed, the read operation is destructive, so a 'one' may have to be written afterwards to restore the value.

## Scaling Up
### Coincident Current Scheme; 2D Addressing
So far we have a single core. To scale up to \(n\) number of bits, once may naively construct \(n\) times more current driving units. A more practical solution is to arrange the cores in a 2D matrix. This way the number of current driving units scales by \(\sqrt n\). 

![](MagneticCoreMemory8x8Schematic.svg "Driving Circuit for 8x8 Core Memory Matrix")

Instead of a single drive wire and a sense wire, we duplicate the drive wire. So now we have 3 wires threaded through each core: the X drive, Y drive and the sense wire.

Now only half of the full current is sent through the X or Y wire. At each core, the vector sum of X and Y drive currents give the net current, so the possible currents are \(-\mathrm{I}\), \(\mathrm{-\frac{I}{2}}\), \(\mathrm{0}\), \(\mathrm{\frac{I}{2}}\) and \(\mathrm{I}\).

## Teething Problems
### Sensitivity of Current
We have established that a half select current should not have any effect on a core, while a full select current should be sufficient to flip a core. To determine which value of current is optimal for the core memory, we can vary the current limiting resistors of the drivers or the voltage. The optimal current depends on material composition, size and temperature of the core. Moreover, there could even be slight differences between similar cores.

#### Experiment 1: Full Select Current Switching Test
In our first experiment, a full select current is sent in one direction, thereafter, a full select current is sent in the other direction.

![](MagneticCoreMemorySenseFullCurrent.svg)

In the above figure, we see that a larger full select current increases the amplitude of the sense wire voltage, and ensures that the core completely flips.

#### Experiment 2: Half Select Current Switching Test
In our second experiment, a full select current is sent in one direction (lets say 'zero'). Next, a half select current is sent in the other direction ('one') 1024 times. Finally, a full select current is sent the original direction ('zero'). This experiment tests whether repeated half select current disturbs the original state.

![](MagneticCoreMemorySenseHalfCurrent.svg)
In the above figure, only the sense wire voltage during the final full select current has been captured to save space. When half select current is too large (360mA), the core slowly goes to the 'one' state. Hence, when the final full select current is sent to write a 'zero', the change from 'one' to 'zero' state causes a pulse to be seen. This is problematic, as reading or writing to a particular core could cause other cores in the matrix to flip even when we don't want to.

As described, there is a narrow sweet spot (within a few %) where the core memory works reliably. In my opinion, this is somewhat disappointing, as I thought it would be less finicky. Nevertheless, core memory when designed well has historically proven itself to be very reliable.

## Scaling Up Even More!
### Inhibit
One way to scale even further is to use multiple core groups, where XY drivers are shared between the core groups. In this configuration, a write operation would affect all the core groups. However, we can implement a solution in which a write to any particular core group can be nullified.

![](MagneticCoreMemory2x8x8Schematic.svg "Driving Circuit for 2x8x8 Core Memory Matrix")

While some systems introduce an extra wire, for a total of 4 wires threaded through each core, it would make weaving by hand difficult. Instead, we can repurpose the sense wire as an inhibit wire. This is because the sense wire is only used for reading. During a write, we can send current through the sense wire for the inhibit function.

### Sense Wire Arrangements
The way the sense wire is threaded through the cores greatly affects the measured signal. In general, the aim is to reduce noise pickup by making sure induced voltages from the wires cancel out as much as possible.

![](MagneticCoreMemorySenseCompared.jpg "Left [Optimized Rectangular Sense], Center [Diagonal Sense], Right [Unoptimized Rectangular Sense]")

I have threaded the sense wires in 3 different arrangements to demonstrate the effect. In my experiment, I send a full current pulse in one direction at approximately 0us and 2us. Next, I send a full current pulse both in the opposite direction at approximately 4us and 6us.
![](MagneticCoreMemoryScopeTraceOptimizedRectangularSense.png "Sense Wire Response of Optimized Rectangular Sense")
![](MagneticCoreMemoryScopeTraceDiagonalSense.png "Sense Wire Response of Diagonal Sense")
![](MagneticCoreMemoryScopeTraceUnoptimizedRectangularSense.png "Sense Wire Response of Unoptimized Rectangular Sense")

Both the "Optimized Rectangular" and "Diagonal" sense arrangements showed very clear spikes at 0us and 4us which correspond to a core flip. While the same spikes were observed for the "Unoptimized Rectangular" arrangement, coupled noise also generates unwanted spikes which make it difficult to differentiate a core flip.

## My 512-bit Core Memory System
My memory is structured in 2 groups of 16x16 cores. The memory width is 2 bits, meaning 2 bits can be read or written at a time. The design is similar to "Driving Circuit for 2x8x8 Core Memory Matrix" figure earlier. By using several 1:16 decoders (constructed from 1:8 decoder), the desired location in the memory can be selected. Additional logic circuits were also used interface with the P and N Channel MOSFETS. Finally, a microcontroller (RP2040) was used to generate the waveforms to drive the memory and to perform tests.

### Memory Tests
Several tests, including "GALPAT Test", "Half Select Current Switching Test", and "Image Writing and Reading Test" was run continously. With a supply voltage of 3.20V, no error was detected within a period of 24 hours. This amounts to several gigabytes of data being read/written. However, at 3.10V or 3.30V there were occasion data errors. As such I am weary about the reliability. Moreover, data retention remains unverified due to the test configuration since the entire matrix is refreshed at least every 1 million operations.

## Making Your Own Core Memory System
### Weaving Your Core Memory Module
If you like to weave your own memory, I will provide some tips.

#### Simple & Small Module (64 bits or less)
If you are building a small memory array like 8x8 matrix, all you need are:
##### Materials Required
- 1.3mm Diameter Special Ferrite Core (regular ferrite will not work)
- 0.15mm Diameter Enamelled Copper Wire
- Solder
- Suitable PCB Frame
##### Tools Required
- Tweezer
- Soldering Iron

#### Larger Module (64 bits or more)
If you are building a much bigger memory array like mine, you can take advantage of some techniques to make it easier.

1. Technique 1 [Adhesive Jig Method]: First the ferrite cores are placed in jig, then an adhesive tape is used to pick up all the cores. Then, additional chemicals are sprayed to strengthen the adhesion.
2. Technique 2 [Welded Needle Method]: The soft copper wire is fused to a more rigid stainless steel needle. As such, it is easier to thread the cores without the wire curling.

##### Materials Required
- 1.3mm Diameter Special Ferrite Core (regular ferrite will not work)
- 0.13mm Diameter Enamelled Copper Wire
- 0.2mm Solid 304 Stainless Steel Rod/Needle [Welded Needle Method]
- Sandpaper [Welded Needle Method]
- 470uF 50V Capacitor [Welded Needle Method]
- Resistor [Welded Needle Method]
- Cloth Tape [Adhesive Jig Method]
- 3D Resin Printed Jig [Adhesive Jig Method]
- Arcylic Sealer Spray/ Wood Lacquer Spray [Adhesive Jig Method]
- Solder
- Suitable PCB Frame
##### Tools Required
- Tweezer
- Soldering Iron
- Adjustable DC Power Supply [Welded Needle Method]

### The Driver Board
For your reference, the complete PCB design files are provided as is. Your results may vary; modification of resistor values for the current limiting and sense detector may be required.

## Further Reading
If you wish to explore in much more detail, here are some useful resources I found on the web:
1. Jones, J. R. (1976, July). *Coincident current ferrite core memories.* Byte Magazine. Retrieved from https://ed-thelen.org/comp-hist/Byte/76jul.html
2. Naval Education and Training Command. (1978). *Digital computer basics (NAVEDTRA 10088-B, Rev. ed.).* United States Government Printing Office. Retrieved from https://www.ed-thelen.org/comp-hist/navy-core-memory-desc.html
3. Wayne’s Tinkering Page. (n.d.). *One bit ferrite core memory.* Retrieved from https://sites.google.com/site/wayneholder/one-bit-ferrite-core-memory
4. Sala, M. A. (1977, September). *Core memories: How they work.* Radio-Electronics Magazine. Retrieved from http://www.decodesystems.com/re-core-memories.html
5. Madrona.ca. (2003, December). *Magnetic core memory systems.* Retrieved from http://madrona.ca/e/coremem/index.html
6. Jones, D. W. (n.d.). *Doug Jones's Core Memory Index.* The University of Iowa, Department of Computer Science. Retrieved from https://homepage.cs.uiowa.edu/~jones/core/
7. IBM Corporation. (1967, June). *IBM Field Engineering Theory of Operation, Processing Unit System/360 Model 30  (Publication No. Y24-3360-0)*. Retrieved from https://bitsavers.org/pdf/ibm/360/fe/2030/Y24-3360-1_2030_FE_Theory_Opns_Jun67.pdf
8. McBride, J. (n.d.). *Core memory part 1: Ferrite comparison*. Retrieved from https://jeffmcbride.net/core-memory/single-bit/
9. Jarvin, S. D. (1965). *Ferrite core memory (Master’s thesis, University of Alberta, Department of Electrical Engineering).* Retrieved from https://archive.org/details/Jarvin1965/
10. Bates, R. M. (1968). *Coincident current magnetic core memories (Master’s thesis, Kansas State University, Department of Electrical Engineering).* Retrieved from https://krex.k-state.edu/server/api/core/bitstreams/11218bbb-d8b1-4875-a666-de67c7e94f1d/content
11. Freeman, J. R. (1954, September). *Pulse responses of ferrite memory cores (Memorandum M-268-1). Massachusetts Institute of Technology.* Retrieved from http://www.bitsavers.org/pdf/mit/whirlwind/M-series/M-2568-1_Pulse_Responses_of_Ferrite_Memory_Cores_Sep54.pdf
12. F-J's Physics. (2023, December). *Magnetic core memory explained (Part 1) [Video]*. YouTube. Retrieved from https://www.youtube.com/watch?v=T8VreNzldWc
13. Valenty, G. E. (1957). *A medium-speed magnetic core memory.* In Proceedings of the Western Computer Conference. Retrieved from https://dl.acm.org/doi/pdf/10.1145/1455567.1455579 