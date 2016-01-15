
var Benchmark = require("benchmark");
var suite = new Benchmark.Suite;
var SwitchMap = require("./switchMap");

suite.add("switch", ()=>{
    var a = 1, b = 3, c = 2, d = Math.floor(Math.random()*100);

    switch(d){
        case 0:
            b = c + a;
            break;
        case 1:
            a = b - c;
            break;
        case 2:
            b = c - a;
            break;
        case 3:
            a = b - c;
            break;
        case 4:
            b = c - a;
            break;
        case 5:
            a = b - c;
            break;
        case 6:
            b = c + a;
            break;
        case 7:
            a = b - c;
            break;
        case 8:
            b = c - a;
            break;
        case 9:
            a = b - c;
            break;
        case 10:
            b = c - a;
            break;
        case 11:
            a = b - c;
            break;
        case 12:
            b = c + a;
            break;
        case 13:
            a = b - c;
            break;
        case 14:
            b = c - a;
            break;
        case 15:
            a = b - c;
            break;
        case 16:
            b = c - a;
            break;
        case 17:
            a = b - c;
            break;
        case 18:
            b = c + a;
            break;
        case 19:
            a = b - c;
            break;
        case 20:
            b = c - a;
            break;
        case 21:
            a = b - c;
            break;
        case 22:
            b = c - a;
            break;
        case 23:
            a = b - c;
            break;
        case 24:
            b = c + a;
            break;
        case 25:
            a = b - c;
            break;
        case 26:
            b = c - a;
            break;
        case 27:
            a = b - c;
            break;
        case 28:
            b = c - a;
            break;
        case 29:
            a = b - c;
            break;
        case 30:
            b = c + a;
            break;
        case 31:
            a = b - c;
            break;
        case 32:
            b = c - a;
            break;
        case 33:
            a = b - c;
            break;
        case 34:
            b = c - a;
            break;
        case 35:
            a = b - c;
            break;
        case 36:
            b = c + a;
            break;
        case 37:
            a = b - c;
            break;
        case 38:
            b = c - a;
            break;
        case 39:
            a = b - c;
            break;
        case 40:
            b = c - a;
            break;
        case 41:
            a = b - c;
            break;
        case 42:
            b = c + a;
            break;
        case 43:
            a = b - c;
            break;
        case 44:
            b = c - a;
            break;
        case 45:
            a = b - c;
            break;
        case 46:
            b = c - a;
            break;
        case 47:
            a = b - c;
            break;
        case 48:
            b = c + a;
            break;
        case 49:
            a = b - c;
            break;
        case 50:
            b = c - a;
            break;
        case 51:
            a = b - c;
            break;
        case 52:
            b = c - a;
            break;
        case 53:
            a = b - c;
            break;
        case 54:
            b = c + a;
            break;
        case 55:
            a = b - c;
            break;
        case 56:
            b = c - a;
            break;
        case 57:
            a = b - c;
            break;
        case 58:
            b = c - a;
            break;
        case 59:
            a = b - c;
            break;
        case 60:
            b = c + a;
            break;
        case 61:
            a = b - c;
            break;
        case 62:
            b = c - a;
            break;
        case 63:
            a = b - c;
            break;
        case 64:
            b = c - a;
            break;
        case 65:
            a = b - c;
            break;
        case 66:
            b = c + a;
            break;
        case 67:
            a = b - c;
            break;
        case 68:
            b = c - a;
            break;
        case 69:
            a = b - c;
            break;
        case 70:
            b = c - a;
            break;
        case 71:
            a = b - c;
            break;
        case 72:
            b = c + a;
            break;
        case 73:
            a = b - c;
            break;
        case 74:
            b = c - a;
            break;
        case 75:
            a = b - c;
            break;
        case 76:
            b = c - a;
            break;
        case 77:
            a = b - c;
            break;
        case 78:
            b = c + a;
            break;
        case 79:
            a = b - c;
            break;
        case 80:
            b = c - a;
            break;
        case 81:
            a = b - c;
            break;
        case 82:
            b = c - a;
            break;
        case 83:
            a = b - c;
            break;
        case 84:
            b = c + a;
            break;
        case 85:
            a = b - c;
            break;
        case 86:
            b = c - a;
            break;
        case 87:
            a = b - c;
            break;
        case 88:
            b = c - a;
            break;
        case 89:
            a = b - c;
            break;
        case 90:
            b = c + a;
            break;
        case 91:
            a = b - c;
            break;
        case 92:
            b = c - a;
            break;
        case 93:
            a = b - c;
            break;
        case 94:
            b = c - a;
            break;
        case 95:
            a = b - c;
            break;
        case 96:
            b = c + a;
            break;
        case 97:
            a = b - c;
            break;
        case 98:
            b = c - a;
            break;
        default:
            a = b - c;

    }
}).add("object", ()=>{
        var s = {
            "0": function(){ return 0 + 0; },
            "1": function(){ return 1 + 1; },
            "2": function(){ return 2 + 2; },
            "3": function(){ return 3 + 3; },
            "4": function(){ return 4 + 4; },
            "5": function(){ return 5 + 5; },
            "6": function(){ return 6 + 6; },
            "7": function(){ return 7 + 7; },
            "8": function(){ return 8 + 8; },
            "9": function(){ return 9 + 9; },
            "10": function(){ return 10 + 10; },
            "11": function(){ return 11 + 11; },
            "12": function(){ return 12 + 12; },
            "13": function(){ return 13 + 13; },
            "14": function(){ return 14 + 14; },
            "15": function(){ return 15 + 15; },
            "16": function(){ return 16 + 16; },
            "17": function(){ return 17 + 17; },
            "18": function(){ return 18 + 18; },
            "19": function(){ return 19 + 19; },
            "20": function(){ return 20 + 20; },
            "21": function(){ return 21 + 21; },
            "22": function(){ return 22 + 22; },
            "23": function(){ return 23 + 23; },
            "24": function(){ return 24 + 24; },
            "25": function(){ return 25 + 25; },
            "26": function(){ return 26 + 26; },
            "27": function(){ return 27 + 27; },
            "28": function(){ return 28 + 28; },
            "29": function(){ return 29 + 29; },
            "30": function(){ return 30 + 30; },
            "31": function(){ return 31 + 31; },
            "32": function(){ return 32 + 32; },
            "33": function(){ return 33 + 33; },
            "34": function(){ return 34 + 34; },
            "35": function(){ return 35 + 35; },
            "36": function(){ return 36 + 36; },
            "37": function(){ return 37 + 37; },
            "38": function(){ return 38 + 38; },
            "39": function(){ return 39 + 39; },
            "40": function(){ return 40 + 40; },
            "41": function(){ return 41 + 41; },
            "42": function(){ return 42 + 42; },
            "43": function(){ return 43 + 43; },
            "44": function(){ return 44 + 44; },
            "45": function(){ return 45 + 45; },
            "46": function(){ return 46 + 46; },
            "47": function(){ return 47 + 47; },
            "48": function(){ return 48 + 48; },
            "49": function(){ return 49 + 49; },
            "50": function(){ return 50 + 50; },
            "51": function(){ return 51 + 51; },
            "52": function(){ return 52 + 52; },
            "53": function(){ return 53 + 53; },
            "54": function(){ return 54 + 54; },
            "55": function(){ return 55 + 55; },
            "56": function(){ return 56 + 56; },
            "57": function(){ return 57 + 57; },
            "58": function(){ return 58 + 58; },
            "59": function(){ return 59 + 59; },
            "60": function(){ return 60 + 60; },
            "61": function(){ return 61 + 61; },
            "62": function(){ return 62 + 62; },
            "63": function(){ return 63 + 63; },
            "64": function(){ return 64 + 64; },
            "65": function(){ return 65 + 65; },
            "66": function(){ return 66 + 66; },
            "67": function(){ return 67 + 67; },
            "68": function(){ return 68 + 68; },
            "69": function(){ return 69 + 69; },
            "70": function(){ return 70 + 70; },
            "71": function(){ return 71 + 71; },
            "72": function(){ return 72 + 72; },
            "73": function(){ return 73 + 73; },
            "74": function(){ return 74 + 74; },
            "75": function(){ return 75 + 75; },
            "76": function(){ return 76 + 76; },
            "77": function(){ return 77 + 77; },
            "78": function(){ return 78 + 78; },
            "79": function(){ return 79 + 79; },
            "80": function(){ return 80 + 80; },
            "81": function(){ return 81 + 81; },
            "82": function(){ return 82 + 82; },
            "83": function(){ return 83 + 83; },
            "84": function(){ return 84 + 84; },
            "85": function(){ return 85 + 85; },
            "86": function(){ return 86 + 86; },
            "87": function(){ return 87 + 87; },
            "88": function(){ return 88 + 88; },
            "89": function(){ return 89 + 89; },
            "90": function(){ return 90 + 90; },
            "91": function(){ return 91 + 91; },
            "92": function(){ return 92 + 92; },
            "93": function(){ return 93 + 93; },
            "94": function(){ return 94 + 94; },
            "95": function(){ return 95 + 95; },
            "96": function(){ return 96 + 96; },
            "97": function(){ return 97 + 97; },
            "98": function(){ return 98 + 98; },
            "def": function(){ return 99 + 99; },

        };

        var key = Math.floor(Math.random()*100);

        if(s[key]){
            var a = s[key]();
        } else {
            var a = s.def();
        }
}).on("cycle", (event)=>{
    console.log(String(event.target));
}).on("complete", function(){
    console.log("Fastest is " + this.filter("fastest").map("name"))
}).run({ async: true });