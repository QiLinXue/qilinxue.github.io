export const weatherTankProject = {
  id: 'weather-tank',
  title: 'Capstone Weather in a Tank',
  shortDescription:
    'Experimental apparatus for studying atmospheric and oceanic phenomena, currently in use by the University of Toronto Advanced Physics Lab course.',

  fullDescription: `We transformed a classic "spinning tank" demo into a **quantitative atmospheric science lab**. Using laser-illuminated tracer particles and a custom Particle Image Velocimetry (PIV) pipeline, we extracted full velocity fields \\(u,v\\) at mm-scale precision, allowing students to observe several key atmospheric and oceanic phenomena.

---

### Taylor Columns
In a rapidly rotating fluid, obstacles behave as if they extend vertically through the entire depth. Instead of sliding over the puck, the flow is forced to deflect sideways, creating an **invisible wall** known as a Taylor column.  

![Taylor Field](/taylor_field.png)  
![Taylor Streamlines](/taylor_streamlines.png)  
*Figures 1–2. Velocity vectors and streamlines showing Taylor column behavior around a puck.*

### Thermal Wind
A temperature gradient (i.e. caused by North Pole) causes a shear force, creating a current with velocity \\(u_{\\phi}\\) that scales linearly with height \\(z\\) as:
\\[
\\frac{\\partial u_{\\phi}}{\\partial z} = 
\\frac{\\alpha g}{2\\Omega}\\,\\frac{\\partial T}{\\partial r}.
\\]  
We were able to measure this slope experimentally to be \\(m = 0.14\\,\\text{s}^{-1}\\), which matched the prediction \\(m_{\\text{theory}} \\approx 0.17 \\pm 0.03\\,\\text{s}^{-1}\\).  
![Thermal Wind](/speed_vs_radial_distance.png)  
*Figure 3. Azimuthal speed vs radius at multiple heights, matching thermal-wind scaling.*`,
  
  technologies: [
    'Particle Image Velocimetry (PIV)', 'Arduino', 'OpenCV',
  ],

  iconType: 'award' as const,
  status: 'Completed' as const,
  color: 'from-blue-500 to-cyan-500',
  duration: '4 months',
  teamSize: '4 students',
  year: '2025',


  links: {
    github: 'https://github.com/jonah-chen/WiaT-PIV',
    documentation: '/ATM_manual.pdf',
  },
};
