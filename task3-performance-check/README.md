## 效能與優化

1. `IncrementCountButton` 在呼叫 `setCount` 時，要使用上一個state：

   ```js
   setCount(prev => prev + 1)
   ```

   這樣可以確保在短時間內多次觸發，不會因為 React 的 batching 而拿到舊的 state。

2. `IncrementCountButton` 每次點擊都會造成父元件重新 render，會影響其他不相關的元件。
   可以將按鈕邏輯拆成獨立元件，讓 state 只存在元件內，避免影響整個畫面。

3. `fetch` 在元件卸載時要一起被中斷，
   否則請求還會在背景繼續跑，
   可能在元件不存在時還會嘗試更新 state。
   使用 `AbortController` 在 cleanup 中斷請求。

4. `fetch` 必須加上錯誤處理，避免在網路錯誤、被中斷或回傳格式錯誤時，程式直接壞掉。