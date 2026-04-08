# DESIGN.md — MUSUBI CAFE IYASUME (jp.iyasumehawaii.com) リデザイン版

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> 元サイトの構成を踏まえつつ、「かわいい・ポップ・日本らしい・海外受け・親しみやすい」方向へのリデザインを定義します。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ハワイの陽気さと日本の「かわいい」を融合させたトロピカル・カワイイスタイル。おにぎりカフェという独自性をポップな色使いと遊び心ある動きで表現する
- **密度**: ゆったりとしたメディア型。大きなビジュアルと余白を活かしつつ、アニメーションで動きを加える
- **キーワード**: かわいい、ポップ、トロピカル、温かみ、親しみやすい、日本的

---

## 2. Color Palette & Roles

> 元サイトの #df5710（オレンジ）・#fdfdf5（クリーム）・#32373c（ダークグレー）から、より鮮やかでかわいい配色へ刷新。

### Primary（ブランドカラー）

- **Coral Pink** (`#FF6B7A`): メインブランドカラー。CTAボタン、アクセント、ホバー時に使用。ハワイの夕日と桜を掛け合わせた珊瑚ピンク
- **Coral Dark** (`#E8556A`): ホバー・プレス時のプライマリカラー

### Secondary（サブカラー）

- **Tropical Mint** (`#4ECDC4`): セカンダリアクセント。ナビゲーション、タグ、バッジ、リンクに使用。ハワイの海を連想させるミント
- **Mint Dark** (`#3DBDB5`): ホバー・プレス時のセカンダリカラー
- **Sunny Yellow** (`#FFD166`): ハイライト、強調バッジ、NEW・HOTラベルに使用

### Semantic（意味的な色）

- **Danger** (`#FF4D6D`): エラー、削除、在庫切れ
- **Warning** (`#FFD166`): 注意喚起（= Sunny Yellow）
- **Success** (`#06D6A0`): 完了、受付中、オープン表示

### Neutral（ニュートラル）

- **Text Primary** (`#3D2B1F`): 本文テキスト。純黒を避けた温かみのある濃茶色
- **Text Secondary** (`#8B6F61`): 補足テキスト、ラベル
- **Text Disabled** (`#C4AFA8`): 無効状態のテキスト
- **Border** (`#F0D9D3`): 区切り線、カード枠。ピンク寄りの柔らかいボーダー
- **Background** (`#FFF8F5`): ページ背景。温かみのあるオフホワイト（桜色系）
- **Surface** (`#FFFFFF`): カード、モーダル等の面
- **Surface Alt** (`#FFF0EC`): ニュース・セクション背景等

### Gradient（グラデーション）

```css
/* ヒーロービジュアル オーバーレイ */
background: linear-gradient(135deg, rgba(255,107,122,0.85) 0%, rgba(78,205,196,0.75) 100%);

/* CTAボタン */
background: linear-gradient(135deg, #FF6B7A 0%, #FF8E6E 100%);

/* ヒーローセクション背景 */
background: linear-gradient(160deg, #FFF0EC 0%, #E8F9F8 100%);
```

---

## 3. Typography Rules

### 3.1 和文フォント

- **丸ゴシック体（メイン）**: Zen Maru Gothic — 丸みのある字形が「かわいい」印象を強化。海外からも視認しやすい
- **ゴシック体（サブ）**: Noto Sans JP, Hiragino Maru Gothic ProN, Hiragino Kaku Gothic ProN, Meiryo
- **明朝体（アクセント）**: Noto Serif JP — キャッチコピーや見出しに和のエレガンスを添える際に限定使用

> **Zen Maru Gothic** は Google Fonts から読み込む。丸みがありながらも可読性が高く、日本語サイトの「かわいい」を表現する最適解。

### 3.2 欧文フォント

- **サンセリフ（メイン）**: Nunito — 字形が丸みを帯びており、Zen Maru Gothic との相性が抜群。ラテン圏・英語圏ユーザーにも親しみやすい
- **ディスプレイ（装飾）**: Pacifico — メニュー名やキャッチコピーなど目立つ場所にトロピカル感を演出
- **等幅**: SFMono-Regular, Consolas, monospace

### 3.3 font-family 指定

```css
/* 本文・UI全般（丸みのある親しみやすい組み合わせ） */
font-family: "Nunito", "Zen Maru Gothic", "Hiragino Maru Gothic ProN",
             "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;

/* 見出し・キャッチコピー（日本語アクセント） */
font-family: "Nunito", "Noto Serif JP", "Zen Maru Gothic",
             "Hiragino Maru Gothic ProN", serif;

/* 装飾テキスト（英語メニュー名等） */
font-family: "Pacifico", "Nunito", cursive;
```

**フォールバックの考え方**:
- 欧文は Nunito を先に指定（数字・英字の品質を確保）
- 和文第一候補は Zen Maru Gothic（丸ゴシック体でかわいさを維持）
- Hiragino Maru Gothic ProN でMacユーザーのフォールバックを確保
- Meiryo で Windowsユーザーのフォールバック

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Pacifico / Nunito | 56–72px | 700 | 1.2 | -0.02em | ヒーローキャッチコピー（英語） |
| Heading 1 | Noto Serif JP + Nunito | 36px | 700 | 1.4 | 0.05em | セクション見出し（日本語） |
| Heading 2 | Zen Maru Gothic | 28px | 700 | 1.4 | 0.04em | サブ見出し |
| Heading 3 | Zen Maru Gothic | 20px | 700 | 1.5 | 0.03em | カード見出し、店舗名 |
| Body | Nunito + Zen Maru Gothic | 16px | 400 | 1.8 | 0.04em | 本文 |
| Caption | Nunito + Zen Maru Gothic | 13px | 400 | 1.7 | 0.03em | 補足、営業時間等 |
| Small | Nunito | 11px | 400 | 1.6 | 0.02em | 最小テキスト、法律表記 |
| Button | Nunito | 15px | 700 | 1 | 0.06em | CTAボタン（トラッキング広め） |
| Badge | Nunito | 11px | 800 | 1 | 0.08em | NEW・HOTバッジ |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.8（日本語の可読性と余裕感を重視）
- **見出しの行間**: 1.3〜1.4（引き締まった印象）
- **本文の字間 (letter-spacing)**: 0.04em（日本語全角文字の読みやすさを向上）
- **見出しの字間**: 0.03〜0.05em

**ガイドライン**:
- 丸ゴシック体は字間をやや広めに取ると「かわいさ」が増す
- 英文見出し（Pacifico等）は letter-spacing: -0.01〜-0.02em で詰め気味に
- 本文の行間 1.8 は外国人観光客が日本語を読む場合にも読みやすい

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》」】、。，．・：；？！`
- 行末禁止: `（「『【〔〈《「【`

### 3.7 OpenType 機能

```css
/* 見出しに palt を適用（詰め組みでかわいいシルエットを作る） */
.heading {
  font-feature-settings: "palt" 1, "kern" 1;
}

/* 本文は適用しない（均等な組版で可読性を維持） */
.body-text {
  font-feature-settings: normal;
}
```

- **palt**: 見出しに適用。字間のムラをなくしポップなシルエットを作る
- **kern**: 欧文カーニング。NunitoとZen Maru Gothicの混植で有効

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（メインCTA）**
```css
.btn-primary {
  background: linear-gradient(135deg, #FF6B7A 0%, #FF8E6E 100%);
  color: #FFFFFF;
  padding: 14px 32px;
  border-radius: 9999px;       /* 完全な丸角 — かわいさの核心 */
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.06em;
  box-shadow: 0 4px 15px rgba(255,107,122,0.4);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); /* バウンス */
}
.btn-primary:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 8px 25px rgba(255,107,122,0.5);
  background: linear-gradient(135deg, #E8556A 0%, #FF6B4A 100%);
}
.btn-primary:active {
  transform: translateY(0) scale(0.98);
}
```

**Secondary（アウトライン）**
```css
.btn-secondary {
  background: transparent;
  color: #FF6B7A;
  border: 2px solid #FF6B7A;
  padding: 12px 28px;
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 700;
  transition: all 0.25s ease;
}
.btn-secondary:hover {
  background: #FF6B7A;
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255,107,122,0.35);
}
```

**Mint（ナビ・タグ用）**
```css
.btn-mint {
  background: #4ECDC4;
  color: #FFFFFF;
  padding: 8px 20px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 700;
  transition: all 0.25s ease;
}
.btn-mint:hover {
  background: #3DBDB5;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(78,205,196,0.4);
}
```

### Inputs

```css
.input {
  background: #FFFFFF;
  border: 2px solid #F0D9D3;
  border-radius: 16px;          /* 丸みのあるインプット */
  padding: 12px 20px;
  font-size: 16px;
  font-family: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.input:focus {
  border-color: #FF6B7A;
  box-shadow: 0 0 0 4px rgba(255,107,122,0.15);
  outline: none;
}
.input::placeholder {
  color: #C4AFA8;
}
```

### Cards（店舗カード・メニューカード）

```css
.card {
  background: #FFFFFF;
  border: 1.5px solid #F0D9D3;
  border-radius: 24px;          /* 大きめの角丸でかわいさを強調 */
  padding: 24px;
  box-shadow: 0 4px 20px rgba(255,107,122,0.08);
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
  position: relative;
}
.card:hover {
  transform: translateY(-8px) rotate(0.5deg); /* 浮き上がり＋微回転 */
  box-shadow: 0 16px 40px rgba(255,107,122,0.2);
  border-color: #FF6B7A;
}
.card .card-image {
  border-radius: 16px;
  overflow: hidden;
}
.card .card-image img {
  transition: transform 0.5s ease;
}
.card:hover .card-image img {
  transform: scale(1.08);
}
```

### Navigation

```css
.nav-link {
  position: relative;
  color: #3D2B1F;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-decoration: none;
  padding-bottom: 4px;
  transition: color 0.2s ease;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #FF6B7A, #4ECDC4);
  border-radius: 9999px;
  transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.nav-link:hover {
  color: #FF6B7A;
}
.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
```

### Badges / Labels

```css
.badge-new {
  background: #FFD166;
  color: #3D2B1F;
  padding: 3px 10px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  display: inline-block;
  animation: badgePulse 2s ease-in-out infinite;
}
@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}

.badge-open {
  background: #06D6A0;
  color: #FFFFFF;
  padding: 3px 10px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 800;
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS    | 8px   | 要素内の微間隔 |
| S     | 16px  | コンポーネント内余白 |
| M     | 24px  | カードパディング |
| L     | 40px  | セクション内の余白 |
| XL    | 64px  | セクション間余白 |
| XXL   | 96px  | ヒーロー等の大余白 |

### Container

- Max Width: 1160px
- Padding (horizontal): 24px（モバイル: 16px）

### Grid

- Columns: 12カラム
- Gutter: 24px
- 店舗カードグリッド: Desktop 3列 / Tablet 2列 / Mobile 1列

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素 |
| 1 | `0 4px 20px rgba(255,107,122,0.08)` | カード・デフォルト状態 |
| 2 | `0 8px 30px rgba(255,107,122,0.15)` | カード・ホバー状態 |
| 3 | `0 16px 40px rgba(255,107,122,0.25)` | モーダル、フローティングメニュー |
| Glow | `0 0 0 4px rgba(255,107,122,0.2)` | フォーカスリング |

> シャドウはすべてブランドカラー（コーラルピンク）のティント。黒ベースのシャドウは使用しない。

---

## 7. Animation & Interaction Design

> 海外受けを意識した動きのあるUI。アニメーションは「楽しい」が「うるさくない」バランスを保つ。

### Easing Curves

```css
/* バウンス（ボタン・カードホバー） */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

/* スムーズ（フェード・スライド） */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);

/* 入場（要素の出現） */
--ease-enter: cubic-bezier(0, 0, 0.2, 1);
```

### Transitions

```css
/* ボタン */
transition: all 0.3s var(--ease-bounce);

/* ナビリンク */
transition: color 0.2s var(--ease-smooth);

/* カード */
transition: transform 0.35s var(--ease-bounce), box-shadow 0.35s var(--ease-smooth);

/* フェードイン */
transition: opacity 0.4s var(--ease-enter), transform 0.4s var(--ease-enter);
```

### Animations

```css
/* ページロード時: 要素の浮き上がりフェードイン */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ヒーロービジュアルのテキスト登場 */
@keyframes heroTextReveal {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* おにぎりアイコンのふわふわ浮遊 */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-12px) rotate(2deg); }
  66% { transform: translateY(-6px) rotate(-2deg); }
}

/* ニュースティッカーのスライド */
@keyframes ticker {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}

/* ハート・桜などの舞い散りエフェクト（ヒーローセクション） */
@keyframes sakuraDrift {
  0%   { transform: translateY(-10px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
```

### Scroll Animations (Intersection Observer)

```javascript
// スクロール時に要素が順番に登場
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('is-visible');
      }, i * 80); // 80msずつ遅延してスタガー効果
    }
  });
}, { threshold: 0.1 });
```

```css
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s var(--ease-enter), transform 0.6s var(--ease-enter);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 8. Do's and Don'ts

### Do（推奨）

- ボタンは必ず `border-radius: 9999px` の完全丸角にする（かわいさの核心）
- シャドウはブランドカラー（コーラルピンク）のティントで表現する（黒シャドウNG）
- カードホバー時は `translateY(-8px)` の浮き上がり＋微妙な回転（0.5deg）を加える
- アニメーションには必ずバウンスイージング `cubic-bezier(0.34, 1.56, 0.64, 1)` を使う
- 日本語本文は `line-height: 1.8`、`letter-spacing: 0.04em` を確保する
- フォントは必ず Nunito → Zen Maru Gothic のフォールバックチェーンを指定する
- 色のコントラスト比は WCAG AA 以上を確保する
- タッチターゲットは 44px × 44px 以上にする
- `palt` は見出しのみに適用し、本文には適用しない

### Don't（禁止）

- テキストに純粋な `#000000` を使わない（`#3D2B1F` を使う）
- 角丸を 8px 以下にしない（このブランドはすべて丸みを持つ）
- 黒ベースのボックスシャドウ `rgba(0,0,0,x)` を使わない
- アニメーションを `linear` イージングで実装しない（機械的に見える）
- `transition` なしでホバー状態を切り替えない
- 背景に純粋な `#FFFFFF` だけを使わない（`#FFF8F5` のウォームオフホワイトを使う）
- 複数のアニメーションを同時に再生しない（最大2つまで）
- `letter-spacing` に全角換算で 0.1em 超の値を使わない（間延びして見える）

---

## 9. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 480px | スマートフォン縦向き |
| Mobile L | ≤ 768px | スマートフォン横向き・小型タブレット |
| Tablet | ≤ 1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）
- モバイルではボタンを 48px 以上に

### フォントサイズの調整

- モバイルでは本文 15px、見出しはデスクトップの 75% 程度に縮小
- Display（Pacifico）: Desktop 72px → Mobile 40px

### アニメーションの配慮

```css
/* モーション軽減設定に対応（アクセシビリティ） */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Agent Prompt Guide

### クイックリファレンス

```
Brand Name: MUSUBI CAFE IYASUME
Primary Color: #FF6B7A (Coral Pink)
Secondary Color: #4ECDC4 (Tropical Mint)
Accent Color: #FFD166 (Sunny Yellow)
Text Primary: #3D2B1F
Background: #FFF8F5
Surface: #FFFFFF
Font (body): "Nunito", "Zen Maru Gothic", "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
Font (display): "Pacifico", "Nunito", cursive
Body Size: 16px
Body Line Height: 1.8
Body Letter Spacing: 0.04em
Button Radius: 9999px
Card Radius: 24px
Input Radius: 16px
Hover Easing: cubic-bezier(0.34, 1.56, 0.64, 1)  ← バウンス
```

### プロンプト例

```
MUSUBI CAFE IYASUMEのデザインシステムに従って、店舗一覧ページを作成してください。

配色:
- ブランドカラー: #FF6B7A (Coral Pink)
- セカンダリ: #4ECDC4 (Tropical Mint)
- テキスト: #3D2B1F
- 背景: #FFF8F5

フォント:
- "Nunito", "Zen Maru Gothic", "Hiragino Maru Gothic ProN", sans-serif
- 本文: 16px / line-height: 1.8 / letter-spacing: 0.04em
- 見出し: Zen Maru Gothic 700, letter-spacing: 0.04em, font-feature-settings: "palt" 1

コンポーネント:
- ボタン: グラデーション(#FF6B7A→#FF8E6E), border-radius: 9999px, shadow: 0 4px 15px rgba(255,107,122,0.4)
- カード: border-radius: 24px, hover時に translateY(-8px) + rotate(0.5deg) + shadow強化
- ナビリンク: ホバーで虹グラデーションのアンダーライン（幅がアニメーション）

アニメーション:
- 要素登場: fadeInUp (0.6s, ease-enter)
- ボタンホバー: バウンス cubic-bezier(0.34, 1.56, 0.64, 1)
- カードホバー: 浮き上がり 0.35s バウンス

日本語タイポグラフィ:
- word-break: break-all / line-break: strict
- 見出しに font-feature-settings: "palt" 1 を適用
- 本文には palt を適用しない

アクセシビリティ:
- @media (prefers-reduced-motion: reduce) でアニメーションを無効化
- タッチターゲット最小 44px × 44px
```
