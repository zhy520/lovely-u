export default {
    methods: {
        format(shijianchuo){
            var time = new Date(parseInt(shijianchuo));
            var y = time.getFullYear();
            var m = time.getMonth()+1;
            var d = time.getDate();
            var h = time.getHours();
            var mm = time.getMinutes();
            var s = time.getSeconds();
            if(add0(h) == "08"&&add0(mm) == "00"&&add0(s) == "00"){
                return y+'-'+add0(m)+'-'+add0(d)+' 23:59:59';
            }else{
                return y+'年'+add0(m)+'月'+add0(d)+'日'+add0(h)+'时';
            }
        },
        format1(shijianchuo){
            var time = new Date(parseInt(shijianchuo));
            var y = time.getFullYear();
            var m = time.getMonth()+1;
            var d = time.getDate();
            var h = time.getHours();
            var mm = time.getMinutes();
            var s = time.getSeconds();
            if(add0(h) == "08"&&add0(mm) == "00"&&add0(s) == "00"){
                return y+'-'+add0(m)+'-'+add0(d)+' 23:59:59';
            }else{
                return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
            }

        },
        //制保留2位小数，如：2，会在2后面补上00.即2.00    
        toDecimal2(x){    
            var f = parseFloat(x);    
            if (isNaN(f)) {    
                return false;    
            }    
            var f = Math.round(x*100)/100;    
            var s = f.toString();    
            var rs = s.indexOf('.');    
            if (rs < 0) {    
                rs = s.length;    
                s += '.';    
            }    
            while (s.length <= rs + 2) {    
                s += '0';    
            }    
            return s;    
        },
        setDocumentTitle(title){
            document.title = title        
            if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
                var i = document.createElement('iframe');
                i.style.display = 'none';
                i.onload = function() {
                    setTimeout(function(){
                        i.remove();
                    }, 9)
                }
                document.body.appendChild(i);
            }
        }    
    }
}