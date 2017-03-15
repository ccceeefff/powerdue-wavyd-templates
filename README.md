# Wavetable Generation Scripts

The following tool generate waveforms for use with WMSynth on the PowerDue.

### Requirements
* bash
* nodejs / npm
* [wavyd](https://www.npmjs.com/package/wavyd)

### Generating New Wavetables
1. Make a copy of `template.js` and place it inside the `templates` folder.
2. Rename this new file as appropriate and set your name as `contributor` and `email` in the template. There will be a one-to-one mapping between the template filename and the generated `.c` file.
3. Under `opts`, modify `name`, `type` and `spec` based on the configuration for your new wavetable.
4. Run the generation script: `/bin/bash generate.sh`
5. Generated wavetables will be available inside the `instruments` folder.

### Integrating with WMSynth
1. Copy all appropriate `*.c` files inside `instruments` into your WMSynth project.
2. Update the `instruments.h` and `instruments.c` to include references to your new wavetable variables names. Typically they are named `_{name}` based on the `name` parameter in your defined template.
3. Compile and upload your new firmware onto the PowerDue.

### Contributing
Feel free to contribute new templates and wavetables to this repository.