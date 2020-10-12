let str = "";
let voteCount = {
    CATHGANDA : 0,
    PAULINE : 0,
    ROSEMARIE : 0,
    HOSEOK: 0,
    JUNGKOOK : 0,
    NAMJOON : 0,
    JIMIN : 0,
    TAEHYUNG : 0,
    YOONGI : 0,
    SEOKJIN : 0
};

$(document).ready(
    function(){
        $("#div1").click(
            function(){
                $("#IMPOSTOR").val("CATHGANDA");
				str += "CATHGANDA has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.CATHGANDA++;
                $("#p1vote").html(voteCount.CATHGANDA);            
            }
        );

        $("#div2").click(
            function(){
                $("#IMPOSTOR").val("PAULINE");
				str += "PAULINE has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.PAULINE++;
                $("#p2vote").html(voteCount.PAULINE);            
            }
        );

        $("#div3").click(
            function(){
                $("#IMPOSTOR").val("ROSEMARIE");
				str += "ROSEMARIE has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.ROSEMARIE++;
                $("#p3vote").html(voteCount.ROSEMARIE);            
            }
        );

        $("#div4").click(
            function(){
                $("#IMPOSTOR").val("HOSEOK");
				str += "HOSEOK has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.HOSEOK++;
                $("#p4vote").html(voteCount.HOSEOK);            
            }
        );

        $("#div5").click(
            function(){
                $("#IMPOSTOR").val("JUNGKOOK");
				str += "JUNGKOOK has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.JUNGKOOK++;
                $("#p5vote").html(voteCount.JUNGKOOK);            
            }
        );

        $("#div6").click(
            function(){
                $("#IMPOSTOR").val("NAMJOON");
				str += "NAMJOON has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.NAMJOON++;
                $("#p6vote").html(voteCount.NAMJOON);            
            }
        );

        $("#div7").click(
            function(){
                $("#IMPOSTOR").val("JIMIN");
				str += "JIMIN has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.JIMIN++;
                $("#p7vote").html(voteCount.JIMIN);            
            }
        );

        $("#div8").click(
            function(){
                $("#IMPOSTOR").val("TAEHYUNG");
				str += "TAEHYUNG has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.TAEHYUNG++;
                $("#p8vote").html(voteCount.TAEHYUNG);            
            }
        );

        $("#div9").click(
            function(){
                $("#IMPOSTOR").val("YOONGI");
				str += "YOONGI has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.YOONGI++;
                $("#p9vote").html(voteCount.YOONGI);            
            }
        );

        $("#div10").click(
            function(){
                $("#IMPOSTOR").val("SEOKJIN");
				str += "SEOKJIN has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.SEOKJIN++;
                $("#p10vote").html(voteCount.SEOKJIN);            
            }
        );
    }
)

