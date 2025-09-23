export const midisharkProject = {
  id: 'midishark',
  title: 'MidiShark',
  shortDescription:
    'State of the art (former) music transcription model based on Transformer',

  fullDescription: `Music transcription is difficult because instruments like the piano produce many overlapping harmonics at once, making it hard to separate which notes are actually being played and when. We use a **transformer** based model to learn the "grammar" of music, i.e. music theory, and use it to transcribe piano recordings, trained on the MAESTRO dataset (200 hours of data)

---

## Results
### Real-world Demonstration
![Results Plot](/midi_shark_results.png)  
*Figure. Yellow = true positives, purple = false negatives, red = false positives. The model captures most notes but sometimes splits them or misses low frequencies.*

We ran our algorithm on **Never Gonna Give You Up,** which did not appear in our training data. We took the synthesized output of our transcribed MIDI and fed it into a simple synthesizer, see below:

<div style="text-align: center; margin: 2rem 0;">
<audio controls>
  <source src="/rickroll_synthesized.wav" type="audio/wav">
  Your browser does not support the audio element.
</audio>
</div>

### Quantitative Performance
We measured transcription quality with the F1-score on the MAESTRO test split:

| Model                         | Frames F1 Score |
|-------------------------------|-----------------|
| Sigtia et al., 2016           | 72.22%          |
| Kelz et al., 2016             | 71.60%          |
| Melodyne (commercial)         | 58.57%          |
| Onsets & Frames (Google 2017) | 78.30%          |
| **Google's 2021 Model**       | **82.18%**      |
| LSTM Baseline (ours)          | 74.44%          |
| **MidiShark (ours)**          | **79.01%**      |

Our transformer achieved **79.01% F1**, surpassing our LSTM baseline and slightly exceeding the original Onsets & Frames paper, despite using far less compute.

---

## Technical Highlights
- **Model:** Transformer encoder with onset + frame heads, velocity regression module.  
- **Data Processing:** Mel-spectrogram input (229×862) from STFT; MIDI converted to onset/frame/velocity arrays.`,
  
  technologies: [
    'Transformer', 'PyTorch', 'Audio Processing'
  ],

  iconType: 'music' as const,
  status: 'Completed' as const,
  color: 'from-green-500 to-emerald-500',
  duration: '3 months',
  teamSize: '4 students',
  year: '2021',

  links: {
    github: 'https://github.com/jonah-chen/midi-shark',
    paper: '/midi_shark_report.pdf',
  },
};
