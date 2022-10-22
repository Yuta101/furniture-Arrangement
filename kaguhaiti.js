$(function () {

    const btn = document.getElementById("output-btn");
    let nyuuryoku = document.getElementById("nyuuryoku");
    let nyuuryoku1 = document.getElementById("nyuuryoku1");
    let div = document.getElementsByClassName("div");

    $('.abc').hide();
    $('.aaa').hide();

    let inputValue;
    let inputValue1;
    //・部屋の大きさ横（1000ピクセル固定固定）÷　入力した部屋の大きさ横　×　部屋の大きさ縦

    $('#output-btn').on("click", () => {

        inputValue = nyuuryoku.value;
        inputValue1 = nyuuryoku1.value;





        let tate = 0;
        tate = 1000 / inputValue1 * inputValue
        console.log(tate);

        $('.div').height(tate).width(1000);

        $('.abc').show();
        $('.aaa').show();

    });



    const sentaku = document.getElementById("sentaku");
    const addbtn = document.getElementById("add-btn");
    let suuzi = document.getElementsByClassName("suuzi");
    let suuzi1 = document.getElementsByClassName("suuzi1");
    const tuika = document.getElementById("tuika");
    const tuika1 = document.getElementById("tuika1");



    //const d = document.getElementById("add-bbb");
    //const c = document.getElementById("irogae-aka");

    $('#tuika').on("click", () => {
        $('.suuzi1').hide();
        $('.suuzi').show();
        $('.suuzi2').show();


    });

    $('#tuika1').on("click", () => {


        $('.suuzi1').show();
        $('.suuzi').hide();
        $('.suuzi2').hide();


    });


    //・部屋の大きさ横（ピクセル）÷　入力した部屋の大きさ横　×　家具の横

    //・部屋の大きさ横（ピクセル）÷　入力した部屋の大きさ横　×　家具の縦
    let count = 1;
    let hensuu;

    $('#add-btn').on("click", () => {
        const str1 = $('input:radio[name="tuika"]:checked').val();
        console.log(str1);

        if (str1 == "sikakkei") {
            const kaguInputYoko = $('.suuzi').val();
            const kaguInputTate = $('.suuzi2').val();

            let kagutate = 0;
            kagutate = 1000 / inputValue1 * kaguInputTate
            console.log(kagutate);

            let kaguyoko = 0;
            kaguyoko = 1000 / inputValue1 * kaguInputYoko
            console.log(kaguyoko);
            console.log(inputValue1);
            console.log(inputValue);
            console.log(kaguInputYoko);

            // 変数名をDIV1

            hensuu = sentaku.value;


            let divtest = "<div class='div1' id='div" + count + "'>" + hensuu + "</div>"
            console.log(divtest);

            $('.div').append(divtest);
            $('#div' + count).height(kagutate).width(kaguyoko);

           $(".div1").draggable({ containment: ".div" });

        } else {

            const kaguInputMaru = $('.suuzi1').val();

            hensuu = sentaku.value;

            let kagumaru = 0;
            kagumaru = 1000 / inputValue1 * kaguInputMaru
            console.log(kagumaru);


            let divMaru = "<div class='div2' id='div" + count + "'>" + hensuu + "</div>"
            console.log(divMaru);

            $('.div').append(divMaru);
            $('#div' + count).height(kagumaru).width(kagumaru);

            $(".div2").draggable({ containment: ".div" });

          //  $( ".div2" ).sortable();
        };





        // オリジナルアプリのコーディング（家具追加ボタン、扉窓追加ボタン）


        count++;

    });

    $('.tobira').hide();
    $('.mado').hide();



    $("#add-tuika1").on("click",() =>{

        $('.mado').toggle();
      //  $(".mado").draggable({ containment: ".divtest" });
      $(".mado").draggable();

     // let madokaiten = $(this).attr("id");
       // console.log("a");
      //   hennkouKakudoMado = $('input:checkbox[name="add-Mado"]:checked').val();
     //   if(hennkouKakudoMado == "add-mado" ){
        //        console.log("A");
      //          console.log(madokaiten);
       //         let Angle = getRotationDegrees($("#" + madokaiten));
      //          let ipulsAngle = Angle + 10;
       //         $("#" + madokaiten).css( { transform: "rotate(" + ipulsAngle + "deg)" });
        
        
     //   }
        
      //  function getRotationDegrees(obj) {
       //     var matrix = obj.css("transform");
       //     if(matrix !== 'none') {
         //       var values = matrix.split('(')[1].split(')')[0].split(',');
       //         var a = values[0];
       ////         var b = values[1];
     //           var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
      //      } else { var angle = 0; }
     //      if (angle < 0) {
         //       angle = angle + 360;
     //       }
    //        return angle;        
   //     }  


    });


    $(".add-tuika").on("click",() =>{

        $('.tobira').toggle();
      $('.tobira').draggable();
      //  $('.tobira').draggable({containment : '.divtest'});

    });


    let hennkouKakudo;
    //家具の角度変更 家具削除

    $(document).on("click", ".div1",  function(){
        let tmpid = $(this).attr("id");
        console.log("a");
         hennkouKakudo = $('input:radio[name="hennkou"]:checked').val();
        if(hennkouKakudo == "hennkou" ){
                console.log("A");
                console.log(tmpid);
                let nowAngle = getRotationDegrees($("#" + tmpid));
                let pulsAngle = nowAngle + 10;
                $("#" + tmpid).css( { transform: "rotate(" + pulsAngle + "deg)" });
        
        
        }
        
        function getRotationDegrees(obj) {
            var matrix = obj.css("transform");
            if(matrix !== 'none') {
                var values = matrix.split('(')[1].split(')')[0].split(',');
                var a = values[0];
                var b = values[1];
                var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
            } else { var angle = 0; }
            if (angle < 0) {
                angle = angle + 360;
            }
            return angle;        
        }  
        if(hennkouKakudo == "remove" ){
            console.log("B");
            let kaguRemove = $(this).attr("id");
            console.log(kaguRemove);
           let nowAngle = getRotationDegrees($("#" + kaguRemove));
           $(("#" + kaguRemove)).remove();
           
    
    
    }
    });



    //丸要素の削除

    $(document).on("click", ".div2",  function(){

        if(hennkouKakudo == "remove" ){
            console.log("C");
            let kaguRemove1 = $(this).attr("id");
            console.log(kaguRemove1);
          $(("#" + kaguRemove1)).remove();
        }
    })


    //<div class="moveYoko"></div>
    //<div class="moveSita"> </div>
    //<div class="moveyoko"></div>


    //.divYoko{

      //  height: 1000px;
        //width: 10px;
    
    //}


    //if($('checkbox').attr('class')== 'add-tuika' ||$('button').attr('class')=='add-bbb')on("click", () => {

        
   // $('.add-bbb').on("click", () => {


      //  let tobiraAddtuika = $('input:checkbox[name="add-tuika"]:checked').map(function(){
          //  return $(this).val();
     //   }).get();

      //  for(let i =0; i < tobiraAddtuika.length; i++){
           // console.log(tobiraAddtuika[i]);
          //  if (tobiraAddtuika[i] == "tobira") {
           //     console.log("A");
           //     $('.tobira').show();
         //       $('.tobira').draggable({containment : '.divtest'});
            // $('.tobira').draggable();
           //     continue;
    
        //    } 
       //     if (tobiraAddtuika[i] == "mado") {
       //         $('.mado').show();
       //         $(".mado").draggable({ containment: ".divtest" });
               // $(".mado").draggable();
       //        continue;
       //         }
               
        //        if(tobiraAddtuika[i] != "tobira"){
       //           $('.tobira').hide() 
        //          continue;
         //        }
            
           //   if(tobiraAddtuika[i] != "mado") {
           //     $('.mado').hide();
           //     continue;
          //  }
    
     //   };
        

     

       
   // });

    



  //  <button class="add-bbb">追加</button>
    

  

});