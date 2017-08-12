const ofType = require('of-type');
const cliColor = require('cli-color');
const error = cliColor.red;
const warn = cliColor.bgYellow.blue;
module.exports = function(a,o,c){
  const errArguments = warn('typeof-arguments')+': '+error('Invalid module argument. The first argument must indicate [Object Arguments] object.');
  const errTypes = warn('typeof-arguments')+': '+error('Invalid module argument. The second argument must be of type [Array].');
  const errItems = warn('typeof-arguments')+': '+error('Invalid module argument. Each item of the second [Array] argument must be of type [String|RegExp].');
  const isO = ofType(a,'arguments');
  const isA = ofType(o,'array');
  if(!isO){
    var err = new Error(errArguments);
    throw err;
  } 
  if(!isA){
    var err = new Error(errTypes);
    throw err;
  }
  if(!isO||!isA) return;
  const clb = ofType(c,'function');
  var r = true;
  for(var x in o){
    var t = o[x];
    if(!ofType(o[x],'string|regexp')){
      var err = new Error(errItems);
      throw err;
    }
    var isStr = ofType(t,'string');
    var res = ofType(a[x],t);
    if(!res){
      r = false;
      var act = ofType(a[x],'undefined') ? 'undefined':ofType(a[x],'null') ? 'null':ofType(a[x],'arguments') ? 'object Arguments':a[x].constructor.name;
      var truthyFalsy = '';
      var exp = isStr ? 
        t.split('|').map((i)=>{
          const truthy = i==='truthy';
          const falsy = i==='falsy';
          const args = i==='arguments';
          const nullOrUnd = i==='null'||i==='undefined';
          truthyFalsy = truthy ? '<<falsy>> ':falsy ? '<<truthy>> ':truthyFalsy;
          return nullOrUnd||truthy||falsy||args ? i.toLowerCase():i[0].toUpperCase()+i.slice(1).toLowerCase();
        }).join('|'):
        (()=>{
          var r = t.toString();
          truthyFalsy = r.match(/truthy/) ? '<<falsy>> ':r.match(/falsy/) ? '<<truthy>> ':'';
          return r;
        })();
      var msg = `Invalid argument [${x}]. The [${act}] ${truthyFalsy}argument has been passed, while the ${isStr ? `[${exp}] one`:`argument of the type matching the regular expression: ${exp}`} is expected.`;
      if(clb){
        c({actual:act,expected:exp,message:msg,index:Number(x)});
      } else {
        var err = new TypeError(error(msg));
        throw err;
      }
    }
  }
  return r;
};