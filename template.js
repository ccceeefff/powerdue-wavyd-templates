var template = [
"/*===========================================",
"Wavetable for Open.Theremin",
"Generated at {date} by wavyd",
"Type: {type}",
"Spec: {spec}",
"============================================*/",
"",
"#include <Arduino.h>",
"",
"const int16_t _{name}[{table}] PROGMEM = {\\",
"*{value}{-,}",
"};"
];
 
module.exports = {
  opts: {
    name: 'template',     // set the name of the instrument here
    // modify the following 2 parameters to generate waveform
    type: 'hs',           
    spec: '1:0, 0.5:0, 0.25:0.2PI',
    // presets for PowerDue / WMSynth
    dump:  true,
    table: 1024,
    round: true,
    scale: 32767,         
    plot: 'ascii'
  },
  template: template
};