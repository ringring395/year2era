/**
 * year2era JS File
 */
 $(document).ready(function (){
//1번.
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
        //선택한 옵션 값 = 선택 년도
        var select_year1 = $("#year1 option:selected").val();
        alert(select_year1);
    })

    

 })//전체 닫음   
 
 
 //select에 년도, 월 넣는거 참고
 //https://choija.tistory.com/74