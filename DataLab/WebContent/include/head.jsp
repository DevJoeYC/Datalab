<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="utf-8">
		<title>Datalab Company</title>
		<script src="../js/jquery-3.6.0.js"></script>
		<link href="../css/proto2.css" rel="stylesheet">
		<script src='//code.highcharts.com/highcharts.js?ver=1.0.0' id='highcharts-js'></script>
		<script src='../js/companychart.js'></script>
	</head>
	<body>
		<!-- ========== header ========== -->
		<div class="header">
		    <div class="one"><img src="../images/logo.png" width="150px" height="150px" alt="이것은 로고입니다."></div><div class="two"><h1>DataLab</h1></div>
		    
		</div>
		<!-- ========== nav ========== -->
		<nav>
        <ul>
            <li class="dropdown">
                <div class="dropdown-menu">랭킹</div>
                <div class="dropdown-content">
                    <a href="#">인기언어 순위</a>
                    
                </div>
            </li>
            <li class="dropdown">
                <div class="dropdown-menu">채용정보</div>
                <div class="dropdown-content">
                    <a href="#">C</a>
                    <a href="#">C#</a>
                    <a href="#">C++</a>
                    <a href="#">Java</a>
                </div>
            </li>
            <li class="dropdown">
                <div class="dropdown-menu">개발언어통계</div>
                <div class="dropdown-content">
                    <a href="commu.jsp">커뮤니티별</a>
                    <a href="recList.jsp">채용사이트</a>
                    <a href="#">포털사이트</a>
                    
                </div>
            </li>
            <li class="dropdown">
                <div class="dropdown-menu">문의하기</div>
            	<div class="dropdown-content">
            		<a href="procontact.jsp">E-mail</a>
            	</div>
            </li>
            <li class="home"><a href="proto2.jsp">Home</a></li>
        </ul>
    </nav>