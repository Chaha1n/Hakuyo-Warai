window.onload = () => {
    // 保存ボタンは非表示
    document.getElementById("save").style.display ="none";
    const canvas = document.getElementById("Canvas1");
    const ctx = canvas.getContext("2d");
    //画像データの読み込み
    /** 
    *受け取った画像をキャンバスに描画する
    *@param {path} 画像のファイル名
    *@param {ctx}描画するキャンバスのコンテクスト
    *@param {x} 左上のx座標(px)
    * @param {y} 左上のy座標(px)
     */
    function setImage(ctx,path,x,y) {
        const img = new Image();
        //img.crossOrigin = "anonymous"
        img.src = "./img/" + path + ".png";
        img.onload = () => {
            ctx.drawImage(img,x,y);
        }
    }
    function makePosition(){
        var xy = Math.round(Math.random()*410);
        return xy;
    }
    setImage(ctx, "beak", makePosition(), makePosition());
    setImage(ctx, "body", makePosition(), makePosition());
    setImage(ctx, "eye", makePosition(), makePosition());
    setImage(ctx, "Splash", makePosition(), makePosition());
    setImage(ctx, "stomach", makePosition(), makePosition());
    setImage(ctx, "Tosaka", makePosition(), makePosition());
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