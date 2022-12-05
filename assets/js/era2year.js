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
        // 숫자 범위 넣기
        $("#year3_num").append("<option value=''>년도</option>");
        //두번째 selectbox는 첫줄빼고 초기화되어야함.
        $("#year3_num").children("option:not(:first)").remove();
        //레이와 선택했을때
        if(select_era=="rei"){
            for(var r=1; r<=(com_year-2018); r++){
                $("#year3_num").append("<option value='"+r+"'>"+r+" 년"+"</option>");
            }
        }//헤이세이 선택,
        else if(select_era=="hei"){
            for(var h=1; h<=31; h++){
                $("#year3_num").append("<option value='"+h+"'>"+h+" 년"+"</option>");
            }            
        }
        //쇼와 선택,
        else if(select_era=="sho"){
            for(var s=1; s<=64; s++){
                $("#year3_num").append("<option value='"+s+"'>"+s+" 년"+"</option>");
            }             
        }
        //다이쇼 선택,
        else if(select_era=="dai"){
            for(var d=1; d<=15; d++){
                $("#year3_num").append("<option value='"+d+"'>"+d+" 년"+"</option>");
            } 
        }
        //메이지 선택
        else if(select_era=="mei"){
            for(var m=1; m<=45; m++){
                $("#year3_num").append("<option value='"+m+"'>"+m+" 년"+"</option>");
            }             
        }

    })










 })//전체 닫음