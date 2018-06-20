$(document).ready(function(){
    $("input").click(function()
    {
        //alert("Hi");
        var numberoflistitem = $("#choices li").length;
        var randomchildNumber = Math.floor(Math.random()*numberoflistitem);
    
        $("H1").text($("#choices li").eq(randomchildNumber).text());
   });
});  