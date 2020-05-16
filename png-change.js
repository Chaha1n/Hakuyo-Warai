var img01 = new Image();
img01.src = 'img/body.png'

function test() {
  //描画コンテキストの取得
  var canvas = document.getElementById('make-hakuyo');
  if (canvas.getContext) {
    var context = canvas.getContext('2d');
    //座標(10, 10)の位置にイメージを表示
    context.drawImage(img01, 10, 10);
  }
}

function make_img() {
  // キャンパス要素を取得
  var canvas = document.getElementById('make-hakuyo');

  // 描画内容をデータURIに変換(PNG)
  var dataURI = canvas.toDataURL();

  // img要素を取得
  var image = document.getElementById("img-hakuyo");

  // データURIをimg要素のsrc属性に指定
  image.src = dataURI;
}