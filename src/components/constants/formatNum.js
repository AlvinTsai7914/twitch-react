const formatNum = (num) => {
  num = Number(num);
  if (num === 0) {
    return num + '';
  } else if (num > 1 && num < 10000) {
    return num + '';
  } else {
    return trimzero((num / 10000).toFixed(1)) + '萬';
  }
};

function trimzero($str) {
  //拆解字串,格式為: 整數.小數
  var arr = $str.split('.');
  var $int = arr[0];
  var $dec = arr[1];
  //將小數點 ,右邊的0去除
  var $dec = arr[1].replace(/0+$/, '');

  if ($dec === '') {
    return $int.trim();
  }
  return $int.trim() + '.' + $dec.trim(); //重組格式 ,並返回
}

export default formatNum;
