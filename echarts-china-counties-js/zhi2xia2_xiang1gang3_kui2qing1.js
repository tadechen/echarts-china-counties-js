(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('葵青区', {"type":"FeatureCollection","features":[{"id":"810017","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@AECBMBECGA@CDEPEBA]QDGBGj@@cUADF@F@DCFIFSJQTQBaASPEBGzTJvB@MHBLFDDDJ@FCD@@ZJHBBIJBBCCI@GDKEI@EBKHG"],"encodeOffsets":[[116892,22877]]},"properties":{"cp":[114.13918,22.363908],"name":"葵青区","childNum":1}}],"UTF8Encoding":true});}));