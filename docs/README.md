# **๐ก git commit ๋ฉ์ธ์ง ์ปจ๋ฒค์**

- **๐๏ธ message(๋ฉ์ธ์ง) ๊ตฌ์กฐ**

  ```
  feat(changelog): ์ถ๊ฐ ๋ก๊ทธ์ธ ํจ์

  ๋ก๊ทธ์ธ API ๊ฐ๋ฐ

  Resolves: #123
  Ref: #456
  Related to: #48, #45
  ```

- **๐ type (ํ์) ์ ์ข๋ฅ :**

  - โจ feat : ์๋ก์ด ๊ธฐ๋ฅ์ ์ถ๊ฐํ  ๊ฒฝ์ฐ
  - ๐ fix : ๋ฒ๊ทธ๋ฅผ ๊ณ ์น ๊ฒฝ์ฐ
  - ๐ docs : ๋ฌธ์๋ฅผ ์์ ํ ๊ฒฝ์ฐ
  - ๐จ style : ์ฝ๋ ํฌ๋งท ๋ณ๊ฒฝ, ์ธ๋ฏธ ์ฝ๋ก  ๋๋ฝ, ์ฝ๋ ์์ ์ด ์๋ ๊ฒฝ์ฐ
  - โป๏ธ refactor : ํ๋ก๋์ ์ฝ๋ ๋ฆฌํฉํ ๋ง
  - โ test: ํ์คํธ ์ถ๊ฐ, ํ์คํธ ๋ฆฌํฉํ ๋ง (์ฝ๋ ๋ณ๊ฒฝ X)
  - ๐ฆ chore : ๋น๋ ํ์คํธ ์๋ฐ์ดํธ, ํจํค์ง ๋งค๋์ ๋ฅผ ์ค์ ํ๋ ๊ฒฝ์ฐ (์ฝ๋ ๋ณ๊ฒฝ X)

    <br/>

  - ๐ design : CSS ๋ฑ ์ฌ์ฉ์ UI ๋์์ธ ๋ณ๊ฒฝ
  - ๐ก comment : ํ์ํ ์ฃผ์ ์ถ๊ฐ ๋ฐ ๋ณ๊ฒฝ
  - ๐ rename : ํ์ผ ํน์ ํด๋๋ช์ ์์ ํ๋ ๊ฒฝ์ฐ
  - ๐ฅ remove : ์ฌ์ฉํ์ง ์๋ ํ์ผ ํน์ ํด๋๋ฅผ ์ญ์ ํ๋ ๊ฒฝ์ฐ

<br/>

---

# **๐ ๏ธ ํ๋ก๊ทธ๋๋ฐ ์๊ตฌ ์กฐ๊ฑด ์ ๋ฆฌ**

# ๐ ๊ธฐ๋ฅ ์๊ตฌ ์ฌํญ

### ๋ฑ๋ก๋ ์งํ์ฒ  ๋ธ์ ๋์์ ๊ฒฝ๋ก๋ฅผ ์กฐํํ๋ ๊ธฐ๋ฅ์ ๊ตฌํํ๋ค.

```
- ํ๋ก๊ทธ๋จ ์์ ์ ์ญ, ๋ธ์ , ๊ตฌ๊ฐ ๋ฐ์ดํฐ๋ฅผ ์ด๊ธฐ ์ค์  ํด์ผ ํ๋ค.
- ๊ฑฐ๋ฆฌ์ ์์ ์๊ฐ์ ์์ ์ ์์ด๋ฉฐ ๋จ์๋ km์ ๋ถ์ ์๋ฏธํ๋ค.
- ์๋์ ์ฌ์  ๋ฑ๋ก ์ ๋ณด๋ก ๋ฐ๋์ ์ด๊ธฐ ์ค์ ์ ํ๋ค.

```

### ์ด๊ธฐ ์ค์ 

1. ์งํ์ฒ ์ญ์ผ๋ก ๊ต๋, ๊ฐ๋จ, ์ญ์ผ, ๋จ๋ถํฐ๋ฏธ๋, ์์ฌ, ์์ฌ์๋ฏผ์์ฒ, ๋งค๋ด ์ญ ์ ๋ณด๊ฐ
   ๋ฑ๋ก๋์ด ์๋ค.
2. ์งํ์ฒ  ๋ธ์ ์ผ๋ก 2ํธ์ , 3ํธ์ , ์ ๋ถ๋น์ ์ด ๋ฑ๋ก๋์ด ์๋ค.
3. ๋ธ์ ์ ์ญ์ด ์๋์ ๊ฐ์ด ๋ฑ๋ก๋์ด ์๋ค.(์ผ์ชฝ ๋์ด ์ํ ์ข์ )
   - 2ํธ์ : ๊ต๋ - ( 2km / 3๋ถ ) - ๊ฐ๋จ - ( 2km / 3๋ถ ) - ์ญ์ผ
   - 3ํธ์ : ๊ต๋ - ( 3km / 2๋ถ ) - ๋จ๋ถํฐ๋ฏธ๋ - ( 6km / 5๋ถ ) - ์์ฌ - ( 1km / 1
     ๋ถ ) - ๋งค๋ด
   - ์ ๋ถ๋น์ : ๊ฐ๋จ - ( 2km / 8๋ถ ) - ์์ฌ - ( 10km / 3๋ถ ) - ์์ฌ์๋ฏผ์์ฒ

### ๊ฒฝ๋ก ์กฐํ ๊ธฐ๋ฅ

- ์ถ๋ฐ์ญ๊ณผ ๋์ฐฉ์ญ์ ์๋ ฅ๋ฐ์ ๊ฒฝ๋ก๋ฅผ ์กฐํํ๋ค.
- ๊ฒฝ๋ก ์กฐํ ์ ์ด ๊ฑฐ๋ฆฌ, ์ด ์์ ์๊ฐ์ ํจ๊ป ์ถ๋ ฅํ๋ค.
- ๊ฒฝ๋ก ์กฐํ ์ `์ต๋จ ๊ฑฐ๋ฆฌ` ๋๋ `์ต์ ์๊ฐ` ์ต์์ ์ ํํ  ์ ์๋ค.

### ์์ธ ์ฒ๋ฆฌ

- ์ถ๋ฐ์ญ๊ณผ ๋์ฐฉ์ญ์ 2๊ธ์ ์ด์์ด์ด์ผ ํ๋ค.
- ์กด์ฌํ์ง ์๋ ์ญ์ ์ถ๋ฐ์ญ ๋๋ ๋์ฐฉ์ญ์ผ๋ก ์๋ ฅํ  ์ ์๋ค.
- ๊ฒฝ๋ก ์กฐํ ์ ์ถ๋ฐ์ญ๊ณผ ๋์ฐฉ์ญ์ด ๊ฐ์ ์ ์๋ค.
- ๊ฒฝ๋ก ์กฐํ ์ ์ถ๋ฐ์ญ๊ณผ ๋์ฐฉ์ญ์ด ์ฐ๊ฒฐ๋์ง ์์ผ๋ฉด ๊ฒฝ๋ก๋ฅผ ์กฐํํ  ์ ์๋ค.
- ๊ทธ ์ธ ์ ์์ ์ผ๋ก ํ๋ก๊ทธ๋จ์ด ์ํ๋์ง ์์ ๊ฒฝ์ฐ `Error`๋ก ์๋ฌ๋ฅผ ์ถ๋ ฅํ๋ค.

---

# **๐ [์งํ์ฒ  ๊ธธ์ฐพ๊ธฐ] ๊ธฐ๋ฅ ๋จ์ ๊ตฌํ ๋ชฉ๋ก**

์์ฑ๋ฐฉ๋ฒ : ๐ฅ: ๋ฏธ์์ฑ / ๐ง: ์งํ์ค / โ: ์๋ฃ / โ: ๋ฆฌํํ ๋ง์ค

<br/>

### โ **1. ์ฃผ์ด์ง ์งํ์ฒ  Data๋ก ์ด๊ธฐํํ๋ค.**

### โ **2. ์ถ๋ฐ์ญ๊ณผ ๋์ฐฉ์ญ์ ์๋ ฅ ๋ฐ๋๋ค.**

### โ **3. ๊ฒฝ๋ก์กฐํ ์ต์ ์ต๋จ๊ฑฐ๋ฆฌ ๋๋ ์ต์์๊ฐ ์ ์๋ ฅ ๋ฐ๋๋ค.**

### โ **4. ์ ํํ ์ต์(์ต๋จ๊ฑฐ๋ฆฌ ๋๋ ์ต์์๊ฐ)์ผ๋ก ๊ฐ์ฅ ์ต์ ํ๋ ๊ฒฝ๋ก๋ฅผ ์์๋ธ๋ค.**

### โ **5. ๊ฒฝ๋ก์ ์ด ๊ฑฐ๋ฆฌ์ ์ด ์์์๊ฐ์ ์ถ๋ ฅํ๋ค.**

### โ **6. ์ ์ฒด ๊ฒฝ๋ก๋ ํจ๊ป ์ถ๋ ฅํ๋ค.**

### โ **7. ๊ฒ์์ ์๋ฃํ ํ ๋ค์ ๊ฒ์ํ ์ง ์ข๋ฃํ ์ง ์ ํ๋ค.**

### โ **8. Error๊ฐ ๋ฐ์ํ  ๊ฒฝ์ฐ, Error๋ฅผ ์ถ๋ ฅํ๊ณ  ํด๋น ์์น์์ ๋ค์ ์ฌ์๋ ฅ ๋ฐ๋๋ค.**

---

# **๐๏ธ ๋๋ ํฐ๋ฆฌ ๊ตฌ์กฐ (Directory Structure)**

    ๐ docs/ : ์ ์ฒด ๋ฌธ์ ๋ชจ์
    โโ ๐ README.md : ์ ํ๋ฆฌ์ผ์ด์ ๊ธฐํ ๋ฐ ๊ตฌ์ฑ
    ๐ __tests__/ : ํ์คํธ ๊ด๋ฆฌ ํด๋
    โฃโ ๐ ApplicationTest.js :
    ๐ src/ : ์์คํ์ผ ํด๋
    โโ ๐ constants : ์์ ๊ด๋ฆฌ ํด๋
        โฃโ ๐ subwayMessage.js : ์งํ์ฒ  ๊ธธ์ฐพ๊ธฐ ๋ฉ์ธ์ง ๊ด๋ฆฌ ํ์ผ
        โโ ๐ subwaySetting.js : ์งํ์ฒ  ๊ธธ์ฐพ๊ธฐ ์์ ๊ด๋ฆฌ ํ์ผ
    โโ ๐ util : ์ ํธ ๊ด๋ฆฌ ํด๋
        โฃโ ๐ Dijkstra.js : ์งํ์ฒ  ๊ธธ์ฐพ๊ธฐ ๊ฒฝ๋ก ์ถ๋ ฅ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ํ์ผ
        โโ ๐ Validator.js : ์ ํจ์ฑ ๊ฒ์ฌ ์ ํธ ๊ด๋ฆฌ ํ์ผ
    โโ ๐ views : ์ ํธ ๊ด๋ฆฌ ํด๋
        โฃโ ๐ InputView.js : ์ฌ์ฉ์๋ก๋ถํฐ ์๋ ฅ์ ๋ฐ๋ ์ญํ ์ ํ๋ค.
        โโ ๐ OutputView.js : ์ฌ์ฉ์์๊ฒ ๊ฒ์ ์งํ ์ํฉ๊ณผ ๊ฒฐ๊ณผ๋ฅผ ์ถ๋ ฅํ๋ ์ญํ ์ ํ๋ค.
    โฃโ ๐ App.js
    โโ ๐ StationApp.js : ์งํ์ฒ  ๊ธธ์ฐพ๊ธฐ ์ปจํธ๋กค๋ฌ ์ญํ 
    โโ ๐ Navigate.js : ์งํ์ฒ  ๊ธธ ์๋ด ๋น์ง๋์ค ๋ก์ง ๋ด๋น
    โโ ๐ StationMap.js : ์งํ์ฒ  ๋ธ์  ๊ด๋ จ ๋น๋์ง์ค ๋ก์ง ๋ด๋น

---
