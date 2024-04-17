"use client"
// @ts-ignore
import { useEffect } from "react";
import ExportedFromFigmaTweaked from './exported-from-figma-tweaked.svg';

export default function Home() {

  useEffect(() => {

    (async () => {
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
    <main className="paper A4">
      <ExportedFromFigmaTweaked></ExportedFromFigmaTweaked>
    </main>
  );
}
