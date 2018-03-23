(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('和龙市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"222406","properties":{"name":"和龙市","cp":[129.010106,42.546675],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@@A@@BA@@@@B@@AB@B@B@BA@@@A@@@A@@@@@A@@B@B@BAB@@@@AB@@A@@@@@A@AB@@@BA@@@@@A@@@@@A@@@A@@B@@@B@@AB@@@B@@AB@@A@A@A@A@@@AB@@@B@@@B@@@@@B@@@@@@A@@@A@@@A@@@A@@B@B@BA@@B@BAB@@@BA@@@@@A@@@A@@@@@A@@B@BAB@D@D@D@@@B@@@@@B@@@BAB@@@@@@@B@@@B@@@B@@@@AB@@@@A@A@@@@@A@@@@@@@@@@@@@@@AB@@@@@B@B@B@B@@@B@B@BA@@@@@@@@B@@A@@ACAA@@@@BA@A@@@@@@B@@@@@B@@A@@B@@@B@@@DCDAB@@@B@FADBDD@@D@B@BBB@B@BBB@D@D@JAB@B@B@@@BABA@@B@BAB@@@BABC@@BAB@B@D@FAB@@@B@BBBB@@B@@BBBB@DBDB@@DBF@@@D@F@BAD@B@BAB@DADABA@@B@DBLDD@BBF@@@@@@@DBF@@BDB@@B@HBDBBBDBDB@@D@D@DBB@B@BBBBB@BB@@B@B@@BDBD@BB@BB@B@B@@BB@F@B@FABADAB@B@@@@@BBD@@@B@B@B@B@DBB@BBFDD@BB@BBB@@@B@@BBBB@@B@@@BBDB@@BB@@BBB@BBFDB@@B@@B@BAB@BB@@@@BBB@B@B@B@DAD@BADBB@HBB@DC@@F@F@DBB@@@B@@@D@BABABADAD@@@B@D@@@B@B@DBBBB@BAD@DC@@DBDAB@@ABA@AD@@AB@D@DBD@BBB@D@B@B@F@D@B@B@BB@@D@B@FAH@@@B@@@BB@BB@@BD@DB@@H@D@DA@@@@@A@ABA@ABA@A@@@ABCBC@A@@@A@A@C@@@A@ABA@CBE@@@AFAB@@ADC@@@@BAH@BAB@BCBA@A@@@CBABA@@BABA@@@A@@BA@ADC@A@AB@@@AA@A@C@A@AB@BAB@@ABADABAB@BABA@A@AB@@@BA@@@ADCBA@C@ABC@@BC@A@A@A@@@A@AB@@A@@D@BA@@BA@@DA@A@@@A@AAA@@@@@AB@@AB@@ABA@@@AA@BA@A@A@A@@@@AABA@@@@BA@@@A@@AA@@A@@A@@@ABABA@@@A@A@@@@AA@@@A@@@AB@AA@@@AA@A@A@A@CA@@@@@A@A@@@@@A@@BA@@@A@@A@AACACA@A@@@C@@AAAAC@A@@AA@@@@AAA@C@@@A@@B@BA@@@@B@@AB@@@B@@@@A@@@@@A@@@@@A@@AA@AA@@@@A@AB@@A@@@@A@AAAAC@@@AA@A@AB@B@@A@@DA@@B@B@B@@@@A@A@@@A@@AA@AAAA@AA@@AA@AA@@@CAA@A@@@A@A@A@A@@AA@A@@@AA@@AAA@A@@@A@AA@@A@A@@@A@@@A@@@A@A@A@C@@@A@A@A@@@AA@@A@A@A@AA@@A@A@@@A@@BA@@AA@@@@AA@@@@@A@@@A@@@A@A@@BA@AB@@@@AB@@@@AAA@@@A@@@A@A@A@A@@BA@A@A@@@A@A@@@A@@AA@@AA@@@@A@@@A@@A@@A@@A@A@A@C@A@A@ABA@A@@@A@A@A@AA@@A@@@A@A@@@A@@AA@@AA@@@AA@@A@A@AA@@A@A@A@@AA@@@@A@@@A@@@@A@AAA@A@A@A@A@A@@@@@CAA@AAA@@@A@C@AB@@A@@BA@@@@@A@A@A@AA@@A@A@@@A@@@AAAA@@@@AA@@@@BAB@@A@@@A@@BA@@BABABA@@@A@@B@B@@@B@B@B@BAD@BADA@@@ABA@A@@B@@@D@D@B@BAB@@AB@@CBA@@BA@AB@@C@A@@@A@@BA@@CAA@@A@@A@A@@@@AAA@A@@A@AAAA@@AA@@A@@AC@A@@@A@@@@A@@B@AAA@@AC@AA@@A@@A@@@A@@BAB@B@F@FAB@@@@@@AAA@AAC@@@A@A@ABA@A@@@AB@B@@A@@@A@@AA@@@@BA@@BA@@@A@@AA@@C@CAA@@AA@CCCAAAAC@@@@@AA@@@@@A@@@A@@@AAA@A@AAA@A@@AAAA@@@AA@@A@@@A@@@@A@@@@B@@@@AA@@@A@@@A@@@A@@AA@AA@@AAA@A@AAAA@@@A@@@@@@@@B@B@B@@@BAB@@@@@B@@@B@B@@@B@@@B@B@@@BA@@@@BA@ADC@ABA@A@ABA@@B@BA@@B@@@@AB@@@@@B@B@@@B@@@B@BA@@@@B@@@@BB@@@@@@@B@@A@@@@@AB@@@@@B@@@B@@AB@@@BA@@@ABA@@@A@@@@B@@@B@@@@@@AB@@@BAB@B@B@B@@@B@@A@@B@@@@@@AB@@@@@@@@A@@@@@AB@@A@@@@@A@@@A@@AA@@@A@@B@@AA@@@@A@@BA@@BA@@@A@A@A@@@A@A@@@A@@B@@A@@@A@@@@@@@AAAAA@@@AA@@A@AB@AA@A@@B@@CB@BA@@@A@@@A@A@@@A@A@@B@@A@@BA@@AAAA@@AA@CAA@A@@BAB@@A@AACAA@CAA@C@@@@B@@@@@B@D@B@B@@@@@@@@A@@@ABABAB@@A@@@AB@@A@@B@@@AAB@@@@A@AB@BAB@BA@AB@@ABA@@BAAAB@BEBC@@@ABA@A@C@ACC@@@ABABA@AB@DAA@AAAGACAAA@EBM@GABOLG@ACACAMBAA@ADCRMHEFCBC@CCCEAeFOOIBOHMDA@AC@EACACGEICKFMDI@GCAOKMCCAGFGLITIVMBGCGEIOCQASBYFOAIGDK\\C^DNAAKKEYMQAICAEAEDCVCH@LBDA@EGGAEAGGEKCM@aBKAEEAK@O@G@EBCFAH@LFHDJ@HCBGKKEE@EFKRCT@@KKG_CE@C@CACI@CAACCKEIEKAEAE@CCAE@EBC@CFG@A@AAAAAIAWBUBIEAG@GBCIIGECCCE@A@ACAC@E@CBCDABC@GACAGACACBCBCD@BADAHAD@BCDCDEBC@E@AAAAEC@CBCDCBCDEBC@AAAC@EBGAC@GBC@AAAAAGAAEBCBC@A@ACECCC@ABE@CAAGAGAAAAABAB@FAJBF@D@BA@@ACIAEAAA@EBABA@AGCC@AAEECAGBKBEACCCCAC@CAC@@A@A@A@ABIBC@G@GBA@@AGACAI@A@CDIFA@CAAACCECKGCG@G@KAM@APM@EAICQEWEIIAGCOIKG_CIBQDEDADEJEDQCO@QDUJ]CSFMJOFSBUDSCCKIAKBMDSVKFY@MMMOm_WGUCQBOBGFANEJSHMBOCQGOAMBECEGBOGQcOWEQDULOCECGBWDGAGAOAA@M@EBQN_NKLCA@@AB@BC@@@A@@@@@A@@A@@@@@@@A@@@@@A@@A@@@A@@@@@@B@B@B@BBBBB@BBB@@BD@BBD@B@L@H@@@BADAF@BAD@B@BAD@@ADABABABABABAB@@@@@B@BAB@B@B@DAD@@@@@B@@BBBB@@@B@@@@ABADCD@DAD@@@@@B@DBD@@@@B@D@BB@@B@@BBB@@@B@@@BAB@B@B@B@BAB@B@BAB@@@B@B@B@B@B@DBB@DBB@@@BBB@@A@@BEBC@@BA@ABABAD@BABAB@BA@AB@@ABEBCBCBA@CB@@A@A@A@AAA@A@A@A@@@@@@BAB@B@B@DBB@F@B@D@D@B@@ABABAD@@@BAD@B@@BBBD@@ABCBA@@@A@A@CBC@A@ABA@A@CBA@A@CAC@A@@BC@@BA@@BA@@BA@@@ABA@A@@@@BA@@@@B@@@@@B@@A@@FAFAD@BBDDDDDDDHBDBBDDBBB@B@@AB@@ABA@ABA@ABA@@B@@@B@B@B@B@@@B@B@B@@AD@@@D@B@@@BBBBBB@@BD@@@BAB@BAD@@@D@@@D@B@B@B@F@D@D@B@DBD@B@BBB@BBB@BBB@DBB@B@BBD@BBB@BB@@BB@B@BA@@BBB@B@B@@BB@@B@B@B@B@BB@@B@@ABABA@@BAD@B@D@B@H@D@B@B@D@BAB@B@D@B@B@DAB@B@BBB@B@B@B@@AB@B@@AB@B@B@B@B@B@BBD@D@B@B@@@B@B@B@B@DBB@B@DBB@B@@BF@F@B@B@B@@@D@DAB@B@B@D@D@D@B@B@BBB@DBB@BBBBB@@B@@@B@@@B@B@B@@BBB@BDB@DBBBDBD@BBD@@B@@@@@BBB@@@B@@BB@@BBDB@@B@BB@@B@Ĺ]fXŖEARTd^PdQNaVYN[RAX¹[ZGfdFGlENHRLJjRZFZ@FBDBDBD@DDD@B@DADAD@@@BBFBB@BAD@DBBBDDDBD@BADADCDADABCF@B@D@B@BBD@@BB@@@@BD@D@BABADADAB@B@@A@@@EBC@E@EBA@ABC@EBCBCBABABAD@DAF@BBBBBBBDBDBDDDDBB@B@DCBCBABAD@B@BDBDDBD@BABADEDEFAB@B@D@B@BA@CBCBCBCDCDCBA@@@AB@@@BBB@@@D@D@FAH@B@D@DBDBBA@@@@B@@@@ABA@CB@@AB@B@@@BA@@@A@A@C@E@C@@@@B@@@B@@BB@@@B@@@BAB@@BB@B@@AB@@@BADA@@@ABA@@@GDEBEB@@A@ABABCBABCDA@ABADAB@B@@A@@@CBA@@@@@A@@BEDC@@B@BBDDH@B@BBB@B@@BBBB@@A@ABAD@BAD@BA@ABABABCB@BA@@B@BAD@B@DAD@D@B@B@@@B@@@B@B@BAB@DB@@@@BB@BBB@@@B@@B@@@@A@@B@@@BA@ABCDEDA@@B@B@BAB@D@@BD@@@BBB@BBB@@BB@BBBBBDBDBB@@BB@BD@@BB@B@@@B@B@B@@@BBB@B@BB@BB@BB@@BF@DBB@@BB@@BB@@@B@B@D@D@B@@@B@@@BBB@BBB@@B@@@@@@@B@@@B@@AD@@BB@B@B@@B@DBBBDBBBBBB@@@@BB@@@@B@@@@@B@B@@@@@B@@BD@@BDBB@@BDB@@@@BD@@@@@@@@@B@@@@@BA@@@@B@@@DA@@B@@@BA@@@@B@@@B@@B@@@@@@@BB@@B@@@@@@@@@@B@HDBBB@B@@B@@B@@BB@@@@@D@FBDB@BB@@BBDBD@DBHBJ@B@@@B@B@@B@@@@@B@B@B@B@@@B@@BB@@@@@FC@@BC@@BA@@@@@@B@B@@@@@B@@@@AB@@@@@@A@@@@@AB@@A@C@@@A@@@@@@B@@@@@@@DAB@BAB@@@@AB@@@B@B@B@@@BAB@@@@@B@@@B@@B@@D@B@B@B@@@B@@@@@B@@AD@@AFALC@@B@DCB@@@BABA@@B@@AB@DA@@B@@@@@@@B@@@@@@@B@@@@@@@B@BBDBBB@@DBB@@@@@@BB@@@@@B@@@@AB@DABABAB@DAD@@AB@@@BADAB@@@@AB@@AB@@@@@B@@@@A@@B@@@B@D@@@@@B@@@BA@@B@@@BAB@@AB@BAB@B@@@@@B@@@B@BBB@B@@@@@@@BBB@@BB@@@BBB@@@@@@@B@@@@@@@@@B@@@@A@@BAB@@@@@BABA@@@@@@B@@@@@BB@@@@B@@@@@B@@A@@@@B@@@@@@@B@@@@@BA@@@@@@@@@@B@@@@@@@@BB@@@B@@@B@BAB@B@B@@@@@B@@@@A@@B@@@B@@AB@@@@@B@@AB@@@B@@@@@BA@@@@B@@A@@@@BA@@@@@@@A@@@@@@@@B@@@@A@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@AB@@@@@BA@@BABA@@B@BABAB@@AB@@AB@@@@@@A@@@@@@@A@@@AB@@A@A@@@A@@@A@A@@@@@@BAB@DAB@BA@@@@@AB@@@@@BA@@@@FAB@@@BAB@B@B@@@@@@@@B@B@@BB@@BB@@@@B@@@@@B@@@B@@@@@@@@BBB@B@B@@@@@@B@@@@@B@@@@@@@@@B@DA@@DAB@B@D@@@@@B@B@@B@@@@@@@@@B@B@@@@B@@BDBBBDDB@B@BB@@B@@@@@BB@@@BBFBB@@BBBB@@B@@@B@B@B@B@B@@@B@@@@@@B@@@@@B@@@B@BAB@@@B@D@@@B@@A@@@AB@@A@@BA@@B@@@@@BBB@@@B@B@F@D@B@@@BA@@BABAB@@ABAB@@ABA@A@A@A@@@A@@@@B@@@BAB@@AB@B@B@@@B@B@BBB@B@@BB@@@@AB@BABAB@@@B@@@@@B@@@B@@AB@BAB@BABA@@BABA@@BAB@B@@@B@B@@A@@BAB@@ABABA@@BAB@@ABABA@@BAB@@@B@B@B@B@@@@B@D@D@D@B@B@@B@@B@BBB@D@FAD@D@D@B@D@B@BBBB@B@BBDDBBBADCBADAB@B@B@B@B@B@@BB@BA@@B@BA@@@@BBDBDDB@BB@@B@@ABABABAB@BDBF@B@BBB@BBB@DBB@B@BB@@BBB@BABBBA@@B@@@@A@@@A@A@@@A@@B@BCBABAB@DABAD@B@BBD@BABAB@DAB@B@B@@A@@BA@@BAB@B@@@BAB@@BB@@AB@BABAB@BAB@BCBAB@B@@AB@BA@AB@@A@ABA@@@@@AB@D@B@BAB@B@@@BB@@BB@@BB@D@B@BB@@BBBBBBB@BBB@@@B@BA@@D@@@B@@ABED@B@D@B@@DBB@B@BBBBBDBB@B@B@@B@@B@@D@B@@@B@@B@@@BB@@B@@BB@@@@@B@@B@B@BB@BB@BBBBBB@@B@DBD@B@B@@@B@@B@@@@BA@@BA@@BAF@DC@@B@BA@BD@D@@@B@B@DAB@B@DBB@B@BB@@BB@@@B@A@@@@@@@AB@@@@A@@@AAAA@@AA@@A@@@ABA@A@@@A@A@A@@B@@AB@@@@@AA@A@@@A@@@@BA@@B@BA@@B@@ABAB@@AB@@A@@@A@@BABAB@@@BAB@B@@@BA@@BAA@A@@AAA@@@AAA@@BA@@BA@@BA@@@A@@@@AA@@@A@@@AB@BCB@@ABA@A@@BAB@@@B@BAD@@@B@@AB@@AB@BA@AB@@AB@@A@@@ABA@@@@BAB@@ABAB@BAB@@A@ABA@@@A@AB@BA@@B@D@B@BAB@BBB@@BB@@@@@B@@A@@B@@@B@B@@@@A@@@A@A@@AA@AB@@AB@BA@@@@AAA@AAA@@AA@A@@@@A@A@A@A@ABA@@@ABA@@@AB@@AB@@@B@B@@A@@@A@@B@@AB@@@@A@@@AA@@A@A@@BAB@@AB@BA@@@A@@@AB@@A@A@A@@BA@A@A@AB@@AB@@ABAB@@@@A@@@@@@@A@@AA@AAA@@@A@@AAA@@ACAAA@A@@@AB@@ABA@@@@@A@@@AA@AA@@@@@@@@@A@@B@@AB@@@@@@@B@BAB@@@@@@@@@@A@@@AB@@A@A@@BA@@@@@@B@@@B@BAB@@@B@@@BA@@@@@@@A@@@@@AB@@@@A@@@@BABA@@"],"encodeOffsets":[[132113,43847]]}}],"UTF8Encoding":true});}));