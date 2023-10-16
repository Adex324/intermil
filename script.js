
function getVal(){
    let dnumber = document.getElementById("card-text1");  // cardnumber
    let act2 = document.getElementById("number")
    let number= act2.value;
    dnumber.innerText = number;
    $(".card-text1").css("letter-spacing", "4.3px")
  
}
function getValue(){
    let dname = document.getElementById("small1"); // name
    let act1 = document.getElementById("name");
    let name= act1.value;
    dname.innerText = name;
}
function getVolume(){
    let ddate = document.getElementById("small2"); // date
    let act3 = document.getElementById("dateM")
    let dateM= act3.value;
    ddate.innerText = dateM;
}
function getValid(){
    let dcvc = document.getElementById("card-text3"); // cvc
    let act5 = document.getElementById("CVC")
    let CVC= act5.value; 
    dcvc.innerText = CVC;
       
}
function getVolume2(){
    let ddate2 = document.getElementById("small3"); // date
    let act4 = document.getElementById("dateY")
    let dateY= act4.value;
    ddate2.innerText = dateY;
}
$(document).ready(function(){

    $("#name").keyup(function(){
      
        if(validateName()){
          $("#name").css("border" , "2px solid green");
          $("#name").css( "background-color" , " white ") 
          $(".msg").html("");
          $(".msg").css();
          $('.btn-ppl').prop('disabled', false);
         
          
        } else if(number.value === "" || number.value == null ){
            // $(".under-msg").html("<h5>Can't be blank</h5>");
            
            // $(".under-msg").css("color" , " hsl(4, 55%, 60%)");
            $('.btn-ppl').prop('disabled', true);
            $("#name").css( "border" , "2px solid hsl(4, 55%, 60%) ");}
else{ 
         $("#name").css( "border" , "2px solid hsl(4, 55%, 60%) ");
         $("#name").css( "background-color" , " white")
         $(".msg").html("<h4>Valid email required</h4>");
         $(".msg").css("color" , " hsl(4, 55%, 60%)");
         $('.btn-ppl').prop('disabled', true);
         
        }
        if($('.btn-ppl').prop('disabled', false)) { $(".btn-ppl").click(function(){
            $("#thankYou").css("display" , "inline-block")
            $("#rightSide").css("display" , "none")
        });};
         
      
       
    });
    $("#number").keyup(function(){
     
        if(validateNumber()){
           
          $("#number").css("border" , "2px solid green");
          $("#number").css( "background-color" , " white ") 
          $(".under-msg").html("" );
          $(".under-msg").css();
          $('.btn-ppl').prop('disabled', false);

         
          
        }
        else if(number.value === "" || number.value == null ){
            $(".under-msg").html("<h5>Can't be blank</h5>");
            
            $(".under-msg").css("color" , " hsl(4, 55%, 60%)");
            $('.btn-ppl').prop('disabled', true);
            $("#number").css( "border" , "2px solid hsl(4, 55%, 60%) ");}



            
            else{ 
         $("#number").css( "border" , "2px solid hsl(4, 55%, 60%) ");
         $("#number").css( "background-color" , " white")
         $(".under-msg").html("<h5>Wrong format, numbers only</h5>");
         $(".under-msg").css("color" , " hsl(4, 55%, 60%)");
         $('.btn-ppl').prop('disabled', true);

         
        }
        if($('.btn-ppl').prop('disabled', false)) { $(".btn-ppl").click(function(){
            $("#thankYou").css("display" , "inline-block")
            $("#rightSide").css("display" , "none")
        });};
       
       
         
       
    });
    $("#dateM").keyup(function(){
      
        if(validatedateM()){
            
          $("#dateM").css("border" , "2px solid green");
          $("#dateM").css( "background-color" , " white ") 
          $(".bottom-msg").html("" );
          $(".bottom-msg").css();
          $('.btn-ppl').prop('disabled', false);
          
       
          
        }
        else  if(dateM.value === "" || dateM.value == null ){
            $(".bottom-msg").html("<h5>Can't be blank</h5>");
            $(".bottom-msg").css("color" , " hsl(4, 55%, 60%)");
            $('.btn-ppl').prop('disabled', true);
            $("#dateM").css( "border" , "2px solid hsl(4, 55%, 60%) ");
        }else{ 
         $("#dateM").css( "border" , "2px solid hsl(4, 55%, 60%) ");
         $("#dateM").css( "background-color" , " white")
         $(".bottom-msg").html("<h5>Wrong format, numbers only</h5>");
         $(".bottom-msg").css("color" , " hsl(4, 55%, 60%)");
         $('.btn-ppl').prop('disabled', true);
        
        }
        if($('.btn-ppl').prop('disabled', false)) { $(".btn-ppl").click(function(){
            $("#thankYou").css("display" , "inline-block")
            $("#rightSide").css("display" , "none")
        });};
       
    });
    $("#dateY").keyup(function(){
        
        if(validatedateY()){
          $("#dateY").css("border" , "2px solid green");
          $("#dateY").css( "background-color" , " white ") 
          $(".bottom-msg").html("" );
          $(".bottom-msg").css();
          $('.btn-ppl').prop('disabled', false);
         
        }else if(dateY.value === "" || dateY.value == null ){
            $(".bottom-msg").html("<h5>Can't be blank</h5>");
            $(".bottom-msg").css("color" , " hsl(4, 55%, 60%)");
            $('.btn-ppl').prop('disabled', true);
            $("#dateY").css( "border" , "2px solid hsl(4, 55%, 60%) ");
        }else{ 
         $("#dateY").css( "border" , "2px solid hsl(4, 55%, 60%) ");
         $("#dateY").css( "background-color" , " white")
         $(".bottom-msg").html("<h5>Wrong format, numbers only</h5>");
         $(".bottom-msg").css("color" , " hsl(4, 55%, 60%)");
         $('.btn-ppl').prop('disabled', true);

        }
        if($('.btn-ppl').prop('disabled', false)) { $(".btn-ppl").click(function(){
            $("#thankYou").css("display" , "inline-block")
            $("#rightSide").css("display" , "none")
        });}
        
        
        
         
       
    });
    $("#CVC").keyup(function(){
        if(validateCVC()){
          $("#CVC").css("border" , "2px solid green");
          $("#CVC").css( "background-color" , " white ") 
          $(".last-msg").html("" );
          $(".last-msg").css();
          $('.btn-ppl').prop('disabled', false);

        
        }else if(CVC.value === "" || CVC.value == null ){
            $(".last-msg").html("<h5>Can't be blank</h5>");
            $(".last-msg").css("color" , " hsl(4, 55%, 60%)");
            $('.btn-ppl').prop('disabled', true);
            $("#CVC").css( "border" , "2px solid hsl(4, 55%, 60%) ");
        }else{ 
         $("#CVC").css( "border" , "2px solid hsl(4, 55%, 60%) ");
         $("#CVC").css( "background-color" , " white")
         $(".last-msg").html("<h5>Wrong format, numbers only</h5>");
         $(".last-msg").css("color" , " hsl(4, 55%, 60%)");
         $('.btn-ppl').prop('disabled', true);
         
        }
        if($('.btn-ppl').prop('disabled', false)) { $(".btn-ppl").click(function(){
            $("#thankYou").css("display" , "inline-block")
            $("#rightSide").css("display" , "none")
        });}
       
    });

   
   
});

function validateName(){
    var act1 = document.getElementById("name")
    var name= act1.value;
    var reg = /^[a-z ,.'-]+$/i
if(reg.test(name)){
    return true;

}else{
    return false;
}
}
function validateNumber(){
    var act2 = document.getElementById("number")
    var number= act2.value;
    var reg2 = /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/
if(reg2.test(number)){
    return true;

}else{
    return false;
}
};
function validatedateM(){
    var act3 = document.getElementById("dateM")
    var dateM= act3.value;
    var reg3 = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
if(reg3.test(dateM)){
    return true;

}else{
    return false;
}
};
function validatedateY(){
    var act4 = document.getElementById("dateY")
    var dateY= act4.value;
    var reg4 =  /^\d+$/;
if(reg4.test(dateY)){
    return true;

}else{
    return false;
}
};
function validateCVC(){
    var act5 = document.getElementById("CVC")
    var CVC= act5.value;
    var reg5 =  /^\d+$/;
if(reg5.test(CVC)){
    return true;

}else{
    return false;
}
}


