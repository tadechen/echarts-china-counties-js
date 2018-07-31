(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('高陵区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610117","properties":{"name":"高陵区","cp":[109.088297,34.534829],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EE@@CCCCAAABCCB@AA@@AA@@CCA@AAB@AACABAA@@AABA@AB@@BBA@@AAB@@CFAAAB@@AAADABA@@@B@AH@@A@A@@AA@A@@BA@@@@@@B@@A@@@E@@@@@@@@CA@ACC@@BE@ABA@@BC@@DE@@AA@G@@BE@E@@AAAABC@@@C@@@AB@@ADC@@BB@@@@@@BAF@@@B@@EHABADA@ADCD@@CDGJ@@EICC@@CEAAACCAACAAA@AAGACAC@EAAAC@IACACAA@CBE@C@G@I@A@KAA@KAE@KA@@ICGCCAA@EAEACAA@GAIC@@CH@FAB@D@B@B@@@H@B@BC@@B@D@D@DA@F@@AD@@F@@H@B@F@@ED@AABA@A@@B@B@@@@BFBABD@@@AB@@@@@@@@@B@@@B@@AB@@@B@@AB@@@B@@@@BBAB@@@@AB@@@BB@@@@B@BC@@BB@@BBB@B@@@B@B@@AB@@BBADBBDB@AB@@@@@@B@B@B@@@D@DAD@BBB@@@@@BAB@@@@B@B@BJ@DA@ABBBA@C@@@@B@@@DA@@DD@B@@@@DB@@@AB@@@BA@@@@@@@C@@BA@@DE@@@@BD@@B@@BAB@@@@B@D@B@@BBAL@F@B@B@HD@@BD@@BA@@B@BIA@B@BD@AFBB@D@BABBF@B@@B@@B@BA@A@@DC@@DE@AAABCB@@@B@@A@AB@@@@B@@B@@@@BBAB@@A@@DEF@@ABAJ@@A@@B@D@@DBFFJB@EB@@@FB@DXB@FD@AFB@@@F@@FD@BEF@@@@@D@@AD@@BJBD@@@B@@@AD@@@@BBFB@DFCBBB@@FL@@CF@@BNB@B@BADLB@AF@@@@CHBAFB@@EHB@@@@@F@@BAD@@@BBNBAFD@D@BEXD@CD@DBH@DI@CB@@AD@@BD@@BL@@B@@B@@@@BA@@DD@@CF@BG@@BED@DIFB@CBCJBD@B@@@D@@CF@@FTBHB@FB@BKA@BEB@@EJB@E@@@@BA@E@ABIB@@CD@D@@EF@@CBA@AB@@DB@BA@A@AC@@AB@@CB@@ED@BC@AB@@AB@@CFBBC@CA@@AH@@AD@BEC@BQ@@A@I@@A@@A@A@BO@@A@BCB@@AA@@GBC@@@A@@DB@FB@BIB@@ABBB@@AD@BC@A@@@A@AB@@E@@@@@A@@CBA@BC@@@CA@@E@@BA@@DI@@@@DIBB@ABCB@BEIABG@@BEBC@A@@BC@@GABEC@@@@@@CD@AAD@@A@@@ED@B@@EB@@C@CC@AAAA@A@AA@AGCBCFCDA@ABCDCDIGAA"],"encodeOffsets":[[111774,35265]]}}],"UTF8Encoding":true});}));