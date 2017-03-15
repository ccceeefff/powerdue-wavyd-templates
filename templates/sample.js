var template = [
"/*===========================================",
"Wavetable for PowerDue/WMSynth",
"Contributed by: {contributor} @ {email}",
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
    // add your name to the contributors list
    contributor: 'sample',
    email: 'sample@sv.cmu.edu',
    // set the name of the instrument here
    name: 'template',     
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