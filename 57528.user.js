// ==UserScript==
// @name           PBB Optimizer
// @namespace      pbboptimizer
// @include        http://www.purebasic.fr/german/*
// @include        http://forums.purebasic.com/german/*
// @require 	   http://sizzlemctwizzle.com/updater.php?id=57528
// ==/UserScript==

// Functions
function GetRandom( min, max ) {
	if( min > max ) {
		return( -1 );
	}
	if( min == max ) {
		return( min );
	}
	return( min + parseInt( Math.random() * ( max-min+1 ) ) );
}

// PB Logo ersetzen (Transparenz)
var pblogo = document.getElementById('logodesc');
pblogo.innerHTML = '<table width="100%" cellspacing="0">' + 
						'<tr height="60">'	+
							'<td width="310"><a href="./index.php"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAAA5CAYAAAC4aNf1AAAW4ElEQVR42u2d%2B6ttVRXH%2B0fqhyKCIAp6Qv1QFEVQBFKERP1QWPRAih5EEYT2MEqLSssHRZa3rl0rtfLBtcy8mt4eXt%2BiVje7%2BUQtX1nK7nyWfmy02muNsfZe%2B3ivzAmDc84%2Bc84xx%2Bs7H2OutZ%2F2tFZaaaWVVlpppZVWWmmllVZaaaWVVlpppZVWWmmllUO1HDhwYAHt378%2FJevedttti6a5J0%2F%2FzQYHr92abZ6kgvKvufbaxd69exeXXHLp4qKLLkqJehBt9u3b17Wnn2bA7dc%2FRPubbrqpC6Km0e0p6HvMbtqHOs0u22gUlH7Oeecvdu3atTj11FMXJ550UkrUg07bsaNr97Ofn9MZEXCjzwZsm9W%2FNkD%2F39%2B5c3HmWWctdu%2Fe3QVRC6DNl%2BtvuKHTNX6P%2FpfZjc%2BwKXYhLpi4muY2vDIgmDAIv08td9555wLDEkCAGUGFAfmdzxqobVb%2FDzz4YKd%2FQJHgInDoC3Ck3xZAm5uE0DeTyb1%2F%2F3vJVq7mWkxssKBgnP%2FID32kC4ZHHn10bcJwrtYItqbl7dX%2Ffffd1wUbk0sDtfkLgMRqC%2F1iN%2Fy9YhfiAXu0lfMGDYOCWVFhGMDn4UcenYVYOWBwAqsF1PbrH3I7RPC1VcG8q2p0y3YSu7FCy2wBoBkPDdA2aBhmDfb6hx%2FxgcXdd9%2B9uP%2FhR2ahh%2F79aBdIBtRT3YgAhnSw6J9Acvu%2FyqSyikzbpbsny8boUb%2F%2B9FGf6QANXWf2wBYAYAO0DZ8DsM055tgvPzbTPPTvWQlDY0TP00xjZ1dApHgtYWo63PZjVx78HT1I%2Fm9Mb7b17BAHN9PI72Z8s4zjpvVPIBl8jCeTifEgkzIMybROJls%2B6i3yidlyxjGFz7r2jnwErmhfyVWvqzNsV7EF%2FdCmbTk3WDCYMw2GueuBf81KBNRxXz3%2BiSyPKezs%2Bkff0Zelw60bHV%2BnNijHrkDIc9nnQ9moeLWCupx9mQThIF4y46vMQ%2F3R1yb1TyChC8YztO3sy8R4hmSKWdQpmWzqUFdAoI%2BMD7rVzsgwBAJz2NtrFQLYMvtKJAFYUWMzVtWMuWIHkzVt%2B7%2FBgnI9v%2FnG9364uPUf%2FyzR9bfctrjq5lvSegAaho%2FXC3SIoasHOrSOzufL0uF8Tj2dHkd0NjXbuozXENkXshkgrrAMemdnx8Tv0K8u%2F8Pi8qtveIJwXoOBevYdr1Lwc9P6h9jGMt7%2ByoDf%2BzKh74pMUffZcYJbNG2irelrGR%2BBxDGNXXlQhnXsjR5NzAi0Ahd%2FQ46NsdKOSRoww270kdkAUFN32Uq5lTUPpDEcxkHh%2B%2B95cJT%2Beu9DnWFZTRx7ymnd32P1mZkwOqC244wzu%2FoZYXz6x2nkmdWPMy8OCThUeOFs8BLI%2FnzHvd1nBA6O7CrQO2IEI0GPY1O%2Fr5tl%2FdMn9Q1igdI7TKvoH92g%2FxtuvSetjw08u3FFJchEmS783bX%2F19%2BQTBD9CYBDmVTv1wlk%2BADjn8IHwKF9zNi6EgccsNO69sYWEewc5013%2Ff8YHRc2pR7jy%2ByGj3qVpmX9N1RwCDM1b3zbu54w4BhhUIz4%2FBe95LF0dVKfYCJYIUAtq4%2FxcVL6Zkw4S9Ymzn7OnpWxKQ8%2FDWY%2FQy%2FM0vQbL7vuvOCyrq5BWeFhMBA89ulWmmBcVf%2FolKDM2sA3nmMSUIIMwct4XCWtIpOrqbiCAnDgA08vnMID3VVs2pcZAHEV5hbU1SUyrGtvZMA%2FISaYM%2FZcVRonfVR0ho8yTuwNyDf02YYM574D%2F1hcd%2Fv9o4QjM8MZUGN1MSRBQrBCrCiy%2FmmD0alP%2FzhL1gZndwtK4OiYWbshwsEJ0NgnILnz7PO7QKjoaUh3AICrGuSM25ep%2BkdHe%2F9yb8kGAppnTPJdVyb6R%2F%2Berbn6dBuI%2FuRzwdW3rGwT%2BaC3OCF4%2FriuvdGPW0jAbFV9DBETD%2F7UrjBtOMPpzIQhMWJGGJ%2B6r3nTW9I2GBKnJvCof8pPdqf947gEAG2O%2BOTn0vrwcAvmORvj4u%2BKPMsI0KAf%2BoDQD2Bs4K9DEWBc9a2qf0Gwoh%2F4eMgumEFzyGTAAl6CJj%2BRD9mwO2A2Fx8mBM%2B2%2BH0Oe9MH%2BmSy%2BM2f7157rMtssOwcs5UZC7OoN50%2F%2BPmvd7N9RhhfgMJZx%2BpiSByNuhAzX9Y%2FAe92k7ZZfXiwlaGuIIRjEkQVeYZkdNYXbCpjhwiGsf8LSvG8ZlX9066iH1ZHJjDcZtKW7fMcMjkuEzkeqqM77AGYzcEDQncmJDyXm8Pe6BO9VnUyZczYQN2wgm3Isw0ZTlYge%2F54zyhhQLZML37dYZ0DZG0wJDOezoJjZzwANAHwq7vOT%2BvDgzMlAQ1%2B8AKAsrZDMnJ2gk6ctSu6wXHhSWBVZCQQGStU5cHYCD62mxX9qx8zxWYBkevjx39vsfvGu0oyVe0gcJppRC4AIuPx0ysPdHr78R%2F2l3SnPPJZ196snjxCqfioeiERUeGhblqGc8MJATOcOAQOhYOPEcbBQQ0ofh%2BrjyHj9ijr%2F5d%2Fesxhq%2F3LI17pENBwzKztMsLBWfFFQMN5M73AjzGz0sp4sEoDhF0BTtL%2FVmAYfJl%2B0Cf6QS%2Fe8YpAk7UlcJm8psgUt%2Bno79zr7kjbmTSaYm9pDnujU%2FronqUt2ABeJsUqPBwzW%2F6WENhgQsAMkTMczjdGGJ%2F6GJPzLWbUsfoc6Lvaon7WP8bH6B54Z%2F1Dbmvj9o3gyNplMtoP42YFMdYGJ2e2JvgrcgIUrpTcXlf0D8jABx5Hf%2FtHpXFxRuZ5HTwBmrd%2B%2BKiyTFXbIROAKUijO1aBmb3xESewb5572WR7y2tVezNu%2BwC4s%2FrqxUmlwsNJZdXHzw6K4l2VeE%2FLFG7MfsTDQ%2FfcFz9OOLAUEf%2FM6%2B9ci7772792zkNQ4KyCx5lX3z5KjIP6BtRYXQxJkBLkEM6d9Y%2BzsI2iPs6S1UcWdEiAOi6TCWnbAUL%2FzvoEWWXcgCA8XaFV6iOn2d%2Bq%2FgUB6p70iyvTuuiT8UuMDV6blMnVFu2%2BfPYlo22QxRUnNsdfMj6bsLf9ZD6tnOiD8TKOis2YVGjzhR3ndHY7%2FYpb0xjtr5YlsSGeycbkQ8wK9%2B%2FQiUlrg1m8j9IHsiEQGwKwnVffsRbtuOJvi5P33Nw5G46N82EYlJyRMw7tobG6jNtVC4Qxs%2F4JQAzvqiCrj8OwTek7OHJV5FlG0cENyqwNTk5dgbsip4BGu6r%2BKxSDSRCLgDZFpgjqFZkABAGNthUfYUyudphoM9kY19z2dlJhkp%2BiF8ZeiRl8lLrH7LqwAzRisBKrGcANgVsf1OK9wdlA7aBZoW05RQQ0jIOycaY5ydWcgY6zZG0ICsbjuU1WH2fh7Ak%2B1Jcf4FkdJ06Hg%2BFoOBz6MSANyoqsBCWBhl4rckbQnFv%2FTlTw4HeAhp%2FyrMjk%2BRnjQy8VmZADHai%2FrA2%2BzJa7am8nMMFsLnvDf6penLwqMjKxUxffgIe7i0NmhXaoJAQ48%2FCs45Tf3DIbYUgOTj0fwukwZNaO2c8g%2BsR3zk3rA2g4S8xwdtm%2Fc68qjdPVKvL7qBXkmy%2B6w%2FpCPzgofTkDZ%2FUJfs9tXAHNpXsCFp14N8trFJ5vVWTCftjCs62qTGZtle24C%2F%2FYte3%2FxD6Qk4erl4qe2aJqK%2Fisau94JUcArugFEHGLDEBlbQS0luHcBkDzkRuc6fg9%2B2ejGFRuQbI2GN%2FsEc5y9Fm%2FT9vgLPE%2BlwFL4GRtPUf0wfn4QLyZQFYbc%2BpFIvjjWdOc%2Bnclgy6jXCYhKjLRBytfJ5eqTOoSsHF1CFi5eoa320UmrI7Plt2xdcVmyIVfRUBbxd7xErbXZqboxaRVhS96aY88beMjTzgtMxzGmYNwUGZhZz8Mj7NU2uksBNHnL7g5bQOg4ZAxw%2FmKd368NE6Cw7Y%2BXB2frcTJ3370ibPpRcLJ2TYJ9q4wqu2rdbuzm7P%2F%2B%2BC5IF2RiQnJ8zZXWplMHOijT9%2FY4ZWKKKfJHvoWxKYQMnH26Ep6VXv7aiIvGeOjFb10q%2FBwr7LCl23iIZ%2FhPBQeefKlgi9483s78FiXNCDL8HgXSWfJ2jP7GUQ4aYUfVw90Up8QADwrbQ1AnDq%2B%2FQLHc%2BX67pPOm0U3kQRuwR769Hk3pu0AjY%2F%2B4NJOl%2Fys8EHG%2BARFVSYAzfOpiu3gBUjDw9c%2FRUDzSQjGDQFmFZn7BKDFY4FV7R0nLwGtqhd9tMLXyesp9VLHseTAWIJgSpJgCpHy98oGDgF44FwZaSSdsk84RMyquc1gVuZ%2FWf84C05iOjyrj7MgR0wICJ6Vttx%2Bpx0%2FcXb0gvP5OeNArope%2BPmxs68rEcHvob3gXdE%2FgO8qpyIj48LeHp6r24pMrGZMzlR4MTZWTm4vTUBA2F4fQf6KrEPyAGgxwyngTrU3fgORTJhi66l6wdbw6M5ItyYx7xpWLphXkgBDiYDZkwHZtY0KaA1lNOe4ssGZjRlODJMFoU5B3XgOwt9QdGSAMmbVdJaMB4AWnaUKDP2AJYCytmYCu2TA4wf56AUn52yH%2Fli5VgCK2R%2Be6mWMkIu6gm9VVoOJ7fgzX%2F76rq9KGwHAzGNVJnlV9enKJWYflfV9Oy4vg%2F0YAWjYR99bx970w07Ce5hT9IL%2Bp%2FA1FsxwVq9s9K9txMxnNeM527WNypWNPqhdvA2gFtPVzkxv%2BNJZpeDAIJ6HxbtNAhh9UgdyVqIuzvL%2BM65JeTC%2BKUGkk%2FYBrRJABmB0tP7dPFZOVb0INPDnJ8Rnkv%2Fz7MWs2lT921cVBLG12zL4VWWinbao2I5Aj8ANH%2BSq2IL%2BK%2FWYOPCrPqCtYm8Bbaqt1Qs2qPCNQDoV0KpgdvHI9Y2n%2FNUNhOLBa88OBA%2BcaoyYHVmqe%2BgbXwgIcfZEv74W2jd5emib9Y%2FxYxC94%2Fv70jY4i%2BcpHhALnhnh4LRBDl9qyNgdN07%2BsiOPTfvBydGLQJU5OfVxaM%2BVpuifScP7T4BFpQ2B69uCGV9VJoADPhV9ChjyESDQRcaHOoypogN2CGxrvRqyjr3x11VsjV4i0Ff5knSCLy92aCf4G85wAh5HnH7VKDE7ki73JYFZ%2BtkvYNVZsv5xlhiwWX2cBWDwmkDMcGZtBU9fSb3s7SME%2Fys%2F%2Ba2SXjwkZtyHnbwn5S3IoJsp%2BvfOFauDShsADQDwvhVtqzJ5VFDVp0mOKh%2FsBx9BM9MbxBFDnMAEzqn29lueVrG153aMueKjnJm1lzpu40sdMQzBkZGzY%2FVyoJd2dZasf4LPIKqMCWfpts4hw%2BkKJGvrqorxMc7%2BuFmB4rSsgip6iU9DvOXU36e8meXNcE7Rv28tEQQz6q54BEBzZVfh5Xauok%2BBM646AaixNoAMRxSsdtBBpjeIFbl3yHzWdhV7%2BzV2q9havQCkWX0nr%2FZSx216qaMzHM6UEbNj9XJgvLRrEGX94yyuWHDSrD7OgpPGKwmuDLK2BKA3t%2Fsv24vjfuMJF5b0YrbSwMx4c54iOE3Rv2D2nLd%2FqtQGnXprX0CryiSviu0Azng94xmvPjxtA8gwEURAGyMAgvOnCGir2tvv5HSXwngB4Cl6qfBFRvi2lzpu0yNPznBTAK2y3VzFWQg%2Bt1NVZ%2FGCpbe9pwTg0GrTcTOON5yyt6QXt8kVoHFFJwhO0b%2BH0RX92Ca%2BdXeKTPDCdhUARKZ4iboCUNjApEhFb6zIOVQX0OKKc4q9BTTO0LyHWQHgvg2qfIcmzvb6oBkeTueAklku3rMiOHDyMWJ2NCuavf4k3nFjeY6zZP0bFNFZsjaeXXkHTV4EYNYWXt1N9a0x%2BsA88iCX95IM%2FmzcbpsEmoqcXqattLEdqzr4EPwV%2FdCGJwrilY2qTFxbEdAqvgEfH%2BNyO5a1AxzMBgPqWX1W5P2M9qr2xs7xHiYAXNGLCYF1%2FKzyUHp7fVCRUKhBS9ofw7zia5cuXnvi5aPE7IiTV15%2FgqPGdPgzDvtQ2n8%2FiF51wmVpG1c68RUytM3aCYY%2BSxjfANIHtKwvgvl%2Fgn8LaMbGbv0IaBX9ox%2BygdQFALP6EIfS%2FSsOVZmwHfIAnlXfiIAGQFXsFyewzOasyJ241rU3dtZHAbOKnOhTv6j4tIDmewP1s6kx214fNOGljgIazjRGzo7xLs2yezLMPvLw0i7OkvVPwJK2x1EIhqy%2BAeF9OB28wmtotblshVYZNxMDQcG4x3TJmNEj9b2DVtW%2FQZLVW2azuIKdItOz3vOVDjyzcXkW5koQmbJ2EO0YD3wqOuAcLD7gvo69lwFapR%2F0Qt2KfOgRHlNf6theHzSxcHZAhrM7vN0CEJwpI8%2BruEtT%2BcZnzqWoS%2BDiAFn%2FrkL4%2FblHnZPWd6vXz3AaHGPEigIH4wyRcw2%2BDNdx%2By3y%2FI9gy8YyZdzU655fDK%2Bnrup%2FKjEuAMDvFPXBdGR64XF70rasLl76lT0dVezQP8d89kdPS8cIQBD4FXtTz2srMcO5ir05Q8bOMTFW8VG3kRW9KB%2B6McMZ%2FayVDWU4MaQGGiOcacrrTwTNKTymkNupmOE0kLK2rFxoO3T9RP1wYE%2FAzDFetyxeCDUgN6EbSKDxAjSTC5lbAK2iowoR3GyDmegiaFbtMFV%2FnNNFQFvV3gJLf9Kd2wYAafc676dKQuBgLV54dYZjxh4jZhsAzUuJlbs0ZjldBWY8ppLOQgD5jeauqLK2rjaHwNmxEzxsnyp9jpHbD7Y3jpefAubcunG7qYx%2BS7rBO4c93IJhA64kxC%2F8BWjmlssD%2BbgSXNfevm1mLp0M8WVCqexqWlljhYZzO8M974u%2FHiVm4u6LLh6faSpLZ0CPIBJoKnymkAEbVwaAT9YOR2MrJjgvu7mNfPEpB5x9lfEb%2BKwuADPGit4hfq%2Fqfyo%2F7AXQwCe%2BEgl5kRs9ATir8GDl4RkRMgFm9AsfgNNVOToDbOaSzRV5nBDWtbffeBYnrjl91Ltv7R1o23CGxszkDJcRAcI1DwwzZaYBOKODDwUvTkegwIs6lTEBaBEgvEuUtYMf51gG%2BxA4e4ucgOUAmi0JIOD4siCSyN513660BY7oL66WqvqfSvDzZZXIgYxMMNiDMXS62rLH09%2Fx2ZI8AhnydBNckAkeACb989Ob9xy02%2F9Yf%2Fy%2FYnMAzQuq8J3D3p6j8b8uQTPio1PHC3VvR5mwCGhljec4cTzuCpGtITs3Rjgwz%2Bl5oDr1Ai9GBRRwcEGhT4yDOtlYIOqSEQWUAQcIZ0eeSltS9z7PV9ETDs9KMwLbkBxRHjJiBLfbPp8fdLVU1X8mj68k8rsD4Ofl0f7KU1BjVUu2kDGM2aUvkyvNIR7IiGzU6U8EkQh4xl%2B1OXe%2B8EHGDs1lb22sjw6NN%2Fro3H7WykzPcvq2ToyJg%2BOEkfxiDRxomfNWwZO28KE%2FZlbfmyb5bnepPw7Jt6Cy6sNRCE7kgODBZ%2FzPL9Ptt0XOCC5Txo8O3Cqy3enL0JfFccILAIsTAcBS0X9G6sNXSbsC7PPrgxr%2Fd3sY3yo7JJOZ0qi%2FMR7KRv%2BMcajPMVsP%2BSA2h%2Fec9hbUPAPsj9VMemW8q%2FpZKzOt1HQOX0ccSQdyS7HOo1YGEU7oAbKEs%2FL5sjEMjYmxxzG55eF%2FY%2FIwjqnADAjQhr7ph%2FE6dgJKirLIa0xvmf6n6EO5qnbSJgKDMvXlUSZ5VX1hSF%2F2V7V53wexhVvoOe095qNTxruOn7UyU4lOIvnZ3Hx8KDiSgdjnveqY%2Bm3nlIX%2Bogw4LtSXZQq%2FZbIOUdTNHDLJV5mUZ5lMc%2Bhrmc37Mj2Z9l42Xt%2FMMdd4W2mllVZaaaWVVlpppZVWWmmllVZaaaWVVlpppZVWWmmllVZaaaWVVlppZaD8B2dfYD%2FvafybAAAAAElFTkSuQmCC" alt="" title="" /></a></td>' +
							'<td align="center"><h1>PureBoard</h1><span class="gen">Das deutsche PureBasic-Forum</span></td>' +
							'<td width="150" align="right"><div style="width: 100%; height: 77px; border: 1px solid #7C7C7C; text-align: left; padding: 2px; padding-left: 5px; font-size: 11px;"><b><u>Links</u></b><br /><a href="http://www.purebasic.fr/english/" target="_blank">Englisches PB-Forum</a><br /><a href="http://www.purearea.net/" target="_blank">PureArea.net</a><br /><a href="http://www.reelmediaproductions.com/pb/" target="_blank">The Pure Project</a><br /><a href="http://www.purebasic.com/" target="_blank">PureBasic.com</a><br /><a href="http://www.purebasic.fr/blog/" target="_blank">PureBasic Blog</a></div></td>' +
						'</tr>' +
					'</table>';

// Eindeutschen Saved Messages - PN Bereich
var text = document.getElementsByTagName('body')[0].innerHTML;
text = text.replace('Saved messages', 'Gespeicherte Nachrichten');

// Code Faltfunktion
var number;
var count = 0;

pos = text.indexOf('<div class="codecontent">');
while(pos != -1 && count < 20) {
	number = GetRandom(1, 9999999);
	text = text.replace('<div class="codetitle"><b>Code:</b></div>', '<div class="codetitle" style="display: block;"><div style="float: left;"><b>Code:</b></div><div style="width: 100%;" align="right"><a href="#" onclick="if(document.getElementById(\'code'+number+'\').style.height == \'300px\') { document.getElementById(\'code'+number+'\').style.height = \'\'; document.getElementById(\'codet'+number+'\').innerHTML = \'Alles verstecken\' } else { document.getElementById(\'code'+number+'\').style.height = \'300px\'; document.getElementById(\'codet'+number+'\').innerHTML = \'Alles anzeigen\' } return false;"><p id="codet'+number+'">Alles anzeigen</p></a></div></div>');
	text = text.replace(/<div class="codecontent">(.*?)<\/div>/, '<div id="code'+number+'" class="codecontent" style="height: 300px; overflow: auto;">$1</div>');
	pos = text.indexOf('<div class="codecontent">');
	count++;
}

// Bot's aus Online-Liste entfernen
text = text.replace(/class="username-coloured">(.*?) \[Bot\]<\/span>/g, '' );
text = text.replace(/class="username-coloured">(.*?) \[Validator\]<\/span>/g, '' );

// Externe Links in neuem Tab öffnen
text = text.replace(/<a(.*?)href="http:\/\/(.*?)\.(.*)(?!purebasic)\.(.*)"(.*?)>/g, '<a$1href="http://$2.$3.$4" target="_blank" $5>');

// Ersetztes einfügen
document.getElementsByTagName('body')[0].innerHTML = text;