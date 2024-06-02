        


    //헤더 스크롤 이벤트
    function headerScroll(){
        window.addEventListener("scroll", function() {
            
            //헤더 위치
            let headerTop = header.offsetTop;
            //스크롤 위치
            let scrollPosition = window.scrollY;

            if(scrollPosition > headerTop){
                document.getElementById('header').style.transition="0.3s ease-in"
                document.getElementById('header').style.background = 'black';
            }else if (scrollPosition == headerTop){
                document.getElementById('header').style.transition="0.3s ease-in"
                document.getElementById('header').style.background = "rgba"+"(0, 0, 0, 0.5)"; 
            }
        });

    }


    headerScroll();
   

    //페이지 로드시  비주얼 영역 실행
    window.onload = typoMoving;

    function typoMoving(){
        const visualTypo = document.querySelector(".typo");

        visualTypo.style.transform="translateY(" + -50 + "px)";
    }
 

    function test(){
        
        window.addEventListener("scroll",function(){

            const style_area = document.querySelectorAll(".style_con li");

            const sc = window.scrollY;


            const style_t =  document.querySelector("#style").offsetTop;

            console.log(sc);

            if(sc >= 2200){
            style_area[0].style.transform="translateY(" + -20 + "px)";
            style_area[1].style.transform="translateY(" + -20 + "px)";
            style_area[2].style.transform="translateY(" + -20 + "px)";
            style_area[3].style.transform="translateY(" + -20 + "px)";
            } else {
           
            style_area[0].style.transform="translateY(" + 0 + "px)";
            style_area[1].style.transform="translateY(" + 0 + "px)";
            style_area[2].style.transform="translateY(" + 0 + "px)";
            style_area[3].style.transform="translateY(" + 0 + "px)";
            }
        });

    }

    test();


    //gnb 메뉴 이벤트
    let subGnb = document.querySelectorAll(".sub");
    let subBg = document.querySelector(".gnbsub_bg");
    let mainGnb = document.querySelector(".gnb");

    //초기설정
    subGnb.forEach(e=>{
        e.style.display="none";
        subBg.style.display="none";
    })

    mainGnb.addEventListener("mouseover",gnbOn);
    mainGnb.addEventListener("focusin",gnbOn);


    function gnbOn(){
        subGnb.forEach(e=>{
            e.style.display="block";
            subBg.style.display="block";
        });
    }

    mainGnb.addEventListener("mouseout",gnbOff);
    mainGnb.addEventListener("focusout",gnbOff);

    function gnbOff(){
        subGnb.forEach(e=>{
        e.style.display="none";
        subBg.style.display="none"
    });
    }





    //SOCIAL MEDIA 탭메뉴
    let tab = document.querySelectorAll('.tab_menu li');
    let con = document.querySelectorAll('.con');

    // 초기설정
    tab.forEach(e=>{e.style.background="none";});
    tab[0].style.background="#75fb4c";

    con.forEach(e=>{e.style.display="none";});
    con[0].style.display="block";


    tab[0].addEventListener("click",function(){
    tab.forEach(e=>{e.style.background="none";});
    tab[0].style.background="#75fb4c";
    con.forEach(e=>{e.style.display="none";});
    con[0].style.display="block";
    });

    tab[1].addEventListener("click",function(){
    tab.forEach(e=>{e.style.background="none";})
    tab[1].style.background="#75fb4c";
    con.forEach(e=>{e.style.display="none";})
    con[1].style.display="block";
    });


