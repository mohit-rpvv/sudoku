window.onload = function () {
    var inputlist = document.getElementById("suduko");
    var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
    setInterval(checkRangeOfInputs, 200);
    setInterval(checkDuplicatesInRow, 300);
    setInterval(checkDuplicatesInColumn, 300);
    setInterval(checkDuplicatesIn3by3,300);



    function checkDuplicatesInRow() {
        for (l = 0; l < 9; l++) {
            var d = inputlist.getElementsByTagName("TR")[l];
            for (m = 0; m < 9; m++) {
                var e = d.getElementsByTagName("TD")[m];
                var f = e.getElementsByTagName("input")[0];
                for (n = 0; n < 9; n++) {
                    var g = d.getElementsByTagName("TD")[n];
                    var h = g.getElementsByTagName("input")[0];
                    if (((h.value == f.value) && (m != n)) && (h.value != "")) {
                        h.style.color = "red";
                        h.style.fontWeight = "bold";
                    }

                }
            }
        }
    }

    function checkDuplicatesInColumn() {
        for (o = 0; o < 9; o++) {
            for (p = 0; p < 9; p++) {
                var r = inputlist.getElementsByTagName("TR")[p];
                var s = r.getElementsByTagName("TD")[o];
                var t = s.getElementsByTagName("input")[0];
                for (q = 0; q < 9; q++) {
                    var u = inputlist.getElementsByTagName("TR")[q];
                    var w = u.getElementsByTagName("TD")[o];
                    var x = w.getElementsByTagName("input")[0];
                    if (((x.value == t.value) && (p != q)) && (x.value != "")) {
                        x.style.color = "red";
                        x.style.fontWeight = "bold";
                    }

                }
            }
        }
    }

    function checkDuplicatesIn3by3() {
        var row = 0, column = 0; rowRange = 2; columnRange = 2;

        for (rowtemp = row; rowtemp <= rowRange; rowtemp++) {
            for (coltemp = column; coltemp <= columnRange; coltemp++) {
                var aa = inputlist.getElementsByTagName("TR")[rowtemp];
                var ab = aa.getElementsByTagName("TD")[coltemp];
                var bb = ab.getElementsByTagName("input")[0];
                for (rowtemp1 = row; rowtemp1 <= rowRange; rowtemp1++) {
                    for (coltemp1 = column; coltemp1 <= columnRange; coltemp1++) {
                        var ac = inputlist.getElementsByTagName("TR")[rowtemp1];
                        var ad = ac.getElementsByTagName("TD")[coltemp1];
                        var cc = ad.getElementsByTagName("input")[0];
                        if((bb.value == cc.value)&&(bb.value != ""))
                        {
                            if(!((rowtemp == rowtemp1)&&(coltemp ==  coltemp1)))
                            {
                                bb.style.color = "red";
                                cc.style.color = "red";
                            }
                        }
                    }
                }
                
            }
            for (coltemp = column+3; coltemp <= columnRange+3; coltemp++) {
                var aa = inputlist.getElementsByTagName("TR")[rowtemp];
                var ab = aa.getElementsByTagName("TD")[coltemp];
                var bb = ab.getElementsByTagName("input")[0];
                for (rowtemp1 = row; rowtemp1 <= rowRange; rowtemp1++) {
                    for (coltemp1 = column+3; coltemp1 <= columnRange+3; coltemp1++) {
                        var ac = inputlist.getElementsByTagName("TR")[rowtemp1];
                        var ad = ac.getElementsByTagName("TD")[coltemp1];
                        var cc = ad.getElementsByTagName("input")[0];
                        if((bb.value == cc.value)&&(bb.value != ""))
                        {
                            if(!((rowtemp == rowtemp1)&&(coltemp ==  coltemp1)))
                            {
                                bb.style.color = "red";
                                cc.style.color = "red";
                            }
                        }
                    }
                }
                
            }
            for (coltemp = column+6; coltemp <= columnRange+6; coltemp++) {
                var aa = inputlist.getElementsByTagName("TR")[rowtemp];
                var ab = aa.getElementsByTagName("TD")[coltemp];
                var bb = ab.getElementsByTagName("input")[0];
                for (rowtemp1 = row; rowtemp1 <= rowRange; rowtemp1++) {
                    for (coltemp1 = column+6; coltemp1 <= columnRange+6; coltemp1++) {
                        var ac = inputlist.getElementsByTagName("TR")[rowtemp1];
                        var ad = ac.getElementsByTagName("TD")[coltemp1];
                        var cc = ad.getElementsByTagName("input")[0];
                        if((bb.value == cc.value)&&(bb.value != ""))
                        {
                            if(!((rowtemp == rowtemp1)&&(coltemp ==  coltemp1)))
                            {
                                bb.style.color = "red";
                                cc.style.color = "red";
                            }
                        }
                    }
                }
                
            } 
        }






        row  = row +3;  
        rowRange = rowRange+3;

        for (rowtemp = row; rowtemp <= rowRange; rowtemp++) {
            for (coltemp = column; coltemp <= columnRange; coltemp++) {
                var aa = inputlist.getElementsByTagName("TR")[rowtemp];
                var ab = aa.getElementsByTagName("TD")[coltemp];
                var bb = ab.getElementsByTagName("input")[0];
                for (rowtemp1 = row; rowtemp1 <= rowRange; rowtemp1++) {
                    for (coltemp1 = column; coltemp1 <= columnRange; coltemp1++) {
                        var ac = inputlist.getElementsByTagName("TR")[rowtemp1];
                        var ad = ac.getElementsByTagName("TD")[coltemp1];
                        var cc = ad.getElementsByTagName("input")[0];
                        if((bb.value == cc.value)&&(bb.value != ""))
                        {
                            if(!((rowtemp == rowtemp1)&&(coltemp ==  coltemp1)))
                            {
                                bb.style.color = "red";
                                cc.style.color = "red";
                            }
                        }
                    }
                }
                
            }
            for (coltemp = column+3; coltemp <= columnRange+3; coltemp++) {
                var aa = inputlist.getElementsByTagName("TR")[rowtemp];
                var ab = aa.getElementsByTagName("TD")[coltemp];
                var bb = ab.getElementsByTagName("input")[0];
                for (rowtemp1 = row; rowtemp1 <= rowRange; rowtemp1++) {
                    for (coltemp1 = column+3; coltemp1 <= columnRange+3; coltemp1++) {
                        var ac = inputlist.getElementsByTagName("TR")[rowtemp1];
                        var ad = ac.getElementsByTagName("TD")[coltemp1];
                        var cc = ad.getElementsByTagName("input")[0];
                        if((bb.value == cc.value)&&(bb.value != ""))
                        {
                            if(!((rowtemp == rowtemp1)&&(coltemp ==  coltemp1)))
                            {
                                bb.style.color = "red";
                                cc.style.color = "red";
                            }
                        }
                    }
                }
                
            }
            for (coltemp = column+6; coltemp <= columnRange+6; coltemp++) {
                var aa = inputlist.getElementsByTagName("TR")[rowtemp];
                var ab = aa.getElementsByTagName("TD")[coltemp];
                var bb = ab.getElementsByTagName("input")[0];
                for (rowtemp1 = row; rowtemp1 <= rowRange; rowtemp1++) {
                    for (coltemp1 = column+6; coltemp1 <= columnRange+6; coltemp1++) {
                        var ac = inputlist.getElementsByTagName("TR")[rowtemp1];
                        var ad = ac.getElementsByTagName("TD")[coltemp1];
                        var cc = ad.getElementsByTagName("input")[0];
                        if((bb.value == cc.value)&&(bb.value != ""))
                        {
                            if(!((rowtemp == rowtemp1)&&(coltemp ==  coltemp1)))
                            {
                                bb.style.color = "red";
                                cc.style.color = "red";
                            }
                        }
                    }
                }
                
            } 
        }



        row = row+3; 
        rowRange = rowRange +3;

        for (rowtemp = row; rowtemp <= rowRange; rowtemp++) {
            for (coltemp = column; coltemp <= columnRange; coltemp++) {
                var aa = inputlist.getElementsByTagName("TR")[rowtemp];
                var ab = aa.getElementsByTagName("TD")[coltemp];
                var bb = ab.getElementsByTagName("input")[0];
                for (rowtemp1 = row; rowtemp1 <= rowRange; rowtemp1++) {
                    for (coltemp1 = column; coltemp1 <= columnRange; coltemp1++) {
                        var ac = inputlist.getElementsByTagName("TR")[rowtemp1];
                        var ad = ac.getElementsByTagName("TD")[coltemp1];
                        var cc = ad.getElementsByTagName("input")[0];
                        if((bb.value == cc.value)&&(bb.value != ""))
                        {
                            if(!((rowtemp == rowtemp1)&&(coltemp ==  coltemp1)))
                            {
                                bb.style.color = "red";
                                cc.style.color = "red";
                            }
                        }
                    }
                }
                
            }
            for (coltemp = column+3; coltemp <= columnRange+3; coltemp++) {
                var aa = inputlist.getElementsByTagName("TR")[rowtemp];
                var ab = aa.getElementsByTagName("TD")[coltemp];
                var bb = ab.getElementsByTagName("input")[0];
                for (rowtemp1 = row; rowtemp1 <= rowRange; rowtemp1++) {
                    for (coltemp1 = column+3; coltemp1 <= columnRange+3; coltemp1++) {
                        var ac = inputlist.getElementsByTagName("TR")[rowtemp1];
                        var ad = ac.getElementsByTagName("TD")[coltemp1];
                        var cc = ad.getElementsByTagName("input")[0];
                        if((bb.value == cc.value)&&(bb.value != ""))
                        {
                            if(!((rowtemp == rowtemp1)&&(coltemp ==  coltemp1)))
                            {
                                bb.style.color = "red";
                                cc.style.color = "red";
                            }
                        }
                    }
                }
                
            }
            for (coltemp = column+6; coltemp <= columnRange+6; coltemp++) {
                var aa = inputlist.getElementsByTagName("TR")[rowtemp];
                var ab = aa.getElementsByTagName("TD")[coltemp];
                var bb = ab.getElementsByTagName("input")[0];
                for (rowtemp1 = row; rowtemp1 <= rowRange; rowtemp1++) {
                    for (coltemp1 = column+6; coltemp1 <= columnRange+6; coltemp1++) {
                        var ac = inputlist.getElementsByTagName("TR")[rowtemp1];
                        var ad = ac.getElementsByTagName("TD")[coltemp1];
                        var cc = ad.getElementsByTagName("input")[0];
                        if((bb.value == cc.value)&&(bb.value != ""))
                        {
                            if(!((rowtemp == rowtemp1)&&(coltemp ==  coltemp1)))
                            {
                                bb.style.color = "red";
                                cc.style.color = "red";
                            }
                        }
                    }
                }
                
            } 
        }
        
    }





    function checkRangeOfInputs() {
        for (i = 0; i < 9; i++) {
            var a = inputlist.getElementsByTagName("TR")[i];
            for (j = 0; j < 9; j++) {
                var b = a.getElementsByTagName("TD")[j];
                var c = b.getElementsByTagName("input")[0];
                if ((c.value > 0) && (c.value < 10)) {
                    c.style.color = "Green";
                    c.style.fontWeight = "bolder";

                }
                else if (c.value == "") {
                    c.style.backgroundColor = "white";
                }
                else {
                    c.style.color = "red";
                    c.style.fontWeight = "bolder";
                }
            }
        }
    }
}
