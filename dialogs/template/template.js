/**
 * Created with JetBrains PhpStorm.
 * User: xuheng
 * Date: 12-8-8
 * Time: 下午2:09
 * To change this template use File | Settings | File Templates.
 */
(function () {
    var me = editor,
            preview = $G( "preview" ),
            preitem = $G( "preitem" ),
            tmps = templates,
            currentTmp;
    var initPre = function () {
        var str = "";
        for ( var i = 0, tmp; tmp = tmps[i++]; ) {
            str += '<div class="preitem" onclick="pre(' + i + ')"><img src="' + "images/" + tmp.pre + '" ' + (tmp.title ? "alt=" + tmp.title + " title=" + tmp.title + "" : "") + '></div>';
        }
        preitem.innerHTML = str;
    };
    var pre = function ( n ) {
        var tmp = tmps[n - 1];
        currentTmp = tmp;
        clearItem();
        domUtils.setStyles( preitem.childNodes[n - 1], {
            "background-image": "-webkit-linear-gradient(-360deg, #73bcff, #e5f3ff)",
        } );
        preview.innerHTML = tmp.preHtml ? tmp.preHtml : "";
    };
    var clearItem = function () {
        var items = preitem.children;
        for ( var i = 0, item; item = items[i++]; ) {
            domUtils.setStyles( item, {
                "background-image":"",
            } );
        }
    };
    dialog.onok = function () {
        if ( !$G( "issave" ).checked ){
            me.execCommand( "cleardoc" );
        }
        var obj = {
            html:currentTmp && currentTmp.html
        };
        me.execCommand( "template", obj );
    };
    initPre();
    window.pre = pre;
    pre(2)

})();

function save(){
   var box = document.getElementsByClassName('radiobox')[0];
   var className = box.className;
   var ipt = document.getElementById('issave');
   if (className.indexOf('checked') !== -1 ) {
       box.className = 'radiobox';
       ipt.checked = false;
   } else {
       box.className = 'radiobox checked';
       ipt.checked = true;
   }
}