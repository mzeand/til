# UNIXという考え方 - その背計思想と哲学

## 書籍情報

- 発売日: 2001/02/01
- 著者: Mike Gancarz
- 単行本: 148ページ
- Link: https://www.amazon.co.jp/dp/4274064069


## 読書の目的

### Why（なぜ読むのか）

- とても名著として有名な本なのだが、積読になっていた。やっと読んだ。
- 長く広く使われているOSの設計思想を知りたいと思った。
- 技術や操作方法を勉強することはあったが、思想や哲学を知る機会はなかったので興味があった。

### What（自分が知りたいこと）

- UNIXがどのような設計思想で作られたのか。
- システム設計の哲学とはどんなものなのか。

### How（どのように生かすか）

- 新しい技術は日々進化するが、哲学は長く受け継がれている。基本原則となるものを理解して取り入れていきたい。

## 所感

- UNIXがどのようにして生まれたのか、9つの定理とともにエビソードなどを交えながら解説されている。
- 具体的な例を示した部分では、古いシステムの話が出てくるので時代が異なる世代には馴染み難い部分があるかもしれないが、難しい表現などはなく、ページ数も少ないので読みやすい本だったと思う。
- 何気なく使っていたコマンドも、設計思想に基づいて作られていたんだなと改めて感心した。
- 思想や哲学が定義されることで、ブレることなく、一貫したシンプルでわかりやすく使いやすいシステムが出来上がるんだなと思った。要件が増えたり変更されたりすることで、当初に想定した設計とは違った方向に進むことがあるが、基本当なる設計がブレないように設計思想をチームで理解しておくことは大事だなと思った。
- （表紙をよく見たら、その9つの定理が英語で書かれていた・・・）

## 学んだこと

### 小さくシンプルに作る

- つい、いろんな機能を盛り込んであらゆるものに対応できるプログラムを作りたくなってしまうが、一つのプログラムは、役割を明確にしシンプルに実装する。
- 余計な機能を盛り込んでいくと、複雑になり、保守性が下がる。
- また、小さくする事で実行時に消費するリソースも小さくなる。
- 小さいプログラムは組み合わせやすい。組み合わせやすい事で、拡張性が高まる。

### 試作を早く公開して評価を受ける

- 機能仕様書は短く書く。
- はやくソフトウエアを書いて試作を出し、改善していくことで洗練されていく。
- 最初から完成度の高い製品を作るのは難しい。
- ユーザは仕様書にお金を払うのではない、製品に払うのだ。

### 移植性を重視する

- 良いプログラムは、ただ新しいハードウエアに移植されるだけ。
  - ハードウェアの進化が早い中で、長くプログラムを生き延びさせるためには、移植性を高めておくことが大事
  - 我々が作るアプリケーションにおいては、別のハードウェアに移植することは少ないが、PCで動作させるプログラムを開発するときは気をつけたい。
- 遅いプログラムを早くすることに時間をかけても、高性能なハードウエアが解決してしまう事例は実際に体験したことがあるのでよくわかる。どこまで最適化するかは見極めた上で総合的に判断しなければならない。
- シェルスクリプトは移植性が高いといえる。

### ・・・

- 他にもまだ学ぶべきものがあるが、時間を置いて読み返しながら追記していきたい。
