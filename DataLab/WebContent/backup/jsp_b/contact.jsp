<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
   <meta name="" content="">
 	<link href="css/style.css" rel="stylesheet">
    <title> DataLab</title>
	<script src='https://www.tiobe.com/wp-content/themes/tiobe/js/jquery.min.js?ver=1.0.0' id='jQuery-root-js'></script>
	<script src='//code.highcharts.com/highcharts.js?ver=1.0.0' id='highcharts-js'></script>
	<script src='./js/highcharts.js'></script>
	<script src='./js/companychart.js'></script>
	<script src="js/jquery-3.6.0.js"></script>
 </head>
	<body>
		<header>
			<div class="logo" align="left"><a href="main.html"><img src="images/logo.png" alt="이것은 로고입니다."></a></div>
	  		<span class="menuspan"><a href="language.html">개발언어</a></span>
	  		<span class="menuspan"><a href="index.html">개발언어 통계</a></span>
			<span class="menuspan"><a href="contact.html">문의하기 </a></span>
	  	</header>
	  	
		<nav id="menubar">
	 		<p class="page_path"><a href="main.html">HOME>></a><span class="arr"></span> NAV>><span class="arr"></span>NAV</p>
	 	</nav>
	 	<!-- --------------컨텐츠 출력 되는곳 ---------->	
		<table>
		<div style="padding:0px 0px 100px 400px; "><h1>Contact Us</h1></div>
			<tr>
				<td style="width:200px" valign="top"></td>
				<td style="width:200px"></td>
				<td>	
					<form name="contact" method="post" action="contactok.html" onsubmit="return DoCheck();">
						<table border="0" style="width:85%; margin:0px 0px 0px 0px;padding:0px 0px 0px 250px ; border: 1px;">
							<tr>
								<td style="width:120px; text-align:left; height:35px;">Name</td>
							</tr>
							<tr>
								<td><input type="text" name="title" style="width:500px; height:50px"></td>
							</tr>
							<tr>
								<td style="width:120px; text-align:left; height:35px;">Email Address</td>
							</tr>					
							<tr>
								<td><input type="text" name="title" style="width:100%; height:50px"></td>
							</tr>
							<tr>
								<td style="width:120px; text-align:left;">Message</td>
							</tr>
							<tr>
								<td><textarea name="note" style="width:100%; height:200px;"></textarea></td>
							</tr>
							
							<tr>
								<td style="padding: 0px 0px 0px 210px;" colspan="2">
									<div style="height:30px;"></div>
									<input id="b" type="submit" value="문의하기">
									<div style="height:30px;"></div>
								</td>
							</tr>
						</table>					
					</form>	
				</td>
			</tr>
		</table>
			<!-- --------------컨텐츠 출력 되는곳 ---------->	
		<div id="body-wrapper">
			<div id="body-content"></div>
  		<footer class="footer">
   			
   			<p>2022 DataLab Company</p>
   			<p>572, Baekje-daero, Deokjin-gu, Jeonju-si, Jeollabuk-do, Republic of Korea</p>
   			<p>Copyrightⓒ2022  All rights reserved.</p>
		</footer>
		</div>
  </body>
</html>