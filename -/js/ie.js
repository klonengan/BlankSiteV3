/**************************************** 
*	JavaScript Document
*	Created by ~wimpykatana
*	IE JS
*/

/****************************************
*	source :  http://labs.unitinteractive.com/unitpngfix.php
*	png image fix
*
*/

var clear="images/clear.gif" //path to clear.gif

pngfix=function(){var els=document.getElementsByTagName('*');var ip=/\.png/i;var i=els.length;while(i-- >0){var el=els[i];var es=el.style;if(el.src&&el.src.match(ip)&&!es.filter){es.height=el.height;es.width=el.width;es.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+el.src+"',sizingMethod='crop')";el.src=clear;}else{var elb=el.currentStyle.backgroundImage;if(elb.match(ip)){var path=elb.split('"');var rep=(el.currentStyle.backgroundRepeat=='no-repeat')?'crop':'scale';es.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+path[1]+"',sizingMethod='"+rep+"')";es.height=el.clientHeight+'px';es.backgroundImage='none';var elkids=el.getElementsByTagName('*');if (elkids){var j=elkids.length;if(el.currentStyle.position!="absolute")es.position='static';while (j-- >0)if(!elkids[j].style.position)elkids[j].style.position="relative";}}}}}
window.attachEvent('onload',pngfix);