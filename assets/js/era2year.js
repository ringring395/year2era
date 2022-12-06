/**
 * era2year JS File
 */
 $(document).ready(function (){
//3번. -> year3
//연호를 선택하면 년도, 나이를 알려주세요.
    //Date 객체 사용
    var dt = new Date();    //날짜 클래스 사용
    var com_year = dt.getFullYear();    //올해

    //select 박스 선택 이벤트
    //연호에 따라서 선택 숫자 범위 달라짐
    $("#year3").on("change", function(){
        //선택한 연호는?
        var select_era = $("#year3 option:selected").val();
        //숫자 select 보여주기
        $("#year3_num").show();        
        $("#year3_num").append("<option value=''>년도</option>");
        //두번째 selectbox는 첫줄빼고 초기화되어야함.
        $("#year3_num").children("option:not(:first)").remove();
        // 숫자 범위 넣기
        //레이와 선택,
        if(select_era=="rei"){
            era_num(com_year-2018);
        }//헤이세이 선택,
        else if(select_era=="hei"){
            era_num(31);           
        }//쇼와 선택,
        else if(select_era=="sho"){
            era_num(64);            
        }//다이쇼 선택,
        else if(select_era=="dai"){
            era_num(15);
        }//메이지 선택
        else if(select_era=="mei"){
            era_num(45);           
        }
    })

//범위 계산 함수 선언
function era_num(num){
    for(var i=1; i<=num; i++){
        $("#year3_num").append("<option value='"+i+"'>"+i+" 년"+"</option>");
    }    
}

//3번 클릭하면
$("#e2y_btn").on("click", function(){
    //빈값으로 리셋
    $("#year3_year").text("");
    $("#year3_age_ko").text("");
    //연호, 년도 val 값 가져옴
    var select_era2 = $("#year3 option:selected").val();
    var select_era_num2 = $("#year3_num option:selected").val();
    //선택값이 비었으면,
    if(select_era2 == "" || select_era_num2 == ""){
        $("#year3_year").text("연호와 년도를 선택해주세요.");
    }else{
        //레이와
        if(select_era2=="rei"){
            e2y_year(2019, select_era_num2);
        }//헤이세이
        else if(select_era2=="hei"){
            e2y_year(1989, select_era_num2);
        }//쇼와
        else if(select_era2=="sho"){
            e2y_year(1926, select_era_num2);
        }//다이쇼
        else if(select_era2=="dai"){
            e2y_year(1912, select_era_num2);
        }//메이지
        else if(select_era2=="mei"){
            e2y_year(1868, select_era_num2);
        }
    }

})

//era -> 년도 함수 선언
function e2y_year(standard_year, select_era_num2){
    for(var y=0; y<select_era_num2+1; y++){
        //선택한 년도랑 같아지면 출력
        if(y == select_era_num2){
            var what_year = standard_year+y-1;
            $("#year3_year").text(what_year+"년");
            e2y_age(what_year);
        }
    }
}

//era -> 나이 함수 선언
function e2y_age(what_year){
    var what_age = com_year-what_year+1;
    $("#year3_age_ko").text("나이 : "+what_age+"세(올해)")
}

 })//전체 닫음