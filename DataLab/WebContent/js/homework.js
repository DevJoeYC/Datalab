
/* 입력 값 선언 */
var sDate;
var eDate;
var selectedAge;
var selectedChartType;
var selectedGame;

/* 차트에 binding할 Array 선언 */
var day = [];
var acc_cnt = [];
var customer_cnt = [];

/* 컨트롤 및 전역변수 초기값 설정 */
function initControl() {
    $(function() {
        $("#txtStartDate, #txtEndDate").datepicker({
            dateFormat: 'yy-mm-dd'
        });
    });
    
    sDate = "2013-08-10";
    eDate = "2013-09-10";
    selectedAge = $("#selAge").val();
    selectedChartType = $("#selChartType").val();
    selectedGame = $("#selGame").val();
    
    $("#txtStartDate").val(sDate);
    $("#txtEndDate").val(eDate);
}

/* 
    1) json 파일 get
    2) .getJSON 함수는 비동기 AJAX 통신이기 때문에 .getJSON 함수 내에서 차트를 그리고 테이블을 바인딩해야 한다.
    3) 에러가 발생 시 catch하여 alert.
*/
function bindData() {

    var jsonPath = "data/homework1.json";


    $.ajaxSetup({ cache: false });

    $.getJSON(jsonPath, function(data) {

        calcData(data);

        drawChart(selectedChartType);

        bindTable();

    }).error(function(jqXHR, textStatus, errorThrown) {
        alert("error occured!\nStatus : " + textStatus + "\nError : " + errorThrown);
    });
}

/*
    1) json 파일에서 받아온 데이터를 사용자가 선택한 검색 조건(기간, 연령, 게임)에 맞게 필터링 하는 함수
    2) 기간, 연령, 게임은 OR 조건이 아니라 AND 조건이기 때문에 모든 조건에 대해 분기를 태워준다.
    3) json 데이터 중 검색조건에 충족되는 데이터를 filteredList Array에 담는다.
    4) filteredList를 모두 수집했다면 Day 날짜에 대해 Group By 처리하고 ACC_CNT와 CUST_CNT를 SUM 처리한다.
    5) 전역변수인 day, acc_cnt, customer_cnt에 값을 할당한다.
*/
function calcData(data) {
    
    day = [];
    acc_cnt = [];
    customer_cnt = [];

    var filteredList = [];

    $.each(data, function(i, item) {

        if (item.Day >= sDate && item.Day <= eDate) {

            if (selectedAge == 0 && selectedGame == 0) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if (selectedAge == 0 && (selectedGame == 1 && item.Game == "L1")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if (selectedAge == 0 && (selectedGame == 2 && item.Game == "L2")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if (selectedAge == 0 && (selectedGame == 3 && item.Game == "AN")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if (selectedAge == 0 && (selectedGame == 4 && item.Game == "BNS")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 1 && item.Age == "10대") && selectedGame == 0) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 1 && item.Age == "10대") && (selectedGame == 1 && item.Game == "L1")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 1 && item.Age == "10대") && (selectedGame == 2 && item.Game == "L2")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 1 && item.Age == "10대") && (selectedGame == 3 && item.Game == "AN")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 1 && item.Age == "10대") && (selectedGame == 4 && item.Game == "BNS")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 2 && item.Age == "20대") && selectedGame == 0) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 2 && item.Age == "20대") && (selectedGame == 1 && item.Game == "L1")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 2 && item.Age == "20대") && (selectedGame == 2 && item.Game == "L2")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 2 && item.Age == "20대") && (selectedGame == 3 && item.Game == "AN")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 2 && item.Age == "20대") && (selectedGame == 4 && item.Game == "BNS")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 3 && item.Age == "30대") && selectedGame == 0) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 3 && item.Age == "30대") && (selectedGame == 1 && item.Game == "L1")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 3 && item.Age == "30대") && (selectedGame == 2 && item.Game == "L2")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 3 && item.Age == "30대") && (selectedGame == 3 && item.Game == "AN")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 3 && item.Age == "30대") && (selectedGame == 4 && item.Game == "BNS")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 4 && item.Age == "40대") && selectedGame == 0) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 4 && item.Age == "40대") && (selectedGame == 1 && item.Game == "L1")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 4 && item.Age == "40대") && (selectedGame == 2 && item.Game == "L2")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 4 && item.Age == "40대") && (selectedGame == 3 && item.Game == "AN")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 4 && item.Age == "40대") && (selectedGame == 4 && item.Game == "BNS")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 5 && item.Age == "50대이상") && selectedGame == 0) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 5 && item.Age == "50대이상") && (selectedGame == 1 && item.Game == "L1")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 5 && item.Age == "50대이상") && (selectedGame == 2 && item.Game == "L2")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 5 && item.Age == "50대이상") && (selectedGame == 3 && item.Game == "AN")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else if ((selectedAge == 5 && item.Age == "50대이상") && (selectedGame == 4 && item.Game == "BNS")) {
                filteredList.push({Day:item.Day, ACC_CNT:parseInt(item.NEW_ACC_CNT, 10), CUST_CNT:parseInt(item.NEW_CUSTOMER_CNT, 10)});
            }
            else {
            }
        }
    });
    
    for (var i = 0; i < filteredList.length; i++) {
        var currentDay = filteredList[i].Day;
        var currentAccCnt = filteredList[i].ACC_CNT;
        var currentCustCnt = filteredList[i].CUST_CNT;

        var flag = false;
        var j;
        for (j = 0; j < day.length; j++) {
            if (day[j] == currentDay) {
                flag = true;
                break;
            }
        }
        
        if (flag) {
            acc_cnt[j] += currentAccCnt;
            customer_cnt[j] += currentCustCnt;
        }
        else {
            day[j] = currentDay;
            acc_cnt[j] = currentAccCnt;
            customer_cnt[j] = currentCustCnt;
        }
    }
}

/*
    차트를 그리기 위해 차트 옵션 정보를 정의하고 전역변수인 day, acc_cnt, customer_cnt Array를 차트에 바인딩한다.
*/
function drawChart(type) {

    var options = {
        chart: {
            renderTo: 'dvChart',
            type: type
        },
        title: {

            text: '업체별 채용 선호 언어',

        },
        subtitle: {

            text: '신규 사용자 정보'
        },

        subtitle: {
            text: '신규 고객수, 신규 계정수'

        },
        xAxis: {
            categories: [],
            type: 'datetime'
        },
        yAxis: {
            min: 0,
            title: {

                text: '횟수'

            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            enabled: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'NEW_ACC_CNT'
        }, {
            name: 'NEW_CUSTOMER_CNT'

        }]
    }

    options.xAxis.categories = day;
    options.xAxis.tickInterval = parseInt(day.length / 3);

    if (type == "pie") {

        options.series[0].name = "신규계정수";

        options.series[0].data = acc_cnt;

        options.series[0].dataLabels = { enabled: true, format: '<b>{point.y}</b>' };
    }
    else {

        options.series[0].name = "신규계정수";
        options.series[0].data = acc_cnt;
        options.series[1].name = "신규고객수";
        options.series[1].data = customer_cnt;
        options.series[0].dataLabels = { enabled: true, format: '<b>{point.y}</b>' };
        options.series[1].dataLabels = { enabled: true, format: '<b>{point.y}</b>' };
    }

    new Highcharts.Chart(options);
}

/* 전역변수인 day, acc_cnt, customer_cnt Array를 이용하여 Table 소스를 생성하여 dvOutput Element에 바인딩한다.*/
function bindTable() {
    var html = [];

    html.push("<table id=\"tbContents\">");
    html.push("<tr class=\"header\">");
    html.push(" <td>날짜</td>");
    html.push(" <td>신규계정수</td>");
    html.push(" <td>신규고객수</td>");
    html.push(" <td>합계</td>");
    html.push("</tr>");

    $.each(day, function(i, item) {
        html.push("<tr>");
        html.push(" <td>" + day[i] + "</td>");
        html.push(" <td>" + acc_cnt[i] + "</td>");
        html.push(" <td>" + customer_cnt[i] + "</td>");
        html.push(" <td>" + parseInt(parseInt(acc_cnt[i], 10) + parseInt(customer_cnt[i], 10), 10) + "</td>");
        html.push("</tr>");
    });

    html.push("</table>");

    $("#dvOutput").html(html.join(""));
}