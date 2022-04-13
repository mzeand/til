# チームトポロジー　価値あるソフトウェアをすばやく届ける適応型組織設計

## 書籍情報

- 発売日: 2021/12/1
- 著者: マシュー・スケルトン, マニュエル・パイス
- 単行本: 354ページ
- Link: https://www.amazon.co.jp/dp/B09MS8BML8/


## 読書の目的

### Why（なぜ読むのか）

- システム開発において、強いチームでの開発がより良いサービス提供につながると日々感じている。
- チーム設計のカギとなる知識を得ることができるのではないか。

### What（自分が知りたいこと）

- 逆コンウエイをやっていく上で、システム設計と組織設計の関連、設計の進め方を知りたい。

### How（どのように生かすか）

- 現在在籍している会社のビジネスをスケールさせるために、今後のシステム設計やチーム設計に生かしたい。


## 所感

- ...

## 学んだこと

### Chapter 1  組織図の問題

#### コミュニケーション構造

- 人間は組織図の線でつながっている人たちだけとコミュニケーションするわけではない。実際のコミュニケーションの線が組織図に描かれたものと大きく異なる。
- 組織図の構造に基づく意思決定は、組織の一部のみに最適化されがちで、顧客への価値のデリバリー全体を改善するのには役に立たつとは限らない。
  - 例：IaCを導入して技術的にデプロイ時間を短縮できたとしても、デプロイに取締役の承認が必要で、それに数日、数週間かかるようであれば、実質デプロイサイクルは短縮することができない。

#### コンウェイの法則

- ソフトウェア構築においては、コンウェイの法則（「システムを設計する組織は、その構造をそっくりまねた構造の設計を生み出してしまう」1968年 メルヴィン・コンウェイ）が当てはまる。
  - 例：「コンパイラを作るのに４つのグループが作業していたら、できあがるのは４パスコンパイラになる。」エリック・レイモンドは著書『ハッカーズ大辞典改訂新版』
- 理論上は理想的なシステムアーキテクチャーだったとしても、組織モデルに合わなければアーキテクチャーか組織のどちらかを変えなければならない。


#### 逆コンウェイ戦略

- 必須のアーキテクチャー設計に従うようチームに求めるのではなく、システムに反映したいアーキテクチャーに合うようなチーム構造にするという考え。
  - マイクロサービス化する場合に、組織もマイクロサービスに合わせた構造に変えていく、など。
- ソフトウェアアーキテクチャを独立した概念と捉え、独立して設計可能で、そうすればどんなチームの集まりでも実装できると考えるのは、根本的に間違っている。

#### 認知負荷

- チームトポロジーでは、組織設計をする場合、変更フローと稼働中のシステムからのフィードバックを最適化するアプローチを提唱している。
- チームの認知負荷を制限し、チーム間のコミュニケーションを明確に設計する必要がある。
  - 認知負荷が高まるとコンテキストスイッチコストが増え、デリバリーのボトルネックになっていき、チームのモチベーションの低下にもつながる。
  - 内発的動機づけの３つの要素
    - 自律（複数のチームの要求や優先順位を絶えず調整することで失われる）
    - 熟達（多芸は無芸）
    - 目的（広すぎる責任範囲）

#### チームトポロジーでは

  - チームが新しい状況にすばやく対応し、ソフトウェアを高速かつ安全にデリバリーするのに役立つ動的なチーム構造とインタラクションモードをいかにして実現するかに焦点を当てている。
  -  チームトポロジーのアプローチは、技術組織に必要な動的特性とセンシング能力をもたらす。これらは従来の組織設計に欠けていたものである。
  -  チームをソフトウェアデリバリーにおける不可分な要素と捉え、チームの認知容量には尊重すべき上限があることを認めている。
  -  チームトポロジーは、コンウェイの法則を確たる土台とした動的なチーム設計を活用しており、ソリューション探索のための戦略的ツールになっている。
