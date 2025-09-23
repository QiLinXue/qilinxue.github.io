export const thesisProject = {
  id: 'undergrad-thesis',
  title: 'Undergraduate Thesis',
  shortDescription: 'Designed and built a high-finesse optical cavity to measure optical properties of materials to high degree of precision',
  
  fullDescription: `I created a device to measure optical transmission of a material to \\(0.01\\%\\) precision. This was done by creating a high-finesse cavity where light bounces back and forth between two mirrors. Measuring how this light decays over time allows us to quantify loss to a high degree of precision.

---

### Optical and RF Setup
I designed the optical and RF setup using the schematics below. The **Acoustic Optical Modulator (AOM)** is used to deflect the laser beam into the cavity when driven by an RF signal. Additional optics are used to feed polarized light into the cavity as we were interested in measuring the transmission through optical windows placed at the **Brewster angle**. Note that the RF pulse was generated using a mixer instead of a switch as switches are too slow.
![optical](/cavity_setup.png)
![RF](/RF.png) 
*Figures 1-2. The laser and RF setup.*

We tested on both sapphire and fused silica (UVFS) windows. The decay rate that we experimentally measure below is used to compute the **finesse** of the cavity, which characterizes the loss through our window. One observation was that the stress caused by standard optical mounts to cause **stress-induced birefringence** in our UVFS windows, which can substantially reduce the transmission.

![Ringdown](/ringdown.png)  
*Figure 3. Decay rate of the laser beam through the cavity for different materials. UVFS if mounted correctly has the highest transmission.*
`,

  technologies: [
    'Quantum Optics', 'Experimental Design', 'Electronics'
  ],
  
  iconType: 'book' as const,
  status: 'Completed' as const,
  color: 'from-purple-500 to-pink-500',
  duration: '8 months',
  year: '2024-2025',
}
