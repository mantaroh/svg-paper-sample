"use client"
// @ts-ignore
import { useEffect } from "react";
import ExportedFromFigmaTweaked from './exported-from-figma-tweaked.svg';

export default function Home() {

  useEffect(() => {

    (async () => {
      // サーバーサイドではなくクライアントサイドでのみ動作するコード
      // window オブジェクトをライブラリ内で利用するため、 useEffect の中で実行する
      // @ts-ignore
      const SvgPaper = (await import('svg-paper')).default;
      console.log(SvgPaper);
      const paper = new SvgPaper();
      paper
        .replace('%date%', "2022-01-01")
        .replace('%customerName%', "Unimal まんたろう")
        .replace('%address%', "東京都港区六本木6-10-1 六本木ヒルズ森タワー 37F")
        .replace('%number%', "1234567890")
        .replace('%totalAmount%', "¥1,000")
        .replace('%subtotal%', "¥1,000");

      // MEMO: 配列渡しはサポートしてないっぽい
      // https://github.com/ttskch/svg-paper/blob/9c898c25e4a141d55ec658cda184926c82a75bbb/js/src/svg-paper.js#L17C19-L17C30
      for (let i = 0; i <= 25; i++) {
        paper.replace(`%itemName[${i}]%`, `アイテム ${i}`);
        paper.replace(`%quantity[${i}]%`, "1");
        paper.replace(`%unitPrice[${i}]%`, "¥1,000");
        paper.replace(`%total[${i}]%`, "¥1,000");    
      }

      paper.replace('%additionalComment%', "追加コメントだす");

      paper.apply();
    })();
  })
  return (
    // MEMO: ここで SVG を読み込む
    // .paper .A4 は global.css で定義。印刷時のみ A4 サイズとしている
    <main className="paper A4">
      <ExportedFromFigmaTweaked></ExportedFromFigmaTweaked>
    </main>
  );
}
