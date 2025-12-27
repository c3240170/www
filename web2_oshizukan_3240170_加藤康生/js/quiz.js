const questions = [
    {q:"ゲームセンスがピカイチなのは？",c:["じゃすぱー","すたんみ","たぬきにんじゃ","しゃるる"],a:0},
    {q:"チクチク言葉をよく吐くのは？",c:["らいじん","みしゃるる","じゃすぱー","たぬきにんじゃ"],a:0},
    {q:"しゃるる杯主催者は？",c:["じゃすぱー","しゃるる","すたんみ","らいじん"],a:1},
    {q:"楽しそうにゲームをする人は？",c:["すたんみ","しゃるる","らいじん","じゃすぱー"],a:0},
    {q:"忍者のような口癖持つ人物は？",c:["らいじん","しゃるる","たぬきにんじゃ","すたんみ"],a:2}
];

let index=0, score=0;

function showQuestion(){
    document.querySelector("#question").textContent = questions[index].q;
    const box = document.querySelector("#choices");
    box.innerHTML="";
    questions[index].c.forEach((t,i)=>{
        let btn=document.createElement("button");
        btn.textContent=t;
        btn.addEventListener("click",()=>answer(i));
        box.appendChild(btn);
    });
}

function answer(i){
    if(i===questions[index].a){ score++; }
    index++;
    if(index<questions.length){ showQuestion(); }
    else endQuiz();
}

function endQuiz(){
    document.getElementById("choices").innerHTML="";
    let msg = score>=4? "あなたはげまげまマスター！" : "まだまだ深掘りしよう！";
    document.getElementById("result").textContent=`${score} / ${questions.length} 点　${msg}`;
    document.getElementById("restart").style.display="block";
}

document.getElementById("restart").addEventListener("click",()=>{
    index=0; score=0;
    document.getElementById("restart").style.display="none";
    document.getElementById("result").textContent="";
    showQuestion();
});

document.getElementById("next-btn").style.display="none";
showQuestion();
