/**
 * year2era JS File
 */
 $(document).ready(function (){
//1번. -> year1
//년도를 선택하면 연호를 알려주세요.

    // select box 연도 표시
    var dt = new Date();    //날짜 클래스 사용
    var com_year = dt.getFullYear();    //올해
    // 발행 뿌려주기
    $("#year1").append("<option value=''>년도</option>");
    // 올해를 기준으로 -150년까지 보여준다.
    for(var y=com_year; y>=(com_year-150); y--){
        $("#year1").append("<option value='"+ y +"'>"+ y + " 년" +"</option>");
    }

    //1번의 버튼을 클릭하면
    $("#y2e_btn").on("click", function(){
        //빈값으로 리셋하고,
        $("#year1_era").text("");
        $("#year1_era_year").text("");
        //선택한 옵션 값 = 선택 년도
        var select_year1 = $("#year1 option:selected").val();
        //선택 년도가 비어있지 않을때,
        if(select_year1 != ""){
            y2e_age1(select_year1);  //나이 함수 호출
            y2e_era1(select_year1);  //연호 함수 호출
        }else{
            $("#year1_age_ko").text("년도를 선택해주세요.");
        }
    })

//선택한 값으로, 계산하는 y2e_age1 함수 정의
function y2e_age1(select_year1){
    console.log(select_year1)
    //한국나이
    var age_ko = com_year - select_year1 +1;
    $("#year1_age_ko").text("한국나이 : "+age_ko+"세")
}

//선택한 값으로, y2e_era1 함수 정의
function y2e_era1(select_year1){
    //연호의 년도
    var era1_year;

    //rei
    if(select_year1>2019){
        $("#year1_era").text("레이와");
        era1_year = select_year1 - 2019 +1;
        $("#year1_era_year").text(era1_year+"년");
    }//rei&hei
    else if(select_year1==2019){
        $("#year1_era").text("레이와 1년 / 헤이세이 31년");
    }//hei
    else if(select_year1>1989 && select_year1<2019){
        $("#year1_era").text("헤이세이");
        era1_year = select_year1 - 1989 +1;
        $("#year1_era_year").text(era1_year+"년");
    }//hei&sho
    else if(select_year1==1989){
        $("#year1_era").text("헤이세이 1년 / 쇼와 64년")
    }//sho
    else if(select_year1>1926 && select_year1<1989){
        $("#year1_era").text("쇼와");
        era1_year = select_year1 - 1926 +1;
        $("#year1_era_year").text(era1_year+"년");
    }//sho&dai
    else if(select_year1==1926){
        $("#year1_era").text("쇼와 1년 / 다이쇼 15년");
    }//dai
    else if(select_year1>1912 && select_year1<1926){
        $("#year1_era").text("다이쇼");
        era1_year = select_year1 - 1912 +1;
        $("#year1_era_year").text(era1_year+"년");        
    }//dai&mei
    else if(select_year1==1912){
        $("#year1_era").text("다이쇼 1년 / 메이지 45년");
    }//mei
    else if(select_year1>=1868 && select_year1<1912){
        $("#year1_era").text("메이지");
        era1_year = select_year1 - 1868 +1;
        $("#year1_era_year").text(era1_year+"년");
    }
}
 
//4번 초기화 버튼
$("#btn4").on("click", function(){
    //1번섹션 y2e
    $("#year1").val("").prop("selected", true);
    $("#year1_age_ko").text("");
    $("#year1_era").text("");
    $("#year1_era_year").text("");
    //2번섹션 d2e
    $("#dp").val("");
    $("#year2_age_ko").text("");
    $("#year2_age_man").text("");
    $("#year2_era").text("");
    $("#year2_era_year").text("");
    //3번섹션 e2y
    $("#year3").val("").prop("selected", true);
    $("#year3_num").val("").prop("selected", true);    
    $("#year3_year").text("");
    $("#year3_age_ko").text("");
})

 })//전체 닫음   
 //select에 년도, 월 넣는거 참고
 //https://choija.tistory.com/74