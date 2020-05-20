var canvas;
window.onload = () => {
    //スクロール禁止
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    // 保存ボタンは非表示
    document.getElementById("save").style.display ="none";
    canvas = new fabric.Canvas('Canvas1');
    // canvas-wrapperの幅を取得し、Canvasの大きさを決定
    const cw = document.getElementById("canvas-wrapper");
    canvas.setWidth(cw.clientWidth-20);
    canvas.setHeight(cw.clientWidth-20);
    // canvasの幅、高さを取得
    const c_side = canvas.width;
    console.log(canvas.width)
    console.log(cw.clientWidth)

    // 白背景を描画
    var back = new fabric.Rect({ 
        fill: '#fff', 
        top: 0, 
        left: 0,
        width: c_side,
        height: c_side
    }); 
    back.selectable = false;
    canvas.add(back);
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
            });
            canvas.add(oImg);
        })
    }
    function makePosition(){
        var xy = Math.round(Math.random()*c_side-50);
        return xy;
    }
    setImage("beak", makePosition(), makePosition());
    setImage("body", makePosition(), makePosition());
    setImage("eye", makePosition(), makePosition());
    setImage("Splash", makePosition(), makePosition());
    setImage("stomach", makePosition(), makePosition());
    setImage("Tosaka", makePosition(), makePosition());
}
//タッチの無効化/有効化を操作する関数
function handleTouchMove(event) {
    event.preventDefault();
}

// 画像を生成する関数
function make_img() {
    //選択を解除
    canvas.discardActiveObject();
    //タッチ無効化を解除
    document.removeEventListener('touchmove', handleTouchMove, { passive: false });
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