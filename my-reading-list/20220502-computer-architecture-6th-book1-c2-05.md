# コンピュータの構成と設計 MIPS Edition 第6版 上

## 2. 命令：コンピュータの言葉

### 2.5 コンピュータ内での命令表現

本項では、
> 人がコンピュータに命令する形式とコンピュータが命令を受け取る形式の違いを説明する。

とあるが、以下の構成で説明されている。
1. コンピュータ内部では、すべて数値で表現される。
   1. MIPSアセンブリ言語がどのように機械語に変換されるか。
   2. 設計源属3: 優れた設計には適度な妥協が必要
2. プログラム内蔵方式

### まとめ

- コンピュータ内では命令も電気信号系列で表現されるので、数値として表現できる。
 - 命令を構成する一つ一つの信号は一個の数値と見なすことができる。
- 命令を数値で表現したものを、アセンブリ言語と区別して機械語（machine language）と呼ぶ。
 - 参）アセンブリ言語（assembly language）: コンピューターが直接解釈できる機械語に1対1で対応したプログラミング言語。CPUの種類に応じて記述の仕方や文法が異なる。低級言語。
- 機械語を連ねたものをマシン・コード（machine code）と呼ぶ。
- ほとんどのコンピュータのデータサイズは4の倍数なので16進数が広く使われている。
 - （機械語は0と1の並びなので、アセンブリ言語で、のことか？）

- MIPSアセンブリ言語を機械語に変換する
  - （MIPSのレジスタは32本ある）
  
| レジスタ | 番号 | 用途 |
| --- | --- | --- |
| $t0 〜 $t7 | 8-15 |	一時変数用 |
| $s0 〜 $s7 | 16-23 | 退避が必要な変数用 |

| レジスタ | -  |
| --- | --- |
| $t0 |  8 |
| $t1 |  9 |
| $t2 | 10 |
| $t3 | 11 |
| $t4 | 12 |
| $t5 | 13 |
| $t6 | 14 |
| $t7 | 15 |
| $S0 | 16 |
| $S1 | 17 |
| $S2 | 18 |
| $S3 | 19 |
| $S4 | 20 |
| $S5 | 21 |
| $S6 | 22 |
| $S7 | 23 |
 

```
add $t0, $s1, $s2
```
↓ 機械語
10進数で表現

| op | rs | rt | rd | shamt | funct |
| --- | --- |--- |--- |--- |--- |
| 0 | 17 | 18 | 8 | 0 | 32 |

↓ 機械語
2進数で表現

| op | rs | rt | rd | shamt | funct |
| --- | --- |--- |--- |--- |--- |
| 000000 | 10001 | 10010 | 01000 | 00000 | 100000 |
| 6ビット | 5ビット | 5ビット | 5ビット | 5ビット | 6ビット |

- 命令を数値で表す場合、それぞれの区切られた数値の部分をフィールド（field）という。
- 命令を表記する枠取りを命令形式（instruction format）と呼ぶ。

- MIPSのフィールドには名前がついている。
  - op: 命令の基本操作。従来から命令操作コード（opcode, オペコード）と呼ばれている。
  - rs: 第1のソース・オペランドのレジスタ
  - rt: 第2のソース・オペランドのレジスタ
  - rd: デスティネーション・オペランドのレジスタ（結果を収める先）
  - shamt: シフト量
  - funct: 機能。命令操作フィールドのバリエーションを表す。機能コード（function code）と呼ばれることがある。

- MIPS命令の長さはすべて32ビット
  - 単純性は規則性につながるという設計に則っている
- 上記フィールドより長いフィールドを必要とする命令があると問題が発生する。

- 設計原則3: 優れた設計には適度な妥協が必要
  - 参) ハードウェア設計に関する最後の原則
    - 設計原則1: 単純性は規則性につながる
    - 設計原則2: 小さければ小さいほど高速
- MIPSの設計者が選択した妥協策は、すべての命令長を同じに保ち、命令の種類によって命令形式を変える
  - R形式（Rフォーマット)：レジスタ用
  - I形式（Iフォーマット)：即値及びデータ転送命令用
    - アドレスフィールドが16ビットあるので、lw命令はベースレジスタrs中のアドレス+-2**15 すなわち +-32,768バイトの範囲内の任意のwordをロードできる。

| op  | rs  | rt  | constantまたはaddress  |
| --- | --- | --- | --- |
| 6ビット  | 5ビット  | 5ビット  | 16ビット  |

      - この命令形式ではレジスタの数を32本よりも増やすのは困難
        - rsフィールドが5ビットなので=0〜31
  - 命令形式を区別する方法
    - 最初の2つのフィールドの値によって区別される。
    - 図2.5 MIPS命令の符号化

- ハードウェアとソフトウェアのインターフェース
  - すべての命令サイズを同じにしたいという願いと、レジスタの数を多くしたいという願いとは相反する。
  - 小さければ小さいほど高速であるという設計原則に照らして、今日のほとんどの命令セットは16または32個の汎用レジスタを備えている。

- コンピュータの基本原理
  - 1. 命令は数値として表現される
  - 2. プログラムをメモリ中に格納して、数値と同様に読み書きすることができる
  
- プログラム内蔵方式
  - 上記コンピュータの基本原理から、プログラム内蔵（stored-program）方式の概念が生まれた。
    - 魔法のランプの精 ジニー https://kids.disney.co.jp/character/genie.html
        > 千年もの間、魔法のランプの中に閉じ込められていた宇宙最強の魔人。
    - 参考）
      - これ以前は、真空管の配列や配線が計算内容をそのまま反映したものになっており、別の計算を行うためには配線をすべてやり直さなければならず、汎用性が著しく乏しかった。
      - 計算手順や入力値をハードウェアから独立させてデータとして外部から与え、汎用の回路群でこれを処理する方式を構想した。ソフトウェア（コンピュータプログラム）という概念もこのとき誕生した。

        - プログラム内蔵方式のうちENIAC(アメリカで開発された黎明期の電子計算機)プロジェクトで考案されたものを(プロジェクトに加わっていた有名な数学者フォン・ノイマンの名を冠して)ノイマン型アーキテクチャという。
        - https://e-words.jp/w/%E3%83%8E%E3%82%A4%E3%83%9E%E3%83%B3%E5%9E%8B%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF.html
        > 主記憶に命令が置かれているため、次の命令を実行するためには必ずバスを通じて主記憶から命令を取り出さなければならない。CPU内部の処理性能がいくら向上しても、主記憶からの読み込み速度が追いつかなければ読み込み待ち時間が長くなるだけで性能の向上には繋がらなくなってしまう。
        > https://e-words.jp/w/%E3%83%8E%E3%82%A4%E3%83%9E%E3%83%B3%E5%9E%8B%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF.html
        - ノイマン型コンピュータ以前
        > https://e-words.jp/w/%E3%83%8E%E3%82%A4%E3%83%9E%E3%83%B3%E5%9E%8B%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF.html
        > 第二次大戦前後に生まれた最初期の電子式コンピュータは真空管の配列や配線が計算内容をそのまま反映したものになっており、別の計算を行うためには配線をすべてやり直さなければならず、汎用性が著しく乏しかった。
        > ノイマンら新型コンピュータ「EDVAC」開発チームは、計算手順や入力値をハードウェアから独立させてデータとして外部から与え、汎用の回路群でこれを処理する方式を構想した。ソフトウェア（コンピュータプログラム）という概念もこのとき誕生した。