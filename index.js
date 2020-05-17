window.onload = () => {
    // 保存ボタンは非表示
    document.getElementById("save").style.display ="none";
    const canvas = new fabric.Canvas('Canvas1');
    //グループ選択無効化
    canvas.selection = false;
    //画像データの読み込み
    /** 
    *受け取った画像をキャンバスに描画する
    *@param {path} 画像のファイル名
    *@param {x} 左上のx座標(px)
    * @param {y} 左上のy座標(px)
     */
    function setImage(path,x,y) {
        //img.crossOrigin = "anonymous"
        const url = "./img/" + path + ".png";
        fabric.Image.fromURL(url, function (oImg) {
            oImg.set({
                left: x,                    // x座標指定
                top:y,                      // y座標指定
                hasRotatingPoint: false,    // 回転無効
                lockScalingFlip: true,      // 裏返し無効
                hasControls: false          //拡大縮小無効
            });
            canvas.add(oImg);
        })
    }
    function makePosition(){
        var xy = Math.round(Math.random()*410);
        return xy;
    }
    setImage("beak", makePosition(), makePosition());
    setImage( "body", makePosition(), makePosition());
    setImage("eye", makePosition(), makePosition());
    setImage("Splash", makePosition(), makePosition());
    setImage("stomach", makePosition(), makePosition());
    setImage("Tosaka", makePosition(), makePosition());
}

// 画像を生成する関数
function make_img() {
    // キャンパス要素を取得
    var canvas = document.getElementById('Canvas1');
  
    // 描画内容をデータURIに変換(PNG)
    var dataURI = canvas.toDataURL();
  
    // img要素を取得
    var image = document.getElementById("img-hakuyo");
  
    // データURIをimg要素のsrc属性に指定
    image.src = dataURI;

    // 生成ボタンの非表示
    document.getElementById("make").style.display ="none";

    // 保存ボタンに画像リンクを設定
    var save = document.getElementById("save");
    save.href = dataURI;

    // 保存ボタンの表示
    document.getElementById("save").style.display ="block";
    
}