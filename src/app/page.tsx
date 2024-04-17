"use client"
// @ts-ignore
import SvgPaper from 'svg-paper'
import { useEffect } from "react";
import ExportedFromFigmaTweaked from './exported-from-figma-tweaked.svg';

export default function Home() {

  useEffect(() => {
    const papaer = new SvgPaper();
    papaer
      .replace('%date%', "2022-01-01")
      .replace('%customerName%', "Unimal まんたろう")
      .replace('%address%', "東京都港区六本木6-10-1 六本木ヒルズ森タワー 37F")
      .replace('%number%', "1234567890")
      .replace('%totalAmount%', "¥1,000")
      .replace('%subtotal%', "¥1,000");

    for (let i = 0; i <= 25; i++) {
      papaer.replace(`%itemName[${i}]%`, `アイテム ${i}`);
      papaer.replace(`%quantity[${i}]%`, "1");
      papaer.replace(`%unitPrice[${i}]%`, "¥1,000");
      papaer.replace(`%total[${i}]%`, "¥1,000");    
    }

    papaer.replace('%additionalComment%', "追加コメントだす");

    papaer.apply();
  }, [])
  return (
    <main className="paper A4">
      <ExportedFromFigmaTweaked></ExportedFromFigmaTweaked>
    </main>
  );
}
