window.onload = () => {
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
        img.src = "./img/" + path + ".png";
        img.onload = () => {
            ctx.drawImage(img,x,y);
        }
    }
    setImage(ctx, "beak", 0, 0);
    setImage(ctx, "body", 0, 0);
    setImage(ctx, "eye", 0, 0);
    setImage(ctx, "eye", 0, 0);
    setImage(ctx, "Splash", 0, 0);
    setImage(ctx, "stomach", 0, 0);
    setImage(ctx, "Tosaka", 0, 0);
}