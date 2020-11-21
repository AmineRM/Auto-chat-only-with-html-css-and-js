var Chat = document.getElementById("Chat");
var input;
var Answer;
var value;
var order = 1;
var num = 0;

function Rest(){
    
    order++;

    if ( order == 7 ) {
        num++;
        order--;
        document.querySelector("#Chat div:nth-child(" + num + ")").style.display = "none";
    }
}

function Print(){

    input = document.getElementById("input");
    value = input.value.toString().toLowerCase().replace(/\s+/g, '');

    if ( input.value.replace(/ /g, "") != "" ) {
        Chat.innerHTML += "<div class=\"User-turn turn \"><span>" + input.value + "</span></div>";
        Rest();

        input.value = "";
        Response(value);

        return 0;
    } else {
        
        return 1;
    }

}

function Response(n){

    function Value(){

        var array;

        if  (

            n === "hello"
            ||
            n === "hello!"
            ||
            n === "hi"
            ||
            n === "hi!"
            ||
            n === "hello!"
            ||
            n === "hithere"
            ||
            n === "hithere!"
            ||
            n === "welcome"
            ||
            n === "welcome!"
            ||
            n === "hye"
            ||
            n === "hye!"

        )
        {

            array = [
                "What is up ?",
                "How are you ?",
                "How's everything ?",
                "How is going ?",
                "Are you well ?"
            ]

        }


        else if  (

            n === "whatisup?"
            ||
            n === "whatisup"
            ||
            n === "howareyou?"
            ||
            n === "howareyou"
            ||
            n === "howisgoing"
            ||
            n === "howisgoing?"
            ||
            n === "how'severything"
            ||
            n === "how'severything?"
            ||
            n === "areyouwell?"
            ||
            n === "areyouwell"

        )
        {

            array = [
                "What is up ?",
                "How are you ?",
                "How's everything ?",
                "How is going ?",
                "Are you well ?"
            ]

        }


        else if (

            n === "whattimeisit"

        )
        {

            let today = new Date();
            let h = today.getHours(); 
            let m = today.getMinutes();
            function Add_zero(i){
                if( i < 10 ) {
                    i = '0' + i;
                }
                return i;
            }
            h = Add_zero(h);
            m = Add_zero(m);

            array = [
                'Now is ' + h + ":" + m,
                h + ":" + m,
                "May be" + h + ":" + m
            ]

        }

        else if (

            n.charAt(0) === 'ا'
            ||
            n.charAt(0) === 'أ'
            ||
            n.charAt(0) === 'ب'  
            ||
            n.charAt(0) === 'ج'
            ||
            n.charAt(0) === 'د'
            ||
            n.charAt(0) === 'ه'
            ||
            n.charAt(0) === 'و'
            ||
            n.charAt(0) === 'ز'
            ||
            n.charAt(0) === 'ح'
            ||
            n.charAt(0) === 'ط'
            ||
            n.charAt(0) === 'ي'
            ||
            n.charAt(0) === 'ك'
            ||
            n.charAt(0) === 'ل'
            ||
            n.charAt(0) === 'م'
            ||
            n.charAt(0) === 'ن'
            ||
            n.charAt(0) === 'س'
            ||
            n.charAt(0) === 'ع'
            ||
            n.charAt(0) === 'ف'
            ||
            n.charAt(0) === 'ص'
            ||
            n.charAt(0) === 'ق'
            ||
            n.charAt(0) === 'ر'
            ||
            n.charAt(0) === 'ش'
            ||
            n.charAt(0) === 'ت'
            ||
            n.charAt(0) === 'ث'
            ||
            n.charAt(0) === 'خ'
            ||
            n.charAt(0) === 'ذ'
            ||
            n.charAt(0) === 'ض'
            ||
            n.charAt(0) === 'ظ'
            ||
            n.charAt(0) === 'غ'
    
        )
        {
            array = [
                "Sorry, I do not speak Arabic",
                "Arabic !",
                "This is Arabic ?"
            ]
        }

        else
        {
            array = [
                "I do not understand you",
                "What ?",
                "Try again"
            ]
        }

        Answer = array[Math.floor(Math.random() * array.length)];

    }
    //Random answer

    Value();
    Print_answer(Answer);
}

function Print_answer(a){
    setTimeout(function(){
        Chat.innerHTML += "<div class=\"Auto-turn turn\"><span>" + a + "</span></div>";
        Rest();
    }, 500)
}

//other way for key
document.addEventListener('keydown' , event => {
    if (event.keyCode == 13){
        Print();
    }
})
