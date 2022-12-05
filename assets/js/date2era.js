/**
 * date2era JS File
 */
 $(document).ready(function (){
//2번. date->era
//전체 날짜를 선택하면, 연호, 나이를 알려주세요.
//Date 객체 사용
    // select box 연도 표시
    var dt = new Date();    //날짜 클래스 사용
    var com_year = dt.getFullYear();    //올해
    var com_month = dt.getMonth()+1;    //현재 월
    com_month = ('00'+com_month).slice(-2);
    var com_date = dt.getDate();        //현재 일
    com_date = ('00'+com_date).slice(-2);
    var com_mmdd = com_month+com_date;
    var com_full = com_year+com_mmdd;

//datepicker 사용
 //datepicker 형식 정리	
 $("#dp").datepicker({
    //년,월 선택창
    changeYear: true,	//년 : 선택창열기
    changeMonth: true,	//월 : 선택창열기
    nextText: "다음달",
    prevText: "이전달",
    //선택창: 년월 순서
    showMonthAfterYear: true,
    //기간
    yearRange: "c-150:c",	//현재기준: -150년 ~ 올해
    //하단메뉴
    showButtonPanel: true,	//하단메뉴열기
    currentText: "TODAY",
    closeText: "닫기",
    //표시형식
    dateFormat: "yymmdd",
    monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    dayNamesMin: ['일','월','화','수','목','금','토']
});

//2번 클릭하면,
    $("#d2e_btn").on("click", function(){
        //빈값으로 리셋하고,
        $("#year2_age_ko").text("");
        $("#year2_age_man").text("");
        $("#year2_era").text("");
        $("#year2_era_year").text("");  
        //datepicker로 선택한 값 가져옴
        var dp_full = $("#dp").val();
        var dp_year = dp_full.substr(0,4);  //datepicker선택 년도
        var dp_mmdd = dp_full.substr(4,4);  //datepicker선택 월일 
        //날짜 선택 체크
        if(dp_full==""){ //미선택
            $("#year2_age_ko").text("날짜를 선택해주세요.");
        }else{      //날짜 선택했으면,
            //한국나이(년도) 함수 호출
            d2e_age_ko(dp_year);
            //만나이(년,월,일) 함수 호출
            d2e_age_man(dp_full,dp_year,dp_mmdd);
            //연호 함수 호출
            d2e_era1(dp_full,dp_year);
        }

     })//2번 클릭 닫음

//한국나이 함수 정의
function d2e_age_ko(dp_year){
    //한국나이 저장
    var age2_ko = com_year - dp_year +1;
    $("#year2_age_ko").text("한국나이 : "+age2_ko+"세");
}
//만나이 함수 정의
function d2e_age_man(dp_full,dp_year, dp_mmdd){
    //만나이 저장
    var age2_man = com_year - dp_year;
    //선택날짜가 현재보다 작을때,   
    if(com_full > dp_full){
        // 선택 월일이 현재보다 작으면
        if(dp_mmdd < com_mmdd){
            $("#year2_age_man").text("만나이 : "+age2_man+"세");
        }// 선택 월일이 현재보다 크거나 같으면
        else if(dp_mmdd >= com_mmdd){
            age2_man = age2_man-1;   
            $("#year2_age_man").text("만나이 : "+age2_man+"세");
        }
    }    
    else{
        console.log(com_full);
        console.log(dp_full);
        $("#year2_age_man").text("만나이는 현재 날짜보다 이전 날짜를 선택해주세요.");
    }     
}
//연호 함수 정의
function d2e_era1(dp_full,dp_year){
    //rei
    if(dp_full>=20190501){
        $("#year2_era").text("레이와");
        era2_year = dp_year - 2019 +1;
        $("#year2_era_year").text(era2_year+"년");
    }
    //hei
    else if(dp_full>=19890108 && dp_full<=20190430){
        $("#year2_era").text("헤이세이");
        era2_year = dp_year - 1989 +1;
        $("#year2_era_year").text(era2_year+"년");        
    }
    //sho
    else if(dp_full>19261225 && dp_full<=19890107){
        $("#year2_era").text("쇼와");
        era2_year = dp_year - 1926 +1;
        $("#year2_era_year").text(era2_year+"년");
    }
    //sho&dai
    else if(dp_full == 19261225){
        $("#year2_era").text("쇼와 1년 / 다이쇼 15년");
    }
    //dai
    else if(dp_full>19120730 && dp_date<19261225){
        $("#year2_era").text("다이쇼");
        era2_year = dp_year - 1912 +1;
        $("#year2_era_year").text(era2_year+"년");
    }
    //dai&mei
    else if(dp_full == 19120730){
        $("#year2_era").text("다이쇼 1년 / 메이지 45년");
    }
    //mei
    else if(dp_full>=18681023 && dp_full<19120730){
        $("#year2_era").text("메이지");
        era2_year = dp_year - 1868 +1;
        $("#year2_era_year").text(era2_year+"년");
    }
}

 })//전체 닫음