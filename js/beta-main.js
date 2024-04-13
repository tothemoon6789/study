  // lay cac phan tu tren web
  var a = document.querySelectorAll(".ws-table-all tr td:first-child a");
  var arr = [];
  a.forEach((element) => {
    console.log(element.innerText);
    var obj = {};
    obj.name = element.innerText;
    obj.href = "https://www.w3schools.com/jsref/"+element.getAttribute("href");
    arr.push(obj);
  });
  console.log(arr);
  var arrayObject = [
    {
        "name": "at()",
        "href": "https://www.w3schools.com/jsref/jsref_array_at.asp"
    },
    {
        "name": "concat()",
        "href": "https://www.w3schools.com/jsref/jsref_concat_array.asp"
    },
    {
        "name": "constructor",
        "href": "https://www.w3schools.com/jsref/jsref_constructor_array.asp"
    },
    {
        "name": "copyWithin()",
        "href": "https://www.w3schools.com/jsref/jsref_copywithin.asp"
    },
    {
        "name": "entries()",
        "href": "https://www.w3schools.com/jsref/jsref_entries.asp"
    },
    {
        "name": "every()",
        "href": "https://www.w3schools.com/jsref/jsref_every.asp"
    },
    {
        "name": "fill()",
        "href": "https://www.w3schools.com/jsref/jsref_fill.asp"
    },
    {
        "name": "filter()",
        "href": "https://www.w3schools.com/jsref/jsref_filter.asp"
    },
    {
        "name": "find()",
        "href": "https://www.w3schools.com/jsref/jsref_find.asp"
    },
    {
        "name": "findIndex()",
        "href": "https://www.w3schools.com/jsref/jsref_findindex.asp"
    },
    {
        "name": "findLast()",
        "href": "https://www.w3schools.com/jsref/jsref_array_findlast.asp"
    },
    {
        "name": "findLastIndex()",
        "href": "https://www.w3schools.com/jsref/jsref_array_findlastindex.asp"
    },
    {
        "name": "flat()",
        "href": "https://www.w3schools.com/jsref/jsref_array_flat.asp"
    },
    {
        "name": "flatMap()",
        "href": "https://www.w3schools.com/jsref/jsref_array_flatmap.asp"
    },
    {
        "name": "forEach()",
        "href": "https://www.w3schools.com/jsref/jsref_foreach.asp"
    },
    {
        "name": "from()",
        "href": "https://www.w3schools.com/jsref/jsref_from.asp"
    },
    {
        "name": "includes()",
        "href": "https://www.w3schools.com/jsref/jsref_includes_array.asp"
    },
    {
        "name": "indexOf()",
        "href": "https://www.w3schools.com/jsref/jsref_indexof_array.asp"
    },
    {
        "name": "isArray()",
        "href": "https://www.w3schools.com/jsref/jsref_isarray.asp"
    },
    {
        "name": "join()",
        "href": "https://www.w3schools.com/jsref/jsref_join.asp"
    },
    {
        "name": "keys()",
        "href": "https://www.w3schools.com/jsref/jsref_keys.asp"
    },
    {
        "name": "lastIndexOf()",
        "href": "https://www.w3schools.com/jsref/jsref_lastindexof_array.asp"
    },
    {
        "name": "length",
        "href": "https://www.w3schools.com/jsref/jsref_length_array.asp"
    },
    {
        "name": "map()",
        "href": "https://www.w3schools.com/jsref/jsref_map.asp"
    },
    {
        "name": "of()",
        "href": "https://www.w3schools.com/jsref/jsref_array_of.asp"
    },
    {
        "name": "pop()",
        "href": "https://www.w3schools.com/jsref/jsref_pop.asp"
    },
    {
        "name": "prototype",
        "href": "https://www.w3schools.com/jsref/jsref_prototype_array.asp"
    },
    {
        "name": "push()",
        "href": "https://www.w3schools.com/jsref/jsref_push.asp"
    },
    {
        "name": "reduce()",
        "href": "https://www.w3schools.com/jsref/jsref_reduce.asp"
    },
    {
        "name": "reduceRight()",
        "href": "https://www.w3schools.com/jsref/jsref_reduceright.asp"
    },
    {
        "name": "reverse()",
        "href": "https://www.w3schools.com/jsref/jsref_reverse.asp"
    },
    {
        "name": "shift()",
        "href": "https://www.w3schools.com/jsref/jsref_shift.asp"
    },
    {
        "name": "slice()",
        "href": "https://www.w3schools.com/jsref/jsref_slice_array.asp"
    },
    {
        "name": "some()",
        "href": "https://www.w3schools.com/jsref/jsref_some.asp"
    },
    {
        "name": "sort()",
        "href": "https://www.w3schools.com/jsref/jsref_sort.asp"
    },
    {
        "name": "splice()",
        "href": "https://www.w3schools.com/jsref/jsref_splice.asp"
    },
    {
        "name": "toString()",
        "href": "https://www.w3schools.com/jsref/jsref_tostring_array.asp"
    },
    {
        "name": "unshift()",
        "href": "https://www.w3schools.com/jsref/jsref_unshift.asp"
    },
    {
        "name": "valueOf()",
        "href": "https://www.w3schools.com/jsref/jsref_valueof_array.asp"
    },
    {
        "name": "with()",
        "href": "https://www.w3schools.com/jsref/jsref_array_with.asp"
    }
];
var stringObject =[
    {
        "name": "charAt()",
        "href": "https://www.w3schools.com/jsref/jsref_charat.asp"
    },
    {
        "name": "charCodeAt()",
        "href": "https://www.w3schools.com/jsref/jsref_charcodeat.asp"
    },
    {
        "name": "concat()",
        "href": "https://www.w3schools.com/jsref/jsref_concat_string.asp"
    },
    {
        "name": "constructor",
        "href": "https://www.w3schools.com/jsref/jsref_constructor_string.asp"
    },
    {
        "name": "endsWith()",
        "href": "https://www.w3schools.com/jsref/jsref_endswith.asp"
    },
    {
        "name": "fromCharCode()",
        "href": "https://www.w3schools.com/jsref/jsref_fromcharcode.asp"
    },
    {
        "name": "includes()",
        "href": "https://www.w3schools.com/jsref/jsref_includes.asp"
    },
    {
        "name": "indexOf()",
        "href": "https://www.w3schools.com/jsref/jsref_indexof.asp"
    },
    {
        "name": "lastIndexOf()",
        "href": "https://www.w3schools.com/jsref/jsref_lastindexof.asp"
    },
    {
        "name": "length",
        "href": "https://www.w3schools.com/jsref/jsref_length_string.asp"
    },
    {
        "name": "localeCompare()",
        "href": "https://www.w3schools.com/jsref/jsref_localecompare.asp"
    },
    {
        "name": "match()",
        "href": "https://www.w3schools.com/jsref/jsref_match.asp"
    },
    {
        "name": "prototype",
        "href": "https://www.w3schools.com/jsref/jsref_prototype_string.asp"
    },
    {
        "name": "repeat()",
        "href": "https://www.w3schools.com/jsref/jsref_repeat.asp"
    },
    {
        "name": "replace()",
        "href": "https://www.w3schools.com/jsref/jsref_replace.asp"
    },
    {
        "name": "replaceAll()",
        "href": "https://www.w3schools.com/jsref/jsref_string_replaceall.asp"
    },
    {
        "name": "search()",
        "href": "https://www.w3schools.com/jsref/jsref_search.asp"
    },
    {
        "name": "slice()",
        "href": "https://www.w3schools.com/jsref/jsref_slice_string.asp"
    },
    {
        "name": "split()",
        "href": "https://www.w3schools.com/jsref/jsref_split.asp"
    },
    {
        "name": "startsWith()",
        "href": "https://www.w3schools.com/jsref/jsref_startswith.asp"
    },
    {
        "name": "substr()",
        "href": "https://www.w3schools.com/jsref/jsref_substr.asp"
    },
    {
        "name": "substring()",
        "href": "https://www.w3schools.com/jsref/jsref_substring.asp"
    },
    {
        "name": "toLocaleLowerCase()",
        "href": "https://www.w3schools.com/jsref/jsref_tolocalelowercase.asp"
    },
    {
        "name": "toLocaleUpperCase()",
        "href": "https://www.w3schools.com/jsref/jsref_tolocaleuppercase.asp"
    },
    {
        "name": "toLowerCase()",
        "href": "https://www.w3schools.com/jsref/jsref_tolowercase.asp"
    },
    {
        "name": "toString()",
        "href": "https://www.w3schools.com/jsref/jsref_tostring_string.asp"
    },
    {
        "name": "toUpperCase()",
        "href": "https://www.w3schools.com/jsref/jsref_touppercase.asp"
    },
    {
        "name": "trim()",
        "href": "https://www.w3schools.com/jsref/jsref_trim_string.asp"
    },
    {
        "name": "trimEnd()",
        "href": "https://www.w3schools.com/jsref/jsref_string_trim_end.asp"
    },
    {
        "name": "trimStart()",
        "href": "https://www.w3schools.com/jsref/jsref_string_trim_start.asp"
    },
    {
        "name": "valueOf()",
        "href": "https://www.w3schools.com/jsref/jsref_valueof_string.asp"
    },
    {
        "name": "anchor()",
        "href": "https://www.w3schools.com/jsref/jsref_anchor.asp"
    },
    {
        "name": "big()",
        "href": "https://www.w3schools.com/jsref/jsref_big.asp"
    },
    {
        "name": "blink()",
        "href": "https://www.w3schools.com/jsref/jsref_blink.asp"
    },
    {
        "name": "bold()",
        "href": "https://www.w3schools.com/jsref/jsref_bold.asp"
    },
    {
        "name": "fixed()",
        "href": "https://www.w3schools.com/jsref/jsref_fixed.asp"
    },
    {
        "name": "fontcolor()",
        "href": "https://www.w3schools.com/jsref/jsref_fontcolor.asp"
    },
    {
        "name": "fontsize()",
        "href": "https://www.w3schools.com/jsref/jsref_fontsize.asp"
    },
    {
        "name": "italics()",
        "href": "https://www.w3schools.com/jsref/jsref_italics.asp"
    },
    {
        "name": "link()",
        "href": "https://www.w3schools.com/jsref/jsref_link.asp"
    },
    {
        "name": "small()",
        "href": "https://www.w3schools.com/jsref/jsref_small.asp"
    },
    {
        "name": "strike()",
        "href": "https://www.w3schools.com/jsref/jsref_strike.asp"
    },
    {
        "name": "sub()",
        "href": "https://www.w3schools.com/jsref/jsref_sub.asp"
    },
    {
        "name": "sup()",
        "href": "https://www.w3schools.com/jsref/jsref_sup.asp"
    }
]
var numberObject = [
    {
        "name": "constructor",
        "href": "https://www.w3schools.com/jsref/jsref_constructor_number.asp"
    },
    {
        "name": "EPSILON",
        "href": "https://www.w3schools.com/jsref/jsref_number_epsilon.asp"
    },
    {
        "name": "isFinite()",
        "href": "https://www.w3schools.com/jsref/jsref_isfinite_number.asp"
    },
    {
        "name": "isInteger()",
        "href": "https://www.w3schools.com/jsref/jsref_isinteger.asp"
    },
    {
        "name": "isNaN()",
        "href": "https://www.w3schools.com/jsref/jsref_isnan_number.asp"
    },
    {
        "name": "isSafeInteger()",
        "href": "https://www.w3schools.com/jsref/jsref_issafeinteger.asp"
    },
    {
        "name": "MAX_SAFE_INTEGER",
        "href": "https://www.w3schools.com/jsref/jsref_max_safe_integer.asp"
    },
    {
        "name": "MIN_SAFE_INTEGER",
        "href": "https://www.w3schools.com/jsref/jsref_min_safe_integer.asp"
    },
    {
        "name": "MAX_VALUE",
        "href": "https://www.w3schools.com/jsref/jsref_max_value.asp"
    },
    {
        "name": "MIN_VALUE",
        "href": "https://www.w3schools.com/jsref/jsref_min_value.asp"
    },
    {
        "name": "NaN",
        "href": "https://www.w3schools.com/jsref/jsref_number_nan.asp"
    },
    {
        "name": "NEGATIVE_INFINITY",
        "href": "https://www.w3schools.com/jsref/jsref_negative_infinity.asp"
    },
    {
        "name": "POSITIVE_INFINITY",
        "href": "https://www.w3schools.com/jsref/jsref_positive_infinity.asp"
    },
    {
        "name": "parseFloat()",
        "href": "https://www.w3schools.com/jsref/jsref_number_parsefloat.asp"
    },
    {
        "name": "parseInt()",
        "href": "https://www.w3schools.com/jsref/jsref_number_parseint.asp"
    },
    {
        "name": "prototype",
        "href": "https://www.w3schools.com/jsref/jsref_prototype_num.asp"
    },
    {
        "name": "toExponential(x)",
        "href": "https://www.w3schools.com/jsref/jsref_toexponential.asp"
    },
    {
        "name": "toFixed(x)",
        "href": "https://www.w3schools.com/jsref/jsref_tofixed.asp"
    },
    {
        "name": "toLocaleString()",
        "href": "https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp"
    },
    {
        "name": "toPrecision(x)",
        "href": "https://www.w3schools.com/jsref/jsref_toprecision.asp"
    },
    {
        "name": "toString()",
        "href": "https://www.w3schools.com/jsref/jsref_tostring_number.asp"
    },
    {
        "name": "valueOf()",
        "href": "https://www.w3schools.com/jsref/jsref_valueof_number.asp"
    }
]
var mathObject = [
    {
        "name": "abs(x)",
        "href": "https://www.w3schools.com/jsref/jsref_abs.asp"
    },
    {
        "name": "acos(x)",
        "href": "https://www.w3schools.com/jsref/jsref_acos.asp"
    },
    {
        "name": "acosh(x)",
        "href": "https://www.w3schools.com/jsref/jsref_acosh.asp"
    },
    {
        "name": "asin(x)",
        "href": "https://www.w3schools.com/jsref/jsref_asin.asp"
    },
    {
        "name": "asinh(x)",
        "href": "https://www.w3schools.com/jsref/jsref_asinh.asp"
    },
    {
        "name": "atan(x)",
        "href": "https://www.w3schools.com/jsref/jsref_atan.asp"
    },
    {
        "name": "atan2(y, x)",
        "href": "https://www.w3schools.com/jsref/jsref_atan2.asp"
    },
    {
        "name": "atanh(x)",
        "href": "https://www.w3schools.com/jsref/jsref_atanh.asp"
    },
    {
        "name": "cbrt(x)",
        "href": "https://www.w3schools.com/jsref/jsref_cbrt.asp"
    },
    {
        "name": "ceil(x)",
        "href": "https://www.w3schools.com/jsref/jsref_ceil.asp"
    },
    {
        "name": "clz32(x)",
        "href": "https://www.w3schools.com/jsref/jsref_clz32.asp"
    },
    {
        "name": "cos(x)",
        "href": "https://www.w3schools.com/jsref/jsref_cos.asp"
    },
    {
        "name": "cosh(x)",
        "href": "https://www.w3schools.com/jsref/jsref_cosh.asp"
    },
    {
        "name": "E",
        "href": "https://www.w3schools.com/jsref/jsref_e.asp"
    },
    {
        "name": "exp(x)",
        "href": "https://www.w3schools.com/jsref/jsref_exp.asp"
    },
    {
        "name": "expm1(x)",
        "href": "https://www.w3schools.com/jsref/jsref_expm1.asp"
    },
    {
        "name": "floor(x)",
        "href": "https://www.w3schools.com/jsref/jsref_floor.asp"
    },
    {
        "name": "fround(x)",
        "href": "https://www.w3schools.com/jsref/jsref_fround.asp"
    },
    {
        "name": "LN2",
        "href": "https://www.w3schools.com/jsref/jsref_ln2.asp"
    },
    {
        "name": "LN10",
        "href": "https://www.w3schools.com/jsref/jsref_ln10.asp"
    },
    {
        "name": "log(x)",
        "href": "https://www.w3schools.com/jsref/jsref_log.asp"
    },
    {
        "name": "log10(x)",
        "href": "https://www.w3schools.com/jsref/jsref_log10.asp"
    },
    {
        "name": "LOG10E",
        "href": "https://www.w3schools.com/jsref/jsref_log10e.asp"
    },
    {
        "name": "log1p(x)",
        "href": "https://www.w3schools.com/jsref/jsref_log1p.asp"
    },
    {
        "name": "log2(x)",
        "href": "https://www.w3schools.com/jsref/jsref_log2.asp"
    },
    {
        "name": "LOG2E",
        "href": "https://www.w3schools.com/jsref/jsref_log2e.asp"
    },
    {
        "name": "max(x1,x2,..)",
        "href": "https://www.w3schools.com/jsref/jsref_max.asp"
    },
    {
        "name": "min(x1,x2,..)",
        "href": "https://www.w3schools.com/jsref/jsref_min.asp"
    },
    {
        "name": "PI",
        "href": "https://www.w3schools.com/jsref/jsref_pi.asp"
    },
    {
        "name": "pow(x, y)",
        "href": "https://www.w3schools.com/jsref/jsref_pow.asp"
    },
    {
        "name": "random()",
        "href": "https://www.w3schools.com/jsref/jsref_random.asp"
    },
    {
        "name": "round(x)",
        "href": "https://www.w3schools.com/jsref/jsref_round.asp"
    },
    {
        "name": "sign(x)",
        "href": "https://www.w3schools.com/jsref/jsref_sign.asp"
    },
    {
        "name": "sin(x)",
        "href": "https://www.w3schools.com/jsref/jsref_sin.asp"
    },
    {
        "name": "sinh(x)",
        "href": "https://www.w3schools.com/jsref/jsref_sinh.asp"
    },
    {
        "name": "sqrt(x)",
        "href": "https://www.w3schools.com/jsref/jsref_sqrt.asp"
    },
    {
        "name": "SQRT1_2",
        "href": "https://www.w3schools.com/jsref/jsref_sqrt1_2.asp"
    },
    {
        "name": "SQRT2",
        "href": "https://www.w3schools.com/jsref/jsref_sqrt2.asp"
    },
    {
        "name": "tan(x)",
        "href": "https://www.w3schools.com/jsref/jsref_tan.asp"
    },
    {
        "name": "tanh(x)",
        "href": "https://www.w3schools.com/jsref/jsref_tanh.asp"
    },
    {
        "name": "trunc(x)",
        "href": "https://www.w3schools.com/jsref/jsref_trunc.asp"
    }
]
var dateObject = [
    {
        "name": "constructor",
        "href": "https://www.w3schools.com/jsref/jsref_constructor_date.asp"
    },
    {
        "name": "getDate()",
        "href": "https://www.w3schools.com/jsref/jsref_getdate.asp"
    },
    {
        "name": "getDay()",
        "href": "https://www.w3schools.com/jsref/jsref_getday.asp"
    },
    {
        "name": "getFullYear()",
        "href": "https://www.w3schools.com/jsref/jsref_getfullyear.asp"
    },
    {
        "name": "getHours()",
        "href": "https://www.w3schools.com/jsref/jsref_gethours.asp"
    },
    {
        "name": "getMilliseconds()",
        "href": "https://www.w3schools.com/jsref/jsref_getmilliseconds.asp"
    },
    {
        "name": "getMinutes()",
        "href": "https://www.w3schools.com/jsref/jsref_getminutes.asp"
    },
    {
        "name": "getMonth()",
        "href": "https://www.w3schools.com/jsref/jsref_getmonth.asp"
    },
    {
        "name": "getSeconds()",
        "href": "https://www.w3schools.com/jsref/jsref_getseconds.asp"
    },
    {
        "name": "getTime()",
        "href": "https://www.w3schools.com/jsref/jsref_gettime.asp"
    },
    {
        "name": "getTimezoneOffset()",
        "href": "https://www.w3schools.com/jsref/jsref_gettimezoneoffset.asp"
    },
    {
        "name": "getUTCDate()",
        "href": "https://www.w3schools.com/jsref/jsref_getutcdate.asp"
    },
    {
        "name": "getUTCDay()",
        "href": "https://www.w3schools.com/jsref/jsref_getutcday.asp"
    },
    {
        "name": "getUTCFullYear()",
        "href": "https://www.w3schools.com/jsref/jsref_getutcfullyear.asp"
    },
    {
        "name": "getUTCHours()",
        "href": "https://www.w3schools.com/jsref/jsref_getutchours.asp"
    },
    {
        "name": "getUTCMilliseconds()",
        "href": "https://www.w3schools.com/jsref/jsref_getutcmilliseconds.asp"
    },
    {
        "name": "getUTCMinutes()",
        "href": "https://www.w3schools.com/jsref/jsref_getutcminutes.asp"
    },
    {
        "name": "getUTCMonth()",
        "href": "https://www.w3schools.com/jsref/jsref_getutcmonth.asp"
    },
    {
        "name": "getUTCSeconds()",
        "href": "https://www.w3schools.com/jsref/jsref_getutcseconds.asp"
    },
    {
        "name": "now()",
        "href": "https://www.w3schools.com/jsref/jsref_now.asp"
    },
    {
        "name": "parse()",
        "href": "https://www.w3schools.com/jsref/jsref_parse.asp"
    },
    {
        "name": "prototype",
        "href": "https://www.w3schools.com/jsref/jsref_prototype_date.asp"
    },
    {
        "name": "setDate()",
        "href": "https://www.w3schools.com/jsref/jsref_setdate.asp"
    },
    {
        "name": "setFullYear()",
        "href": "https://www.w3schools.com/jsref/jsref_setfullyear.asp"
    },
    {
        "name": "setHours()",
        "href": "https://www.w3schools.com/jsref/jsref_sethours.asp"
    },
    {
        "name": "setMilliseconds()",
        "href": "https://www.w3schools.com/jsref/jsref_setmilliseconds.asp"
    },
    {
        "name": "setMinutes()",
        "href": "https://www.w3schools.com/jsref/jsref_setminutes.asp"
    },
    {
        "name": "setMonth()",
        "href": "https://www.w3schools.com/jsref/jsref_setmonth.asp"
    },
    {
        "name": "setSeconds()",
        "href": "https://www.w3schools.com/jsref/jsref_setseconds.asp"
    },
    {
        "name": "setTime()",
        "href": "https://www.w3schools.com/jsref/jsref_settime.asp"
    },
    {
        "name": "setUTCDate()",
        "href": "https://www.w3schools.com/jsref/jsref_setutcdate.asp"
    },
    {
        "name": "setUTCFullYear()",
        "href": "https://www.w3schools.com/jsref/jsref_setutcfullyear.asp"
    },
    {
        "name": "setUTCHours()",
        "href": "https://www.w3schools.com/jsref/jsref_setutchours.asp"
    },
    {
        "name": "setUTCMilliseconds()",
        "href": "https://www.w3schools.com/jsref/jsref_setutcmilliseconds.asp"
    },
    {
        "name": "setUTCMinutes()",
        "href": "https://www.w3schools.com/jsref/jsref_setutcminutes.asp"
    },
    {
        "name": "setUTCMonth()",
        "href": "https://www.w3schools.com/jsref/jsref_setutcmonth.asp"
    },
    {
        "name": "setUTCSeconds()",
        "href": "https://www.w3schools.com/jsref/jsref_setutcseconds.asp"
    },
    {
        "name": "toDateString()",
        "href": "https://www.w3schools.com/jsref/jsref_todatestring.asp"
    },
    {
        "name": "toISOString()",
        "href": "https://www.w3schools.com/jsref/jsref_toisostring.asp"
    },
    {
        "name": "toJSON()",
        "href": "https://www.w3schools.com/jsref/jsref_tojson.asp"
    },
    {
        "name": "toLocaleDateString()",
        "href": "https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp"
    },
    {
        "name": "toLocaleTimeString()",
        "href": "https://www.w3schools.com/jsref/jsref_tolocaletimestring.asp"
    },
    {
        "name": "toLocaleString()",
        "href": "https://www.w3schools.com/jsref/jsref_tolocalestring.asp"
    },
    {
        "name": "toString()",
        "href": "https://www.w3schools.com/jsref/jsref_tostring_date.asp"
    },
    {
        "name": "toTimeString()",
        "href": "https://www.w3schools.com/jsref/jsref_totimestring.asp"
    },
    {
        "name": "toUTCString()",
        "href": "https://www.w3schools.com/jsref/jsref_toutcstring.asp"
    },
    {
        "name": "UTC()",
        "href": "https://www.w3schools.com/jsref/jsref_utc.asp"
    },
    {
        "name": "valueOf()",
        "href": "https://www.w3schools.com/jsref/jsref_valueof_date.asp"
    }
]
var globalObject = [
    {
        "name": "decodeURI()",
        "href": "https://www.w3schools.com/jsref/jsref_decodeuri.asp"
    },
    {
        "name": "decodeURI\nComponent()",
        "href": "https://www.w3schools.com/jsref/jsref_decodeuricomponent.asp"
    },
    {
        "name": "encodeURI()",
        "href": "https://www.w3schools.com/jsref/jsref_encodeuri.asp"
    },
    {
        "name": "encodeURI\nComponent()",
        "href": "https://www.w3schools.com/jsref/jsref_encodeuricomponent.asp"
    },
    {
        "name": "escape()",
        "href": "https://www.w3schools.com/jsref/jsref_escape.asp"
    },
    {
        "name": "eval()",
        "href": "https://www.w3schools.com/jsref/jsref_eval.asp"
    },
    {
        "name": "Infinity",
        "href": "https://www.w3schools.com/jsref/jsref_infinity.asp"
    },
    {
        "name": "isFinite()",
        "href": "https://www.w3schools.com/jsref/jsref_isfinite.asp"
    },
    {
        "name": "isNaN()",
        "href": "https://www.w3schools.com/jsref/jsref_isnan.asp"
    },
    {
        "name": "NaN",
        "href": "https://www.w3schools.com/jsref/jsref_nan.asp"
    },
    {
        "name": "Number()",
        "href": "https://www.w3schools.com/jsref/jsref_number.asp"
    },
    {
        "name": "parseFloat()",
        "href": "https://www.w3schools.com/jsref/jsref_parsefloat.asp"
    },
    {
        "name": "parseInt()",
        "href": "https://www.w3schools.com/jsref/jsref_parseint.asp"
    },
    {
        "name": "String()",
        "href": "https://www.w3schools.com/jsref/jsref_string.asp"
    },
    {
        "name": "undefined",
        "href": "https://www.w3schools.com/jsref/jsref_undefined.asp"
    },
    {
        "name": "unescape()",
        "href": "https://www.w3schools.com/jsref/jsref_unescape.asp"
    }
]
var regexObject = [
    {
        "name": "/g",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_g.asp"
    },
    {
        "name": "/i",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_i.asp"
    },
    {
        "name": "/m",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_m.asp"
    },
    {
        "name": "[abc]",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_charset.asp"
    },
    {
        "name": "[^abc]",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_charset_not.asp"
    },
    {
        "name": "[0-9]",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_0-9.asp"
    },
    {
        "name": "[^0-9]",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_not_0-9.asp"
    },
    {
        "name": "(x|y)",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_xy.asp"
    },
    {
        "name": ".",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_dot.asp"
    },
    {
        "name": "\\w",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_wordchar.asp"
    },
    {
        "name": "\\W",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_wordchar_non.asp"
    },
    {
        "name": "\\d",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_digit.asp"
    },
    {
        "name": "\\D",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp"
    },
    {
        "name": "\\s",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_whitespace.asp"
    },
    {
        "name": "\\S",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_whitespace_non.asp"
    },
    {
        "name": "\\b",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_begin.asp"
    },
    {
        "name": "\\B",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_begin_not.asp"
    },
    {
        "name": "\\0",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_nul.asp"
    },
    {
        "name": "\\n",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_newline.asp"
    },
    {
        "name": "\\f",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_formfeed.asp"
    },
    {
        "name": "\\r",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_carriagereturn.asp"
    },
    {
        "name": "\\t",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_tab.asp"
    },
    {
        "name": "\\v",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_vtab.asp"
    },
    {
        "name": "\\xxx",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_octal.asp"
    },
    {
        "name": "\\xdd",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_hex.asp"
    },
    {
        "name": "\\udddd",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_unicode_hex.asp"
    },
    {
        "name": "n+",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_onemore.asp"
    },
    {
        "name": "n*",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_zeromore.asp"
    },
    {
        "name": "n?",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_zeroone.asp"
    },
    {
        "name": "n{X}",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_nx.asp"
    },
    {
        "name": "n{X,Y}",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_nxy.asp"
    },
    {
        "name": "n{X,}",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_nxcomma.asp"
    },
    {
        "name": "n$",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_ndollar.asp"
    },
    {
        "name": "^n",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_ncaret.asp"
    },
    {
        "name": "?=n",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_nfollow.asp"
    },
    {
        "name": "?!n",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_nfollow_not.asp"
    },
    {
        "name": "constructor",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_constructor.asp"
    },
    {
        "name": "global",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_global.asp"
    },
    {
        "name": "ignoreCase",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_ignorecase.asp"
    },
    {
        "name": "lastIndex",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_lastindex.asp"
    },
    {
        "name": "multiline",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_multiline.asp"
    },
    {
        "name": "source",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_source.asp"
    },
    {
        "name": "compile()",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_compile.asp"
    },
    {
        "name": "exec()",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_exec.asp"
    },
    {
        "name": "test()",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_test.asp"
    },
    {
        "name": "toString()",
        "href": "https://www.w3schools.com/jsref/jsref_regexp_tostring.asp"
    }
]
var object = [
    {
        "name": "constructor",
        "href": "https://www.w3schools.com/jsref/jsref_object_constructor.asp"
    },
    {
        "name": "keys()",
        "href": "https://www.w3schools.com/jsref/jsref_object_keys.asp"
    },
    {
        "name": "prototype",
        "href": "https://www.w3schools.com/jsref/jsref_object_prototype.asp"
    },
    {
        "name": "toString()",
        "href": "https://www.w3schools.com/jsref/jsref_object_tostring.asp"
    },
    {
        "name": "valueOf()",
        "href": "https://www.w3schools.com/jsref/jsref_object_valueof.asp"
    }
]
var classObject = [
    {
        "name": "constructor()",
        "href": "https://www.w3schools.com/jsref/jsref_constructor_class.asp"
    },
    {
        "name": "extends",
        "href": "https://www.w3schools.com/jsref/jsref_class_extends.asp"
    },
    {
        "name": "static",
        "href": "https://www.w3schools.com/jsref/jsref_class_static.asp"
    },
    {
        "name": "super",
        "href": "https://www.w3schools.com/jsref/jsref_class_super.asp"
    }
]
var errorObject = [
    {
        "name": "name",
        "href": "https://www.w3schools.com/jsref/prop_error_name.asp"
    },
    {
        "name": "message",
        "href": "https://www.w3schools.com/jsref/prop_error_message.asp"
    }
]
var booleanObject = [
    {
        "name": "constructor",
        "href": "https://www.w3schools.com/jsref/jsref_constructor_boolean.asp"
    },
    {
        "name": "prototype",
        "href": "https://www.w3schools.com/jsref/jsref_prototype_boolean.asp"
    },
    {
        "name": "toString()",
        "href": "https://www.w3schools.com/jsref/jsref_tostring_boolean.asp"
    },
    {
        "name": "valueOf()",
        "href": "https://www.w3schools.com/jsref/jsref_valueof_boolean.asp"
    }
]
var statementObject = [
    {
        "name": "break",
        "href": "https://www.w3schools.com/jsref/jsref_break.asp"
    },
    {
        "name": "class",
        "href": "https://www.w3schools.com/jsref/jsref_class.asp"
    },
    {
        "name": "const",
        "href": "https://www.w3schools.com/jsref/jsref_const.asp"
    },
    {
        "name": "continue",
        "href": "https://www.w3schools.com/jsref/jsref_continue.asp"
    },
    {
        "name": "debugger",
        "href": "https://www.w3schools.com/jsref/jsref_debugger.asp"
    },
    {
        "name": "do ... while",
        "href": "https://www.w3schools.com/jsref/jsref_dowhile.asp"
    },
    {
        "name": "for",
        "href": "https://www.w3schools.com/jsref/jsref_for.asp"
    },
    {
        "name": "for ... in",
        "href": "https://www.w3schools.com/jsref/jsref_forin.asp"
    },
    {
        "name": "for ... of",
        "href": "https://www.w3schools.com/jsref/jsref_forof.asp"
    },
    {
        "name": "function",
        "href": "https://www.w3schools.com/jsref/jsref_function.asp"
    },
    {
        "name": "if ... else ... else if",
        "href": "https://www.w3schools.com/jsref/jsref_if.asp"
    },
    {
        "name": "let",
        "href": "https://www.w3schools.com/jsref/jsref_let.asp"
    },
    {
        "name": "return",
        "href": "https://www.w3schools.com/jsref/jsref_return.asp"
    },
    {
        "name": "switch",
        "href": "https://www.w3schools.com/jsref/jsref_switch.asp"
    },
    {
        "name": "throw",
        "href": "https://www.w3schools.com/jsref/jsref_throw.asp"
    },
    {
        "name": "try ... catch ... finally",
        "href": "https://www.w3schools.com/jsref/jsref_try_catch.asp"
    },
    {
        "name": "var",
        "href": "https://www.w3schools.com/jsref/jsref_var.asp"
    },
    {
        "name": "while",
        "href": "https://www.w3schools.com/jsref/jsref_while.asp"
    }
]
var promiseObject = [
    {
        "name": "Promise.all()",
        "href": "https://www.w3schools.com/jsref/jsref_promise_all.asp"
    },
    {
        "name": "Promise.allSettled()",
        "href": "https://www.w3schools.com/jsref/jsref_promise_allsettled.asp"
    },
    {
        "name": "Promise.any()",
        "href": "https://www.w3schools.com/jsref/jsref_promise_any.asp"
    },
    {
        "name": "Promise.race()",
        "href": "https://www.w3schools.com/jsref/jsref_promise_race.asp"
    },
    {
        "name": "Promise.reject()",
        "href": "https://www.w3schools.com/jsref/jsref_promise_reject.asp"
    },
    {
        "name": "Promise.resolve()",
        "href": "https://www.w3schools.com/jsref/jsref_promise_resolve.asp"
    },
    {
        "name": "catch()",
        "href": "https://www.w3schools.com/jsref/jsref_promise_catch.asp"
    },
    {
        "name": "finally()",
        "href": "https://www.w3schools.com/jsref/jsref_promise_finally.asp"
    },
    {
        "name": "then()",
        "href": "https://www.w3schools.com/jsref/jsref_promise_then.asp"
    }
]
var jsonObject = [
    {
        "name": "parse()",
        "href": "https://www.w3schools.com/jsref/jsref_parse_json.asp"
    },
    {
        "name": "stringify()",
        "href": "https://www.w3schools.com/jsref/jsref_stringify.asp"
    }
]


var windowObject = [
    {
        "name": "closed",
        "href": "https://www.w3schools.com/jsref/prop_win_closed.asp"
    },
    {
        "name": "console",
        "href": "https://www.w3schools.com/jsref/prop_win_console.asp"
    },
    {
        "name": "defaultStatus",
        "href": "https://www.w3schools.com/jsref/prop_win_defaultstatus.asp"
    },
    {
        "name": "document",
        "href": "https://www.w3schools.com/jsref/prop_win_document.asp"
    },
    {
        "name": "frameElement",
        "href": "https://www.w3schools.com/jsref/prop_win_frameelement.asp"
    },
    {
        "name": "frames",
        "href": "https://www.w3schools.com/jsref/prop_win_frames.asp"
    },
    {
        "name": "history",
        "href": "https://www.w3schools.com/jsref/prop_win_history.asp"
    },
    {
        "name": "innerHeight",
        "href": "https://www.w3schools.com/jsref/prop_win_innerheight.asp"
    },
    {
        "name": "innerWidth",
        "href": "https://www.w3schools.com/jsref/prop_win_innerwidth.asp"
    },
    {
        "name": "length",
        "href": "https://www.w3schools.com/jsref/prop_win_length.asp"
    },
    {
        "name": "localStorage",
        "href": "https://www.w3schools.com/jsref/prop_win_localstorage.asp"
    },
    {
        "name": "location",
        "href": "https://www.w3schools.com/jsref/prop_win_location.asp"
    },
    {
        "name": "name",
        "href": "https://www.w3schools.com/jsref/prop_win_name.asp"
    },
    {
        "name": "navigator",
        "href": "https://www.w3schools.com/jsref/prop_win_navigator.asp"
    },
    {
        "name": "opener",
        "href": "https://www.w3schools.com/jsref/prop_win_opener.asp"
    },
    {
        "name": "outerHeight",
        "href": "https://www.w3schools.com/jsref/prop_win_outerheight.asp"
    },
    {
        "name": "outerWidth",
        "href": "https://www.w3schools.com/jsref/prop_win_outerwidth.asp"
    },
    {
        "name": "pageXOffset",
        "href": "https://www.w3schools.com/jsref/prop_win_pagexoffset.asp"
    },
    {
        "name": "pageYOffset",
        "href": "https://www.w3schools.com/jsref/prop_win_pagexoffset.asp"
    },
    {
        "name": "parent",
        "href": "https://www.w3schools.com/jsref/prop_win_parent.asp"
    },
    {
        "name": "screen",
        "href": "https://www.w3schools.com/jsref/prop_win_screen.asp"
    },
    {
        "name": "screenLeft",
        "href": "https://www.w3schools.com/jsref/prop_win_screenleft.asp"
    },
    {
        "name": "screenTop",
        "href": "https://www.w3schools.com/jsref/prop_win_screentop.asp"
    },
    {
        "name": "screenX",
        "href": "https://www.w3schools.com/jsref/prop_win_screenx.asp"
    },
    {
        "name": "screenY",
        "href": "https://www.w3schools.com/jsref/prop_win_screeny.asp"
    },
    {
        "name": "sessionStorage",
        "href": "https://www.w3schools.com/jsref/prop_win_sessionstorage.asp"
    },
    {
        "name": "scrollX",
        "href": "https://www.w3schools.com/jsref/prop_win_scrollx.asp"
    },
    {
        "name": "scrollY",
        "href": "https://www.w3schools.com/jsref/prop_win_scrolly.asp"
    },
    {
        "name": "self",
        "href": "https://www.w3schools.com/jsref/prop_win_self.asp"
    },
    {
        "name": "status",
        "href": "https://www.w3schools.com/jsref/prop_win_status.asp"
    },
    {
        "name": "top",
        "href": "https://www.w3schools.com/jsref/prop_win_top.asp"
    },
    {
        "name": "addEventListener()",
        "href": "https://www.w3schools.com/jsref/met_win_addeventlistener.asp"
    },
    {
        "name": "alert()",
        "href": "https://www.w3schools.com/jsref/met_win_alert.asp"
    },
    {
        "name": "atob()",
        "href": "https://www.w3schools.com/jsref/met_win_atob.asp"
    },
    {
        "name": "blur()",
        "href": "https://www.w3schools.com/jsref/met_win_blur.asp"
    },
    {
        "name": "btoa()",
        "href": "https://www.w3schools.com/jsref/met_win_btoa.asp"
    },
    {
        "name": "clearInterval()",
        "href": "https://www.w3schools.com/jsref/met_win_clearinterval.asp"
    },
    {
        "name": "clearTimeout()",
        "href": "https://www.w3schools.com/jsref/met_win_cleartimeout.asp"
    },
    {
        "name": "close()",
        "href": "https://www.w3schools.com/jsref/met_win_close.asp"
    },
    {
        "name": "confirm()",
        "href": "https://www.w3schools.com/jsref/met_win_confirm.asp"
    },
    {
        "name": "focus()",
        "href": "https://www.w3schools.com/jsref/met_win_focus.asp"
    },
    {
        "name": "getComputedStyle()",
        "href": "https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp"
    },
    {
        "name": "matchMedia()",
        "href": "https://www.w3schools.com/jsref/met_win_matchmedia.asp"
    },
    {
        "name": "moveBy()",
        "href": "https://www.w3schools.com/jsref/met_win_moveby.asp"
    },
    {
        "name": "moveTo()",
        "href": "https://www.w3schools.com/jsref/met_win_moveto.asp"
    },
    {
        "name": "open()",
        "href": "https://www.w3schools.com/jsref/met_win_open.asp"
    },
    {
        "name": "print()",
        "href": "https://www.w3schools.com/jsref/met_win_print.asp"
    },
    {
        "name": "prompt()",
        "href": "https://www.w3schools.com/jsref/met_win_prompt.asp"
    },
    {
        "name": "removeEventListener()",
        "href": "https://www.w3schools.com/jsref/met_win_removeeventlistener.asp"
    },
    {
        "name": "requestAnimationFrame()",
        "href": "https://www.w3schools.com/jsref/met_win_requestanimationframe.asp"
    },
    {
        "name": "resizeBy()",
        "href": "https://www.w3schools.com/jsref/met_win_resizeby.asp"
    },
    {
        "name": "resizeTo()",
        "href": "https://www.w3schools.com/jsref/met_win_resizeto.asp"
    },
    {
        "name": "scrollBy()",
        "href": "https://www.w3schools.com/jsref/met_win_scrollby.asp"
    },
    {
        "name": "scrollTo()",
        "href": "https://www.w3schools.com/jsref/met_win_scrollto.asp"
    },
    {
        "name": "setInterval()",
        "href": "https://www.w3schools.com/jsref/met_win_setinterval.asp"
    },
    {
        "name": "setTimeout()",
        "href": "https://www.w3schools.com/jsref/met_win_settimeout.asp"
    },
    {
        "name": "stop()",
        "href": "https://www.w3schools.com/jsref/met_win_stop.asp"
    }
]
var historyObject = [
    {
        "name": "back()",
        "href": "https://www.w3schools.com/jsref/met_his_back.asp"
    },
    {
        "name": "forward()",
        "href": "https://www.w3schools.com/jsref/met_his_forward.asp"
    },
    {
        "name": "go()",
        "href": "https://www.w3schools.com/jsref/met_his_go.asp"
    },
    {
        "name": "length",
        "href": "https://www.w3schools.com/jsref/prop_his_length.asp"
    }
]
var locationObject = [
    {
        "name": "hash",
        "href": "https://www.w3schools.com/jsref/prop_loc_hash.asp"
    },
    {
        "name": "host",
        "href": "https://www.w3schools.com/jsref/prop_loc_host.asp"
    },
    {
        "name": "hostname",
        "href": "https://www.w3schools.com/jsref/prop_loc_hostname.asp"
    },
    {
        "name": "href",
        "href": "https://www.w3schools.com/jsref/prop_loc_href.asp"
    },
    {
        "name": "origin",
        "href": "https://www.w3schools.com/jsref/prop_loc_origin.asp"
    },
    {
        "name": "pathname",
        "href": "https://www.w3schools.com/jsref/prop_loc_pathname.asp"
    },
    {
        "name": "port",
        "href": "https://www.w3schools.com/jsref/prop_loc_port.asp"
    },
    {
        "name": "protocol",
        "href": "https://www.w3schools.com/jsref/prop_loc_protocol.asp"
    },
    {
        "name": "search",
        "href": "https://www.w3schools.com/jsref/prop_loc_search.asp"
    },
    {
        "name": "assign()",
        "href": "https://www.w3schools.com/jsref/met_loc_assign.asp"
    },
    {
        "name": "reload()",
        "href": "https://www.w3schools.com/jsref/met_loc_reload.asp"
    },
    {
        "name": "replace()",
        "href": "https://www.w3schools.com/jsref/met_loc_replace.asp"
    }
]
var navigatorObject = [
    {
        "name": "appCodeName",
        "href": "https://www.w3schools.com/jsref/prop_nav_appcodename.asp"
    },
    {
        "name": "appName",
        "href": "https://www.w3schools.com/jsref/prop_nav_appname.asp"
    },
    {
        "name": "appVersion",
        "href": "https://www.w3schools.com/jsref/prop_nav_appversion.asp"
    },
    {
        "name": "cookieEnabled",
        "href": "https://www.w3schools.com/jsref/prop_nav_cookieenabled.asp"
    },
    {
        "name": "geolocation",
        "href": "https://www.w3schools.com/jsref/prop_nav_geolocation.asp"
    },
    {
        "name": "language",
        "href": "https://www.w3schools.com/jsref/prop_nav_language.asp"
    },
    {
        "name": "onLine",
        "href": "https://www.w3schools.com/jsref/prop_nav_online.asp"
    },
    {
        "name": "platform",
        "href": "https://www.w3schools.com/jsref/prop_nav_platform.asp"
    },
    {
        "name": "product",
        "href": "https://www.w3schools.com/jsref/prop_nav_product.asp"
    },
    {
        "name": "userAgent",
        "href": "https://www.w3schools.com/jsref/prop_nav_useragent.asp"
    },
    {
        "name": "javaEnabled()",
        "href": "https://www.w3schools.com/jsref/met_nav_javaenabled.asp"
    },
    {
        "name": "taintEnabled()",
        "href": "https://www.w3schools.com/jsref/met_nav_taintenabled.asp"
    }
]
var screenObject=[
    {
        "name": "availHeight",
        "href": "https://www.w3schools.com/jsref/prop_screen_availheight.asp"
    },
    {
        "name": "availWidth",
        "href": "https://www.w3schools.com/jsref/prop_screen_availwidth.asp"
    },
    {
        "name": "colorDepth",
        "href": "https://www.w3schools.com/jsref/prop_screen_colordepth.asp"
    },
    {
        "name": "height",
        "href": "https://www.w3schools.com/jsref/prop_screen_height.asp"
    },
    {
        "name": "pixelDepth",
        "href": "https://www.w3schools.com/jsref/prop_screen_pixeldepth.asp"
    },
    {
        "name": "width",
        "href": "https://www.w3schools.com/jsref/prop_screen_width.asp"
    }
]
var documentObject = [
    {
        "name": "activeElement",
        "href": "https://www.w3schools.com/jsref/prop_document_activeelement.asp"
    },
    {
        "name": "addEventListener()",
        "href": "https://www.w3schools.com/jsref/met_document_addeventlistener.asp"
    },
    {
        "name": "adoptNode()",
        "href": "https://www.w3schools.com/jsref/met_document_adoptnode.asp"
    },
    {
        "name": "anchors",
        "href": "https://www.w3schools.com/jsref/coll_doc_anchors.asp"
    },
    {
        "name": "applets",
        "href": "https://www.w3schools.com/jsref/coll_doc_applets.asp"
    },
    {
        "name": "baseURI",
        "href": "https://www.w3schools.com/jsref/prop_doc_baseuri.asp"
    },
    {
        "name": "body",
        "href": "https://www.w3schools.com/jsref/prop_doc_body.asp"
    },
    {
        "name": "charset",
        "href": "https://www.w3schools.com/jsref/prop_document_charset.asp"
    },
    {
        "name": "characterSet",
        "href": "https://www.w3schools.com/jsref/prop_document_characterset.asp"
    },
    {
        "name": "close()",
        "href": "https://www.w3schools.com/jsref/met_doc_close.asp"
    },
    {
        "name": "cookie",
        "href": "https://www.w3schools.com/jsref/prop_doc_cookie.asp"
    },
    {
        "name": "createAttribute()",
        "href": "https://www.w3schools.com/jsref/met_document_createattribute.asp"
    },
    {
        "name": "createComment()",
        "href": "https://www.w3schools.com/jsref/met_document_createcomment.asp"
    },
    {
        "name": "createDocumentFragment()",
        "href": "https://www.w3schools.com/jsref/met_document_createdocumentfragment.asp"
    },
    {
        "name": "createElement()",
        "href": "https://www.w3schools.com/jsref/met_document_createelement.asp"
    },
    {
        "name": "createEvent()",
        "href": "https://www.w3schools.com/jsref/event_createevent.asp"
    },
    {
        "name": "createTextNode()",
        "href": "https://www.w3schools.com/jsref/met_document_createtextnode.asp"
    },
    {
        "name": "defaultView",
        "href": "https://www.w3schools.com/jsref/prop_document_defaultview.asp"
    },
    {
        "name": "designMode",
        "href": "https://www.w3schools.com/jsref/prop_document_designmode.asp"
    },
    {
        "name": "doctype",
        "href": "https://www.w3schools.com/jsref/prop_document_doctype.asp"
    },
    {
        "name": "documentElement",
        "href": "https://www.w3schools.com/jsref/prop_document_documentelement.asp"
    },
    {
        "name": "documentMode",
        "href": "https://www.w3schools.com/jsref/prop_doc_documentmode.asp"
    },
    {
        "name": "documentURI",
        "href": "https://www.w3schools.com/jsref/prop_document_documenturi.asp"
    },
    {
        "name": "domain",
        "href": "https://www.w3schools.com/jsref/prop_doc_domain.asp"
    },
    {
        "name": "domConfig",
        "href": "https://www.w3schools.com/jsref/prop_document_domconfig.asp"
    },
    {
        "name": "embeds",
        "href": "https://www.w3schools.com/jsref/coll_doc_embeds.asp"
    },
    {
        "name": "execCommand()",
        "href": "https://www.w3schools.com/jsref/met_document_execcommand.asp"
    },
    {
        "name": "forms",
        "href": "https://www.w3schools.com/jsref/coll_doc_forms.asp"
    },
    {
        "name": "getElementById()",
        "href": "https://www.w3schools.com/jsref/met_document_getelementbyid.asp"
    },
    {
        "name": "getElementsByClassName()",
        "href": "https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp"
    },
    {
        "name": "getElementsByName()",
        "href": "https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp"
    },
    {
        "name": "getElementsByTagName()",
        "href": "https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp"
    },
    {
        "name": "hasFocus()",
        "href": "https://www.w3schools.com/jsref/met_document_hasfocus.asp"
    },
    {
        "name": "head",
        "href": "https://www.w3schools.com/jsref/prop_doc_head.asp"
    },
    {
        "name": "images",
        "href": "https://www.w3schools.com/jsref/coll_doc_images.asp"
    },
    {
        "name": "implementation",
        "href": "https://www.w3schools.com/jsref/prop_document_implementation.asp"
    },
    {
        "name": "importNode()",
        "href": "https://www.w3schools.com/jsref/met_document_importnode.asp"
    },
    {
        "name": "inputEncoding",
        "href": "https://www.w3schools.com/jsref/prop_document_inputencoding.asp"
    },
    {
        "name": "lastModified",
        "href": "https://www.w3schools.com/jsref/prop_doc_lastmodified.asp"
    },
    {
        "name": "links",
        "href": "https://www.w3schools.com/jsref/coll_doc_links.asp"
    },
    {
        "name": "normalize()",
        "href": "https://www.w3schools.com/jsref/met_document_normalize.asp"
    },
    {
        "name": "normalizeDocument()",
        "href": "https://www.w3schools.com/jsref/met_document_normalizedocument.asp"
    },
    {
        "name": "open()",
        "href": "https://www.w3schools.com/jsref/met_doc_open.asp"
    },
    {
        "name": "querySelector()",
        "href": "https://www.w3schools.com/jsref/met_document_queryselector.asp"
    },
    {
        "name": "querySelectorAll()",
        "href": "https://www.w3schools.com/jsref/met_document_queryselectorall.asp"
    },
    {
        "name": "readyState",
        "href": "https://www.w3schools.com/jsref/prop_doc_readystate.asp"
    },
    {
        "name": "referrer",
        "href": "https://www.w3schools.com/jsref/prop_doc_referrer.asp"
    },
    {
        "name": "removeEventListener()",
        "href": "https://www.w3schools.com/jsref/met_document_removeeventlistener.asp"
    },
    {
        "name": "renameNode()",
        "href": "https://www.w3schools.com/jsref/met_document_renamenode.asp"
    },
    {
        "name": "scripts",
        "href": "https://www.w3schools.com/jsref/coll_doc_scripts.asp"
    },
    {
        "name": "strictErrorChecking",
        "href": "https://www.w3schools.com/jsref/prop_document_stricterrorchecking.asp"
    },
    {
        "name": "title",
        "href": "https://www.w3schools.com/jsref/prop_doc_title.asp"
    },
    {
        "name": "URL",
        "href": "https://www.w3schools.com/jsref/prop_doc_url.asp"
    },
    {
        "name": "write()",
        "href": "https://www.w3schools.com/jsref/met_doc_write.asp"
    },
    {
        "name": "writeln()",
        "href": "https://www.w3schools.com/jsref/met_doc_writeln.asp"
    }
]
var elementObject = [
    {
        "name": "accessKey",
        "href": "https://www.w3schools.com/jsref/prop_html_accesskey.asp"
    },
    {
        "name": "addEventListener()",
        "href": "https://www.w3schools.com/jsref/met_element_addeventlistener.asp"
    },
    {
        "name": "appendChild()",
        "href": "https://www.w3schools.com/jsref/met_node_appendchild.asp"
    },
    {
        "name": "attributes",
        "href": "https://www.w3schools.com/jsref/prop_node_attributes.asp"
    },
    {
        "name": "blur()",
        "href": "https://www.w3schools.com/jsref/met_html_blur.asp"
    },
    {
        "name": "childElementCount",
        "href": "https://www.w3schools.com/jsref/prop_element_childelementcount.asp"
    },
    {
        "name": "childNodes",
        "href": "https://www.w3schools.com/jsref/prop_node_childnodes.asp"
    },
    {
        "name": "children",
        "href": "https://www.w3schools.com/jsref/prop_element_children.asp"
    },
    {
        "name": "classList",
        "href": "https://www.w3schools.com/jsref/prop_element_classlist.asp"
    },
    {
        "name": "className",
        "href": "https://www.w3schools.com/jsref/prop_html_classname.asp"
    },
    {
        "name": "click()",
        "href": "https://www.w3schools.com/jsref/met_html_click.asp"
    },
    {
        "name": "clientHeight",
        "href": "https://www.w3schools.com/jsref/prop_element_clientheight.asp"
    },
    {
        "name": "clientLeft",
        "href": "https://www.w3schools.com/jsref/prop_element_clientleft.asp"
    },
    {
        "name": "clientTop",
        "href": "https://www.w3schools.com/jsref/prop_element_clienttop.asp"
    },
    {
        "name": "clientWidth",
        "href": "https://www.w3schools.com/jsref/prop_element_clientwidth.asp"
    },
    {
        "name": "cloneNode()",
        "href": "https://www.w3schools.com/jsref/met_node_clonenode.asp"
    },
    {
        "name": "closest()",
        "href": "https://www.w3schools.com/jsref/met_element_closest.asp"
    },
    {
        "name": "compareDocumentPosition()",
        "href": "https://www.w3schools.com/jsref/met_node_comparedocumentposition.asp"
    },
    {
        "name": "contains()",
        "href": "https://www.w3schools.com/jsref/met_node_contains.asp"
    },
    {
        "name": "contentEditable",
        "href": "https://www.w3schools.com/jsref/prop_html_contenteditable.asp"
    },
    {
        "name": "dir",
        "href": "https://www.w3schools.com/jsref/prop_html_dir.asp"
    },
    {
        "name": "firstChild",
        "href": "https://www.w3schools.com/jsref/prop_node_firstchild.asp"
    },
    {
        "name": "firstElementChild",
        "href": "https://www.w3schools.com/jsref/prop_element_firstelementchild.asp"
    },
    {
        "name": "focus()",
        "href": "https://www.w3schools.com/jsref/met_html_focus.asp"
    },
    {
        "name": "getAttribute()",
        "href": "https://www.w3schools.com/jsref/met_element_getattribute.asp"
    },
    {
        "name": "getAttributeNode()",
        "href": "https://www.w3schools.com/jsref/met_element_getattributenode.asp"
    },
    {
        "name": "getBoundingClientRect()",
        "href": "https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp"
    },
    {
        "name": "getElementsByClassName()",
        "href": "https://www.w3schools.com/jsref/met_element_getelementsbyclassname.asp"
    },
    {
        "name": "getElementsByTagName()",
        "href": "https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp"
    },
    {
        "name": "hasAttribute()",
        "href": "https://www.w3schools.com/jsref/met_element_hasattribute.asp"
    },
    {
        "name": "hasAttributes()",
        "href": "https://www.w3schools.com/jsref/met_node_hasattributes.asp"
    },
    {
        "name": "hasChildNodes()",
        "href": "https://www.w3schools.com/jsref/met_node_haschildnodes.asp"
    },
    {
        "name": "id",
        "href": "https://www.w3schools.com/jsref/prop_html_id.asp"
    },
    {
        "name": "innerHTML",
        "href": "https://www.w3schools.com/jsref/prop_html_innerhtml.asp"
    },
    {
        "name": "innerText",
        "href": "https://www.w3schools.com/jsref/prop_node_innertext.asp"
    },
    {
        "name": "insertAdjacentElement()",
        "href": "https://www.w3schools.com/jsref/met_node_insertadjacentelement.asp"
    },
    {
        "name": "insertAdjacentHTML()",
        "href": "https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp"
    },
    {
        "name": "insertAdjacentText()",
        "href": "https://www.w3schools.com/jsref/met_node_insertadjacenttext.asp"
    },
    {
        "name": "insertBefore()",
        "href": "https://www.w3schools.com/jsref/met_node_insertbefore.asp"
    },
    {
        "name": "isContentEditable",
        "href": "https://www.w3schools.com/jsref/prop_html_iscontenteditable.asp"
    },
    {
        "name": "isDefaultNamespace()",
        "href": "https://www.w3schools.com/jsref/met_node_isdefaultnamespace.asp"
    },
    {
        "name": "isEqualNode()",
        "href": "https://www.w3schools.com/jsref/met_node_isequalnode.asp"
    },
    {
        "name": "isSameNode()",
        "href": "https://www.w3schools.com/jsref/met_node_issamenode.asp"
    },
    {
        "name": "isSupported()",
        "href": "https://www.w3schools.com/jsref/met_node_issupported.asp"
    },
    {
        "name": "lang",
        "href": "https://www.w3schools.com/jsref/prop_html_lang.asp"
    },
    {
        "name": "lastChild",
        "href": "https://www.w3schools.com/jsref/prop_node_lastchild.asp"
    },
    {
        "name": "lastElementChild",
        "href": "https://www.w3schools.com/jsref/prop_element_lastelementchild.asp"
    },
    {
        "name": "matches()",
        "href": "https://www.w3schools.com/jsref/met_element_matches.asp"
    },
    {
        "name": "namespaceURI",
        "href": "https://www.w3schools.com/jsref/prop_node_namespaceuri.asp"
    },
    {
        "name": "nextSibling",
        "href": "https://www.w3schools.com/jsref/prop_node_nextsibling.asp"
    },
    {
        "name": "nextElementSibling",
        "href": "https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp"
    },
    {
        "name": "nodeName",
        "href": "https://www.w3schools.com/jsref/prop_node_nodename.asp"
    },
    {
        "name": "nodeType",
        "href": "https://www.w3schools.com/jsref/prop_node_nodetype.asp"
    },
    {
        "name": "nodeValue",
        "href": "https://www.w3schools.com/jsref/prop_node_nodevalue.asp"
    },
    {
        "name": "normalize()",
        "href": "https://www.w3schools.com/jsref/met_node_normalize.asp"
    },
    {
        "name": "offsetHeight",
        "href": "https://www.w3schools.com/jsref/prop_element_offsetheight.asp"
    },
    {
        "name": "offsetWidth",
        "href": "https://www.w3schools.com/jsref/prop_element_offsetwidth.asp"
    },
    {
        "name": "offsetLeft",
        "href": "https://www.w3schools.com/jsref/prop_element_offsetleft.asp"
    },
    {
        "name": "offsetParent",
        "href": "https://www.w3schools.com/jsref/prop_element_offsetparent.asp"
    },
    {
        "name": "offsetTop",
        "href": "https://www.w3schools.com/jsref/prop_element_offsettop.asp"
    },
    {
        "name": "outerHTML",
        "href": "https://www.w3schools.com/jsref/prop_html_outerhtml.asp"
    },
    {
        "name": "outerText",
        "href": "https://www.w3schools.com/jsref/prop_node_outertext.asp"
    },
    {
        "name": "ownerDocument",
        "href": "https://www.w3schools.com/jsref/prop_node_ownerdocument.asp"
    },
    {
        "name": "parentNode",
        "href": "https://www.w3schools.com/jsref/prop_node_parentnode.asp"
    },
    {
        "name": "parentElement",
        "href": "https://www.w3schools.com/jsref/prop_node_parentelement.asp"
    },
    {
        "name": "previousSibling",
        "href": "https://www.w3schools.com/jsref/prop_node_previoussibling.asp"
    },
    {
        "name": "previousElementSibling",
        "href": "https://www.w3schools.com/jsref/prop_element_previouselementsibling.asp"
    },
    {
        "name": "querySelector()",
        "href": "https://www.w3schools.com/jsref/met_element_queryselector.asp"
    },
    {
        "name": "querySelectorAll()",
        "href": "https://www.w3schools.com/jsref/met_element_queryselectorall.asp"
    },
    {
        "name": "remove()",
        "href": "https://www.w3schools.com/jsref/met_element_remove.asp"
    },
    {
        "name": "removeAttribute()",
        "href": "https://www.w3schools.com/jsref/met_element_removeattribute.asp"
    },
    {
        "name": "removeAttributeNode()",
        "href": "https://www.w3schools.com/jsref/met_element_removeattributenode.asp"
    },
    {
        "name": "removeChild()",
        "href": "https://www.w3schools.com/jsref/met_node_removechild.asp"
    },
    {
        "name": "removeEventListener()",
        "href": "https://www.w3schools.com/jsref/met_element_removeeventlistener.asp"
    },
    {
        "name": "replaceChild()",
        "href": "https://www.w3schools.com/jsref/met_node_replacechild.asp"
    },
    {
        "name": "scrollHeight",
        "href": "https://www.w3schools.com/jsref/prop_element_scrollheight.asp"
    },
    {
        "name": "scrollIntoView()",
        "href": "https://www.w3schools.com/jsref/met_element_scrollintoview.asp"
    },
    {
        "name": "scrollLeft",
        "href": "https://www.w3schools.com/jsref/prop_element_scrollleft.asp"
    },
    {
        "name": "scrollTop",
        "href": "https://www.w3schools.com/jsref/prop_element_scrolltop.asp"
    },
    {
        "name": "scrollWidth",
        "href": "https://www.w3schools.com/jsref/prop_element_scrollwidth.asp"
    },
    {
        "name": "setAttribute()",
        "href": "https://www.w3schools.com/jsref/met_element_setattribute.asp"
    },
    {
        "name": "setAttributeNode()",
        "href": "https://www.w3schools.com/jsref/met_element_setattributenode.asp"
    },
    {
        "name": "style",
        "href": "https://www.w3schools.com/jsref/prop_html_style.asp"
    },
    {
        "name": "tabIndex",
        "href": "https://www.w3schools.com/jsref/prop_html_tabindex.asp"
    },
    {
        "name": "tagName",
        "href": "https://www.w3schools.com/jsref/prop_element_tagname.asp"
    },
    {
        "name": "textContent",
        "href": "https://www.w3schools.com/jsref/prop_node_textcontent.asp"
    },
    {
        "name": "title",
        "href": "https://www.w3schools.com/jsref/prop_html_title.asp"
    }
]
var attributesObject = [
    {
        "name": "isId",
        "href": "https://www.w3schools.com/jsref/prop_attr_isid.asp"
    },
    {
        "name": "name",
        "href": "https://www.w3schools.com/jsref/prop_attr_name.asp"
    },
    {
        "name": "value",
        "href": "https://www.w3schools.com/jsref/prop_attr_value.asp"
    },
    {
        "name": "specified",
        "href": "https://www.w3schools.com/jsref/prop_attr_specified.asp"
    },
    {
        "name": "getNamedItem()",
        "href": "https://www.w3schools.com/jsref/met_namednodemap_getnameditem.asp"
    },
    {
        "name": "item()",
        "href": "https://www.w3schools.com/jsref/met_namednodemap_item.asp"
    },
    {
        "name": "length",
        "href": "https://www.w3schools.com/jsref/prop_namednodemap_length.asp"
    },
    {
        "name": "removeNamedItem()",
        "href": "https://www.w3schools.com/jsref/met_namednodemap_removenameditem.asp"
    },
    {
        "name": "setNamedItem()",
        "href": "https://www.w3schools.com/jsref/met_namednodemap_setnameditem.asp"
    }
]
var attributesEvent = [
    {
        "name": "altKey",
        "href": "https://www.w3schools.com/jsref/event_altkey.asp"
    },
    {
        "name": "altKey",
        "href": "https://www.w3schools.com/jsref/event_key_altkey.asp"
    },
    {
        "name": "animationName",
        "href": "https://www.w3schools.com/jsref/event_animation_animationName.asp"
    },
    {
        "name": "bubbles",
        "href": "https://www.w3schools.com/jsref/event_bubbles.asp"
    },
    {
        "name": "button",
        "href": "https://www.w3schools.com/jsref/event_button.asp"
    },
    {
        "name": "buttons",
        "href": "https://www.w3schools.com/jsref/event_buttons.asp"
    },
    {
        "name": "cancelable",
        "href": "https://www.w3schools.com/jsref/event_cancelable.asp"
    },
    {
        "name": "charCode",
        "href": "https://www.w3schools.com/jsref/event_key_charcode.asp"
    },
    {
        "name": "clientX",
        "href": "https://www.w3schools.com/jsref/event_clientx.asp"
    },
    {
        "name": "clientY",
        "href": "https://www.w3schools.com/jsref/event_clienty.asp"
    },
    {
        "name": "code",
        "href": "https://www.w3schools.com/jsref/event_key_code.asp"
    },
    {
        "name": "ctrlKey",
        "href": "https://www.w3schools.com/jsref/event_ctrlkey.asp"
    },
    {
        "name": "ctrlKey",
        "href": "https://www.w3schools.com/jsref/event_key_ctrlkey.asp"
    },
    {
        "name": "currentTarget",
        "href": "https://www.w3schools.com/jsref/event_currenttarget.asp"
    },
    {
        "name": "data",
        "href": "https://www.w3schools.com/jsref/event_inputevent_data.asp"
    },
    {
        "name": "defaultPrevented",
        "href": "https://www.w3schools.com/jsref/event_defaultprevented.asp"
    },
    {
        "name": "deltaX",
        "href": "https://www.w3schools.com/jsref/event_wheel_deltax.asp"
    },
    {
        "name": "deltaY",
        "href": "https://www.w3schools.com/jsref/event_wheel_deltay.asp"
    },
    {
        "name": "deltaZ",
        "href": "https://www.w3schools.com/jsref/event_wheel_deltaz.asp"
    },
    {
        "name": "deltaMode",
        "href": "https://www.w3schools.com/jsref/event_wheel_deltamode.asp"
    },
    {
        "name": "detail",
        "href": "https://www.w3schools.com/jsref/event_detail.asp"
    },
    {
        "name": "elapsedTime",
        "href": "https://www.w3schools.com/jsref/event_animation_elapsedtime.asp"
    },
    {
        "name": "elapsedTime",
        "href": "https://www.w3schools.com/jsref/event_transition_elapsedtime.asp"
    },
    {
        "name": "eventPhase",
        "href": "https://www.w3schools.com/jsref/event_eventphase.asp"
    },
    {
        "name": "getModifierState()",
        "href": "https://www.w3schools.com/jsref/event_mouse_getmodifierstate.asp"
    },
    {
        "name": "inputType",
        "href": "https://www.w3schools.com/jsref/event_inputevent_inputtype.asp"
    },
    {
        "name": "isTrusted",
        "href": "https://www.w3schools.com/jsref/event_istrusted.asp"
    },
    {
        "name": "key",
        "href": "https://www.w3schools.com/jsref/event_key_key.asp"
    },
    {
        "name": "keyCode",
        "href": "https://www.w3schools.com/jsref/event_key_keycode.asp"
    },
    {
        "name": "location",
        "href": "https://www.w3schools.com/jsref/event_key_location.asp"
    },
    {
        "name": "metaKey",
        "href": "https://www.w3schools.com/jsref/event_metakey.asp"
    },
    {
        "name": "metaKey",
        "href": "https://www.w3schools.com/jsref/event_key_metakey.asp"
    },
    {
        "name": "newURL",
        "href": "https://www.w3schools.com/jsref/event_hashchange_newurl.asp"
    },
    {
        "name": "oldURL",
        "href": "https://www.w3schools.com/jsref/event_hashchange_oldurl.asp"
    },
    {
        "name": "pageX",
        "href": "https://www.w3schools.com/jsref/event_pagex.asp"
    },
    {
        "name": "pageY",
        "href": "https://www.w3schools.com/jsref/event_pagey.asp"
    },
    {
        "name": "persisted",
        "href": "https://www.w3schools.com/jsref/event_pagetransition_persisted.asp"
    },
    {
        "name": "propertyName",
        "href": "https://www.w3schools.com/jsref/event_transition_propertyName.asp"
    },
    {
        "name": "relatedTarget",
        "href": "https://www.w3schools.com/jsref/event_relatedtarget.asp"
    },
    {
        "name": "relatedTarget",
        "href": "https://www.w3schools.com/jsref/event_focus_relatedtarget.asp"
    },
    {
        "name": "screenX",
        "href": "https://www.w3schools.com/jsref/event_screenx.asp"
    },
    {
        "name": "screenY",
        "href": "https://www.w3schools.com/jsref/event_screeny.asp"
    },
    {
        "name": "shiftKey",
        "href": "https://www.w3schools.com/jsref/event_shiftkey.asp"
    },
    {
        "name": "shiftKey",
        "href": "https://www.w3schools.com/jsref/event_key_shiftkey.asp"
    },
    {
        "name": "target",
        "href": "https://www.w3schools.com/jsref/event_target.asp"
    },
    {
        "name": "targetTouches",
        "href": "https://www.w3schools.com/jsref/event_touch_targettouches.asp"
    },
    {
        "name": "timeStamp",
        "href": "https://www.w3schools.com/jsref/event_timestamp.asp"
    },
    {
        "name": "touches",
        "href": "https://www.w3schools.com/jsref/event_touch_touches.asp"
    },
    {
        "name": "transitionend",
        "href": "https://www.w3schools.com/jsref/event_transitionend.asp"
    },
    {
        "name": "type",
        "href": "https://www.w3schools.com/jsref/event_type.asp"
    },
    {
        "name": "which",
        "href": "https://www.w3schools.com/jsref/event_which.asp"
    },
    {
        "name": "which",
        "href": "https://www.w3schools.com/jsref/event_key_which.asp"
    },
    {
        "name": "view",
        "href": "https://www.w3schools.com/jsref/event_view.asp"
    },
    {
        "name": "x",
        "href": "https://www.w3schools.com/jsref/event_clientx.asp"
    },
    {
        "name": "y",
        "href": "https://www.w3schools.com/jsref/event_clienty.asp"
    }
]
var animationEvent = [
    {
        "name": "animationend",
        "href": "https://www.w3schools.com/jsref/event_animationend.asp"
    },
    {
        "name": "animationiteration",
        "href": "https://www.w3schools.com/jsref/event_animationiteration.asp"
    },
    {
        "name": "animationstart",
        "href": "https://www.w3schools.com/jsref/event_animationstart.asp"
    },
    {
        "name": "animationName",
        "href": "https://www.w3schools.com/jsref/event_animation_animationname.asp"
    },
    {
        "name": "elapsedTime",
        "href": "https://www.w3schools.com/jsref/event_animation_elapsedtime.asp"
    }
]
var clipboardEvent =[
    {
        "name": "oncopy",
        "href": "https://www.w3schools.com/jsref/event_oncopy.asp"
    },
    {
        "name": "oncut",
        "href": "https://www.w3schools.com/jsref/event_oncut.asp"
    },
    {
        "name": "onpaste",
        "href": "https://www.w3schools.com/jsref/event_onpaste.asp"
    }
]
var dragEvent = [
    {
        "name": "ondrag",
        "href": "https://www.w3schools.com/jsref/event_ondrag.asp"
    },
    {
        "name": "ondragend",
        "href": "https://www.w3schools.com/jsref/event_ondragend.asp"
    },
    {
        "name": "ondragenter",
        "href": "https://www.w3schools.com/jsref/event_ondragenter.asp"
    },
    {
        "name": "ondragleave",
        "href": "https://www.w3schools.com/jsref/event_ondragleave.asp"
    },
    {
        "name": "ondragover",
        "href": "https://www.w3schools.com/jsref/event_ondragover.asp"
    },
    {
        "name": "ondragstart",
        "href": "https://www.w3schools.com/jsref/event_ondragstart.asp"
    },
    {
        "name": "ondrop",
        "href": "https://www.w3schools.com/jsref/event_ondrop.asp"
    }
]
var eventObject = [
    {
        "name": "abort",
        "href": "https://www.w3schools.com/jsref/event_onabort_media.asp"
    },
    {
        "name": "afterprint",
        "href": "https://www.w3schools.com/jsref/event_onafterprint.asp"
    },
    {
        "name": "beforeprint",
        "href": "https://www.w3schools.com/jsref/event_onbeforeprint.asp"
    },
    {
        "name": "beforeunload",
        "href": "https://www.w3schools.com/jsref/event_onbeforeunload.asp"
    },
    {
        "name": "canplay",
        "href": "https://www.w3schools.com/jsref/event_oncanplay.asp"
    },
    {
        "name": "canplaythrough",
        "href": "https://www.w3schools.com/jsref/event_oncanplaythrough.asp"
    },
    {
        "name": "change",
        "href": "https://www.w3schools.com/jsref/event_onchange.asp"
    },
    {
        "name": "ended",
        "href": "https://www.w3schools.com/jsref/event_onended.asp"
    },
    {
        "name": "error",
        "href": "https://www.w3schools.com/jsref/event_onerror.asp"
    },
    {
        "name": "fullscreenchange",
        "href": "https://www.w3schools.com/jsref/event_fullscreenchange.asp"
    },
    {
        "name": "fullscreenerror",
        "href": "https://www.w3schools.com/jsref/event_fullscreenerror.asp"
    },
    {
        "name": "input",
        "href": "https://www.w3schools.com/jsref/event_oninput.asp"
    },
    {
        "name": "invalid",
        "href": "https://www.w3schools.com/jsref/event_oninvalid.asp"
    },
    {
        "name": "load",
        "href": "https://www.w3schools.com/jsref/event_onload.asp"
    },
    {
        "name": "loadeddata",
        "href": "https://www.w3schools.com/jsref/event_onloadeddata.asp"
    },
    {
        "name": "loadedmetadata",
        "href": "https://www.w3schools.com/jsref/event_onloadedmetadata.asp"
    },
    {
        "name": "message",
        "href": "https://www.w3schools.com/jsref/event_onmessage_sse.asp"
    },
    {
        "name": "offline",
        "href": "https://www.w3schools.com/jsref/event_onoffline.asp"
    },
    {
        "name": "online",
        "href": "https://www.w3schools.com/jsref/event_ononline.asp"
    },
    {
        "name": "open",
        "href": "https://www.w3schools.com/jsref/event_onopen_sse.asp"
    },
    {
        "name": "pause",
        "href": "https://www.w3schools.com/jsref/event_onpause.asp"
    },
    {
        "name": "play",
        "href": "https://www.w3schools.com/jsref/event_onplay.asp"
    },
    {
        "name": "playing",
        "href": "https://www.w3schools.com/jsref/event_onplaying.asp"
    },
    {
        "name": "progress",
        "href": "https://www.w3schools.com/jsref/event_onprogress.asp"
    },
    {
        "name": "ratechange",
        "href": "https://www.w3schools.com/jsref/event_onratechange.asp"
    },
    {
        "name": "resize",
        "href": "https://www.w3schools.com/jsref/event_onresize.asp"
    },
    {
        "name": "reset",
        "href": "https://www.w3schools.com/jsref/event_onreset.asp"
    },
    {
        "name": "scroll",
        "href": "https://www.w3schools.com/jsref/event_onscroll.asp"
    },
    {
        "name": "search",
        "href": "https://www.w3schools.com/jsref/event_onsearch.asp"
    },
    {
        "name": "seeked",
        "href": "https://www.w3schools.com/jsref/event_onseeked.asp"
    },
    {
        "name": "seeking",
        "href": "https://www.w3schools.com/jsref/event_onseeking.asp"
    },
    {
        "name": "select",
        "href": "https://www.w3schools.com/jsref/event_onselect.asp"
    },
    {
        "name": "show",
        "href": "https://www.w3schools.com/jsref/event_onshow.asp"
    },
    {
        "name": "stalled",
        "href": "https://www.w3schools.com/jsref/event_onstalled.asp"
    },
    {
        "name": "submit",
        "href": "https://www.w3schools.com/jsref/event_onsubmit.asp"
    },
    {
        "name": "suspend",
        "href": "https://www.w3schools.com/jsref/event_onsuspend.asp"
    },
    {
        "name": "timeupdate",
        "href": "https://www.w3schools.com/jsref/event_ontimeupdate.asp"
    },
    {
        "name": "toggle",
        "href": "https://www.w3schools.com/jsref/event_ontoggle.asp"
    },
    {
        "name": "unload",
        "href": "https://www.w3schools.com/jsref/event_onunload.asp"
    },
    {
        "name": "waiting",
        "href": "https://www.w3schools.com/jsref/event_onwaiting.asp"
    },
    {
        "name": "volumechange",
        "href": "https://www.w3schools.com/jsref/event_onvolumechange.asp"
    },
    {
        "name": "bubbles",
        "href": "https://www.w3schools.com/jsref/event_bubbles.asp"
    },
    {
        "name": "cancelBubble",
        "href": "https://www.w3schools.com/jsref/event_cancelbubble.asp"
    },
    {
        "name": "cancelable",
        "href": "https://www.w3schools.com/jsref/event_cancelable.asp"
    },
    {
        "name": "createEvent()",
        "href": "https://www.w3schools.com/jsref/event_createevent.asp"
    },
    {
        "name": "composedPath()",
        "href": "https://www.w3schools.com/jsref/event_composedpath.asp"
    },
    {
        "name": "currentTarget",
        "href": "https://www.w3schools.com/jsref/event_currenttarget.asp"
    },
    {
        "name": "defaultPrevented",
        "href": "https://www.w3schools.com/jsref/event_defaultprevented.asp"
    },
    {
        "name": "eventPhase",
        "href": "https://www.w3schools.com/jsref/event_eventphase.asp"
    },
    {
        "name": "isTrusted",
        "href": "https://www.w3schools.com/jsref/event_istrusted.asp"
    },
    {
        "name": "preventDefault()",
        "href": "https://www.w3schools.com/jsref/event_preventdefault.asp"
    },
    {
        "name": "stopImmediatePropagation()",
        "href": "https://www.w3schools.com/jsref/event_stopimmediatepropagation.asp"
    },
    {
        "name": "stopPropagation()",
        "href": "https://www.w3schools.com/jsref/event_stoppropagation.asp"
    },
    {
        "name": "target",
        "href": "https://www.w3schools.com/jsref/event_target.asp"
    },
    {
        "name": "timeStamp",
        "href": "https://www.w3schools.com/jsref/event_timestamp.asp"
    },
    {
        "name": "type",
        "href": "https://www.w3schools.com/jsref/event_type.asp"
    }
]
var focusEvent = [
    {
        "name": "onblur",
        "href": "https://www.w3schools.com/jsref/event_onblur.asp"
    },
    {
        "name": "onfocus",
        "href": "https://www.w3schools.com/jsref/event_onfocus.asp"
    },
    {
        "name": "onfocusin",
        "href": "https://www.w3schools.com/jsref/event_onfocusin.asp"
    },
    {
        "name": "onfocusout",
        "href": "https://www.w3schools.com/jsref/event_onfocusout.asp"
    },
    {
        "name": "relatedTarget",
        "href": "https://www.w3schools.com/jsref/event_focus_relatedtarget.asp"
    }
]
var haschangeEvent = [
    {
        "name": "onhashchange",
        "href": "https://www.w3schools.com/jsref/event_onhashchange.asp"
    },
    {
        "name": "newURL",
        "href": "https://www.w3schools.com/jsref/event_hashchange_newurl.asp"
    },
    {
        "name": "oldURL",
        "href": "https://www.w3schools.com/jsref/event_hashchange_oldurl.asp"
    }
]
var inputEvent = [
    {
        "name": "oninput",
        "href": "https://www.w3schools.com/jsref/event_oninput.asp"
    },
    {
        "name": "data",
        "href": "https://www.w3schools.com/jsref/event_inputevent_data.asp"
    },
    {
        "name": "inputType",
        "href": "https://www.w3schools.com/jsref/event_inputevent_inputtype.asp"
    }
]
var keyboardEvent = [
    {
        "name": "onkeydown",
        "href": "https://www.w3schools.com/jsref/event_onkeydown.asp"
    },
    {
        "name": "onkeypress",
        "href": "https://www.w3schools.com/jsref/event_onkeypress.asp"
    },
    {
        "name": "onkeyup",
        "href": "https://www.w3schools.com/jsref/event_onkeyup.asp"
    },
    {
        "name": "altKey",
        "href": "https://www.w3schools.com/jsref/event_key_altkey.asp"
    },
    {
        "name": "charCode",
        "href": "https://www.w3schools.com/jsref/event_key_charcode.asp"
    },
    {
        "name": "code",
        "href": "https://www.w3schools.com/jsref/event_key_code.asp"
    },
    {
        "name": "ctrlKey",
        "href": "https://www.w3schools.com/jsref/event_key_ctrlkey.asp"
    },
    {
        "name": "key",
        "href": "https://www.w3schools.com/jsref/event_key_key.asp"
    },
    {
        "name": "keyCode",
        "href": "https://www.w3schools.com/jsref/event_key_keycode.asp"
    },
    {
        "name": "location",
        "href": "https://www.w3schools.com/jsref/event_key_location.asp"
    },
    {
        "name": "metaKey",
        "href": "https://www.w3schools.com/jsref/event_key_metakey.asp"
    },
    {
        "name": "shiftKey",
        "href": "https://www.w3schools.com/jsref/event_key_shiftkey.asp"
    },
    {
        "name": "which",
        "href": "https://www.w3schools.com/jsref/event_key_which.asp"
    },
    {
        "name": "getModifierState()",
        "href": "https://www.w3schools.com/jsref/event_key_getmodifierstate.asp"
    }
]
var mouseEvent = [
    {
        "name": "onclick",
        "href": "https://www.w3schools.com/jsref/event_onclick.asp"
    },
    {
        "name": "oncontextmenu",
        "href": "https://www.w3schools.com/jsref/event_oncontextmenu.asp"
    },
    {
        "name": "ondblclick",
        "href": "https://www.w3schools.com/jsref/event_ondblclick.asp"
    },
    {
        "name": "onmousedown",
        "href": "https://www.w3schools.com/jsref/event_onmousedown.asp"
    },
    {
        "name": "onmouseenter",
        "href": "https://www.w3schools.com/jsref/event_onmouseenter.asp"
    },
    {
        "name": "onmouseleave",
        "href": "https://www.w3schools.com/jsref/event_onmouseleave.asp"
    },
    {
        "name": "onmousemove",
        "href": "https://www.w3schools.com/jsref/event_onmousemove.asp"
    },
    {
        "name": "onmouseout",
        "href": "https://www.w3schools.com/jsref/event_onmouseout.asp"
    },
    {
        "name": "onmouseover",
        "href": "https://www.w3schools.com/jsref/event_onmouseover.asp"
    },
    {
        "name": "onmouseup",
        "href": "https://www.w3schools.com/jsref/event_onmouseup.asp"
    },
    {
        "name": "altKey",
        "href": "https://www.w3schools.com/jsref/event_altkey.asp"
    },
    {
        "name": "button",
        "href": "https://www.w3schools.com/jsref/event_button.asp"
    },
    {
        "name": "buttons",
        "href": "https://www.w3schools.com/jsref/event_buttons.asp"
    },
    {
        "name": "clientX",
        "href": "https://www.w3schools.com/jsref/event_clientx.asp"
    },
    {
        "name": "clientY",
        "href": "https://www.w3schools.com/jsref/event_clienty.asp"
    },
    {
        "name": "ctrlKey",
        "href": "https://www.w3schools.com/jsref/event_ctrlkey.asp"
    },
    {
        "name": "detail",
        "href": "https://www.w3schools.com/jsref/event_detail.asp"
    },
    {
        "name": "metaKey",
        "href": "https://www.w3schools.com/jsref/event_metakey.asp"
    },
    {
        "name": "offsetX",
        "href": "https://www.w3schools.com/jsref/event_offsetx.asp"
    },
    {
        "name": "offsetY",
        "href": "https://www.w3schools.com/jsref/event_offsety.asp"
    },
    {
        "name": "pageX",
        "href": "https://www.w3schools.com/jsref/event_pagex.asp"
    },
    {
        "name": "pageY",
        "href": "https://www.w3schools.com/jsref/event_pagey.asp"
    },
    {
        "name": "relatedTarget",
        "href": "https://www.w3schools.com/jsref/event_relatedtarget.asp"
    },
    {
        "name": "screenX",
        "href": "https://www.w3schools.com/jsref/event_screenx.asp"
    },
    {
        "name": "screenY",
        "href": "https://www.w3schools.com/jsref/event_screeny.asp"
    },
    {
        "name": "shiftKey",
        "href": "https://www.w3schools.com/jsref/event_shiftkey.asp"
    },
    {
        "name": "which",
        "href": "https://www.w3schools.com/jsref/event_which.asp"
    }
]
var pageTransitionEvent = [
    {
        "name": "pagehide",
        "href": "https://www.w3schools.com/jsref/event_onpagehide.asp"
    },
    {
        "name": "pageshow",
        "href": "https://www.w3schools.com/jsref/event_onpageshow.asp"
    },
    {
        "name": "persisted",
        "href": "https://www.w3schools.com/jsref/event_pagetransition_persisted.asp"
    }
]
var progressEvent = [
    {
        "name": "onerror",
        "href": "https://www.w3schools.com/jsref/event_onerror.asp"
    },
    {
        "name": "onloadstart",
        "href": "https://www.w3schools.com/jsref/event_onloadstart.asp"
    }
]
var storageEvent = [
    {
        "name": "storage",
        "href": "https://www.w3schools.com/jsref/event_storage_storage.asp"
    },
    {
        "name": "key",
        "href": "https://www.w3schools.com/jsref/event_storage_key.asp"
    },
    {
        "name": "newValue",
        "href": "https://www.w3schools.com/jsref/event_storage_newvalue.asp"
    },
    {
        "name": "oldValue",
        "href": "https://www.w3schools.com/jsref/event_storage_oldvalue.asp"
    },
    {
        "name": "storageArea",
        "href": "https://www.w3schools.com/jsref/event_storage_storagearea.asp"
    },
    {
        "name": "url",
        "href": "https://www.w3schools.com/jsref/event_storage_url.asp"
    }
]
var touchEvent = [
    {
        "name": "ontouchcancel",
        "href": "https://www.w3schools.com/jsref/event_touchcancel.asp"
    },
    {
        "name": "ontouchend",
        "href": "https://www.w3schools.com/jsref/event_touchend.asp"
    },
    {
        "name": "ontouchmove",
        "href": "https://www.w3schools.com/jsref/event_touchmove.asp"
    },
    {
        "name": "ontouchstart",
        "href": "https://www.w3schools.com/jsref/event_touchstart.asp"
    },
    {
        "name": "altKey",
        "href": "https://www.w3schools.com/jsref/event_touch_altkey.asp"
    },
    {
        "name": "ctrlKey",
        "href": "https://www.w3schools.com/jsref/event_touch_ctrlkey.asp"
    },
    {
        "name": "metaKey",
        "href": "https://www.w3schools.com/jsref/event_touch_metakey.asp"
    },
    {
        "name": "shiftKey",
        "href": "https://www.w3schools.com/jsref/event_touch_shiftkey.asp"
    },
    {
        "name": "targetTouches",
        "href": "https://www.w3schools.com/jsref/event_touch_targettouches.asp"
    },
    {
        "name": "touches",
        "href": "https://www.w3schools.com/jsref/event_touch_touches.asp"
    }
]
var transitionEvent = [
    {
        "name": "transitionend",
        "href": "https://www.w3schools.com/jsref/event_transitionend.asp"
    },
    {
        "name": "propertyName",
        "href": "https://www.w3schools.com/jsref/event_transition_propertyname.asp"
    },
    {
        "name": "elapsedTime",
        "href": "https://www.w3schools.com/jsref/event_transition_elapsedtime.asp"
    }
]
var uiEvent = [
    {
        "name": "abort",
        "href": "https://www.w3schools.com/jsref/event_onabort_media.asp"
    },
    {
        "name": "beforeunload",
        "href": "https://www.w3schools.com/jsref/event_onbeforeunload.asp"
    },
    {
        "name": "error",
        "href": "https://www.w3schools.com/jsref/event_onerror.asp"
    },
    {
        "name": "load",
        "href": "https://www.w3schools.com/jsref/event_onload.asp"
    },
    {
        "name": "resize",
        "href": "https://www.w3schools.com/jsref/event_onresize.asp"
    },
    {
        "name": "scroll",
        "href": "https://www.w3schools.com/jsref/event_onscroll.asp"
    },
    {
        "name": "select",
        "href": "https://www.w3schools.com/jsref/event_onselect.asp"
    },
    {
        "name": "unload",
        "href": "https://www.w3schools.com/jsref/event_onunload.asp"
    },
    {
        "name": "detail",
        "href": "https://www.w3schools.com/jsref/event_detail.asp"
    },
    {
        "name": "view",
        "href": "https://www.w3schools.com/jsref/event_view.asp"
    }
]
var wheelEvent = [
    {
        "name": "onwheel",
        "href": "https://www.w3schools.com/jsref/event_onwheel.asp"
    },
    {
        "name": "deltaX",
        "href": "https://www.w3schools.com/jsref/event_wheel_deltax.asp"
    },
    {
        "name": "deltaY",
        "href": "https://www.w3schools.com/jsref/event_wheel_deltay.asp"
    },
    {
        "name": "deltaZ",
        "href": "https://www.w3schools.com/jsref/event_wheel_deltaz.asp"
    },
    {
        "name": "deltaMode",
        "href": "https://www.w3schools.com/jsref/event_wheel_deltamode.asp"
    }
]
var styleObject = [
    {
        "name": "alignContent",
        "href": "https://www.w3schools.com/jsref/prop_style_aligncontent.asp"
    },
    {
        "name": "alignItems",
        "href": "https://www.w3schools.com/jsref/prop_style_alignitems.asp"
    },
    {
        "name": "alignSelf",
        "href": "https://www.w3schools.com/jsref/prop_style_alignself.asp"
    },
    {
        "name": "animation",
        "href": "https://www.w3schools.com/jsref/prop_style_animation.asp"
    },
    {
        "name": "animationDelay",
        "href": "https://www.w3schools.com/jsref/prop_style_animationdelay.asp"
    },
    {
        "name": "animationDirection",
        "href": "https://www.w3schools.com/jsref/prop_style_animationdirection.asp"
    },
    {
        "name": "animationDuration",
        "href": "https://www.w3schools.com/jsref/prop_style_animationduration.asp"
    },
    {
        "name": "animationFillMode",
        "href": "https://www.w3schools.com/jsref/prop_style_animationfillmode.asp"
    },
    {
        "name": "animationIterationCount",
        "href": "https://www.w3schools.com/jsref/prop_style_animationiterationcount.asp"
    },
    {
        "name": "animationName",
        "href": "https://www.w3schools.com/jsref/prop_style_animationname.asp"
    },
    {
        "name": "animationTimingFunction",
        "href": "https://www.w3schools.com/jsref/prop_style_animationtimingfunction.asp"
    },
    {
        "name": "animationPlayState",
        "href": "https://www.w3schools.com/jsref/prop_style_animationplaystate.asp"
    },
    {
        "name": "background",
        "href": "https://www.w3schools.com/jsref/prop_style_background.asp"
    },
    {
        "name": "backgroundAttachment",
        "href": "https://www.w3schools.com/jsref/prop_style_backgroundattachment.asp"
    },
    {
        "name": "backgroundColor",
        "href": "https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp"
    },
    {
        "name": "backgroundImage",
        "href": "https://www.w3schools.com/jsref/prop_style_backgroundimage.asp"
    },
    {
        "name": "backgroundPosition",
        "href": "https://www.w3schools.com/jsref/prop_style_backgroundposition.asp"
    },
    {
        "name": "backgroundRepeat",
        "href": "https://www.w3schools.com/jsref/prop_style_backgroundrepeat.asp"
    },
    {
        "name": "backgroundClip",
        "href": "https://www.w3schools.com/jsref/prop_style_backgroundclip.asp"
    },
    {
        "name": "backgroundOrigin",
        "href": "https://www.w3schools.com/jsref/prop_style_backgroundorigin.asp"
    },
    {
        "name": "backgroundSize",
        "href": "https://www.w3schools.com/jsref/prop_style_backgroundsize.asp"
    },
    {
        "name": "backfaceVisibility",
        "href": "https://www.w3schools.com/jsref/prop_style_backfacevisibility.asp"
    },
    {
        "name": "border",
        "href": "https://www.w3schools.com/jsref/prop_style_border.asp"
    },
    {
        "name": "borderBottom",
        "href": "https://www.w3schools.com/jsref/prop_style_borderbottom.asp"
    },
    {
        "name": "borderBottomColor",
        "href": "https://www.w3schools.com/jsref/prop_style_borderbottomcolor.asp"
    },
    {
        "name": "borderBottomLeftRadius",
        "href": "https://www.w3schools.com/jsref/prop_style_borderbottomleftradius.asp"
    },
    {
        "name": "borderBottomRightRadius",
        "href": "https://www.w3schools.com/jsref/prop_style_borderbottomrightradius.asp"
    },
    {
        "name": "borderBottomStyle",
        "href": "https://www.w3schools.com/jsref/prop_style_borderbottomstyle.asp"
    },
    {
        "name": "borderBottomWidth",
        "href": "https://www.w3schools.com/jsref/prop_style_borderbottomwidth.asp"
    },
    {
        "name": "borderCollapse",
        "href": "https://www.w3schools.com/jsref/prop_style_bordercollapse.asp"
    },
    {
        "name": "borderColor",
        "href": "https://www.w3schools.com/jsref/prop_style_bordercolor.asp"
    },
    {
        "name": "borderImage",
        "href": "https://www.w3schools.com/jsref/prop_style_borderimage.asp"
    },
    {
        "name": "borderImageOutset",
        "href": "https://www.w3schools.com/jsref/prop_style_borderimageoutset.asp"
    },
    {
        "name": "borderImageRepeat",
        "href": "https://www.w3schools.com/jsref/prop_style_borderimagerepeat.asp"
    },
    {
        "name": "borderImageSlice",
        "href": "https://www.w3schools.com/jsref/prop_style_borderimageslice.asp"
    },
    {
        "name": "borderImageSource",
        "href": "https://www.w3schools.com/jsref/prop_style_borderimagesource.asp"
    },
    {
        "name": "borderImageWidth",
        "href": "https://www.w3schools.com/jsref/prop_style_borderimagewidth.asp"
    },
    {
        "name": "borderLeft",
        "href": "https://www.w3schools.com/jsref/prop_style_borderleft.asp"
    },
    {
        "name": "borderLeftColor",
        "href": "https://www.w3schools.com/jsref/prop_style_borderleftcolor.asp"
    },
    {
        "name": "borderLeftStyle",
        "href": "https://www.w3schools.com/jsref/prop_style_borderleftstyle.asp"
    },
    {
        "name": "borderLeftWidth",
        "href": "https://www.w3schools.com/jsref/prop_style_borderleftwidth.asp"
    },
    {
        "name": "borderRadius",
        "href": "https://www.w3schools.com/jsref/prop_style_borderradius.asp"
    },
    {
        "name": "borderRight",
        "href": "https://www.w3schools.com/jsref/prop_style_borderright.asp"
    },
    {
        "name": "borderRightColor",
        "href": "https://www.w3schools.com/jsref/prop_style_borderrightcolor.asp"
    },
    {
        "name": "borderRightStyle",
        "href": "https://www.w3schools.com/jsref/prop_style_borderrightstyle.asp"
    },
    {
        "name": "borderRightWidth",
        "href": "https://www.w3schools.com/jsref/prop_style_borderrightwidth.asp"
    },
    {
        "name": "borderSpacing",
        "href": "https://www.w3schools.com/jsref/prop_style_borderspacing.asp"
    },
    {
        "name": "borderStyle",
        "href": "https://www.w3schools.com/jsref/prop_style_borderstyle.asp"
    },
    {
        "name": "borderTop",
        "href": "https://www.w3schools.com/jsref/prop_style_bordertop.asp"
    },
    {
        "name": "borderTopColor",
        "href": "https://www.w3schools.com/jsref/prop_style_bordertopcolor.asp"
    },
    {
        "name": "borderTopLeftRadius",
        "href": "https://www.w3schools.com/jsref/prop_style_bordertopleftradius.asp"
    },
    {
        "name": "borderTopRightRadius",
        "href": "https://www.w3schools.com/jsref/prop_style_bordertoprightradius.asp"
    },
    {
        "name": "borderTopStyle",
        "href": "https://www.w3schools.com/jsref/prop_style_bordertopstyle.asp"
    },
    {
        "name": "borderTopWidth",
        "href": "https://www.w3schools.com/jsref/prop_style_bordertopwidth.asp"
    },
    {
        "name": "borderWidth",
        "href": "https://www.w3schools.com/jsref/prop_style_borderwidth.asp"
    },
    {
        "name": "bottom",
        "href": "https://www.w3schools.com/jsref/prop_style_bottom.asp"
    },
    {
        "name": "boxShadow",
        "href": "https://www.w3schools.com/jsref/prop_style_boxshadow.asp"
    },
    {
        "name": "boxSizing",
        "href": "https://www.w3schools.com/jsref/prop_style_boxsizing.asp"
    },
    {
        "name": "captionSide",
        "href": "https://www.w3schools.com/jsref/prop_style_captionside.asp"
    },
    {
        "name": "caretColor",
        "href": "https://www.w3schools.com/jsref/prop_style_caretcolor.asp"
    },
    {
        "name": "clear",
        "href": "https://www.w3schools.com/jsref/prop_style_clear.asp"
    },
    {
        "name": "clip",
        "href": "https://www.w3schools.com/jsref/prop_style_clip.asp"
    },
    {
        "name": "color",
        "href": "https://www.w3schools.com/jsref/prop_style_color.asp"
    },
    {
        "name": "columnCount",
        "href": "https://www.w3schools.com/jsref/prop_style_columncount.asp"
    },
    {
        "name": "columnFill",
        "href": "https://www.w3schools.com/jsref/prop_style_columnfill.asp"
    },
    {
        "name": "columnGap",
        "href": "https://www.w3schools.com/jsref/prop_style_columngap.asp"
    },
    {
        "name": "columnRule",
        "href": "https://www.w3schools.com/jsref/prop_style_columnrule.asp"
    },
    {
        "name": "columnRuleColor",
        "href": "https://www.w3schools.com/jsref/prop_style_columnrulecolor.asp"
    },
    {
        "name": "columnRuleStyle",
        "href": "https://www.w3schools.com/jsref/prop_style_columnrulestyle.asp"
    },
    {
        "name": "columnRuleWidth",
        "href": "https://www.w3schools.com/jsref/prop_style_columnrulewidth.asp"
    },
    {
        "name": "columns",
        "href": "https://www.w3schools.com/jsref/prop_style_columns.asp"
    },
    {
        "name": "columnSpan",
        "href": "https://www.w3schools.com/jsref/prop_style_columnspan.asp"
    },
    {
        "name": "columnWidth",
        "href": "https://www.w3schools.com/jsref/prop_style_columnwidth.asp"
    },
    {
        "name": "counterIncrement",
        "href": "https://www.w3schools.com/jsref/prop_style_counterincrement.asp"
    },
    {
        "name": "counterReset",
        "href": "https://www.w3schools.com/jsref/prop_style_counterreset.asp"
    },
    {
        "name": "cursor",
        "href": "https://www.w3schools.com/jsref/prop_style_cursor.asp"
    },
    {
        "name": "direction",
        "href": "https://www.w3schools.com/jsref/prop_style_direction.asp"
    },
    {
        "name": "display",
        "href": "https://www.w3schools.com/jsref/prop_style_display.asp"
    },
    {
        "name": "emptyCells",
        "href": "https://www.w3schools.com/jsref/prop_style_emptycells.asp"
    },
    {
        "name": "filter",
        "href": "https://www.w3schools.com/jsref/prop_style_filter.asp"
    },
    {
        "name": "flex",
        "href": "https://www.w3schools.com/jsref/prop_style_flex.asp"
    },
    {
        "name": "flexBasis",
        "href": "https://www.w3schools.com/jsref/prop_style_flexbasis.asp"
    },
    {
        "name": "flexDirection",
        "href": "https://www.w3schools.com/jsref/prop_style_flexdirection.asp"
    },
    {
        "name": "flexFlow",
        "href": "https://www.w3schools.com/jsref/prop_style_flexflow.asp"
    },
    {
        "name": "flexGrow",
        "href": "https://www.w3schools.com/jsref/prop_style_flexgrow.asp"
    },
    {
        "name": "flexShrink",
        "href": "https://www.w3schools.com/jsref/prop_style_flexshrink.asp"
    },
    {
        "name": "flexWrap",
        "href": "https://www.w3schools.com/jsref/prop_style_flexwrap.asp"
    },
    {
        "name": "cssFloat",
        "href": "https://www.w3schools.com/jsref/prop_style_cssfloat.asp"
    },
    {
        "name": "font",
        "href": "https://www.w3schools.com/jsref/prop_style_font.asp"
    },
    {
        "name": "fontFamily",
        "href": "https://www.w3schools.com/jsref/prop_style_fontfamily.asp"
    },
    {
        "name": "fontSize",
        "href": "https://www.w3schools.com/jsref/prop_style_fontsize.asp"
    },
    {
        "name": "fontStyle",
        "href": "https://www.w3schools.com/jsref/prop_style_fontstyle.asp"
    },
    {
        "name": "fontVariant",
        "href": "https://www.w3schools.com/jsref/prop_style_fontvariant.asp"
    },
    {
        "name": "fontWeight",
        "href": "https://www.w3schools.com/jsref/prop_style_fontweight.asp"
    },
    {
        "name": "fontSizeAdjust",
        "href": "https://www.w3schools.com/jsref/prop_style_fontsizeadjust.asp"
    },
    {
        "name": "height",
        "href": "https://www.w3schools.com/jsref/prop_style_height.asp"
    },
    {
        "name": "isolation",
        "href": "https://www.w3schools.com/jsref/prop_style_isolation.asp"
    },
    {
        "name": "justifyContent",
        "href": "https://www.w3schools.com/jsref/prop_style_justifycontent.asp"
    },
    {
        "name": "left",
        "href": "https://www.w3schools.com/jsref/prop_style_left.asp"
    },
    {
        "name": "letterSpacing",
        "href": "https://www.w3schools.com/jsref/prop_style_letterspacing.asp"
    },
    {
        "name": "lineHeight",
        "href": "https://www.w3schools.com/jsref/prop_style_lineheight.asp"
    },
    {
        "name": "listStyle",
        "href": "https://www.w3schools.com/jsref/prop_style_liststyle.asp"
    },
    {
        "name": "listStyleImage",
        "href": "https://www.w3schools.com/jsref/prop_style_liststyleimage.asp"
    },
    {
        "name": "listStylePosition",
        "href": "https://www.w3schools.com/jsref/prop_style_liststyleposition.asp"
    },
    {
        "name": "listStyleType",
        "href": "https://www.w3schools.com/jsref/prop_style_liststyletype.asp"
    },
    {
        "name": "margin",
        "href": "https://www.w3schools.com/jsref/prop_style_margin.asp"
    },
    {
        "name": "marginBottom",
        "href": "https://www.w3schools.com/jsref/prop_style_marginbottom.asp"
    },
    {
        "name": "marginLeft",
        "href": "https://www.w3schools.com/jsref/prop_style_marginleft.asp"
    },
    {
        "name": "marginRight",
        "href": "https://www.w3schools.com/jsref/prop_style_marginright.asp"
    },
    {
        "name": "marginTop",
        "href": "https://www.w3schools.com/jsref/prop_style_margintop.asp"
    },
    {
        "name": "maxHeight",
        "href": "https://www.w3schools.com/jsref/prop_style_maxheight.asp"
    },
    {
        "name": "maxWidth",
        "href": "https://www.w3schools.com/jsref/prop_style_maxwidth.asp"
    },
    {
        "name": "minHeight",
        "href": "https://www.w3schools.com/jsref/prop_style_minheight.asp"
    },
    {
        "name": "minWidth",
        "href": "https://www.w3schools.com/jsref/prop_style_minwidth.asp"
    },
    {
        "name": "objectFit",
        "href": "https://www.w3schools.com/jsref/prop_style_objectfit.asp"
    },
    {
        "name": "objectPosition",
        "href": "https://www.w3schools.com/jsref/prop_style_objectposition.asp"
    },
    {
        "name": "opacity",
        "href": "https://www.w3schools.com/jsref/prop_style_opacity.asp"
    },
    {
        "name": "order",
        "href": "https://www.w3schools.com/jsref/prop_style_order.asp"
    },
    {
        "name": "orphans",
        "href": "https://www.w3schools.com/jsref/prop_style_orphans.asp"
    },
    {
        "name": "outline",
        "href": "https://www.w3schools.com/jsref/prop_style_outline.asp"
    },
    {
        "name": "outlineColor",
        "href": "https://www.w3schools.com/jsref/prop_style_outlinecolor.asp"
    },
    {
        "name": "outlineOffset",
        "href": "https://www.w3schools.com/jsref/prop_style_outlineoffset.asp"
    },
    {
        "name": "outlineStyle",
        "href": "https://www.w3schools.com/jsref/prop_style_outlinestyle.asp"
    },
    {
        "name": "outlineWidth",
        "href": "https://www.w3schools.com/jsref/prop_style_outlinewidth.asp"
    },
    {
        "name": "overflow",
        "href": "https://www.w3schools.com/jsref/prop_style_overflow.asp"
    },
    {
        "name": "overflowX",
        "href": "https://www.w3schools.com/jsref/prop_style_overflowx.asp"
    },
    {
        "name": "overflowY",
        "href": "https://www.w3schools.com/jsref/prop_style_overflowy.asp"
    },
    {
        "name": "padding",
        "href": "https://www.w3schools.com/jsref/prop_style_padding.asp"
    },
    {
        "name": "paddingBottom",
        "href": "https://www.w3schools.com/jsref/prop_style_paddingbottom.asp"
    },
    {
        "name": "paddingLeft",
        "href": "https://www.w3schools.com/jsref/prop_style_paddingleft.asp"
    },
    {
        "name": "paddingRight",
        "href": "https://www.w3schools.com/jsref/prop_style_paddingright.asp"
    },
    {
        "name": "paddingTop",
        "href": "https://www.w3schools.com/jsref/prop_style_paddingtop.asp"
    },
    {
        "name": "pageBreakAfter",
        "href": "https://www.w3schools.com/jsref/prop_style_pagebreakafter.asp"
    },
    {
        "name": "pageBreakBefore",
        "href": "https://www.w3schools.com/jsref/prop_style_pagebreakbefore.asp"
    },
    {
        "name": "pageBreakInside",
        "href": "https://www.w3schools.com/jsref/prop_style_pagebreakinside.asp"
    },
    {
        "name": "perspective",
        "href": "https://www.w3schools.com/jsref/prop_style_perspective.asp"
    },
    {
        "name": "perspectiveOrigin",
        "href": "https://www.w3schools.com/jsref/prop_style_perspectiveorigin.asp"
    },
    {
        "name": "position",
        "href": "https://www.w3schools.com/jsref/prop_style_position.asp"
    },
    {
        "name": "quotes",
        "href": "https://www.w3schools.com/jsref/prop_style_quotes.asp"
    },
    {
        "name": "resize",
        "href": "https://www.w3schools.com/jsref/prop_style_resize.asp"
    },
    {
        "name": "right",
        "href": "https://www.w3schools.com/jsref/prop_style_right.asp"
    },
    {
        "name": "scrollBehavior",
        "href": "https://www.w3schools.com/jsref/prop_style_scrollbehavior.asp"
    },
    {
        "name": "tableLayout",
        "href": "https://www.w3schools.com/jsref/prop_style_tablelayout.asp"
    },
    {
        "name": "tabSize",
        "href": "https://www.w3schools.com/jsref/prop_style_tabsize.asp"
    },
    {
        "name": "textAlign",
        "href": "https://www.w3schools.com/jsref/prop_style_textalign.asp"
    },
    {
        "name": "textAlignLast",
        "href": "https://www.w3schools.com/jsref/prop_style_textalignlast.asp"
    },
    {
        "name": "textDecoration",
        "href": "https://www.w3schools.com/jsref/prop_style_textdecoration.asp"
    },
    {
        "name": "textDecorationColor",
        "href": "https://www.w3schools.com/jsref/prop_style_textdecorationcolor.asp"
    },
    {
        "name": "textDecorationLine",
        "href": "https://www.w3schools.com/jsref/prop_style_textdecorationline.asp"
    },
    {
        "name": "textDecorationStyle",
        "href": "https://www.w3schools.com/jsref/prop_style_textdecorationstyle.asp"
    },
    {
        "name": "textIndent",
        "href": "https://www.w3schools.com/jsref/prop_style_textindent.asp"
    },
    {
        "name": "textOverflow",
        "href": "https://www.w3schools.com/jsref/prop_style_textoverflow.asp"
    },
    {
        "name": "textShadow",
        "href": "https://www.w3schools.com/jsref/prop_style_textshadow.asp"
    },
    {
        "name": "textTransform",
        "href": "https://www.w3schools.com/jsref/prop_style_texttransform.asp"
    },
    {
        "name": "top",
        "href": "https://www.w3schools.com/jsref/prop_style_top.asp"
    },
    {
        "name": "transform",
        "href": "https://www.w3schools.com/jsref/prop_style_transform.asp"
    },
    {
        "name": "transformOrigin",
        "href": "https://www.w3schools.com/jsref/prop_style_transformorigin.asp"
    },
    {
        "name": "transformStyle",
        "href": "https://www.w3schools.com/jsref/prop_style_transformstyle.asp"
    },
    {
        "name": "transition",
        "href": "https://www.w3schools.com/jsref/prop_style_transition.asp"
    },
    {
        "name": "transitionProperty",
        "href": "https://www.w3schools.com/jsref/prop_style_transitionproperty.asp"
    },
    {
        "name": "transitionDuration",
        "href": "https://www.w3schools.com/jsref/prop_style_transitionduration.asp"
    },
    {
        "name": "transitionTimingFunction",
        "href": "https://www.w3schools.com/jsref/prop_style_transitiontimingfunction.asp"
    },
    {
        "name": "transitionDelay",
        "href": "https://www.w3schools.com/jsref/prop_style_transitiondelay.asp"
    },
    {
        "name": "unicodeBidi",
        "href": "https://www.w3schools.com/jsref/prop_style_unicodebidi.asp"
    },
    {
        "name": "userSelect",
        "href": "https://www.w3schools.com/jsref/prop_style_userselect.asp"
    },
    {
        "name": "verticalAlign",
        "href": "https://www.w3schools.com/jsref/prop_style_verticalalign.asp"
    },
    {
        "name": "visibility",
        "href": "https://www.w3schools.com/jsref/prop_style_visibility.asp"
    },
    {
        "name": "whiteSpace",
        "href": "https://www.w3schools.com/jsref/prop_style_whitespace.asp"
    },
    {
        "name": "width",
        "href": "https://www.w3schools.com/jsref/prop_style_width.asp"
    },
    {
        "name": "wordBreak",
        "href": "https://www.w3schools.com/jsref/prop_style_wordbreak.asp"
    },
    {
        "name": "wordSpacing",
        "href": "https://www.w3schools.com/jsref/prop_style_wordspacing.asp"
    },
    {
        "name": "wordWrap",
        "href": "https://www.w3schools.com/jsref/prop_style_wordwrap.asp"
    },
    {
        "name": "widows",
        "href": "https://www.w3schools.com/jsref/prop_style_widows.asp"
    },
    {
        "name": "zIndex",
        "href": "https://www.w3schools.com/jsref/prop_style_zindex.asp"
    }
]


var myBraid = [
{name:"Array Object", value:arrayObject},
{name:"String Object",value:stringObject},
{name:"Number Object",value:numberObject},
{name:"Math Object",value:mathObject},
{name:"Date Object",value:dateObject},
{name:"Global Object",value:globalObject},
{name:"Regex Object",value:regexObject},
{name:"Object",value:object},
{name:"Class Object",value:classObject},
{name:"Error Object",value:errorObject},
{name:"Boolean Object",value:booleanObject},
{name:"Statement Object",value:statementObject},
{name:"Promise Object",value:promiseObject},
{name:"Json Object",value:jsonObject},
{name:"Window Object",value:windowObject},
{name:"History Object",value:historyObject},
{name:"Location Object",value:locationObject},
{name:"Navigator Object",value:navigatorObject},
{name:"Screen Object",value:screenObject},
{name:"Document Object",value:documentObject},
{name:"Element Object",value:elementObject},
{name:"Attribute Object",value:attributesObject},
{name:"Attributes Event",value:attributesEvent},
{name:"Animation Object",value:animationEvent},
{name:"Clipboard Event",value:clipboardEvent},
{name:"Drag Event",value:dragEvent},
{name:"Event Object",value:eventObject},
{name:"Focus Object",value:focusEvent},
{name:"Haschange Object",value:haschangeEvent},
{name:"Input Object",value:inputEvent},
{name:"Keyboard Object",value:keyboardEvent},
{name:"Mouse Object",value:mouseEvent},
{name:"page Transition Object",value:pageTransitionEvent},
{name:"Progress Object",value:progressEvent},
{name:"Storage Object",value:storageEvent},
{name:"Touch Object",value:touchEvent},
{name:"Transition Object",value:transitionEvent},
{name:"UI Object",value:uiEvent},
{name:"Wheel Object",value:wheelEvent},
{name:"Style Object",value:styleObject},    
]
var count = 0;
myBraid.forEach((row) => {
    var ul = document.createElement("UL");
    ul.textContent = row.name;
    row.value.forEach((obj) => {
        var li = document.createElement("LI");
        var a = document.createElement("A");
        a.href = obj.href;
        a.innerText = obj.name;
        li.appendChild(a);
        ul.appendChild(li);
        count++;
        
    })
    document.body.appendChild(ul);
    
})
