// ==UserScript==
// @name           MMA Pro Fighter
// @namespace      MMA Pro Fighter - Low Level Fighter
// @description    Fights the same players over and over.
// @include        http://mmaprod-78065944.us-west-1.elb.amazonaws.com/?*
// ==/UserScript==

GM_setValue('Fighters','16939,84263,77139,12504,16004,3253,93063,91578,15064,11295,60768,63994,83661,41659,45092,99776,7461,96420,31417,10202,53908,15737,88863,76056,89822,11285,36347,61583,33858,45912,81952,44453,70754,57155,82081,993,92783,92785,13758,29172,86114,17834,95692,7754,69166,75796,23450,4715,10383,97879,28907,25340,94464,17718,36321,66848,41580,98984,15400,47408,41884,79168,22517,26167,77176,89720,95248,17571,33891,47949,32032,10268,96641,28695,72568,32486,29516,47410,6103,83375,24579,83105,89775,63094,57578,40730,40143,46816,79158,69018,70552,89526,4728,12955,75679,88418,3786,44484,58793,67262,58350,44851,94740,50033,64126,2132,34233,18458,82439,53857,8844,35668,39401,37114,84945,89102,29387,19876,76804,94367,95845,43853,6669,76848,34634,33341,34786,31679,86045,34105,79129,72543,73737,34723,89484,5520,70979,56910,55852,48198,73375,52014,52607,33186,6038,51416,48528,75215,691,61403,64626,70339,2622,66134,55015,94641,30324,65494,22586,52033,46034,17737,12217,59618,92712,28318,13802,45092,71856,84487,32942,1913,61267,83672,48156,48451,16462,5455,30924,51095,69645,13008,87218,98285,4929,77824,92204,95706,44095,16081,1177,96352,71740,58978,18006,27460,3240,6331,50869,5992,88322,34190,17116,15679,55180,51642,29566,96952,98374,56442,16844,7691,77917,93386,53965,32519,40954,48544,70095,13689,74270,1277,96369,97943,55311,55947,77489,35778,90681,44277,36864,3409,80264,99833,93352,59395,28794,27747,38804,83685,88992,20677,5142,80875,52532,92753,32735,65857,46258,55286,60882,80723,98536,58745,84802,49570,92983,48474,8642,45363,39173,54798,76656,96827,86712,1927,22375,68826,60399,12605,87437,53986,51853,18370,80556,41243,63931,51618,69778,22488,96999,68332,11409,676,21746,24517,71624,99275,67198,927,14901,94258,27868,66246,90290,83802,23521,17866,52032,83912,55968,13510,44584,76654,58780,69144,69178,53103,25280,35624,62238,91295,45500,60789,3075,17725,91746,504,19968,49842,86237,90093,56071,41333,76091,88976,25199,32997,42214,17972,14968,63094,14138,8837,82439,11446,80288,41193,44936,80586,66118,29821,86728,70958,26290,95216,46684,90578,98399,16224,57640,39091,52858');

var Fighter = GM_getValue('Fighter',0);

if (document.title == 'MMA Pro Fighter') {
 var Fighters = GM_getValue('Fighters').split(',');

 GM_setValue('Fighter',Fighter+1);

 if (Fighters[Fighter] == null || Fighters[Fighter] == '' || Fighters[Fighter] == 0) {GM_setValue('Fighter',0); Fighter = 0;}
 window.location = 'http://mmaprod-78065944.us-west-1.elb.amazonaws.com/?url=fights/fight/'+Fighters[Fighter];
 return;
}

return;