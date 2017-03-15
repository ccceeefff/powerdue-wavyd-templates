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
    name: 'clean',
    dump:  true,
    table: 1024,
    round: true,
    scale: 32767,
    plot: 'ascii',
    pn: 'file.png',
    type: 'hs',
    spec: '1:0, 0.5:0.5PI, 0.25:0.25PI, 0.125:0.125PI, 0.0625:0.0625PI, 0.03125:0.03125PI'
  },
  template: template
};