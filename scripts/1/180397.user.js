// ==UserScript==
// @name           Rotten's world-war auto invite updated by Ice
// @namespace      rot
// @description    Invites a whole bunch of people to your alliance
// @include        http://wwar.storm8.com/group.php*
// ==/UserScript==
var numClick = GM_getValue('autoclicknum', 0);
var codes = ['Q39A6Q',
'DWCV6K' ,
'CVJS49' ,
'E9QNYE' ,
'PMER5Q' ,
'F4DWC2' ,
'GAV6TH' ,
'WX377R' ,
'9CCA94' ,
'RRHC5S' ,
'WEQ7J7' ,
'PQCK6J' ,
'FN7WQV' ,
'9YV24Q' ,
'BCNJ26' ,
'2588HK' ,
'PFJGS5' ,
'3QRS8G' ,
'3NX9NP' ,
'QRSVJP' ,
'8QKVJP' ,
'AF9K2W' ,
'Y893A3' ,
'K99EFP' ,
'F59CU9' ,
'GD7FKF' ,
'CMYH42' ,
'2M7X9U' ,
'HUVKQG' ,
'NPJTWV' ,
'HUBKQG' ,
'JHG4TV' ,
'4B6MDD' ,
'94XRYX' ,
'7BFA3C' ,
'J58E9D' ,
'WUJ29H' ,
'3Y2ECT' ,
'U59RYD' ,
'46J3TX' ,
'HQD5C6' ,
'RFM5UN' ,
'WDAENH' ,
'GRTTH6' ,
'9MXGBB' ,
'RBQH8W' ,
'H69YM6' ,
'W2WCPP' ,
'THH983' ,
'PE4YJP' ,
'V39KRH' ,
'KR35DE' ,
'PCPR83' ,
'P9YAUD' ,
'PS5G3C' ,
'3U8D3Y' ,
'C5RYYU' ,
'B2D7D3' ,
'Q3WVK9' ,
'FJC96X' ,
'AFR694' ,
'H642R5' ,
'NNFV8G' ,
'KU97QU' ,
'BCP6ER' ,
'HDCXMC' ,
'B543C4' ,
'GMS8RX' ,
'CTE53H' ,
'MVDVGJ' ,
'GWA4RD' ,
'5V6DF5' ,
'FDKRBD' ,
'9Y2XM5' ,
'39428R' ,
'WUDAGB' ,
'DR422K' ,
'UFM355' ,
'Y78BFQ' ,
'8SS425' ,
'96FFDS' ,
'SUWG63' ,
'4MGE94' ,
'3NJRHY' ,
'8D42RA' ,
'XYAW22' ,
'KFATJD' ,
'A63GSK' ,
'QAXXQA' ,
'5NC5W2' ,
'JDK7DM' ,
'DQF86H' ,
'PSS9QR' ,
'ETYG6B' ,
'BEVSEP' ,
'N27WEE' ,
'WT7N6K' ,
'5Q5Q6D' ,
'3BMNYB' ,
'5WMTXH' ,
'B4QU6V' ,
'4CCSJJ' ,
'DTE8KQ' ,
'SMG25N' ,
'U3A8BQ' ,
'Y9WS8S' ,
'VF9WJR' ,
'VMQVR3' ,
'YRK4GU' ,
'U9Q8FT' ,
'NSA3FQ' ,
'FAYGWR' ,
'CEU64U' ,
'B952Q5' ,
'D9GGHA' ,
'RDWCTN' ,
'BTJ7QE' ,
'5R7GGD' ,
'FYPSTA' ,
'AB596M' ,
'P2G5PR' ,
'USSS4H' ,
'MHDGYV' ,
'DGNGT5' ,
'5GXSES' ,
'MS4HAE' ,
'3YYQYJ' ,
'322YJB' ,
'96KQWJ' ,
'URK9EK' ,
'WJ7X7S' ,
'CQJAGW' ,
'UHJENB' ,
'FWNKYF' ,
'BKYM36' ,
'XUT7KX' ,
'58N4U6' ,
'EUX744' ,
'5Q6HTU' ,
'NBN7RG' ,
'XCN2PC' ,
'GEMBQ6' ,
'JP3JPY' ,
'U5QPAF' ,
'2GH3DX' ,
'3PBPYR' ,
'UPKHD9' ,
'N2VB54' ,
'YAV8G6' ,
'6V2MJ2' ,
'K4VT6U' ,
'Z1SQ1' ,
'HMSQTK' ,
'XRGJYE' ,
'FBFNR6' ,
'J4JTDX' ,
'HQ3SAF' ,
'WHJU3B' ,
'CKSP85' ,
'D57JBE' ,
'9QT2DF' ,
'BDA7SK' ,
'8GN89R' ,
'P67WVH' ,
'8DX5Y6' ,
'WHJUCB' ,
'P8VTXT' ,
'6R935M' ,
'F658G6' ,
'GUEWFM' ,
'D5K5K2' ,
'XWRDBY' ,
'6T9V4R' ,
'ASAHUE' ,
'MHCJVW' ,
'ARK4A5' ,
'TAA8CC' ,
'DD895F' ,
'G43GKQ' ,
'FSA48X' ,
'9TW9SH' ,
'VNQT1Z' ,
'BE2XJA' ,
'D4KWR6' ,
'QGUPYB' ,
'FWMKYF' ,
'WSEY6T' ,
'CQDGM9' ,
'2P6B8W' ,
'9G5A96' ,
'GNN8QY' ,
'HK6CN3' ,
'JV9MWD' ,
'DD6UTH' ,
'5GGJBP' ,
'W495W7' ,
'MBUYGX' ,
'UJHENB' ,
'2PJJ38' ,
'VA99PE' ,
'K95JVH' ,
'877WV8' ,
'C9JYMP' ,
'D66RDF' ,
'XH4XY9' ,
'3U8TY8' ,
'UMPD3D' ,
'J7MWBS' ,
'Q3X9PY' ,
'3XXQPG' ,
'YJ8WJ5' ,
'B4NHCR' ,
'9JKTFW' ,
'V55PKF' ,
'EC3XQ9' ,
'N7VX55' ,
'6WV3AH' ,
'TXERXY' ,
'BQUFVN' ,
'CYBRJC' ,
'G7JB9G' ,
'PB942W' ,
'43ANER' ,
'VA3TV9' ,
'TK2UNH' ,
'3X5RA3' ,
'KKADV5' ,
'3VNP88' ,
'BVQFVN' ,
'UXMXHU' ,
'39TH8Q' ,
'32BVN7' ,
'NMPMHP' ,
'QMGTUJ' ,
'B5CUJ7' ,
'EHJTSK' ,
'QB2VBP' ,
'7FN56A' ,
'7RNT7C' ,
'MP62GB' ,
'SD63QS' ,
'CDS468' ,
'A4T66X' ,
'74WEHA' ,
'XN9Y73' ,
'T5MCR3' ,
'U4GUYS' ,
'PGGE32' ,
'3748S7' ,
'UXKAHT' ,
'5G2FTD' ,
'CF2BVM' ,
'KCBFBH' ,
'MUAAMJ' ,
'YNXBYG' ,
'ASBG5V' ,
'2T4YNK' ,
'4VSUSD' ,
'YUM6DJ' ,
'5SGXBG' ,
'4WPJJB' ,
'RR4V57' ,
'8QB8VY' ,
'DG4GHW' ,
'S6757K' ,
'RRJTNP' ,
'7CCMS2' ,
'PU9DEU' ,
'DSPTFK' ,
'GMWNGQ' ,
'E2XUVP' ,
'YFQACU' ,
'D5C8UD' ,
'QDW9PR' ,
'5J94V8' ,
'BBGVPE' ,
'8XY2SX' ,
'J3X3MR' ,
'PQW54A' ,
'B2MST6' ,
'HE6NPH' ,
'9XY9JH' ,
'P3K7QT' ,
'C5MQRC' ,
'EMCE9K' ,
'BJKJVC' ,
'PXCN6E' ,
'UBYCXT' ,
'GSY7BP' ,
'QQ6SHC' ,
'7MMPBX' ,
'NJWB52' ,
'X4CYDJ' ,
'TKASE4' ,
'JPQ753' ,
'2J3C7U' ,
'MRCADG' ,
'8XB8TR' ,
'FAXN5H' ,
'EVQYGG' ,
'5U3JDM' ,
'9RSDPF' ,
'PAFSE3' ,
'42QKHY' ,
'34884T' ,
'C5VR4M' ,
'YXDCKU' ,
'4FVHWP' ,
'8XCFDD' ,
'VGKYGF' ,
'TSWBTT' ,
'KVCS8A' ,
'BG23CK' ,
'SPUYS3' ,
'H8QK2X' ,
'BK252K' ,
'F2WXT6' ,
'42DV3D' ,
'WPB4KE' ,
'HF5NKC' ,
'8QMH4G' ,
'AUUF5E' ,
'6PQTWR' ,
'J9D8DK' ,
'8S52KH' ,
'RRBEGA' ,
'A9QX2A' ,
'3CCMGB' ,
'22MD4Y' ,
'7988D2' ,
'HSFA2U' ,
'87J29D' ,
'4EE5SK' ,
'XN5FVQ' ,
'RBD83S' ,
'2NURXY' ,
'5HK8CJ' ,
'MWYAUE' ,
'MBM2YV' ,
'3BBM93' ,
'5E78C8' ,
'SGR5D2' ,
'GG7WAK' ,
'KUBYDM' ,
'QX3FGC' ,
'S26S8E' ,
'3NR3UM' ,
'8FMB3N' ,
'GDWGEC' ,
'SSG6HW' ,
'GUKQNB' ,
'U83UGS' ,
'CGX2E8' ,
'4DCAPY' ,
'EKSJ4H' ,
'G6UDSV' ,
'9FVCGJ' ,
'CMPSAM' ,
'TRM8NT' ,
'TKTPQ2' ,
'FHHJDJ' ,
'T7HTVA' ,
'D7B4EH' ,
'CP2BT8' ,
'TE4XEG' ,
'J7S2XX' ,
'89GECB' ,
'2JFXDS' ,
'E3P9MC' ,
'P3YQ4H' ,
'SUPMW5' ,
'39UBBT' ,
'29KAWV' ,
'M295GW' ,
'QMQDAB' ,
'N62TAA' ,
'3TNW59' ,
'KQEE5' ,
'D739HS' ,
'JB8MK9' ,
'VK2E7G' ,
'CV9DJA' ,
'JDVRG5' ,
'TURP7M' ,
'SGKEGX' ,
'26KAKD' ,
'3GHB3V' ,
'W63GJ8' ,
'8UK2AH' ,
'FTPE7H' ,
'9UTMBA' ,
'AYVT9Q' ,
'65TDAN' ,
'YQQHUD' ,
'W78J9Q' ,
'2JE57A' ,
'B3PHYS' ,
'PVGHH6' ,
'94P9UP' ,
'EXVKF7' ,
'C492S6' ,
'H8U26X' , 
'XVHMXR' ,
'BNTNE6' ,
'ASF2MK' ,
'BW89G5' ,
'PUA5HS' ,
'3WED9N' ,
'6Y7MV7' ,
'S5EEVV' ,
'UJRFDJ' ,
'929T26' ,
'PP8K5E' ,
'P7FCC3' ,
'KJ4JGT' ,
'LJ4JGT' ,
'V3AHVV' ,
'D4W34P' ,
'H8EUVC' ,
'4W2F43' ,
'MHRHP5' ,
'HJURJT' ,
'XF5XD9' ,
'CRXV2U' ,
'K2EUNU' ,
'5TATVM' ,
'QXY344' ,
'J2QVKK' ,
'K8RHPG' ,
'GKSXJF' ,
'8BSGR7' ,
'RRP5KF' ,
'UKPV9K' ,
'PMJSPR' ,
'YFE4QE' ,
'XGQUBV' ,
'Y49JJS' ,
'S622BQ' ,
'XUDKV6' ,
'9C44G3' ,
'6A5UGA' ,
'BHE3FY' ,
'8S64PS' ,
'8WTG6S' ,
'6DMS7B' ,
'G98F9S' ,
'NXKG5C' ,
'RVYB54' ,
'K3HCGU' ,
'X2VX49' ,
'DKT9YE' ,
'EU95AW' ,
'A3EGV9' ,
'YBCQ67' ,
'8N4VVU' ,
'NAH7AM' ,
'XY7TRC' ,
'Y6KVJB' ,
'P92DYN' ,
'63JNGR' ,
'MN5WV4' ,
'PBKTVQ' ,
'PBKTB' ,
'N67CCN' ,
'HJX6YB' ,
'Q55GMV' ,
'KYVM7G' ,
'F97EUK' ,
'MA8K3V' ,
'UNMBDA' ,
'DVJFDK' ,
'QBGXDH' ,
'WHQY2T' ,
'8P4RK5' ,
'WCS4ME' ,
'BFETR3' ,
'23FX89' ,
'YU42AN' ,
'WFTAXK' ,
'FE3E89' ,
'VJQPW9' ,
'T4DVAC' ,
'6YT8JW' ,
'PF7KMM' ,
'W6HRPD' ,
'TG4E9U' ,
'738BSE' ,
'4MBASK' ,
'TKESGN' ,
'3FUPCS' ,
'DQ9QVU' ,
'YS9HT3' ,
'KBV8GY' ,
'72XSGJ' ,
'3KJB7G' ,
'Y3G3U5' ,
'XDMV8P' ,
'CTXPU8' ,
'XK7GVM' ,
'NT8RX3' ,
'PBQXSW' ,
'T3J7WH' ,
'KQK7AD' ,
'B2M9CD' ,
'A64PD7' ,
'SC85QK' ,
'VYRWBK' ,
'SYHVQH' ,
'MAASCM' ,
'MCKU43' ,
'6D8AS9' ,
'NYABA3' ,
'JXRKWN' ,
'4UVWF4' ,
'VYSEA9' ,
'HTBQTH' ,
'4RJCX8' ,
'M327KN' ,
'M54DR8' ,
'WW3EVE' ,
'TTX4PT' ,
'AA963M' ,
'MEGXM2' ,
'85QH9Q' ,
'ED6XPK' ,
'R68QN9' ,
'HM5N38' ,
'NT8JBB' ,
'W6JD9X' ,
'G6Q397' ,
'U37YPA' ,
'PEXN6G' ,
'ENMVD6' ,
'R29JV3' ,
'3BY6N9' ,
'2K3RNW' ,
'4SH2QT' ,
'6F5GVW' ,
'QMMDXK' ,
'WMHK8Y' ,
'JX44BF' ,
'62F5PN' ,
'EY3M5N' ,
'W3CYTD' ,
'4F5KD8' ,
'CK7VN2' ,
'8Q7PX2' ,
'WC3YTD' ,
'595JBA' ,
'MWGSHD' ,
'JT8R7X' ,
'Q6UQY5' ,
'G98FPS' ,
'SPDNPD' ,
'Y8MMMY' ,
'BG33CK' ,
'F2H88Y' ,
'XVASMH' ,
'86S7P8' ,
'YYCFD2' ,
'FP7F4F' ,
'TFMNCP' ,
'K78K33' ,
'RP9Y42' ,
'D55VWT' ,
'4AHYD3' ,
'VKSKJM' ,
'88UNK4' ,
'9R9KTG' ,
'GY54HV' ,
'Q9H2D8' ,
'FSPED5' ,
'8D5NMP' ,
'4FEKJF' ,
'TKGKUE' ,
'9JKR9Y' ,
'6BDJUQ' ,
'AEMYMB' ,
'GKTQUW' ,
'WSA4QH' ,
'G5YHV4' ,
'3Y6AKB' ,
'57S9U6' ,
'AAAY5V' ,
'MTM3B5' ,
'K4H5EY' ,
'9CS53Y' ,
'DFKMQK' ,
'SPQAHQ' ,
'9FNX2G' ,
'CCKMKU' ,
'3KAGKH' ,
'9W4V39' ,
'EU7QYY' ,
'97MVFE' ,
'BHTGR6' ,
'DWXD8Y' ,
'RAHVMF' ,
'DCUVGJ' ,
'4GTC4X' ,
'86SDAN' ,
'W6PR6M' ,
'4GQTR8' ,
'U49ERC' ,
'3MBBXC' ,
'WKVHCY' ,
'FTGAGV' ,
'F83PCY' ,
'K45JF5' ,
'TQRKV6' ,
'NEBHR4' ,
'3N82FM' ,
'9BPMXE' ,
'GDF2Q5' ,
'VN7HVD' ,
'2MBEQA' ,
'6XXWY6' ,
'NB4QHQ' ,
'8EQ6FH' ,
'FMDAH7' ,
'B4J482' ,
'7UH5DW' ,
'4JJS2P' ,
'X59QGH' ,
'5AQ7HD' ,
'M7UTV2' ,
'4PP2FR' ,
'BV5UYG' ,
'HX8WY3' ,
'A4Y3C6' ,
'3Q3QEG' ,
'CX8MXF' ,
'M2UEBV' ,
'AVE9VM' ,
'7B4G85' ,
'75634A' ,
'AMEHX4' ,
'8UFR6V' ,
'CCA7SH' ,
'MHHKF5' ,
'2M6W7H' ,
'3AEXG2' ,
'8H7FQH' ,
'4Q5N5C' ,
'33VRRQ' ,
'GW69MW' ,
'WRTR3D' ,
'QF7FWN' ,
'N5PXGE' ,
'5VMWP3' ,
'3S4H5N' ,
'N4B8GP' ,
'KHE7YY' ,
'9D9XAE' ,
'54AQXV' ,
'X33UHR' ,
'V8XH3V' ,
'P9B8WP' ,
'B76BR6' ,
'BEHXCP' ,
'NCTRJW' ,
'7F7465' ,
'57X2YJ' ,
'BIGT71' ,
'6K4A6J' ,
'CTTHV6' ,
'8HER6B' ,
'8HUJGD' ,
'U2B2T7' ,
'6KSHQK' ,
'G2SAP4' ,
'MSN4SF' ,
'SGXU34' ,
'89JQ76' ,
'HPUGWP' ,
'2FY2PK' ,
'9HYSFR' ,
'PMQ95W' ,
'6R34DD' ,
'9F9T38' ,
'NBQ968' ,
'24P8DT' ,
'PED4GW' ,
'BH7YJM' ,
'6UYFDU' ,
'U2DHSY' ,
'8CAT8S' ,
'GQQNPX' ,
'VR6GPD' ,
'4B5A8T' ,
'K29AFT' ,
'F382YJ' ,
'SJDKEG' ,
'V5WSWP' ,
'TDQ7QE' ,
'BJMAUT' ,
'R8C3PQ' ,
'2G3MUG' ,
'YD47J3' ,
'QVS844' ,
'HMBAGC' ,
'A6UXBC' ,
'89U2QM' ,
'7QR6NG' ,
'QEFDAM' ,
'453GYR' ,
'4HWBPV' ,
'TDEBG9' ,
'65DDU3' ,
'VV4CGH' ,
'VBF35Y' ,
'M2WFEF' ,
'TU6V4W' ,
'DBU3XP' ,
'B4GMT5' ,
'47BFX8' ,
'JST4VK' ,
'D5ACRK' ,
'66STJT' ,
'6G9N73' ,
'4RKDGM' ,
'UEJKYQ' ,
'SA2758' ,
'38K8SF' ,
'9GV55N' ,
'KBB2WW' ,
'JAG23B' ,
'W9FNKA' ,
'KD2MV4' ,
'BV5H6A' ,
'6P58BK' ,
'4YW4SX' ,
'8NXUFT' ,
'FHD894' ,
'2G2CTU' ,
'AWN2R3' ,
'F9H678' ,
'25MVV4' ,
'JD3GAU' ,
'299HBT' ,
'2CTCNA' ,
'P59JSS' ,
'FTDQ5A' ,
'MS4J96' ,
'553F5E' ,
'816D01' ,
'H5E7TS' ,
'SM3UFV' ,
'SQNR9S' ,
'MWQQEH' ,
'84SBXF' ,
'S7H8KG' ,
'NHU8P6' ,
'HGMVQB' ,
'DGDTTW' ,
'2WGMX3' ,
'7B4G58' ,
'VCVG4H' ,
'GE2PXY' ,
'J9XCWE' ,
'GM5SG5' ,
'PWQ68V' ,
'KAXMGS' ,
'TD9898' ,
'KKX9AR' ,
'ASTQNR' ,
'AR6JRW' ,
'46TWU2' ,
'7E2RCV' ,
'HPUR88' ,
'TYFQK2' ,
'72FX84' ,
'NEC5CK' ,
'H8WJEY' ,
'SN27BK' ,
'CQMKRJ' ,
'SPY56C' ,
'K8SYXU' ,
'RE26ME' ,
'3AM8JE' ,
'MJYKA4' ,
'NWX6BK' ,
'HW5YXK' ,
'7JE2FB' ,
'9QJVST' ,
'SH4HEN' ,
'4FFVGR' ,
'T9ENUJ' ,
'8PXT7E' ,
'VXYQR8' ,
'FKA38H' ,
'6BR8CC' ,
'B4MK2E' ,
'MGPQE4' ,
'5FN2F5' ,
'DNK62G' ,
'XU8FR4' ,
'S8QXFK' ,
'39CGRF' ,
'3JKGAM' ,
'RX2SFA' ,
'4A54XR' ,
'TQYQ52' ,
'6B67R8' ,
'VVGVS4' ,
'KST548' ,
'3W2GRC' ,
'7GDAA4' ,
'TDB2NN' ,
'NEJ36M' ,
'WJPSE3' ,
'VXFXCK' ,
'4QEESF' ,
'RVDXQS' ,
'PE5EP9' ,
'FH8QSX' ,
'J2JGFG' ,
'CPBT66' ,
'CXC9DX' ,
'Y2YMAQ' ,
'RDPF27' ,
'38S6CQ' ,
'6RDETJ' ,
'PAGBS8' ,
'Q2EN92' ,
'323QDH' ,
'SMFAAX' ,
'592379' ,
'UJ39VX' ,
'KBPVAX' ,
'G7CVNS' ,
'TMRBX9' ,
'EFA3PK' ,
'KT2WNM' ,
'9HEV8X' ,
'PHTWUW' ,
'BET6FX' ,
'TC4YR7' ,
'U5AWKC' ,
'997S3B' ,
'AQ27PS' ,
'DXKXDN' ,
'PNR6GH' ,
'DJ4BTM' ,
'58V39D' ,
'BJ4GV8' ,
'QT7Y6T' ,
'826C3D' ,
'PEFG55' ,
'G85YJJ' ,
'XN7QER' ,
'5URRNS' ,
'3NH8UM' ,
'4AR7BE' ,
'MRTM6T' ,
'WBTV9E' ,
'YY3GYR' ,
'8QWNM6' ,
'MQG322' ,
'9GNGJW' ,
'82Q5A8' ,
'DMYRBM' ,
'D52BEB' ,
'JTSMH9' ,
'V2DJ3C' ,
'D99QXV' ,
'36JR28' ,
'VW4UCE' ,
'BJ8W7F' ,
'QXWDGU' ,
'6GTCPB' ,
'DNMBMP' ,
'8FXHAX' ,
'FJV7J9' ,
'8VY9AG' ,
'QXY6XG' ,
'CJDMPD' ,
'YYREB8' ,
'SHAXFB' ,
'MDSWAT' ,
'JHS2EH' ,
'8GB5W9' ,
'HV7DKE' ,
'QXBPDN' ,
'Q9GC63' ,
'YMC58R' ,
'B66V33' ,
'NWVCQW' ,
'9JX4SV' ,
'94FPKK' ,
'AU5KDG' ,
'FAHBXQ' ,
'TGDC8K' ,
'G36HU9' ,
'AYRAYQ' ,
'SKJSJR' ,
'4CNW4F' ,
'6P3HM2' ,
'92QASR' ,
'VMVYAV' ,
'ADUR99' ,
'AK2Y4F' ,
'UT6XAG' ,
'DHBPP7' ,
'RDMYCT' ,
'DS5EFE' ,
'EJ7376' ,
'43RPTX' ,
'7P4FPT' ,
'YYE8AY' ,
'KQBEE5' ,
'ATQS58' ,
'D2C63F' ,
'BEB7CN' ,
'3JYCC4' ,
'CFXCCF' ,
'F3KWKF' ,
'38F5VU' ,
'HH2E6W' ,
'Q7P5T7' ,
'TT46N4' ,
'KW9B5W' ,
'MEG5YN' ,
'7CSTE3' ,
'JGXBCR' ,
'IIJK8Y' ,
'GKGHW8' ,
'SHPGAG' ,
'MVWD2K' ,
'YACWBV' ,
'7X5YAJ' ,
'6X9GVH' ,
'MXK46H' ,
'BFGQMB' ,
'6P277K' ,
'7Q83HE' ,
'JBGSE8' ,
'GQ9HUP' ,
'8A4H7J' ,
'8CQWEE' ,
'AD3MF8' ,
'TFYMMB' ,
'DGDJH8' ,
'D7FBVC' ,
'XXER9R' ,
'YVPKSM' ,
'4CC357' ,
'2WSJF7' ,
'NXK5XW' ,
'E444M6' ,
'4HB2DA' ,
'AQ7K34' ,
'J2SB9C' ,
'NAP59W' ,
'86QA6U' ,
'PRC8E7' ,
'MPXY2T' ,
'72GSHQ' ,
'BSBYD6' ,
'SX7XQJ' ,
'MVBP6E' ,
'Q336VY' ,
'GKX4BB' ,
'C8H2F4' ,
'KPXWTC' ,
'JQSGGP' ,
'EE2MQG' ,
'2PQQT3' ,
'ES8UUR' ,
'CG6UVV' ,
'YHUQWA' ,
'57KRY5' ,
'9BKP6N' ,
'B59FVK' ,
'QMUKER' ,
'VJ3KVB' ,
'YYGJTK' ,
'QMQP1' ,
'SXRFG2' ,
'1VSNQ' ,
'CGCD2G' ,
'4UN8S3' ,
'2WGRGH' ,
'AKPRVK' ,
'226PA2' ,
'WQVB4C' ,
'2PT41T' ,
'2MG35C' ,
'2MG31C' ,
'43U31' ,
'RSHTAR' ,
'C9WHQJ' ,
'DGYQQK' ,
'2X2XTM' ,
'FW4UXQ' ,
'CJDBP3' ,
'PGTRXM' ,
'2XF28M' ,
'5TU3TW' ,
'VXM7F4' ,
'1SSVQ' ,
'5SDFSF' ,
'R11TTN' ,
'VUC7GT' ,
'Y76P5V' ,
'H7F5YH' ,
'7795HM' ,
'SQP3H9' ,
'VHVP6G' ,
'AMWQKT' ,
'GNMFN8' ,
'VTU3ZP' ,
'AGMDB3' ,
'DPY9YH' ,
'84P7EX' ,
'QCM5Y9' ,
'9MVAQ5' ,
'YAPKVF' ,
'PX3XCE' ,
'FCQVT4' ,
'QB8H5J' ,
'6TGCKF' ,
'HMXJVU' ,
'QUURXB' ,
'PKFWS9' ,
'UMV2JU' ,
'DM7WSV' ,
'5446E5' ,
'4538HD' ,
'PE3D7W' ,
'7PF27M' ,
'PRAA7J' ,
'TTVQYA' ,
'GVRSAK' ,
'QMJ66E' ,
'3C5CDH' ,
'AHU7F4' ,
'27VXCU' ,
'6JBVB7' ,
'FXMN7Q' ,
'TWBE72' ,
'C95PCF' ,
'KAVY56' ,
'DFHVMU' ,
'B6TDBH' ,
'MMX577' ,
'JNVUAQ' ,
'B3QCE2' ,
'4539HD' ,
'26REEV' ,
'C99HHX' ,
'MN7TY3' ,
'Y8MPSC' ,
'M6Y79P' ,
'HYS45F' ,
'CNCQUX' ,
'N9K2UM' ,
'PRQ5J6' ,
'KXH8UU' ,
'YUKX4C' ,
'PHFTMJ' ,
'SE57JH' ,
'GXXJY3' ,
'DGYHMG' ,
'CTB6UF' ,
'BB25N4' ,
'97SXVH' ,
'R9Y48W' ,
'JJWXA5' ,
'VK8JA7' ,
'QE9SKY' ,
'EPATMC' ,
'XJTTKY' ,
'MCUV8B' ,
'2E5HXY' ,
'YWYXTX' ,
'VHSCKE' ,
'EFXMMD' ,
'P6SEXC' ,
'D33H3C' ,
'F9UYFA' ,
'4K4VDY' ,
'JNSCBA' ,
'TT3QAH' ,
'T82TGY' ,
'6TKURA' ,
'A8G2QC' ,
'FYW5DR' ,
'G42FEV' ,
'DM4HSC' ,
'Y8TUGQ' ,
'94SBV9' ,
'8KF8QQ' ,
'AX6SK9' ,
'QYSRU2' ,
'3PXUVM' ,
'R7HFY6' ,
'V7NU26' ,
'VDQ7JW' ,
'JMEHXF' ,
'JYN9BV' ,
'APDFT7' ,
'D4GYPK' ,
'V2W7RX' ,
'GXRFF5' ,
'6AT3W8' ,
'X4E4CS' ,
'484Y8X' ,
'NJ2GDU' ,
'PC5PEY' ,
'XTDX6S' ,
'YHBUS9' ,
'KXC82K' ,
'HSR66N' ,
'P1RM1U' ,
'D7WNTD' ,
'SDKT7P' ,
'VJM3WM' ,
'H2QPDH' ,
'A49JPX' ,
'FQTVSR' ,
'5BENM8' ,
'X636KG' ,
'KG5M9H' ,
'VJMUK4' ,
'3PRWWD' ,
'8DPAH7' ,
'HPM46B' ,
'8DXJKN' ,
'DNFJWW' ,
'WBM3C4' ,
'HKU67X' ,
'CNXBSJ' ,
'DTRKB3' ,
'RGKVRB' ,
'2NE26Y' ,
'G3F6Q8' ,
'EP93E9' ,
'SBQ4GW' ,
'2F27X6' ,
'QGKNFU' ,
'W7982K' ,
'WHA8PV' ,
'H2QBDH' ,
'8TNPSH' ,
'GY32H2' ,
'VNXYRR' ,
'SA4JJR' ,
'9MDV8Y' ,
'5DSPBG' ,
'SYKNBG' ,
'UTS9PN' ,
'DMDV37' ,
'DCR7N9' ,
'4E6CTS' ,
'DB5K6T' ,
'KGAHUM' ,
'4PB2RH' ,
'DXGD68' ,
'WAK7GQ' ,
'NJGJK4' ,
'RVX86K' ,
'PDPQJF' ,
'7FB539' ,
'FK5WUB' ,
'ET6MSQ' ,
'FSUV59' ,
'9UH4CA' ,
'5RB65F' ,
'NAAXVX' ,
'PQMYHH' ,
'RPXVTY' ,
'QH8DB4' ,
'Q38AQM' ,
'UDHA55' ,
'SGMKAQ' ,
'MNPXNA' ,
'S5P9X9' ,
'TSPAX8' ,
'4XHXTU' ,
'HXFCC6' ,
'DHFE9G' ,
'RSR4S' ,
'EPCFKB' ,
'NVHDWH' ,
'EQF3PR' ,
'NEYW75' ,
'3SWGU3' ,
'X95X2V' ,
'UPCRVE' ,
'FGFX6V' ,
'WXR6BK' ,
'WWJK7T' ,
'QW5Q5U' ,
'EN9MPA' ,
'JHFK6G' ,
'V4C4NU' ,
'M54HST' ,
'FXPJ8U' ,
'SCH2G6' ,
'P6MCFT' ,
'7NK6RG' ,
'TH8A4P' ,
'Y7YJGR' ,
'GG4SKE' ,
'AX8YVA' ,
'C949WM' ,
'7QPVNR' ,
'WB8836' ,
'8GHHPH' ,
'R9VEXD' ,
'PYA224' ,
'BSNKJR' ,
'6JHCB9' ,
'WVES7A' ,
'KE2F5C' ,
'A48U5N' ,
'CY3ATD' ,
'JRVJRJ' ,
'ECVF95' ,
'Y3BAYJ' ,
'9CADGJ' ,
'QS7UHG' ,
'MNBMV6' ,
'NQ64HF' ,
'KQ5HKC' ,
'KJ3XHW' ,
'PSAT9R' ,
'K3M55T' ,
'WE7RAE' ,
'V2ERFS' ,
'UJBDRE' ,
'3JGXVU' ,
'6JGXVU' ,
'FAVDUF' ,
'SYH4RW' ,
'RJ3GUE' ,
'JUC3ND' ,
'JGVX5W' ,
'9QBCKQ' ,
'EE42JN' ,
'8AV4WE' ,
'V4BVEG' ,
'42QU38' ,
'A2YSH6' ,
'9JDKPP' ,
'C67T48' ,
'BKYWE5' ,
'D95744' ,
'63293R' ,
'VX2SGK' ,
'MRNWJ2' ,
'BA4DS3' ,
'DYRJND' ,
'HUMYC5' ,
'S8HTCW' ,
'4PDP6H' ,
'P8FBKE' ,
'SKW3VC' ,
'A27DAN' ,
'ASDUNU' ,
'2A7NMS' ,
'Q2RWYH' ,
'X3XJKA' ,
'B3KMNH' ,
'UQGQS6' ,
'C5RYYU' ,
'ETYG6B' ,
'YJ8WJ5' ,
'RBD83S' ,
'8JKK8M' ,
'W6T327' ,
'94P9UP' ,
'RR4V57' ,
'U4HQGN' ,
'5QK3ME' ,
'CGH47E' ,
'DEYCJP' ,
'3KAGKH' ,
'DFKMQK' ,
'S2GXUU' ,
'AYPHXG' ,
'UFM355' ,
'BEVSEP' ,
'KQN6HM' ,
'TNYET7' ,
'EJ7376' ,
'N27WEE' ,
'TDEBG9' ,
'SA2758' ,
'3PYFCN' ,
'HP4572' ,
'TRM8NT' ,
'JKB5VD' ,
'ASFXC5' ,
'CCKMKU' ,
'4Y9MHK' ,
'YJ9W2V' ,
'NJNNRY' ,
'SPQAHQ' ,
'YKAMEB' ,
'MJUXS2' ,
'QKB4CA' ,
'JJT7RK' ,
'9C44G3' ,
'5F5VS7' ,
'AHFSGA' ,
'A28HRX' ,
'DWHHHA' ,
'B4GMT2' ,
'AF9K2W' ,
'QRSVJP' ,
'PFJGS5' ,
'BCNJ26' ,
'2588HK' ,
'3NX9NP' ,
'3QRS8G' ,
'8QKVJP' ,
'9YV24Q' ,
'CVJS49' ,
'X6CKYM' ,
'AVBHCX' ,
'R4DMAR' ,
'D8J88U' ,
'4SAFYS' ,
'98NAH3' ,
'NEC5CK' ,
'GY9EFD' ,
'7UH5DW' ,
'A4Y3C6' ,
'JH8D46' ,
'A54P69' ,
'DQJWYV' ,
'STNGUR' ,
'BWC7VE' ,
'699VGV' ,
'JDMMQQ' ,
'CKWHAH' ,
'NC2ERP' ,
'W6PR6M' ,
'HVU6NS' ,
'96FFDS' ,
'6G9N73' ,
'CJJBRF' ,
'42DV3D' ,
'PE6BRF' ,
'KWTRVN' ,
'72FMXQ' ,
'BFQBG8' ,
'DUJRXD' ,
'66STJT' ,
'2GTEEP' ,
'45FKD8' ,
'DNMVBA' ,
'J3QBFC' ,
'PMER5Q' ,
'GTTFD2' ,
'Q7JQ3B' ,
'WDM2JK' ,
'4MGE94' ,
'7ME265' ,
'8EQ6FH' ,
'JVP5E2' ,
'ABBYER' ,
'5FENPK' ,
'GMRCGQ' ,
'F5P9P7' ,
'P2PUXV' ,
'UETJ2K' ,
'UB6JQS' ,
'9FNX2G' ,
'J2UHWC' ,
'FHD894' ,
'9GV55N' ,
'MNWC5F' ,
'HXXCYF' ,
'VRDCA3' ,
'FXKRT3' ,
'BBGKG4' ,
'A97P2G' ,
'F7R5S8' ,
'EWB8AW' ,
'GV6AM4' ,
'CWUNXA' ,
'47BFX8' ,
'MR634C' ,
'BKMRC8' ,
'NUJ7RA' ,
'ENU9R2' ,
'2927A9' ,
'9W4V39' ,
'XNH2SS' ,
'TRR9DN' ,
'KBB2WW' ,
'JAG23B' ,
'EU7QYY' ,
'97MVFE' ,
'BHTGR6' ,
'FXN7Y3' ,
'CN9N8M' ,
'DWXD8Y' ,
'WWBEFP' ,
'PEBNQ4' ,
'RAHVMF' ,
'W9FNKA' ,
'4GTC4X' ,
'86SDAN' ,
'DCUVGJ' ,
'4GQTR8' ,
'U49ERC' ,
'AEVUGS' ,
'HQGVQ6' ,
'WKVHCY' ,
'KD2MV4' ,
'BV5H6A' ,
'6P58BK' ,
'FTGAGV' ,
'D84B7H' ,
'RX4DF6' ,
'ME4W4W' ,
'BGCCDY' ,
'F83PCY' ,
'64VNAS' ,
'K45JF5' ,
'TQRKV6' ,
'NEBHR4' ,
'9C2EXN' ,
'4YW4SX' ,
'8NXUFT' ,
'3N82FM' ,
'88SEBY' ,
'HX8WY3' ,
'AWN2R3' ,
'9BPMXE' ,
'75YQNS' ,
'F9H678' ,
'WHMSKU' ,
'VN7HVD' ,
'NS494V' ,
'25MVV4' ,
'YDNEK4' ,
'Y3TE2N' ,
'X9FGEM' ,
'UBYF6N' ,
'VB3VPB' ,
'NHTSBD' ,
'HFQMU3' ,
'T4R4GV' ,
'MBWVXC' ,
'U3YNE3' ,
'57PGKT' ,
'H4YETN' ,
'P59JSS' ,
'FMDAH7' ,
'2CTCNA' ,
'J7BD23' ,
'3AEXG2' ,
'MV5X85' ,
'898Q7X' ,
'34FEST' ,
'R9575P' ,
'BKNS7C' ,
'2EBY7J' ,
'GWF53S' ,
'EYQEFW' ,
'D6J3NX' ,
'2AA6E5' ,
'B7S7Q7' ,
'TD2MHS' ,
'3U67N2' ,
'WD72NP' ,
'2QE9DW' ,
'HVJ4A7' ,
'2X9EFM' ,
'B4J482' ,
'JBY4PR' ,
'DNE27X' ,
'CYQ58A' ,
'V4M8WF' ,
'4JJS2P' ,
'V5X5PF' ,
'K6BT3R' ,
'78PW44' ,
'X59QGH' ,
'N9UMAQ' ,
'3WCZ62' ,
'XHHHUQ' ,
'CN93DU' ,
'5AQ7HD' ,
'M7UTV2' ,
'UUFEPU' ,
'Y7HFJ9' ,
'4PP2FR' ,
'3Q3QEG' ,
'MS4J96' ,
'DG8NUH' ,
'3Q3WEG' ,
'8F2QN9' ,
'5NA998' ,
'5HK8CJ' ,
'7NAJNG' ,
'WJW7A6' ,
'TAJ6C3' ,
'RDPF27' ,
'NXKG5C' ,
'XN9RV9' ,
'29KAWV' ,
'R44BDU' ,
'KD238W' ,
'B8PEPS' ,
'9JE4RC' ,
'J8DRBK' ,
'87NGR8' ,
'3UV22H' ,
'2JGK4W' ,
'5G864A' ,
'XBHU86' ,
'GBYPWC' ,
'57V8BY' ,
'ESJP8K' ,
'BFUNJX' ,
'MJNBGB' ,
'58Q8T7' ,
'KQRTFU' ,
'H2PEHX' ,
'N4B664' ,
'SC3UJV' ,
'N8J5ME' ,
'RJY3X4' ,
'E6DAUB' ,
'KMKPYD' ,
'3UV2TC' ,
'EUV8NV' ,
'NTH3TY' ,
'JBUR6N' ,
'X2DUYK' ,
'2HXDV8' ,
'ASAHUE' ,
'A3CHYX' ,
'V835PU' ,
'A47D3E' ,
'VEXGXN' ,
'N73YWX' ,
'A7YQ9N' ,
'ETRHXS' ,
'8GJ6Y9' ,
'CTVQHD' ,
'WBFYRA' ,
'GYSU7U' ,
'W9PB83' ,
'WR6CRP' ,
'CGG9DG' ,
'WHMV39' ,
'YQMN29' ,
'3MMHA3' ,
'HSTH8V' ,
'8SP4GS' ,
'E5VC4A' ,
'SV26PD' ,
'VAEY7Q' ,
'GED7TW' ,
'848SSG' ,
'88UFQB' ,
'NEGC75' ,
'DJAKG2' ,
'V9CQXG' ,
'6TPTXV' ,
'7JNG5Q' ,
'W5PSPB' ,
'9JB6NU' ,
'EC8TN3' ,
'3C8TN3' ,
'3HP9TX' ,
'QCTFPF' ,
'DUJW55' ,
'SB4JB3' ,
'WX7A4R' ,
'2HGSWU' ,
'TSPAH4' ,
'PYWNMW' ,
'RAVJW4' ,
'D4J25G' ,
'YT7UKY' ,
'RYGJ2T' ,
'GFXY7V' ,
'BAJKHF' ,
'RQ2877' ,
'N6NWKE' ,
'VJH2PK' ,
'4PRDMD' ,
'KUVMMW' ,
'XSAYHS' ,
'3VRFFY' ,
'KGRTM8' ,
'AHTE9J' ,
'GATPG8' ,
'AFWJ9F' ,
'F74NMK' ,
'WNUMTG' ,
'C4KMEB' ,
'NE96EY' ,
'AJCPAW' ,
'79BUFR' ,
'Q2NNT2' ,
'DPC52V' ,
'H3RVEF' ,
'NVQQAP' ,
'USBBQD' ,
'GDTQVM' ,
'AE6DKE' ,
'H7E2M9' ,
'U7QQGH' ,
'C8TEK2' ,
'BY2T8A' ,
'YEYUDE' ,
'ET6NYE' ,
'NVRMBP' ,
'NBXSYX' ,
'RBD83S' ,
'V4YPPC' ,
'UAHQ4H' ,
'YQ6WFU' ,
'WSF8C6' ,
'39YGCC' ,
'DWQEF3' ,
'GY6GKU' ,
'F882D2' ,
'894J5R' ,
'GT7XHX' ,
'FA7UPJ' ,
'WKDVXX' ,
'7A6DS2' ,
'2EUCMM' ,
'626BFF' ,
'UQ5MMB' ,
'F5VFSY' ,
'HEMDTX' ,
'M9GTTH' ,
'739G23' ,
'73RDUT' ,
'N4B665' ,
'9JE4RX' ,
'28947C' ,
'JA8NF3' ,
'QDMRNW' ,
'MHJB9E' ,
'Y7HY39' ,
'F59CU9' ,
'XCTWJT' ,
'SM8X6C' ,
'PMBKTF' ,
'DW5ANP' ,
'V4HEGU' ,
'JD4D5A' ,
'4J64N4' ,
'6MATYD' ,
'BHM6KH' ,
'FCRC4U' ,
'3Q7NJ9' ,
'8SGT3T' ,
'XUAR8E' ,
'P6RCPB' ,
'X38NKR' ,
'4M762H' ,
'62F5PN' ,
'75D7FG' ,
'53NHAU' ,
'9VNDMB' ,
'Q2BF8A' ,
'JJF6KJ' ,
'ANMK8B' ,
'F34FBV' ,
'TNEQM5' ,
'6THJQD' ,
'MD3QT8' ,
'RVYB54' ,
'CRXV2U' ,
'W64HAE' ,
'VA27TA' ,
'C44CNP' ,
'AK2Y4F' ,
'9F67SA' ,
'Q3278M' ,
'VJQ667' ,
'PX5DN2' ,
'XT7BWN' ,
'SBDT4Q' ,
'AJBV6Y' ,
'F237CF' ,
'TA7P65' ,
'9SFNWP' ,
'A23445' ,
'4D3T46' ,
'4TFWYV' ,
'7RHJYX' ,
'R849ER' ,
'XU44DB' ,
'2V8YGT' ,
'C948MA' ,
'54GEPM' ,
'F5XX8F' ,
'RFHABH' ,
'Q9YB7A' ,
'W9AC58' ,
'CPBT66' ,
'C5TD4M' ,
'VWH29X' ,
'Q2BF8A' ,
'XQE6QB' ,
'RVYB54' ,
'Q9UX34' , 
'NXV7MQ' ,
'8JFGQ3' ,
'PKNBVT' ,
'YKSM6N' ,
'S7JUBN' ,
'EW2ST4' ,
'AJBV6Y' ,
'ET3DPE' ,
'GA3JMM' ,
'SCBHQY' ,
'VUVMB2' ,
'HBT8AG' ,
'79YEHE' ,
'EDYKN2' ,
'RDGY7U' ,
'C2WB7B' ,
'92PTSH' ,
'P96KW9' ,
'TV37G4' ,
'KK7NM4' ,
'3TUG9P' ,
'JHSSJJ' ,
'W8EA2S' ,
'Y3EHTR' ,
'B32MBV' ,
'6SNS3E' ,
'E2NMYS' ,
'MM28AE' ,
'AJ2G7U' ,
'56YFPJ' ,
'8F2QN9' ,
'5HK8CJ' ,
'5NA998' ,
'TAJ6C3' ,
'RKK7DX' ,
'RDPF27' ,
'G98F9S' ,
'XN9RV9' ,
'29KAWV' ,
'R44BDU' ,
'KD238W' ,
'M8AFV8' ,
'B8PEPS' ,
'9JE4RC' ,
'3U8D3Y' ,
'NNAJRJ' ,
'GFWSUS' ,
'5G864A' ,
'N7BS4S' ,
'GXBXCH' ,
'C8265C' ,
'2GPNTF' ,
'BFUNJX' ,
'MJNBGB' ,
'KQRTFU' ,
'H2PEHX' ,
'RJY3X4' ,
'J9HDWT' ,
'HM8R5A' ,
'DTGUAE' ,
'EUV8NV' ,
'NTH3TY' ,
'JBUR6N' ,
'TGRS2T' ,
'HY56YX' ,
'GS2NAF' ,
'CAPNB3' ,
'D4W6YA' ,
'6BRUVW' ,
'V835PU' ,
'VEXGXN' ,
'A7YQ9N' ,
'ETRHXS' ,
'WBFYRA' ,
'VJH2PK' ,
'58Q8T7' ,
'CGG9DG' ,
'R8T4XK' ,
'E5VC4A' ,
'VGF6PE' ,
'VAEY7Q' ,
'WSEEXR' ,
'848SSG' ,
'D8DNXR' ,
'CWVBU7' ,
'DJAKG2' ,
'V9CQXG' ,
'7V4MQB' ,
'7JNG5Q' ,
'MRMVGP' ,
'EC8TN3' ,
'3C8TN3' ,
'QCTFPF' ,
'QNBUYK' ,
'WX7A4R' ,
'MQEXEU' ,
'2HGSWU' ,
'TSPAH4' ,
'64QEE8' ,
'RAVJW4' ,
'XS32JD' ,
'YT7UKY' ,
'DUJW55' ,
'8GJ6Y9' ,
'MG9REK' ,
'GFXY7V' ,
'RQ2877' ,
'WVWBUP' ,
'4PRDMD' ,
'KUVMMW' ,
'XSAYHS' ,
'3VRFFY' ,
'KGRTM8' ,
'GATPG8' ,
'AHTE9J' ,
'AFWJ9F' ,
'F74NMK' ,
'XMCNN9' ,
'3WUCCW' ,
'P3S7P7' ,
'C4KMEB' ,
'RHCF6V' ,
'NE96EY' ,
'AJCPAW' ,
'J8DRBK' ,
'8FB23J' ,
'UDKSNF' ,
'79BUFR' ,
'DPC52V' ,
'T7FNKF' ,
'T4VNPV' ,
'DS8M2Y' ,
'NVQQAP' ,
'8AV2U3' ,
'VYXYUD' ,
'URE43K' ,
'H57YN9' ,
'YGHHB2' ,
'PYWNMW' ,
'MJNBGB' ,
'KQRTFU' ,
'HM8R5A' ,
'TGRS2T' ,
'D4W6YA' ,
'M8AFV8' ,
'GS2NAF' ,
'DAAV8R' ,
'N73YWX' ,
'YJRM8G' ,
'CWVBU7' ,
'6WF2HN' ,
'5G864A' ,
'MG9REK' ,
'64QEE8' ,
'F74NMK' ,
'P3S7P7' ,
'DPC52V' ,
'3UWV5D' ,
'GDTQVM' ,
'AE6DKE' ,
'H7E2M9' ,
'828VPJ' ,
'QJNQ4T' ,
'ENKMVX' ,
'F882D2' ,
'QMKN36' ,
'FA7UPJ' ,
'2EUCMM' ,
'2HGSWU' ,
'DTGUAE' ,
'F3KWKF' ,
'YQ87QC' ,
'JA8NF3' ,
'F5UJ4A' ,
'QDMRNW' ,
'DW5ANP' ,
'3Q7NJ9' ,
'XUAR8E' ,
'8EB3B2' ,
'Q2BF8A' ,
'WVUDR2' ,
'JJF6KJ' ,
'F34FBV' ,
'6THJQD' ,
'RVYB54' ,
'CRXV2U' ,
'PUTQX2' ,
'E8F2TP' ,
'GNN8QY' ,
'DUXRV5' ,
'757MDJ' ,
'5WGDAR' ,
'XU44DB' ,
'NF7GVX' ,
'JJQW8A' ,
'B42FXC' ,
'VXF2TG' ,
'W9AC58' ,
'JB9J3R' ,
'C67YBB' ,
'K37P54' ,
'VFTWSS' ,
'C4KMEB' ,
'S6W663' ,
'BKYKDQ' ,
'MPDPKG' ,
'YR4WUS' ,
'QDVDGV' ,
'WPVUSB' ,
'GC8R26' ,
'XXHKY3' ,
'AB4VGD' ,
'QCTFPF' ,
'TMB95F' ,
'H2PEHX' ,
'5KTWU5' ,
'RJY3X4' ,
'A2PN39' ,
'3WUCCW' ,
'EW2ST4' ,
'7NAJNG' ,
'4QQKP5' ,
'6A8WJE' ,
'RDPF27' ,
'B4KY57' ,
'NXV7MQ' ,
'C948MA' ,
'54GEPM' ,
'2V8YGT' ,
'E2E55X' ,
'WXUYWX' ,
'YCMXVR' ,
'924VN2' ,
'SDRAAY' ,
'3Y37U8' ,
'5NA998' ,
'5HK8CJ' ,
'M89SQW' ,
'J9KREB' ,
'5D2BB2' ,
'GMR8V6' ,
'T2SN96' ,
'C7EDMC' ,
'TAJ6C3' ,
'F3X5YA' ,
'VYXYUD' ,
'GXCWP7' ,
'RKK7DX' ,
'RDPF27' ,
'UKWUP7' ,
'29KAWV' ,
'URE43K' ,
'4TFWYV' ,
'H57YN9' ,
'B67HR5' ,
'9JE4RC' ,
'B873N5' ,
'yGHHB2' ,
'FU7MSF' ,
'UTH8MV' ,
'4AX5PN' ,
'NFECTQ' ,
'AFA436' ,
'VFQ5GK' ,
'AVCM38' ,
'UEH3PG' ,
'5G864A' ,
'N7BS4S' ,
'XBHU86' ,
'WJ5EYQ' ,
'SVR41 ' ,
'4FEB8A' ,
'C8SGXA' ,
'U55VHD' ,
'5R2EHW' ,
'ZMPQ3 ' ,
'MJNBGB' ,
'PDK449' ,
'H2PEHX' ,
'SC3UJV' ,
'QP9TDR' ,
'YP6P94' ,
'XM7SYM' ,
'GRVQYR' ,
'4WNAVK' ,
'4WNAVK' ,
'C5H938' ,
'KD238W' ,
'T4F6UN' ,
'DTGUAE' ,
'PVD5CD' ,
'FHYBA6' ,
'9HUCUP' ,
'YRAXNY' ,
'GPCJC6' ,
'WEHAHV' ,
'TGRS2T' ,
'8J6XX9' ,
'B42FXC' ,
'GS2NAF' ,
'BHTUMQ' ,
'PP5PHK' ,
'A3CHYX' ,
'M8AFV8' ,
'V835PU' ,
'J8DRBK' ,
'K95JVH' ,
'HM8R5A' ,
'D4W6YA' ,
'N73YWX' ,
'QXTJGB' ,
'FM9SCE' ,
'AB4SB6' ,
'YMJ9EM' ,
'6BR6AX' ,
'A7YQ9N' ,
'AVUCE3' ,
'2B5MPY' ,
'ETRHXS' ,
'RCKTKM' ,
'UHHX5Y' ,
'5G88VH' ,
'HG89SH' ,
'WR7FA9' ,
'WBFYRA' ,
'VJH2PK' ,
'BFUNJX' ,
'HXT3RA' ,
'XGK3T3' ,
'F2DYAN' ,
'YJRM8G' ,

    ]

var index = parseInt(GM_getValue("index", 0));

console.log(index+'/'+codes.length);
if (index < codes.length - 1)
{
	var f = document.forms[0];
	f.getElementsByTagName('input')[0].value = codes[index];
	f.addEventListener('submit',submitHandler,false);
}
else
{
	GM_setValue('index',codes.length-1);
	index = codes.length-1;
	if (numClick > 0)
	{
		numClick = 0;
		GM_setValue('autoclicknum', 0);
		alert("no more codes!\nI will try and update the code list every few months, so update your script from time to time \nOriginal script credit goes to Rott, Updates via Ice ;)");
	}
}

function submitHandler()
{
	var nc = parseInt(document.getElementById("acdn").value);
	if (nc > 0)
		GM_setValue('autoclicknum', nc-1);
	if (index < codes.length - 1)
		if (f.getElementsByTagName('input')[0].value == codes[index])
			GM_setValue('index',index+1);
}
function include(arr,obj) {
	return (arr.indexOf(obj) != -1);
}

// auto-click mechanism
var wwash = document.getElementsByClassName('inviteSectionHeader')[0];
wwash.innerHTML += '<br><p style="font-size: 10px; color: #f00; padding: 5px 0">Click Invite <input id="acdn" type="text" value="'+numClick+'" style="background: #000; color: #f00; border: #00f 1px solid; width: 30px"> times</p>';
wwash.style.height = 'auto';
if (numClick > 0)
	click(document.getElementsByClassName('btnInvite')[0]);

// Click by JoeSimmons
// Syntax: click(element); // String argument will grab it by id, or you can supply an element
function click(e, type) {
if(!e) {return;}
if(typeof e=='string') e=document.getElementById(e);
var evObj = document.createEvent('MouseEvents');
evObj.initMouseEvent((type||'click'),true,true,window,0,0,0,0,0,false,false,false,false,0,null);
e.dispatchEvent(evObj);
}