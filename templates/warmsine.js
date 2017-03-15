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
    name: 'warmsine',
    dump:  true,
    table: 1024,
    round: true,
    scale: 32767,
    plot: 'ascii',
    pn: 'file.png',
    type: 'hs',
    spec: '1:0, 0.5:0, 0.25:0.2PI'
  },
  template: template
};